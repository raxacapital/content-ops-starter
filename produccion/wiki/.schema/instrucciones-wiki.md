# Instrucciones de operación — Wiki de Producción Teprih

## Al inicio de cada conversación de producción

### 1. Leer el estado del wiki
```
Leer: produccion/wiki/index.md
```
El índice da el mapa completo: proyectos activos, normativas, metodologías, validadores.

### 2. Según la tarea, leer las páginas relevantes

| Tarea | Páginas a leer |
|---|---|
| Proyecto nuevo | `index.md` → normativa de la universidad → `recurso-modos` |
| Avanzar de fase | página del proyecto → página de la fase destino |
| Observaciones del asesor | página del proyecto → `fase-f6` |
| Consulta metodológica | `metodologia-{autor}` → fase relevante |
| Validación | `validador-{nombre}` |
| Diagnóstico de documento | página del proyecto (si existe) → normativa |

### 3. Operar

- **Ingest:** procesar documento fuente → crear/actualizar páginas → actualizar index + log
- **Query:** leer index → ubicar páginas → responder con lo acumulado
- **Lint:** revisar frontmatter, enlaces rotos, proyectos desactualizados

### 4. Al cerrar la conversación

Actualizar:
1. Página(s) del proyecto tocadas
2. `index.md` si hubo altas/bajas
3. `log.md` con una línea por operación

## Reglas de oro

1. **No inventar.** Solo registrar lo que viene del documento o la conversación.
2. **No borrar.** Marcar `estado: archivado`.
3. **No duplicar.** Buscar en index antes de crear.
4. **Frontmatter siempre.** YAML al inicio con tipo y campos.
5. **Enlaces internos.** `[[nombre-archivo]]` para conectar.
6. **Una lección = una página.** No acumular lecciones sueltas en otras páginas.
7. **Los proyectos se actualizan al cerrar fase**, no en cada mensaje.

## Categorías de páginas

| Categoría | Nombrado | Total actual |
|---|---|---|
| proyecto | `proyecto-{cliente}-{doc}.md` | 1 |
| normativa | `normativa-{universidad}.md` | 2 |
| fase | `fase-{codigo}.md` | 7 |
| metodologia | `metodologia-{tema}.md` | 5 |
| validador | `validador-{nombre}.md` | 5 |
| recurso | `recurso-{nombre}.md` | 3 |
| cliente | `cliente-{nombre}.md` | 0 |
| leccion | `leccion-{tema}.md` | 0 |
| skill | `skill-{nombre}.md` | 0 (crear bajo demanda) |
