---
tipo: fase
codigo: F5
nombre: Maquetación
actualizado: 2026-10-06
---

# F5 — Maquetación

## Entrada exigida

F4 superada · documento .docx · normativa o perfil

## Flujo

1. **Norma:** plantilla institucional, estilos, numeración, índices, portada
   - Si hay perfil: `corregir_estilos_plantilla.py` sobre la plantilla oficial
2. **Clío:** lista de referencias
   - Con `generar_referencias.py` si hay Pandoc y red
   - Si no, a mano con la norma
3. `validar_plantilla.py` (si hay perfil)
4. `validar_citas.py` + `validar_texto.py` sobre el .docx final
5. **Norma:** revisión manual de lo que el código no comprueba

## Compuerta

- [ ] Validadores con cero bloqueantes sobre el .docx final
- [ ] Cada exigencia de la normativa verificada
- [ ] Índices actualizados
- [ ] Lista de referencias completa: todas las citadas y solo las citadas
