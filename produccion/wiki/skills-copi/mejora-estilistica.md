---
tipo: mejora-skill
skill: teprih-estilistica
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 5: Falacias de ambigüedad; Cap. 4: Definiciones"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Mejora: teprih-estilistica — Detección de ambigüedad y calidad de definiciones

## Fundamento (Copi)

Copi dedica capítulos enteros a los errores de lenguaje que afectan la lógica. Complementa la mejora de Bunge (precisión conceptual) con herramientas específicas de detección.

### A. Falacias de ambigüedad (Cap. 5)

- **Equívoco:** Palabra usada con dos sentidos en el mismo argumento.
- **Anfibología:** Oración con estructura gramatical ambigua.
- **Acento:** Énfasis que cambia el sentido.
- **Composición:** Lo que vale para la parte vale para el todo (falso).
- **División:** Lo que vale para el todo vale para la parte (falso).

### B. Reglas de las definiciones (Cap. 4)

Copi establece cinco reglas que toda definición científica debe cumplir:

1. Debe dar las características esenciales (género próximo y diferencia específica).
2. No debe ser circular.
3. No debe ser demasiado amplia ni demasiado estrecha.
4. No debe ser negativa cuando puede ser positiva.
5. No debe usar lenguaje figurado ni oscuro.

## Qué agregar a la skill

```
### Detección de ambigüedad (Copi)

En la revisión estilística, para cada término central:

1. **Test de equívoco:**
   - ¿El término aparece con el mismo sentido en todo el documento?
   - Buscar especialmente en: marco teórico vs resultados vs conclusiones.
   - Términos de alto riesgo: "desarrollo", "calidad", "proceso", "estrategia", "impacto", "significativo".

2. **Test de anfibología:**
   - ¿Hay oraciones donde el sujeto es ambiguo?
   - Ejemplo: "El estudio de los autores mostró..." → ¿quién estudió? ¿los autores o alguien estudió a los autores?

3. **Test de composición/división:**
   - ¿Se atribuye a un grupo lo que se observó en individuos? (composición)
   - ¿Se atribuye a individuos lo que se observó en el grupo? (división)

### Calidad de definiciones (Copi)

Para cada definición en el marco conceptual:

| Regla de Copi | Verificación | Problema |
|---|---|---|
| Género próximo + diferencia específica | ¿La definición dice "X es un tipo de Y que se distingue por Z"? | ADVERTENCIA si falta |
| No circular | ¿El término aparece en su propia definición? | CRÍTICO si circular |
| No demasiado amplia | ¿La definición incluye cosas que no son X? | ADVERTENCIA |
| No demasiado estrecha | ¿La definición excluye cosas que sí son X? | ADVERTENCIA |
| No negativa | ¿Define por lo que X no es en vez de lo que es? | ADVERTENCIA |
| No figurada | ¿Usa metáforas en vez de describir? | ADVERTENCIA |
```
