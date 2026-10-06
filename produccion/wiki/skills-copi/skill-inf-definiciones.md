---
tipo: skill-nueva
skill: teprih-inf-definiciones
fuente: "Copi, I. (2014). Introducción a la lógica. Cap. 4: Definiciones"
fase: F1, F2
estado: listo-para-integrar
fecha: 2026-10-06
---

# Skill nueva: teprih-inf-definiciones — Auditor de calidad de definiciones

## Propósito

Evaluar todas las definiciones presentes en el marco conceptual y marco teórico contra las cinco reglas de Copi para definiciones científicas. Detecta definiciones circulares, demasiado amplias, demasiado estrechas, negativas o figuradas.

## Fases de aplicación

- **F1 (Fundamentación):** Auditar definiciones del marco conceptual en construcción.
- **F2 (Composición):** Auditar definiciones del marco teórico completo antes del cierre de fase.

## Especificación de la skill

```
### SKILL: teprih-inf-definiciones
### Auditor de calidad de definiciones (Copi)

**Entrada:** Marco conceptual o marco teórico del documento.
**Salida:** Tabla de evaluación por definición + dictamen global.

---

#### Paso 1: Extracción de definiciones

Identificar todas las definiciones del documento. Buscar:
- Patrones explícitos: "X se define como...", "se entiende por X...", "X es...", "X consiste en..."
- Patrones implícitos: párrafos que introducen un término nuevo y lo caracterizan.
- Definiciones operacionales: "Para efectos de esta investigación, X es..."
- Definiciones citadas: "Según [autor], X es..."

Para cada definición, registrar:
- **Término definido** (definiendum)
- **Definición dada** (definiens)
- **Tipo:** propia / operacional / citada
- **Ubicación:** sección y párrafo

#### Paso 2: Evaluación contra las 5 reglas de Copi

Para cada definición extraída:

| # | Regla | Test | Resultado |
|---|---|---|---|
| 1 | **Género próximo + diferencia específica** | ¿La definición dice "X es un tipo de Y que se distingue por Z"? ¿Ubica X dentro de una categoría más amplia y luego lo diferencia? | CUMPLE / NO CUMPLE |
| 2 | **No circular** | ¿El término definido (o un sinónimo obvio) aparece en el definiens? ¿La definición presupone lo que define? | CUMPLE / CIRCULAR |
| 3 | **No demasiado amplia** | ¿La definición incluye casos que NO son X? Ejemplo: definir "triángulo" como "figura geométrica" (falta diferencia). | CUMPLE / AMPLIA |
| 4 | **No demasiado estrecha** | ¿La definición excluye casos que SÍ son X? Ejemplo: definir "aprendizaje" solo como "cambio conductual" (excluye aprendizaje cognitivo). | CUMPLE / ESTRECHA |
| 5 | **No negativa ni figurada** | ¿Define por lo que X NO es? ¿Usa metáforas en lugar de describir? Ejemplo: "el aprendizaje es un viaje" (figurada). | CUMPLE / NEGATIVA / FIGURADA |

#### Paso 3: Consistencia interna

Verificar entre todas las definiciones:

1. **Coherencia mutua:** ¿Dos definiciones se contradicen entre sí?
2. **Cobertura:** ¿Todos los términos centrales de la investigación están definidos?
3. **Términos huérfanos:** ¿Hay términos usados extensamente pero nunca definidos?
4. **Definiciones fantasma:** ¿Hay definiciones que nunca se vuelven a usar en el documento?

#### Paso 4: Reporte por definición

| Término | Tipo | R1 | R2 | R3 | R4 | R5 | Dictamen |
|---|---|---|---|---|---|---|---|
| [término] | propia/oper./citada | OK/FALLA | OK/FALLA | OK/FALLA | OK/FALLA | OK/FALLA | APROBADA / ADVERTENCIA / CRÍTICO |

Criterios de dictamen por definición:
- **APROBADA:** Cumple las 5 reglas.
- **ADVERTENCIA:** Falla en R3, R4 o R5 (corregible sin reestructurar).
- **CRÍTICO:** Falla en R1 (sin género próximo) o R2 (circular).

#### Paso 5: Dictamen global

| Indicador | Valor |
|---|---|
| Total de definiciones | N |
| Aprobadas | n |
| Advertencias | n |
| Críticos | n |
| Términos huérfanos | n |
| Definiciones fantasma | n |

- 0 críticos y 0 huérfanos → APROBADO
- 1-2 críticos o 1-3 huérfanos → REQUIERE CORRECCIÓN
- 3+ críticos o 4+ huérfanos → REQUIERE REVISIÓN MAYOR
```
