---
tipo: metodologia
autor_referente: Copi
fase_principal: F1, F2, F3
skills_asociadas:
  - teprih-inf-copi
  - teprih-comp-copi
actualizado: 2026-10-06
---

# Restricciones lógicas — Copi

## Qué exige

1. **Cuantificador máximo:** el alcance más fuerte que el diseño permite afirmar
2. **Léxico causal admitido:** qué palabras causales puede usar según el tipo de datos
3. **Premisas disponibles:** de qué parte la argumentación

## Regla de oro

**Prohibido el léxico causal sobre datos correlacionales.**

- Correlacional admite: "se asocia con", "se relaciona con", "varía junto con"
- NO admite: "causa", "produce", "genera", "determina", "provoca"

## Dos skills

| Skill | Fase | Qué hace |
|---|---|---|
| `teprih-inf-copi` | F1 | Ficha de restricciones |
| `teprih-comp-copi` | F2, F3 | Audita pasajes argumentativos |

## Errores frecuentes

- Usar "determina" en un estudio correlacional
- Generalizar a la población sin el cuantificador apropiado
- Conclusiones que exceden las premisas declaradas
