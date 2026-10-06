---
tipo: fase
codigo: F4
nombre: Estilo
actualizado: 2026-10-06
---

# F4 — Estilo

## Entrada exigida

F3 superada

## Flujo

1. [[skill-estilistica]] con reglas de `03t-gramatica` y `04t-prosa`:
   - EDICIÓN si modo = PRODUCCIÓN
   - AUDITORÍA si modo = ACOMPAÑAMIENTO
2. `validar_texto.py`
3. Ortografía:
   - En Claude.ai: revisión de `teprih-estilistica` + marca "ortografía automática pendiente en PC"
   - En PC: `validar_ortografia.py`

## Compuerta

- [ ] `validar_texto` con cero bloqueantes
- [ ] Advertencias revisadas una por una
- [ ] Cero errores normativos
- [ ] Variantes unificadas según hoja de estilo
- [ ] Hoja de estilo actualizada
- [ ] Nada fuera de alcance sin devolver a su fase
