---
tipo: fase
codigo: F3
nombre: Contrastación
actualizado: 2026-10-06
---

# F3 — Contrastación

## Entrada exigida

F2 superada · documento completo

## Skills en modo AUDITORÍA (todas)

| Orden | Skill | Dictamen |
|---|---|---|
| 1 | [[skill-inf-hurtado]] o [[skill-inf-sampieri]] | APTO / RESERVA / NO APTO |
| 2 | [[skill-inf-bunge]] | APTO / RESERVA / NO APTO |
| 3 | [[skill-inf-barriga]] | APTO / RESERVA / NO APTO |
| 4 | [[skill-inf-juridica]] (si aplica) | APTO / RESERVA / NO APTO |
| 5 | [[skill-inf-cualitativa]] (si aplica) | APTO / RESERVA / NO APTO |
| 6 | [[skill-inf-copi]] | APTO / RESERVA / NO APTO |
| 7 | [[skill-inf-eco]] | APTO / RESERVA / NO APTO |
| 8 | [[skill-etica]] (si aplica) | APTO / RESERVA / NO APTO |
| 9 | **Clío** re-verifica corpus y citas | — |

## Plugins que refuerzan

- Research Integrity: después de `inf-bunge`, capa de refuerzo epistémico
- Research Desk `citation-check`: segundo pase antes de `validar_citas.py`
- Research Desk `paper-critique`: revisión de referee independiente (observación, no dictamen)

## Compuerta

- [ ] Todos los dictámenes en APTO o APTO CON RESERVA (reservas en `pendientes`)
- [ ] Cero CRÍTICOS
- [ ] `validar_citas` sin código 2

## Si falla

Un solo CRÍTICO devuelve a la fase de origen (casi siempre F1).
