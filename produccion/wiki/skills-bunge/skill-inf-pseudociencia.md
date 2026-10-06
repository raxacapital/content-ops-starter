---
tipo: skill-nueva
nombre: teprih-inf-pseudociencia
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 5: ¿Qué es y a qué puede llegar la epistemología? + Cap. 1 §3 (car. 14: abierta) + Cap. 2 §1 (verificable)"
fase: F3 (auditoría, después de dictámenes inferenciales)
estado: listo-para-integrar
fecha: 2026-10-06
---

# NUEVA SKILL: teprih-inf-pseudociencia — Filtro de pseudociencia

## Propósito

Revisa que el documento no use argumentos, fuentes o razonamientos pseudocientíficos. Bunge dedica extensas secciones a distinguir ciencia de pseudociencia, criticando el constructivismo radical, el "todo vale" de Feyerabend y el relativismo epistémico.

Especialmente útil en ciencias sociales, educación y psicología, donde hay mayor riesgo de fuentes que aparentan rigor científico sin tenerlo.

## Cuándo se invoca

- **F3, después de todos los dictámenes inferenciales:** como filtro final de calidad epistémica.
- No opera si alguna skill inferencial dio NO APTO: primero se resuelven los problemas fundamentales.

## Instrucciones completas

```
# teprih-inf-pseudociencia · Filtro de pseudociencia

## Entrada
- Documento completo
- Corpus verificado (para cruzar fuentes)
- Dictámenes de las skills inferenciales

## Fundamento

Bunge identifica rasgos de la pseudociencia y del pensamiento anticientífico:

1. **Irrefutabilidad como virtud:** presentar una teoría como verdadera precisamente porque no puede refutarse.
2. **Apelación a la autoridad sin evidencia:** "Lo dijo [Autor famoso]" como argumento suficiente.
3. **Confusión de dato con interpretación:** presentar una interpretación como si fuera un dato observado.
4. **"Todo vale" (Feyerabend):** relativismo metodológico que niega criterios de calidad.
5. **Dogmatismo:** presentar hipótesis como verdades definitivas, negando la falibilidad.
6. **Uso de jerga para ocultar vacío conceptual:** "los textos herméticos y anticientíficos" que se hacen "de lectura obligatoria".

Bunge: "Si un conocimiento fáctico no es refutable en principio, entonces no pertenece a la ciencia sino a algún otro campo."

## Procedimiento

### Paso 1: Filtro de fuentes

Para cada fuente citada en el marco teórico:

| Señal de alerta | Acción |
|---|---|
| Autor sin afiliación académica verificable | ADVERTENCIA: verificar credenciales |
| Publicación sin revisión por pares | ADVERTENCIA: justificar inclusión |
| Fuente de "autoayuda" o "desarrollo personal" presentada como científica | CRÍTICO: no es fuente científica |
| Autor cuya obra principal ha sido refutada o retractada | CRÍTICO: verificar con corpus |
| Fuente que cita exclusivamente a sí misma como evidencia | ADVERTENCIA: circularidad |

### Paso 2: Filtro de argumentos

Para cada argumento central del documento:

| Patrón pseudocientífico | Ejemplo | Dictamen |
|---|---|---|
| **Argumento de autoridad sin evidencia** | "Como afirma [Autor], X es verdad" sin datos que lo respalden | ADVERTENCIA |
| **Irrefutabilidad** | "Esta teoría explica todo comportamiento humano" | CRÍTICO |
| **Datos como interpretación** | "Se observó que los alumnos estaban desmotivados" (¿quién lo observó? ¿con qué instrumento?) | ADVERTENCIA |
| **Generalización sin base** | "Todos los docentes saben que..." | ADVERTENCIA |
| **Apelación al sentido común** | "Es evidente que..." como sustituto de evidencia | ADVERTENCIA |
| **Petición de principio** | La conclusión está en las premisas | CRÍTICO |
| **Causalidad post hoc** | "Después de la intervención mejoró, luego la intervención causó la mejora" sin grupo control | CRÍTICO |
| **Falsas dicotomías** | "O se usa este enfoque o se fracasa" | ADVERTENCIA |

### Paso 3: Filtro de posición epistemológica

Si el documento declara una posición epistemológica (paradigma, enfoque):
- ¿La posición declarada es coherente con el método usado?
- ¿El documento usa "paradigma" como excusa para no verificar? (Bunge critica esto explícitamente)
- ¿La posición epistemológica es de las que Bunge clasifica como anticientíficas? (constructivismo radical, relativismo total, irracionalismo)

Bunge: "Se busca la explicación última de todas las cosas sin atender a las explicaciones provisionales y perfectibles de la ciencia."

- Si la posición es constructivista moderada o interpretativa: ACEPTABLE con nota.
- Si la posición niega explícitamente la verificabilidad: CRÍTICO (el documento no puede pasar la compuerta de verificabilidad).

### Paso 4: Filtro de lenguaje hermético

Bunge advierte contra "los textos herméticos y anticientíficos" usados como autoridad.

- ¿Hay pasajes del marco teórico que son incomprensibles sin aportar contenido verificable?
- ¿Se usan términos técnicos que suenan impresionantes pero no se definen?
- ¿La complejidad del lenguaje es proporcional a la complejidad del concepto?

- ADVERTENCIA: Pasaje hermético de más de 100 palabras sin proposición verificable.

## Dictamen

- **APTO:** Sin rastros de pseudociencia; fuentes verificables, argumentos falibles, posición epistemológica coherente.
- **APTO CON RESERVA:** Señales menores (apelaciones a autoridad que se pueden respaldar con datos, fuentes dudosas pero no centrales).
- **NO APTO:** Argumento central basado en fuente pseudocientífica, hipótesis irrefutable presentada como fortaleza, o posición epistemológica que niega la verificabilidad.

## Regla de precedencia

Esta skill opera después de todas las inferenciales. No puede revertir un APTO de `inf-bunge` ni de ninguna otra. Solo puede agregar observaciones y, en casos graves, elevar al orquestador la recomendación de retroceso.
```
