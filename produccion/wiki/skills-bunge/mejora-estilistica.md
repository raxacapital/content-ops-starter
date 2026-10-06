---
tipo: mejora-skill
skill: teprih-estilistica
fuente: "Bunge, M. (2013). La ciencia. Su método y su filosofía. Cap. 1, §3: característica 5 (claro y preciso)"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-estilistica — Precisión conceptual y términos no definidos

## Fundamento (Bunge)

Bunge lista cinco vías de claridad y precisión en la ciencia:

a) **Problemas formulados de manera clara:** "lo primero es distinguir cuáles son los problemas."
b) **Nociones purificadas:** la ciencia "parte de nociones que parecen claras al no iniciado, y las complica, purifica y eventualmente las rechaza."
c) **Definiciones explícitas:** "La ciencia define la mayoría de sus conceptos: algunos como primitivos, otros de manera implícita."
d) **Lenguaje artificial:** "crea lenguajes artificiales inventando símbolos; a estos signos se les atribuyen significados determinados."
e) **Medición y registro:** "procura siempre medir y registrar los fenómenos."

"Una vez que se ha elegido una definición, el discurso restante debe guardarle fidelidad si se quiere evitar inconsecuencias."

**Error frecuente:** El estudiante usa términos técnicos centrales sin definirlos, o los define en un lugar y los usa con otro sentido después. La revisión estilística actual cubre superficie (ortografía, variantes, normas) pero no la **precisión conceptual**.

## Qué agregar a la skill

### En la revisión estilística, agregar una capa de "precisión conceptual":

```
### Revisión de precisión conceptual (Bunge)

1. **Inventario de términos centrales:**
   Extraer del documento todos los términos técnicos que aparecen más de 3 veces o que son parte de las variables, hipótesis u objetivos.

2. **Verificar definición:**
   Para cada término central:
   - ¿Está definido explícitamente en el marco conceptual o marco teórico?
   - ¿La definición es propia (del autor con base en la teoría) o prestada (citada de un autor)?
   - Si prestada: ¿se cita la fuente de la definición?

3. **Verificar fidelidad:**
   - ¿El término se usa con el mismo sentido en todo el documento?
   - ¿En los resultados y la discusión se usa con el mismo alcance que en la definición?
   - ¿Los indicadores del instrumento corresponden a la definición operacional?

4. **Marcar problemas:**
   - ADVERTENCIA: Término central sin definición explícita.
   - ADVERTENCIA: Término definido en el marco pero usado con sentido distinto en otro capítulo.
   - CRÍTICO: Variable del objetivo o hipótesis sin definición conceptual ni operacional.
   - CRÍTICO: Indicadores del instrumento que no corresponden a la operacionalización declarada.

### Ejemplo de detección:

Definición: "Motivación: fuerza interna que impulsa la conducta hacia una meta (Reeve, 2010)."
Uso en resultados: "La motivación extrínseca mostró un nivel alto."
→ ADVERTENCIA: "motivación extrínseca" no está definida; la definición cubre solo "motivación" como fuerza interna, que es intrínseca por definición.
```

### En la hoja de estilo, agregar:

```
### Glosario de precisión

| Término | Definición adoptada | Fuente | Sección donde se define |
|---|---|---|---|
| (se llena durante la revisión) | | | |

Si un término central no puede llenar esta fila, tiene un problema de precisión.
```
