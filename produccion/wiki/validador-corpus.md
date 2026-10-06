---
tipo: validador
nombre: verificar_corpus.py
fases: [F1, F3]
bloquea_compuerta: true
requisitos: red (api.openalex.org, api.crossref.org, doi.org)
actualizado: 2026-10-06
---

# Verificador de corpus

**Comando:**
```
python $VAL/verificar_corpus.py --corpus corpus.yaml|fichaje.xlsx --marcar
```

**Código 2** = fuentes con problemas bloqueantes (retractadas, DOI falso, año equivocado)

## Qué revisa

- DOI resuelto
- Enlace oficial abierto o ejemplar consultado
- No retractada
- Datos bibliográficos correctos

## Sin red

Clío verifica fuente por fuente con búsqueda web. Las no comprobadas quedan `pendiente` y no se pueden citar.
