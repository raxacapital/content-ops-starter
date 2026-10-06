---
tipo: validador
nombre: validar_plantilla.py
fases: [F5]
bloquea_compuerta: true
requisitos: python-docx
actualizado: 2026-10-06
---

# Validador de plantilla

**Comando:**
```
python $VAL/validar_plantilla.py DOC.docx --perfil $VAL/perfiles/<p>.yaml
```

Verifica que el documento cumple con los estilos de la plantilla institucional.

## Complemento

`corregir_estilos_plantilla.py` aplica los estilos automáticamente sobre una copia:
```
python $VAL/corregir_estilos_plantilla.py ORIGINAL.docx --perfil … --salida NUEVA.docx
```
Nunca sobrescribe el original.
