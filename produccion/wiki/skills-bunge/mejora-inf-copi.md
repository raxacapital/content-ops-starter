---
tipo: mejora-skill
skill: teprih-inf-copi
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 3, §7: ¿Es la causalidad una propiedad intrínseca de las leyes?"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-inf-copi — Salto de ley 2 a ley 3 sin causalidad soportada

## Fundamento (Bunge)

Bunge demuestra que la causalidad **no es propiedad intrínseca de una ley**, sino que depende del uso:

- Una misma ley puede ser **descriptiva** (ley 2: "X se asocia con Y") y convertirse en **causal** al usarse como predicción (ley 3: "si manipulo X, cambiará Y").
- Para que la conexión sea genuinamente causal, hay que probar que **la relación es asimétrica**: manipular X produce cambio en Y, pero manipular Y no produce necesariamente cambio en X.
- Si la relación es simétrica (bidireccional), no es causal sino correlacional, aunque se use para predecir.

**Error frecuente:** El estudiante formula una hipótesis correlacional (ley 2) y luego, en las conclusiones o recomendaciones, salta a afirmaciones causales (ley 3) sin justificar la asimetría.

## Qué agregar a la skill

### En la ficha de restricciones, después de "léxico causal admitido":

```
### Regla de salto ley 2 → ley 3

Cuando el documento pasa de enunciar una hipótesis (ley 2) a derivar una predicción, recomendación o intervención (ley 3):

1. **Verificar asimetría causal:**
   - ¿El diseño permite afirmar que la relación es unidireccional?
   - ¿Hay grupo de control o manipulación experimental que lo respalde?
   - Si no: el salto a ley 3 causal está prohibido. Solo se admiten recomendaciones condicionales ("si se confirma la relación...").

2. **Verificar componente estadístico:**
   - Bunge: "La mayoría de las predicciones tienen un componente estadístico que puede estar ausente de la ley 2."
   - Toda ley 3 derivada de datos empíricos debe incluir la estimación de error o el nivel de confianza.
   - Una recomendación sin margen de incertidumbre no es científica.

3. **Marcar violaciones:**
   - CRÍTICO: Recomendación causal derivada de datos correlacionales sin advertencia.
   - CRÍTICO: Predicción sin estimación de error ni condiciones de validez.
   - ADVERTENCIA: Uso de "determina", "produce", "genera" en recomendaciones basadas en correlaciones.
```

### En la auditoría compositiva (`teprih-comp-copi`):

```
### Auditoría de salto ley 2 → ley 3

Revisar cada pasaje de conclusiones y recomendaciones:

- [ ] Ninguna recomendación introduce causalidad que la hipótesis original no soporta.
- [ ] Toda predicción incluye sus condiciones de validez y margen de error.
- [ ] El léxico de las recomendaciones es coherente con el diseño: correlacional → "se sugiere explorar"; experimental → "se recomienda".
```
