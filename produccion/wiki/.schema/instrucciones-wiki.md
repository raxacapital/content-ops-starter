# Instrucciones de operación del Wiki de Producción

## Para el LLM (Claude) al inicio de cada conversación de producción

Cuando la dueña adjunte un documento de trabajo o pida operar sobre un proyecto:

### 1. Leer el estado del wiki
```
Leer: produccion/wiki/index.md
```
Esto te da el mapa de todo lo que el wiki ya sabe.

### 2. Identificar qué páginas tocar
- ¿Es un proyecto nuevo? → Crear `proyecto-{cliente}-{documento}.md`
- ¿Es un proyecto existente? → Leer su página y actualizarla
- ¿Hay una normativa nueva? → Crear `normativa-{universidad}.md`
- ¿Surgió una lección? → Crear `leccion-{tema-corto}.md`

### 3. Actualizar el wiki al cerrar
Al terminar el trabajo (no durante), actualizar:
1. La(s) página(s) tocadas
2. `index.md` con las nuevas entradas
3. `log.md` con una línea de lo que se hizo

### 4. Reglas de oro
- **No inventar.** Solo registrar lo que viene del documento o de la conversación.
- **No borrar.** Marcar como archivado si algo ya no aplica.
- **No duplicar.** Antes de crear, buscar si ya existe.
- **Frontmatter siempre.** Cada página empieza con `---` y sus metadatos.
- **Enlaces internos.** Usar `[[nombre-archivo]]` para conectar páginas.
