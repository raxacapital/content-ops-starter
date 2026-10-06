---
tipo: mejora-skill
skill: teprih-00-sistema
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 1, §2: Ciencia formal y ciencia fáctica"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-00-sistema — Tercer régimen definicional-formal

## Fundamento (Bunge)

Bunge establece una división fundamental:

- **Ciencias formales** (lógica, matemática): tratan de entes ideales, se demuestran por coherencia lógica, no se refieren a hechos.
- **Ciencias fácticas** (naturales, sociales): tratan de hechos, se verifican por observación/experimento.

"Mientras los enunciados formales consisten en relaciones entre signos, los enunciados de las ciencias fácticas se refieren, en su mayoría, a entes extracientíficos: a sucesos y procesos."

**Error frecuente:** El discriminador actual clasifica secciones como "esencial-deductivo" o "empírico", pero no distingue las secciones que son puramente **definicionales**: el marco conceptual que define términos, operacionaliza variables y establece convenciones. Estas secciones no son deductivas (no derivan conclusiones de premisas) ni empíricas (no verifican hechos). Son formales: establecen el lenguaje con el que se hablará.

## Qué agregar a la skill

### En el discriminador de régimen, agregar un tercer tipo:

```
### Regímenes de sección

| Régimen | Qué hace la sección | Cómo se valida | Ejemplo |
|---|---|---|---|
| **esencial-deductivo** | Deriva proposiciones de premisas teóricas | Coherencia con la definición, el marco y las hipótesis | Planteamiento, marco teórico, justificación, discusión |
| **empírico** | Describe observaciones, datos, resultados | Correspondencia con los hechos (verificación empírica) | Población/muestra, instrumentos, resultados |
| **definicional-formal** | Define términos, operacionaliza variables, fija convenciones | Coherencia interna, precisión, fertilidad de las definiciones | Marco conceptual, operacionalización de variables, definición de términos |

### Reglas del régimen definicional-formal:

1. Las definiciones son convencionales pero no caprichosas: deben ser **convenientes y fértiles** (Bunge).
2. Una vez elegida una definición, el resto del documento debe guardarle fidelidad.
3. No se mezcla definición con verificación: una sección definicional no incluye datos empíricos como prueba.
4. Las definiciones no son verdaderas ni falsas: son más o menos útiles. No se argumenta "esta definición es correcta" sino "esta definición es fértil para nuestro propósito".

### Verificación:

- CRÍTICO: Sección definicional que presenta una definición como hallazgo empírico.
- CRÍTICO: Sección empírica que redefine un término ya fijado en el marco conceptual.
- ADVERTENCIA: Término central usado en el documento sin definición explícita en la sección formal.
```

### Impacto en F0:

```
En la tabla de régimen por sección, agregar la columna de régimen con tres valores posibles:
- esencial-deductivo
- empírico  
- definicional-formal

Las secciones típicamente definicional-formales:
- Marco conceptual (cuando se separa del marco teórico)
- Operacionalización de variables
- Cuadro de variables con dimensiones e indicadores
- Glosario de términos
```
