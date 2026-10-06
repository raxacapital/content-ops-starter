---
tipo: skill-nueva
nombre: teprih-inf-bunge-leyes
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 3 completo"
fase: F1 (después de inf-bunge), F3 (auditoría)
estado: listo-para-integrar
fecha: 2026-10-06
---

# NUEVA SKILL: teprih-inf-bunge-leyes — Clasificador de niveles de ley

## Propósito

Toma las proposiciones centrales del marco teórico y las clasifica en los 4 niveles de ley de Bunge. Detecta confusiones de nivel que invalidan la argumentación.

## Cuándo se invoca

- **F1, paso 3, después de `teprih-inf-bunge`:** clasifica las proposiciones que la ficha epistémica ya identificó.
- **F3, auditoría:** verifica que el documento completo mantiene la coherencia entre niveles.

## Instrucciones completas

```
# teprih-inf-bunge-leyes · Clasificador de niveles de ley

## Entrada
- Documento o sección del marco teórico
- Ficha epistémica de `teprih-inf-bunge` (hipótesis, consecuencias derivables)
- Objetivos de investigación

## Procedimiento

### Paso 1: Extraer proposiciones centrales
Identificar toda proposición que el documento presenta como fundamento, hipótesis o conclusión:
- Afirmaciones del marco teórico que sostienen la argumentación
- Hipótesis de investigación
- Conclusiones y recomendaciones

### Paso 2: Clasificar cada proposición

| Nivel | Pregunta clave | Indicador textual | Ejemplo |
|---|---|---|---|
| **Ley 1** (pauta objetiva) | ¿Afirma que algo ES así en la realidad, independientemente de este estudio? | "Es un hecho que...", "La naturaleza de X es...", "X siempre produce Y" | "El aprendizaje significativo requiere conocimiento previo" |
| **Ley 2** (hipótesis/enunciado nomológico) | ¿Formula una relación general que este estudio propone o adopta como hipótesis? | "Se hipotetiza que...", "Se propone que...", "Según [autor], X se relaciona con Y" | "La motivación intrínseca se correlaciona positivamente con el rendimiento académico" |
| **Ley 3** (predicción/aplicación) | ¿Deriva una predicción concreta o una recomendación de acción? | "Por lo tanto, si se...", "Se recomienda...", "Se espera encontrar que..." | "Al aplicar estrategias de motivación intrínseca, el rendimiento debería mejorar en un 15%" |
| **Ley 4** (principio metodológico) | ¿Establece una regla sobre cómo debe hacerse la investigación? | "Toda medición debe...", "El enfoque adecuado es...", "Se adopta el paradigma..." | "La investigación educativa debe usar métodos mixtos para triangular" |

### Paso 3: Verificar coherencia entre niveles

Para cada ley 3 (predicción):
- ¿De qué ley 2 (hipótesis) se deriva?
- ¿La ley 2 soporta la fuerza de la predicción? (correlación no soporta predicción causal)

Para cada ley 2 (hipótesis):
- ¿A qué ley 1 (pauta objetiva) se refiere?
- ¿La ley 1 está declarada como supuesto o como hecho establecido? Si como hecho: ¿hay evidencia?

Para cada ley 4 (principio metodológico):
- ¿Está justificado por el campo o por la tradición del programa?
- ¿Es coherente con la posición epistemológica declarada?

### Paso 4: Producir la ficha de niveles de ley

| # | Proposición (resumida) | Nivel | Desciende de | Problema detectado |
|---|---|---|---|---|
| 1 | "La motivación causa rendimiento" | ¿Ley 1 o ley 2? | — | CONFUSIÓN: se presenta como hecho (ley 1) pero es hipótesis (ley 2) |
| 2 | "Se recomienda motivar" | Ley 3 | Proposición 1 | SALTO: la ley 2 es correlacional, la ley 3 es causal |

## Dictamen

- **APTO:** Todas las proposiciones tienen nivel claro, la cadena ley 1 → ley 2 → ley 3 es coherente.
- **APTO CON RESERVA:** Confusiones menores de nivel que se corrigen con reformulación.
- **NO APTO:** Proposiciones centrales con confusión de nivel que invalida hipótesis o conclusiones.

## Regla de precedencia

Esta skill refina el trabajo de `teprih-inf-bunge`. Si `inf-bunge` ya dictaminó APTO, esta skill puede agregar reservas pero no convertir APTO en NO APTO. Si `inf-bunge` dictaminó NO APTO, esta skill no opera: primero se resuelve la ficha epistémica.
```
