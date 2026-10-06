---
tipo: validador
nombre: validar_texto.py
fases: [F2, F4, F5]
bloquea_compuerta: true
requisitos: python-docx, pyyaml
actualizado: 2026-10-06
---

# Validador de texto

**Comando:**
```
python $VAL/validar_texto.py DOC.docx --estado estado_produccion.yaml [--perfil $VAL/perfiles/<p>.yaml]
```

**Código 2** = compuerta cerrada (bloqueantes encontrados)
**Código 0 o 1** = pasa; advertencias se revisan una por una

## Qué revisa

- Estructura del documento
- Coherencia con el estado de producción
- Reglas del perfil institucional (si hay perfil)

## Cuándo se usa

- F2: al cerrar cada sección
- F4: después de la edición estilística
- F5: sobre el .docx final maquetado
