---
tipo: resumen-integracion
paquete: copi
fuente: "Copi, I. (2014). Introducción a la lógica"
estado: listo-para-integrar
fecha: 2026-10-06
---

# Paquete Copi — Resumen de integración para skill-creator

> Este documento consolida todas las mejoras y skills nuevas derivadas de Copi para que skill-creator las integre en el sistema Teprih.

---

## Visión general

El Paquete Copi añade herramientas de lógica formal e informal al sistema de producción. Mientras Bunge aporta el rigor epistemológico (qué debe cumplir el conocimiento científico), Copi aporta el rigor lógico (qué debe cumplir un argumento para ser válido).

**Fuente:** Copi, I. (2014). *Introducción a la lógica.* Capítulos 1-14.

**Total de archivos:** 7
- 3 mejoras a skills existentes
- 4 skills nuevas

---

## Mejoras a skills existentes

### 1. mejora-inf-copi (→ teprih-inf-copi)

**Archivo:** `skills-copi/mejora-inf-copi.md`
**Qué agrega:**
- Los 5 métodos de Mill para razonamiento causal (concordancia, diferencia, concordancia y diferencia, variación concomitante, residuos).
- Reglas del silogismo válido (6 reglas de Copi).
- Procedimiento para verificar suficiencia de cada método.

**Dónde integrar:** En la ficha de restricciones de teprih-inf-copi, después de las restricciones actuales.

### 2. mejora-comp-copi (→ teprih-comp-copi)

**Archivo:** `skills-copi/mejora-comp-copi.md`
**Qué agrega:**
- Catálogo completo de 14 falacias en 3 familias (relevancia, inducción deficiente, presuposición).
- Cada falacia con: patrón, ejemplo en tesis, dictamen.
- Procedimiento de auditoría de 5 pasos para pasajes argumentativos.

**Dónde integrar:** En la auditoría de pasajes argumentativos de teprih-comp-copi, como catálogo de referencia y procedimiento ampliado.

### 3. mejora-estilistica (→ teprih-estilistica)

**Archivo:** `skills-copi/mejora-estilistica.md`
**Qué agrega:**
- Test de equívoco: verificar que cada término central se usa con el mismo sentido en todo el documento.
- Test de anfibología: detectar oraciones con sujeto ambiguo.
- Test de composición/división: detectar atribuciones indebidas parte↔todo.
- Tabla de evaluación de definiciones contra las 5 reglas de Copi.

**Dónde integrar:** En la revisión estilística de teprih-estilistica, como bloque de detección de ambigüedad.

---

## Skills nuevas

### 4. teprih-inf-falacias (NUEVA)

**Archivo:** `skills-copi/skill-inf-falacias.md`
**Fases:** F2, F3
**Qué hace:** Escaneo sistemático del documento completo buscando las 14 falacias de Copi. A diferencia de la mejora a comp-copi (que evalúa pasajes ya identificados), esta skill recorre todo el texto buscando marcadores lingüísticos de falacias.
**Salida:** Lista de falacias con nombre, familia, ubicación, cita, severidad, sugerencia de corrección. Resumen estadístico por familia.

### 5. teprih-inf-definiciones (NUEVA)

**Archivo:** `skills-copi/skill-inf-definiciones.md`
**Fases:** F1, F2
**Qué hace:** Extrae todas las definiciones del marco conceptual/teórico y las evalúa contra las 5 reglas de Copi (género próximo + diferencia específica, no circular, no amplia, no estrecha, no negativa/figurada). Detecta también términos huérfanos y definiciones fantasma.
**Salida:** Tabla de evaluación por definición (5 columnas de reglas) + dictamen global.

### 6. teprih-inf-estructura-argumental (NUEVA)

**Archivo:** `skills-copi/skill-inf-estructura-argumental.md`
**Fases:** F2, F3
**Qué hace:** Reconstruye la estructura lógica de los argumentos centrales del documento. Clasifica cada argumento como deductivo, inductivo o abductivo. Evalúa validez formal (deductivos) y fuerza inductiva (inductivos). Detecta premisas ocultas, cadenas rotas y circularidad. Produce un mapa argumental.
**Salida:** Mapa argumental con dependencias + evaluación por argumento + dictamen global.

### 7. teprih-inf-causal-mill (NUEVA)

**Archivo:** `skills-copi/skill-inf-causal-mill.md`
**Fases:** F1, F3
**Qué hace:** Extrae todas las afirmaciones causales del documento, identifica qué método de Mill las soporta (o si ninguno las soporta), evalúa la suficiencia del método aplicado, y verifica la coherencia hipótesis→método→conclusión.
**Salida:** Tabla de afirmaciones causales con método, suficiencia y dictamen + verificación de coherencia global.

---

## Integración por fase

| Fase | Skills que intervienen | Cuándo ejecutar |
|---|---|---|
| **F1 — Fundamentación** | inf-definiciones, inf-causal-mill | Al construir marco conceptual y formular hipótesis |
| **F2 — Composición** | inf-falacias, inf-definiciones, inf-estructura-argumental | Al cerrar marco teórico, justificación, discusión |
| **F3 — Contrastación** | inf-falacias, inf-estructura-argumental, inf-causal-mill | Al interpretar resultados y redactar conclusiones |
| **F4 — Estilo** | (mejora-estilistica ya integrada) | En la revisión estilística |

---

## Complementariedad con el Paquete Bunge

| Dimensión | Bunge aporta | Copi aporta |
|---|---|---|
| **Epistemológica** | Niveles de ley, verificabilidad, pseudociencia | — |
| **Lógica formal** | — | Silogismos, validez, estructura argumental |
| **Lógica informal** | — | 14 falacias, calidad de definiciones |
| **Causal** | — | 5 métodos de Mill |
| **Sistémica** | Junturas, sistematicidad | — |
| **Conceptual** | Precisión conceptual | Ambigüedad, equívoco, anfibología |
| **Definicional** | Régimen definicional-formal | 5 reglas de definición |

**Juntos:** Bunge dice *qué* debe cumplir el conocimiento, Copi dice *cómo verificar* que el argumento es correcto.

---

## Instrucciones para skill-creator

1. **Mejoras:** Abrir cada skill existente (teprih-inf-copi, teprih-comp-copi, teprih-estilistica) y agregar el bloque indicado en cada archivo de mejora, en la sección que se especifica.
2. **Skills nuevas:** Crear cada skill como una skill independiente con los pasos y tablas indicados en su archivo.
3. **Orden de integración sugerido:** Primero las mejoras (son adiciones a lo que ya existe), luego las skills nuevas.
4. **Compatibilidad:** Las skills de Copi son complementarias con las de Bunge. No hay conflictos. Pueden ejecutarse en paralelo o en secuencia.
