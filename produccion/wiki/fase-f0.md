---
tipo: fase
codigo: F0
nombre: Admisión
actualizado: 2026-10-06
---

# F0 — Admisión

## Propósito

Fijar las coordenadas del proyecto: modo, autor, régimen por sección, taxonomía, norma de citas, estilo, ética.

## Entrada exigida

- Encargo: tipo de documento, universidad, programa, nivel
- Material del cliente: tema, borradores
- Normativa (adjunta o perfil existente)
- Autor del documento

## Skills que intervienen

| Orden | Skill | Qué hace |
|---|---|---|
| 1 | Orquestador | Fija modo y autor |
| 2 | [[skill-00-sistema]] | Discriminador de régimen (esencial-deductivo vs empírico) |
| 3 | [[skill-inf-eco]] | Destinatario y código |
| 4 | [[skill-estilistica]] | Hoja de estilo |
| 5 | [[skill-etica]] | Protocolo ético (si hay personas) |
| 6 | Norma | Perfil de validación y norma de citas |

## Decisiones automáticas

- **Taxonomía:** Hurtado si el producto es propuesta/plan/programa/modelo/manual. Sampieri en cualquier otro caso. Nunca las dos.
- **Familia jurídica:** si el problema es jurídico → `inf-juridica` + `comp-juridico`
- **Familia cualitativa:** si la ruta es cualitativa o mixta → `inf-cualitativa` + `comp-cualitativo`

## Compuerta

- [ ] Modo y autor fijados
- [ ] Régimen asignado por sección
- [ ] Una sola taxonomía elegida
- [ ] Destinatario y hoja de estilo
- [ ] Normativa identificada con perfil o marca "sin perfil"
- [ ] Norma de citas fijada
- [ ] Protocolo ético decidido (si aplica)
- [ ] Estado creado con F0 = superada

## Si falla

Se queda en F0 hasta completar el insumo faltante.
