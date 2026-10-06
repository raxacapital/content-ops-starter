---
tipo: skill-nueva
skill: teprih-inf-causal-mill
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 13-14: Razonamiento inductivo y métodos de Mill"
fase: F1, F3
estado: listo-para-integrar
fecha: 2026-10-06
---

# Skill nueva: teprih-inf-causal-mill — Auditor de razonamiento causal

## Propósito

Verificar que toda afirmación causal en un documento académico esté respaldada por al menos uno de los cinco métodos de Mill. Detecta afirmaciones causales sin soporte metodológico, uso incorrecto de un método, y confusiones entre correlación y causalidad.

## Fases de aplicación

- **F1 (Fundamentación):** Verificar que las hipótesis causales están formuladas de modo que sean verificables con algún método de Mill.
- **F3 (Contrastación):** Verificar que las conclusiones causales están soportadas por el método correcto.

## Especificación de la skill

```
### SKILL: teprih-inf-causal-mill
### Auditor de razonamiento causal (Copi / Mill)

**Entrada:** Documento completo o secciones con afirmaciones causales (hipótesis, resultados, discusión, conclusiones).
**Salida:** Tabla de afirmaciones causales con método identificado, evaluación de suficiencia, y dictamen.

---

#### Paso 1: Extracción de afirmaciones causales

Buscar en el texto todo enunciado que establezca, sugiera o implique relación causal:

| Marcador lingüístico | Tipo de afirmación |
|---|---|
| "X causa Y", "X produce Y", "X genera Y" | Causal directa |
| "X influye en Y", "X incide en Y", "X afecta a Y" | Causal atenuada |
| "X se relaciona con Y" | Correlacional (verificar si se trata como causal) |
| "X mejora/empeora Y", "X aumenta/disminuye Y" | Causal con dirección |
| "Debido a X...", "Como resultado de X...", "A causa de X..." | Causal implícita |
| "X contribuye a Y", "X es un factor de Y" | Causal parcial |

Para cada una, registrar:
- **Ubicación:** sección y párrafo
- **Cita textual**
- **Variable causa (X)** y **variable efecto (Y)**
- **Fuerza de la afirmación:** directa / atenuada / parcial

#### Paso 2: Identificación del método de Mill

Para cada afirmación causal, determinar qué método la soporta:

| Método | Requisito en el documento | Evidencia necesaria |
|---|---|---|
| **Concordancia** | Múltiples casos donde X está presente y Y ocurre | Tabla de casos, muestreo, análisis de frecuencias |
| **Diferencia** | Dos situaciones iguales excepto en X; solo una produce Y | Grupo experimental vs. control, pre-test/post-test |
| **Concordancia y diferencia** | Ambos: casos con X→Y y casos sin X→no Y | Diseño mixto con grupo control |
| **Variación concomitante** | Cuando X varía, Y varía proporcionalmente | Correlación, regresión, gráficos de dispersión |
| **Residuos** | Se descartan otras causas, queda solo X | Análisis multivariable, control de variables |

Dictamen por método:
- **IDENTIFICADO:** Hay evidencia clara de que se aplicó el método.
- **PARCIAL:** Hay indicios del método pero falta rigor.
- **AUSENTE:** No se identifica ningún método de Mill.

#### Paso 3: Evaluación de suficiencia

Para cada método identificado, verificar sus limitaciones (Copi):

| Método | Limitación inherente | Verificación |
|---|---|---|
| Concordancia | Puede haber factor común no observado | ¿Se descartaron factores alternativos? |
| Diferencia | Las situaciones deben ser realmente idénticas en lo demás | ¿Se controló la equivalencia? |
| Variación concomitante | No establece dirección causal | ¿Se argumenta la dirección? ¿Se descarta causalidad inversa? |
| Residuos | Requiere conocimiento completo de las otras causas | ¿El modelo de causas es exhaustivo? |

#### Paso 4: Detección de errores causales

| Error | Descripción | Severidad |
|---|---|---|
| **Causalidad sin método** | Afirmación causal sin ningún método de Mill identificable | CRÍTICO |
| **Correlación tratada como causa** | "X se correlaciona con Y" se convierte en "X causa Y" sin justificación | CRÍTICO |
| **Post hoc** | "Después de X vino Y, luego X causó Y" sin control | CRÍTICO |
| **Método insuficiente** | Se aplica un método pero con datos inadecuados | ADVERTENCIA |
| **Dirección causal asumida** | Se asume X→Y sin descartar Y→X o Z→{X,Y} | ADVERTENCIA |
| **Causa única asumida** | Se ignoran posibles causas co-contribuyentes | ADVERTENCIA |

#### Paso 5: Coherencia hipótesis-método-conclusión

Verificar la cadena completa:

1. **Hipótesis:** ¿Qué relación causal postula?
2. **Método elegido:** ¿Es apropiado para la hipótesis? ¿El diseño lo implementa?
3. **Resultados:** ¿Los datos soportan el método?
4. **Conclusión:** ¿Excede lo que el método permite afirmar?

Errores de coherencia:
- Hipótesis causal + método solo correlacional → CRÍTICO
- Conclusión más fuerte que lo que el método soporta → CRÍTICO
- Conclusión más débil que lo que los datos permiten → ADVERTENCIA (subutilización)

#### Paso 6: Reporte

Para cada afirmación causal:

| # | Afirmación | X→Y | Método | Suficiencia | Dictamen |
|---|---|---|---|---|---|
| 1 | "[cita]" | [causa]→[efecto] | [método o NINGUNO] | [OK/PARCIAL/INSUFICIENTE] | [CRÍTICO/ADVERTENCIA/OK] |

Dictamen global:
- 0 críticos → APROBADO
- 1-2 críticos → REQUIERE CORRECCIÓN
- 3+ críticos o hipótesis central sin método → REQUIERE REVISIÓN MAYOR
```
