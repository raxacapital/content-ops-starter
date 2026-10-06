---
tipo: mejora-skill
skill: teprih-inf-copi
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 9-12: Silogismos; Cap. 13: Razonamiento inductivo; Cap. 14: Métodos de Mill"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-inf-copi — Métodos de Mill y reglas silogísticas

## Fundamento (Copi)

La skill actual fija el cuantificador máximo, el léxico causal admitido y las premisas disponibles. Pero Copi ofrece herramientas más específicas que la skill no aprovecha:

### A. Métodos de Mill para razonamiento causal

Copi dedica un capítulo completo a los cinco métodos de Mill para establecer relaciones causales. Estos métodos son los que un estudiante **debería usar** para justificar afirmaciones causales, y los que el auditor debe verificar:

| Método | Lógica | Cuándo aplica |
|---|---|---|
| **Concordancia** | Si en todos los casos donde ocurre E, está presente F → F es causa (o parte) de E | Estudios observacionales con múltiples casos |
| **Diferencia** | Dos situaciones idénticas excepto en F; si solo una produce E → F es causa de E | Diseños experimentales con grupo control |
| **Concordancia y diferencia** | Combinación de ambos | Diseños mixtos |
| **Variación concomitante** | Si F varía y E varía proporcionalmente → relación causal | Estudios correlacionales con gradiente |
| **Residuos** | Si se explican todas las partes del efecto menos una, lo que queda se atribuye a la causa restante | Análisis de factores |

### B. Reglas del silogismo válido

Los argumentos deductivos del documento pueden evaluarse contra las reglas de Copi:

1. El silogismo debe tener exactamente tres términos.
2. El término medio debe estar distribuido al menos una vez.
3. Ningún término puede estar distribuido en la conclusión si no lo está en la premisa.
4. Dos premisas negativas no dan conclusión.
5. Si una premisa es negativa, la conclusión debe ser negativa.
6. Dos premisas universales no dan conclusión particular.

## Qué agregar a la skill

### En la ficha de restricciones, agregar:

```
### Método causal declarado (Mill/Copi)

Para cada afirmación causal del documento:

1. **Identificar qué método de Mill la soporta:**
   - ¿Concordancia? → ¿Se muestran múltiples casos donde la causa está presente?
   - ¿Diferencia? → ¿Hay grupo control o comparación explícita?
   - ¿Variación concomitante? → ¿Se mide la variación proporcional?
   - ¿Residuos? → ¿Se descartan otras causas?
   - ¿Ninguno? → La afirmación causal no tiene soporte metodológico.

2. **Verificar suficiencia del método:**
   - Concordancia sola no prueba causalidad (puede haber factor común)
   - Diferencia requiere que las situaciones sean realmente idénticas en lo demás
   - Variación concomitante no establece dirección causal

3. **Marcar:**
   - CRÍTICO: Afirmación causal sin método de Mill identificable.
   - ADVERTENCIA: Método de Mill aplicado con datos insuficientes.
   - ADVERTENCIA: Solo concordancia cuando se necesitaría diferencia.

### Validez de argumentos deductivos

Para cada argumento deductivo central (especialmente en justificación y discusión):

1. Reconstruir premisas y conclusión.
2. Aplicar las reglas del silogismo:
   - ¿Exactamente tres términos? (cuidado con la ambigüedad: mismo término con dos sentidos = cuatro términos)
   - ¿Término medio distribuido?
   - ¿Términos no distribuidos indebidamente en la conclusión?
3. Si el argumento no es silogístico, verificar que la conclusión se sigue de las premisas.

- CRÍTICO: Argumento con cuatro términos (ambigüedad disfrazada).
- CRÍTICO: Conclusión que excede las premisas (término distribuido en conclusión pero no en premisa).
```
