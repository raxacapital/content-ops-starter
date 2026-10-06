---
tipo: skill-nueva
nombre: teprih-inf-verificabilidad
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 1 §3 (car. 7: verificable), Cap. 2 §§5-6 (método experimental)"
fase: F1 (después de inf-bunge), F3 (auditoría)
estado: listo-para-integrar
fecha: 2026-10-06
---

# NUEVA SKILL: teprih-inf-verificabilidad — Auditor de verificabilidad

## Propósito

Verifica que cada hipótesis del documento tiene consecuencias particulares contrastables con la experiencia. Bunge: "La verificabilidad constituye la esencia del conocimiento científico; si así no fuera, no podría decirse que los científicos procuran alcanzar conocimiento objetivo."

## Cuándo se invoca

- **F1, paso 3, después de `teprih-inf-bunge`:** verifica que las hipótesis propuestas son verificables en principio.
- **F3, auditoría:** verifica que el documento efectivamente verificó (o intentó verificar) lo que propuso.

## Instrucciones completas

```
# teprih-inf-verificabilidad · Auditor de verificabilidad

## Entrada
- Hipótesis de investigación (de la ficha epistémica)
- Diseño metodológico (si existe)
- Resultados (si existen, en F3)

## Fundamento

Bunge: "Las hipótesis científicas deben ser capaces de aprobar el examen de la experiencia."

Pero con matices:
- "La verificación empírica rara vez puede determinar cuál de los componentes de una teoría dada ha sido confirmado o disconfirmado; habitualmente se prueban SISTEMAS de proposiciones."
- "No existen respuestas definitivas, y ello simplemente porque no existen preguntas finales."
- "El método científico no proporciona recetas infalibles para encontrar la verdad: sólo contiene un conjunto de prescripciones FALIBLES para el planeamiento."

## Procedimiento

### Paso 1: Para cada hipótesis, aplicar el test de verificabilidad

| Pregunta | Sí → | No → |
|---|---|---|
| ¿La hipótesis tiene al menos una consecuencia particular observable? | Verificable | CRÍTICO: hipótesis no científica |
| ¿Se puede diseñar una observación o experimento que la refute? | Refutable (Popper-Bunge) | CRÍTICO: irrefutable = no científica |
| ¿Las variables de la hipótesis son medibles u observables? | Operacionalizable | ADVERTENCIA: ¿cómo se mide? |
| ¿Se ha formulado la pregunta con precisión? | Clara | ADVERTENCIA: reformular |

### Paso 2: Verificar la cadena hipótesis → predicción → observación

Bunge: "Siempre se reducen a mostrar que hay, o que no hay, algún fundamento para creer que las suposiciones en cuestión corresponden a los hechos observados."

Para cada hipótesis:
1. ¿Qué consecuencia particular se deriva de ella?
2. ¿Esa consecuencia es observable/medible con los instrumentos declarados?
3. ¿Qué resultado empírico la confirmaría? ¿Cuál la refutaría?
4. ¿El diseño metodológico efectivamente mide eso?

### Paso 3: Detectar hipótesis decorativas

Hipótesis que aparecen en el planteamiento pero:
- No se operacionalizan en el instrumento
- No se contrastan en los resultados
- No se discuten en la discusión
→ Son hipótesis decorativas. CRÍTICO si son centrales.

### Paso 4: Verificar precisión de las preguntas (regla de Bunge)

Bunge: "Formúlense preguntas precisas."

- ¿Los términos de la hipótesis están definidos? (cruzar con ficha de precisión conceptual)
- ¿La hipótesis distingue qué grupo, qué período, qué condiciones?
- ¿Se puede saber exactamente qué datos se necesitan para probarla?

## Dictamen

- **APTO:** Todas las hipótesis centrales son verificables, tienen consecuencias observables y el diseño las cubre.
- **APTO CON RESERVA:** Hipótesis verificables pero con operacionalización incompleta o instrumentos imprecisos.
- **NO APTO:** Hipótesis central irrefutable, no operacionalizable, o completamente desconectada del diseño.

## En F3 (auditoría): verificar verificación efectiva

- [ ] Cada hipótesis tiene resultados empíricos que la contrastan.
- [ ] Los resultados responden la pregunta que la hipótesis planteó (no otra).
- [ ] Las conclusiones reconocen el carácter provisional del hallazgo (Bunge: "hasta nuevo aviso").
- [ ] Si una hipótesis no pudo verificarse, se declara explícitamente y se explica por qué.
```
