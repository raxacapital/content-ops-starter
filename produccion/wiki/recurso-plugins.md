---
tipo: recurso
subtipo: plugins
actualizado: 2026-10-06
---

# Plugins externos integrados

Complementan pero **nunca sustituyen** las skills internas. Ningún plugin bloquea una compuerta.

## Instalados

| Plugin | Fase | Complementa a | Skill del plugin |
|---|---|---|---|
| Research Desk | F1, F3 | Clío | `citation-check`, `paper-compare`, `paper-critique`, `related-work`, `research-litnote` |
| Academic PDF Translation | F1 | Clío (corpus) | `academic-pdf-translation` |
| Research Integrity | F3 | `inf-bunge` | `research-integrity` |
| HandwritingOCR | F2 | Ada | `transcribe` |

## Regla de precedencia

- Los dictámenes de las skills inferenciales (`inf-bunge`, `inf-copi`, etc.) prevalecen siempre
- Research Desk aporta evidencia, no veredicto
- Research Integrity no puede cambiar un dictamen APTO ni convertir un NO APTO en APTO
- Si un plugin no está instalado, el flujo sigue sin él

## Conectores MCP disponibles

| Conector | Uso en producción |
|---|---|
| PubMed | Verificación de fuentes biomédicas |
| Consensus | Búsqueda semántica de papers |
| Scite | Análisis de citas con Smart Citations |
| Elicit | Revisión sistemática de literatura |
| Scholar Gateway | Acceso a texto completo |
| Wiley Scholar Gateway | Texto completo Wiley |
| alphaXiv | Papers de arXiv |
| DeepL | Traducción de fuentes |
| Google Drive | Documentos compartidos |
| Notion | Gestión de proyectos |
