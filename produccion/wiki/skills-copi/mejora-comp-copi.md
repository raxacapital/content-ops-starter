---
tipo: mejora-skill
skill: teprih-comp-copi
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 4-6: Falacias informales"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-comp-copi — Catálogo de falacias en pasajes argumentativos

## Fundamento (Copi)

La skill actual audita pasajes argumentativos, pero no tiene un catálogo sistemático de falacias. Copi clasifica las falacias en tres familias que son exactamente los errores más frecuentes en documentos académicos.

## Qué agregar a la skill

### En la auditoría de pasajes argumentativos, agregar el catálogo:

```
### Catálogo de falacias (Copi) para documentos académicos

#### Familia 1: Falacias de relevancia
El argumento apela a algo que no tiene relación lógica con la conclusión.

| Falacia | Patrón | Ejemplo en tesis | Dictamen |
|---|---|---|---|
| **Ad hominem** | Atacar al autor en vez de al argumento | "La teoría de X no es válida porque X era de tal país" | CRÍTICO |
| **Apelación a la autoridad** | "X lo dice, luego es verdad" sin evidencia | "Según el renombrado autor X..." (sin datos) | ADVERTENCIA |
| **Apelación al pueblo** | "Todos lo creen, luego es verdad" | "Es bien sabido que...", "Nadie duda de que..." | ADVERTENCIA |
| **Apelación a la emoción** | Sustituir evidencia por emociones | "Los niños sufren, por eso debemos..." (sin datos del sufrimiento) | ADVERTENCIA |
| **Apelación a la ignorancia** | "No se ha probado que no, luego sí" | "No hay estudios que lo refuten, por tanto es cierto" | CRÍTICO |
| **Pregunta compleja** | Presuponer lo que se debe probar | "¿Por qué la motivación mejora el rendimiento?" (sin probar que lo mejora) | CRÍTICO |

#### Familia 2: Falacias de inducción deficiente
El argumento tiene premisas que no soportan la conclusión.

| Falacia | Patrón | Ejemplo en tesis | Dictamen |
|---|---|---|---|
| **Generalización apresurada** | Pocos casos → conclusión universal | "Los 5 entrevistados dijeron que sí, por tanto todos los docentes..." | CRÍTICO |
| **Falsa causa (post hoc)** | Después de X, vino Y → X causó Y | "Después de la capacitación, mejoró el rendimiento" (sin control) | CRÍTICO |
| **Falsa analogía** | Comparar cosas con diferencias relevantes | "Así como en Finlandia..., en Honduras..." (contextos incomparables sin justificación) | ADVERTENCIA |
| **Pendiente resbaladiza** | Si A → B → C → catástrofe | "Si no se implementa, fracasará todo el sistema" | ADVERTENCIA |

#### Familia 3: Falacias de presuposición
El argumento asume lo que debería demostrar.

| Falacia | Patrón | Ejemplo en tesis | Dictamen |
|---|---|---|---|
| **Petición de principio** | La conclusión está en las premisas | "La educación de calidad produce buenos resultados porque la calidad educativa genera buenos logros" | CRÍTICO |
| **Falso dilema** | Solo dos opciones cuando hay más | "O se usa este método o se fracasa" | ADVERTENCIA |
| **Equívoco** | Mismo término con dos sentidos | "Desarrollo" como crecimiento económico y como desarrollo humano, usados indistintamente | CRÍTICO |
| **Anfibología** | Oración ambigua que permite dos lecturas | Párrafos donde no se sabe si el sujeto es el autor o la fuente citada | ADVERTENCIA |

### Procedimiento de auditoría con catálogo:

1. Para cada pasaje argumentativo del documento (identificado por comp-copi):
   a. Reconstruir: ¿cuál es la premisa? ¿cuál es la conclusión?
   b. Verificar relevancia: ¿la premisa tiene relación lógica con la conclusión?
   c. Verificar suficiencia: ¿la premisa basta para la conclusión?
   d. Verificar presuposición: ¿la conclusión ya está asumida?
   e. Cruzar contra el catálogo: ¿encaja en alguna falacia conocida?

2. Marcar con nombre de la falacia y cita del pasaje.
3. Si hay duda entre dos falacias, elegir la más específica.
```
