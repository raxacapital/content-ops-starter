---
tipo: validador
nombre: generar_referencias.py
fases: [F5]
bloquea_compuerta: false
requisitos: Pandoc, red
actualizado: 2026-10-06
---

# Generador de referencias

**Comando:**
```
python $VAL/generar_referencias.py --corpus … --estilo apa|vancouver --salida referencias.docx [--solo-citadas DOC.docx]
```

Genera la lista de referencias en la norma de citas fijada. Sin Pandoc o sin red, Clío da formato a mano.

`--solo-citadas` filtra para incluir solo las fuentes que aparecen citadas en el documento.
