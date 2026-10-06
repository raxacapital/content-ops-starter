---
tipo: skill-nueva
skill: teprih-inf-estructura-argumental
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 1-3: Argumentos; Cap. 9-12: Silogismos"
fase: F2, F3
estado: listo-para-integrar
fecha: 2026-10-06
---

# Skill nueva: teprih-inf-estructura-argumental — Analizador de estructura argumental

## Propósito

Reconstruir y evaluar la estructura lógica de los argumentos centrales de un documento académico. Distingue argumentos deductivos de inductivos, verifica la validez formal de los deductivos y la fuerza de los inductivos, y detecta argumentos incompletos o con premisas ocultas.

## Fases de aplicación

- **F2 (Composición):** Evaluar la cadena argumental del marco teórico y la justificación.
- **F3 (Contrastación):** Evaluar los argumentos en la discusión de resultados y conclusiones.

## Especificación de la skill

```
### SKILL: teprih-inf-estructura-argumental
### Analizador de estructura argumental (Copi)

**Entrada:** Secciones argumentativas del documento (justificación, marco teórico, discusión, conclusiones).
**Salida:** Mapa argumental con evaluación de validez/fuerza + dictamen.

---

#### Paso 1: Identificación de argumentos

Para cada sección, identificar:

1. **Conclusiones explícitas:** Buscar marcadores como "por lo tanto", "en consecuencia", "se concluye que", "esto demuestra que", "lo cual indica que", "de lo anterior se desprende".
2. **Conclusiones implícitas:** Afirmaciones que se presentan como derivadas de lo anterior sin marcador.
3. **Premisas:** Para cada conclusión, rastrear las afirmaciones que la soportan.

Registrar cada argumento como:
- **ID:** A1, A2, A3...
- **Ubicación:** sección y párrafo
- **Premisa(s):** [P1, P2, ...]
- **Conclusión:** [C]
- **Tipo:** deductivo / inductivo / abductivo

#### Paso 2: Clasificación del tipo de argumento

| Tipo | Cómo reconocerlo | Criterio de evaluación |
|---|---|---|
| **Deductivo** | Pretende que la conclusión se sigue necesariamente de las premisas | Validez formal |
| **Inductivo** | Pretende que la conclusión es probable dadas las premisas | Fuerza inductiva |
| **Abductivo** | Infiere la mejor explicación para un fenómeno observado | Plausibilidad comparativa |

#### Paso 3: Evaluación de argumentos deductivos

Para cada argumento deductivo, aplicar las reglas del silogismo (Copi):

1. **¿Exactamente tres términos?** Si un término se usa con dos sentidos, hay cuatro términos (falacia de equívoco → CRÍTICO).
2. **¿Término medio distribuido al menos una vez?** Si no → conclusión no se sigue.
3. **¿Términos distribuidos correctamente?** Ningún término puede estar distribuido en la conclusión si no lo está en una premisa.
4. **¿Premisas negativas?** Dos negativas no producen conclusión válida.
5. **Si no es silogístico:** ¿La conclusión se sigue formalmente de las premisas?

Dictamen:
- **VÁLIDO:** La conclusión se sigue necesariamente.
- **INVÁLIDO:** La conclusión no se sigue (CRÍTICO si es argumento central).

#### Paso 4: Evaluación de argumentos inductivos

Para cada argumento inductivo:

1. **¿Muestra suficiente?** ¿Cuántos casos soportan la generalización?
2. **¿Muestra representativa?** ¿Los casos cubren la variabilidad relevante?
3. **¿Hay contraejemplos reconocidos?** ¿El autor los menciona y aborda?
4. **¿Salto inductivo proporcionado?** ¿La conclusión excede lo que la evidencia permite?

Dictamen:
- **FUERTE:** Evidencia suficiente y representativa.
- **DÉBIL:** Evidencia insuficiente o no representativa (ADVERTENCIA).
- **MUY DÉBIL:** Generalización sin base (CRÍTICO).

#### Paso 5: Detección de problemas estructurales

| Problema | Descripción | Severidad |
|---|---|---|
| **Premisa oculta** | El argumento requiere una premisa no declarada para funcionar | ADVERTENCIA |
| **Argumento incompleto** | Hay conclusión pero no se presentan premisas | CRÍTICO |
| **Cadena rota** | Un argumento depende de otro que no se ha establecido | CRÍTICO |
| **Circularidad** | Una premisa de A es la conclusión de B, y viceversa | CRÍTICO |
| **Argumento huérfano** | Un argumento cuyos resultados nadie usa en el documento | ADVERTENCIA |

#### Paso 6: Mapa argumental

Producir un mapa que muestre:

1. Lista de todos los argumentos (A1...An).
2. Dependencias: qué argumento depende de cuál.
3. Argumento(s) terminal(es): los que soportan la tesis o conclusión principal.
4. Puntos débiles: dónde la cadena es más frágil.

#### Paso 7: Dictamen global

| Indicador | Valor |
|---|---|
| Total de argumentos | N |
| Deductivos válidos | n |
| Deductivos inválidos | n |
| Inductivos fuertes | n |
| Inductivos débiles/muy débiles | n |
| Premisas ocultas | n |
| Cadenas rotas | n |

- 0 inválidos, 0 cadenas rotas → APROBADO
- 1-2 inválidos o débiles en argumentos secundarios → REQUIERE CORRECCIÓN
- Argumento central inválido o cadena rota en la línea principal → REQUIERE REVISIÓN MAYOR
```
