# Proyecto: Content Ops Starter + Producción Teprih

## Wiki de producción (invocación automática)

Cada vez que una conversación de producción académica comience o se trabaje sobre un documento de un cliente:

1. **Leer** `produccion/wiki/index.md` para conocer el estado actual de todos los proyectos.
2. **Leer** la página del proyecto si ya existe (`produccion/wiki/proyecto-{cliente}-{doc}.md`).
3. **Leer** la normativa de la universidad (`produccion/wiki/normativa-{universidad}.md`).
4. **Usar** las páginas de fase y metodología como referencia rápida durante el trabajo.
5. **Al cerrar:** actualizar la página del proyecto, el índice y el log.

### Operaciones del wiki

- **Ingest** (al recibir un documento nuevo): crear/actualizar páginas → actualizar index.md → añadir entrada a log.md
- **Query** (al consultar): leer index → ubicar páginas → responder con lo acumulado
- **Lint** (al auditar): verificar frontmatter, enlaces, proyectos desactualizados

### Convenciones de nombrado

- Proyectos: `proyecto-{cliente}-{documento}.md`
- Normativas: `normativa-{universidad}.md`
- Lecciones: `leccion-{tema-corto}.md`
- Clientes: `cliente-{nombre}.md`

### Reglas

- No inventar datos: solo registrar lo que viene del documento o la conversación.
- No borrar páginas: marcar `estado: archivado` en el frontmatter.
- Buscar en index.md antes de crear una página nueva.
- Los documentos fuente del cliente van en `produccion/raw/` (no suben al repo).

## Scripts disponibles

- `npm run rename-files` — Herramienta de renombrado de archivos (ver `scripts/rename-files.js`)
