---
tipo: skill-nueva
skill: teprih-inf-falacias
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 4-6"
fase: F2, F3
estado: listo-para-integrar
fecha: 2026-10-06
---

# Skill nueva: teprih-inf-falacias — Detector sistemático de falacias

## Propósito

Escanear un documento académico completo en busca de las 14 falacias catalogadas por Copi, organizadas en tres familias. A diferencia de comp-copi (que audita pasajes argumentativos ya identificados), esta skill recorre todo el texto buscando patrones falaces, incluyendo los que están disfrazados de afirmaciones descriptivas.

## Fases de aplicación

- **F2 (Composición):** Revisar marco teórico, justificación, discusión.
- **F3 (Contrastación):** Revisar análisis de resultados e interpretaciones.

## Especificación de la skill

```
### SKILL: teprih-inf-falacias
### Detector sistemático de falacias (Copi)

**Entrada:** Documento completo o sección específica.
**Salida:** Lista de falacias detectadas con: nombre, familia, ubicación, cita textual, severidad.

---

#### Paso 1: Escaneo por patrones lingüísticos

Buscar en el texto los siguientes marcadores de posible falacia:

| Marcador lingüístico | Falacia probable |
|---|---|
| "Es bien sabido que...", "Nadie duda de que...", "Todo el mundo sabe..." | Apelación al pueblo |
| "Según el renombrado/prestigioso/reconocido..." (sin datos) | Apelación a la autoridad |
| "No se ha demostrado que no...", "No hay evidencia en contra..." | Apelación a la ignorancia |
| "¿Por qué X causa Y?" (sin probar la causalidad) | Pregunta compleja |
| "Después de X, ocurrió Y" (sin control) | Falsa causa (post hoc) |
| "Los N entrevistados dijeron..., por tanto todos..." | Generalización apresurada |
| "Así como en [país/contexto A]..., en [país/contexto B]..." | Falsa analogía |
| "Si no se hace X, entonces [catástrofe]..." | Pendiente resbaladiza |
| "O se hace X o [fracaso total]" | Falso dilema |
| "X es Y porque Y es X" (paráfrasis circular) | Petición de principio |

#### Paso 2: Reconstrucción argumental

Para cada marcador detectado:

1. Delimitar el pasaje (oración o párrafo).
2. Reconstruir: ¿cuál es la premisa implícita? ¿cuál es la conclusión?
3. Verificar si realmente hay falacia o si el marcador es inocuo.

#### Paso 3: Clasificación y dictamen

| Familia | Falacias | Criterio de CRÍTICO |
|---|---|---|
| **Relevancia** | Ad hominem, autoridad, pueblo, emoción, ignorancia, pregunta compleja | CRÍTICO si la falacia sustenta una conclusión central del documento |
| **Inducción deficiente** | Generalización apresurada, falsa causa, falsa analogía, pendiente resbaladiza | CRÍTICO si afecta una hipótesis o un resultado |
| **Presuposición** | Petición de principio, falso dilema, equívoco, anfibología | CRÍTICO si la presuposición está en la tesis central |

Todo lo demás: ADVERTENCIA.

#### Paso 4: Reporte

Para cada falacia confirmada:

- **Falacia:** [nombre]
- **Familia:** [relevancia / inducción deficiente / presuposición]
- **Ubicación:** [sección, párrafo, página]
- **Cita textual:** "[texto exacto]"
- **Premisa implícita:** [reconstrucción]
- **Conclusión pretendida:** [reconstrucción]
- **Severidad:** CRÍTICO / ADVERTENCIA
- **Sugerencia de corrección:** [cómo reformular el pasaje]

#### Paso 5: Resumen estadístico

Al final del escaneo:

| Familia | Cantidad | Críticos | Advertencias |
|---|---|---|---|
| Relevancia | N | n | n |
| Inducción deficiente | N | n | n |
| Presuposición | N | n | n |
| **Total** | **N** | **n** | **n** |

Dictamen global:
- 0 críticos → APROBADO
- 1-3 críticos → REQUIERE CORRECCIÓN
- 4+ críticos → REQUIERE REVISIÓN MAYOR
```
