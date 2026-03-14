#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

const CONTENT_DIR = path.join(__dirname, '..', 'content');

function findFiles(dir, pattern, results = []) {
    if (!fs.existsSync(dir)) return results;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findFiles(fullPath, pattern, results);
        } else if (!pattern || entry.name.includes(pattern)) {
            results.push(fullPath);
        }
    }
    return results;
}

function updateReferences(oldRelPath, newRelPath, searchDir) {
    const files = findFiles(searchDir, null);
    let updated = 0;
    for (const file of files) {
        if (!/\.(md|json|js|ts|tsx|jsx)$/.test(file)) continue;
        const content = fs.readFileSync(file, 'utf-8');
        if (content.includes(oldRelPath)) {
            fs.writeFileSync(file, content.replaceAll(oldRelPath, newRelPath), 'utf-8');
            updated++;
            console.log(`  Updated reference in: ${path.relative(process.cwd(), file)}`);
        }
    }
    return updated;
}

function renameFile(filePath, newName) {
    const dir = path.dirname(filePath);
    const newPath = path.join(dir, newName);

    if (fs.existsSync(newPath)) {
        console.error(`Error: "${newName}" already exists in ${dir}`);
        return false;
    }

    fs.renameSync(filePath, newPath);
    return newPath;
}

function printUsage() {
    console.log(`
File Renaming Tool
==================

Usage:
  node scripts/rename-files.js <command> [options]

Commands:
  list [dir] [pattern]        List files, optionally filtered by pattern
  rename <file> <new-name>    Rename a single file
  bulk <dir> <find> <replace> Bulk rename: replace substring in filenames
  slugify <dir>               Convert filenames to URL-friendly slugs

Options:
  --dry-run                   Preview changes without applying them
  --update-refs               Update references in content/source files
  --ext <extension>           Filter by file extension (e.g., .md, .json)

Examples:
  node scripts/rename-files.js list content/pages/blog
  node scripts/rename-files.js rename content/pages/blog/old-post.md new-post.md
  node scripts/rename-files.js bulk content/pages/blog "draft-" "" --dry-run
  node scripts/rename-files.js slugify content/pages --ext .md
`);
}

function toSlug(filename) {
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    const slug = name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return slug + ext;
}

async function main() {
    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');
    const updateRefs = args.includes('--update-refs');
    const extIdx = args.indexOf('--ext');
    const extFilter = extIdx !== -1 ? args[extIdx + 1] : null;

    const cleanArgs = args.filter((a) => !a.startsWith('--') && (extIdx === -1 || args.indexOf(a) !== extIdx + 1));

    const command = cleanArgs[0];

    if (!command || command === 'help') {
        printUsage();
        rl.close();
        return;
    }

    if (command === 'list') {
        const dir = cleanArgs[1] || CONTENT_DIR;
        const pattern = cleanArgs[2] || null;
        const files = findFiles(path.resolve(dir), pattern);
        const filtered = extFilter ? files.filter((f) => f.endsWith(extFilter)) : files;

        console.log(`\nFiles in ${dir}${pattern ? ` matching "${pattern}"` : ''}:\n`);
        for (const file of filtered) {
            console.log(`  ${path.relative(process.cwd(), file)}`);
        }
        console.log(`\nTotal: ${filtered.length} file(s)\n`);
    } else if (command === 'rename') {
        const filePath = cleanArgs[1];
        const newName = cleanArgs[2];

        if (!filePath || !newName) {
            console.error('Error: rename requires <file> and <new-name>');
            rl.close();
            return;
        }

        const resolvedPath = path.resolve(filePath);
        if (!fs.existsSync(resolvedPath)) {
            console.error(`Error: file not found: ${filePath}`);
            rl.close();
            return;
        }

        const newPath = path.join(path.dirname(resolvedPath), newName);
        console.log(`\nRename: ${path.relative(process.cwd(), resolvedPath)}`);
        console.log(`    To: ${path.relative(process.cwd(), newPath)}`);

        if (dryRun) {
            console.log('\n[dry-run] No changes made.\n');
        } else {
            const confirm = await ask('\nProceed? (y/n) ');
            if (confirm.toLowerCase() === 'y') {
                const result = renameFile(resolvedPath, newName);
                if (result) {
                    console.log('Renamed successfully.');
                    if (updateRefs) {
                        const rootDir = path.join(__dirname, '..');
                        const oldRel = path.relative(rootDir, resolvedPath);
                        const newRel = path.relative(rootDir, result);
                        const count = updateReferences(oldRel, newRel, rootDir);
                        console.log(`Updated ${count} file(s) with new references.`);
                    }
                }
            } else {
                console.log('Cancelled.');
            }
        }
    } else if (command === 'bulk') {
        const dir = cleanArgs[1];
        const find = cleanArgs[2];
        const replace = cleanArgs[3] ?? '';

        if (!dir || find === undefined) {
            console.error('Error: bulk requires <dir> <find> <replace>');
            rl.close();
            return;
        }

        const resolvedDir = path.resolve(dir);
        let files = findFiles(resolvedDir, null);
        if (extFilter) files = files.filter((f) => f.endsWith(extFilter));

        const renames = [];
        for (const file of files) {
            const basename = path.basename(file);
            if (basename.includes(find)) {
                const newName = basename.replaceAll(find, replace);
                renames.push({ old: file, newName, newPath: path.join(path.dirname(file), newName) });
            }
        }

        if (renames.length === 0) {
            console.log(`\nNo files found containing "${find}" in ${dir}\n`);
            rl.close();
            return;
        }

        console.log(`\nBulk rename preview (${renames.length} file(s)):\n`);
        for (const r of renames) {
            console.log(`  ${path.basename(r.old)} -> ${r.newName}`);
        }

        if (dryRun) {
            console.log('\n[dry-run] No changes made.\n');
        } else {
            const confirm = await ask(`\nRename ${renames.length} file(s)? (y/n) `);
            if (confirm.toLowerCase() === 'y') {
                const rootDir = path.join(__dirname, '..');
                for (const r of renames) {
                    const result = renameFile(r.old, r.newName);
                    if (result) {
                        console.log(`  Renamed: ${path.basename(r.old)} -> ${r.newName}`);
                        if (updateRefs) {
                            const oldRel = path.relative(rootDir, r.old);
                            const newRel = path.relative(rootDir, result);
                            updateReferences(oldRel, newRel, rootDir);
                        }
                    }
                }
                console.log('\nDone.');
            } else {
                console.log('Cancelled.');
            }
        }
    } else if (command === 'slugify') {
        const dir = cleanArgs[1];
        if (!dir) {
            console.error('Error: slugify requires <dir>');
            rl.close();
            return;
        }

        const resolvedDir = path.resolve(dir);
        let files = findFiles(resolvedDir, null);
        if (extFilter) files = files.filter((f) => f.endsWith(extFilter));

        const renames = [];
        for (const file of files) {
            const basename = path.basename(file);
            const slugName = toSlug(basename);
            if (slugName !== basename) {
                renames.push({ old: file, newName: slugName });
            }
        }

        if (renames.length === 0) {
            console.log('\nAll filenames are already slugified.\n');
            rl.close();
            return;
        }

        console.log(`\nSlugify preview (${renames.length} file(s)):\n`);
        for (const r of renames) {
            console.log(`  ${path.basename(r.old)} -> ${r.newName}`);
        }

        if (dryRun) {
            console.log('\n[dry-run] No changes made.\n');
        } else {
            const confirm = await ask(`\nSlugify ${renames.length} file(s)? (y/n) `);
            if (confirm.toLowerCase() === 'y') {
                const rootDir = path.join(__dirname, '..');
                for (const r of renames) {
                    const result = renameFile(r.old, r.newName);
                    if (result) {
                        console.log(`  Slugified: ${path.basename(r.old)} -> ${r.newName}`);
                        if (updateRefs) {
                            const oldRel = path.relative(rootDir, r.old);
                            const newRel = path.relative(rootDir, result);
                            updateReferences(oldRel, newRel, rootDir);
                        }
                    }
                }
                console.log('\nDone.');
            } else {
                console.log('Cancelled.');
            }
        }
    } else {
        console.error(`Unknown command: ${command}`);
        printUsage();
    }

    rl.close();
}

main().catch((err) => {
    console.error(err);
    rl.close();
    process.exit(1);
});
