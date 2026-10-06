---
tipo: skill-nueva
nombre: teprih-comp-sistematica
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 1 §3, car. 3 (analítica), 9 (sistemática), 10 (general)"
fase: F2 (compositiva, después de comp-bunge)
estado: listo-para-integrar
fecha: 2026-10-06
---

# NUEVA SKILL: teprih-comp-sistematica — Auditor de sistematicidad del marco teórico

## Propósito

Verifica que el marco teórico funciona como **sistema de ideas conectadas lógicamente** y no como lista de autores o temas aislados.

Bunge: "Una ciencia no es un agregado de informaciones inconexas, sino un sistema de ideas conectadas lógicamente entre sí."

## Cuándo se invoca

- **F2, después de `teprih-comp-bunge`:** revisa la coherencia sistémica del marco teórico.
- **F3, auditoría:** verifica que el documento completo funciona como sistema.

## Instrucciones completas

```
# teprih-comp-sistematica · Auditor de sistematicidad

## Entrada
- Marco teórico completo
- Definición de la unidad de análisis (de F1)
- Hipótesis (de la ficha epistémica)

## Fundamento

Bunge distingue tres aspectos de la sistematicidad:

1. **Analítica:** descomponer el todo en partes para descubrir el mecanismo interno.
2. **Sistemática:** las ideas están conectadas lógicamente, organizadas en teorías.
3. **General:** los hechos singulares se ubican en pautas generales.

"Todo sistema de ideas, caracterizado por cierto conjunto básico de hipótesis peculiares y que procura adecuarse a una clase de hechos es una TEORÍA."

## Procedimiento

### Paso 1: Mapear la estructura del marco teórico

Para cada sección o subsección del marco teórico, identificar:
- **Qué concepto central desarrolla**
- **De qué concepto anterior depende**
- **A qué concepto posterior alimenta**
- **Qué relación lógica tiene con las demás** (implica, extiende, particulariza, contradice, complementa)

Producir un mapa de dependencias:

```
[Concepto A] --implica--> [Concepto B] --particulariza--> [Concepto C]
                                          \--complementa--> [Concepto D]
```

### Paso 2: Detectar islas

Una **isla** es un concepto o sección del marco teórico que:
- No recibe ninguna flecha de dependencia de otro concepto
- No envía ninguna flecha hacia otro concepto
- No se conecta con las hipótesis ni con la definición

Bunge: "Las conclusiones (o teoremas) pueden extraerse de los principios."
→ Si un concepto del marco teórico no participa en ninguna cadena que llegue a las hipótesis o a las conclusiones, es una isla.

- ADVERTENCIA: Isla que es contexto útil pero no conectado explícitamente.
- CRÍTICO: Isla que ocupa más de una página sin conexión con el argumento central.

### Paso 3: Detectar listas disfrazadas de sistema

El marco teórico es una **lista disfrazada** cuando:
- Cada subsección empieza con "Según [Autor]..." y termina sin conectar con la siguiente.
- Los autores se citan secuencialmente pero nunca se contrastan, se sintetizan ni se integran.
- No hay un hilo argumentativo que conecte los autores con el problema de investigación.

Bunge: "La sustitución de cualquiera de las hipótesis básicas produce un cambio radical en la teoría." → Si se puede quitar una subsección entera sin que el argumento cambie, esa subsección no es parte del sistema.

**Prueba de supresión:** Para cada subsección, preguntar: "Si la quito, ¿el argumento central se rompe?" Si la respuesta es no → no es parte del sistema.

- CRÍTICO: Marco teórico donde más del 30% del contenido pasa la prueba de supresión sin daño.

### Paso 4: Verificar la cadena hasta las hipótesis

Desde cada hipótesis, trazar hacia atrás:
- ¿De qué proposición del marco teórico se deriva?
- ¿Esa proposición está fundamentada en el mismo marco?
- ¿La cadena llega hasta un principio general o una teoría declarada?

Bunge: "El fundamento de una teoría dada no es un conjunto de hechos, sino, más bien, un conjunto de principios o hipótesis de cierto grado de generalidad."

- CRÍTICO: Hipótesis que no se puede trazar hasta el marco teórico.
- ADVERTENCIA: Hipótesis que se traza solo hasta una cita aislada, no hasta un argumento del sistema.

### Paso 5: Producir el mapa de sistematicidad

| Sección del marco | Concepto central | Depende de | Alimenta a | Relación con hipótesis | ¿Pasa prueba de supresión? |
|---|---|---|---|---|---|
| 2.1 Motivación | Motivación intrínseca | — (raíz) | 2.2, Hipótesis 1 | Directa | No (rompe argumento) |
| 2.2 Rendimiento | Rendimiento académico | 2.1 | Hipótesis 1 | Directa | No |
| 2.3 Autoestima | Autoestima | — | — | Ninguna | Sí → ISLA |

## Dictamen

- **APTO:** El marco teórico funciona como sistema: cada parte depende de otra, todas convergen hacia las hipótesis, sin islas significativas.
- **APTO CON RESERVA:** Sistema con islas menores o conexiones implícitas que deben hacerse explícitas.
- **NO APTO:** Lista de autores sin conexión sistémica, o hipótesis desconectadas del marco.
```
