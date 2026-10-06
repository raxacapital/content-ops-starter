---
tipo: validador
nombre: validar_citas.py
fases: [F2, F3, F5]
bloquea_compuerta: true
requisitos: python-docx, pyyaml, rapidfuzz
actualizado: 2026-10-06
---

# Validador de citas

**Comando:**
```
python $VAL/validar_citas.py DOC.docx --corpus corpus_verificado.yaml --estilo apa|vancouver [--perfil …] [--en-linea]
```

**Código 2** = compuerta cerrada
`--en-linea` requiere red hacia `api.openalex.org`, `api.crossref.org`, `doi.org`

## Qué revisa

- Cada cita en el texto tiene su entrada en el corpus verificado
- Formato de cita correcto según la norma (APA 7 o Vancouver)
- Consistencia autor-año entre texto y referencias

## Cuándo se usa

- F2: al cerrar secciones con citas
- F3: Clío re-verifica el documento completo
- F5: sobre el .docx final
