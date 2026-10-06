---
tipo: instrucciones-actualizacion
destino: skill-creator de Claude.ai
fecha: 2026-10-06
---

# Actualización del sistema Teprih — Paquete Bunge

Basado en: **Bunge, M. (2013). La ciencia. Su método y su filosofía. Editorial Laetoli.**

## RESUMEN EJECUTIVO

5 mejoras a skills existentes + 4 skills nuevas, todas derivadas de los fundamentos epistemológicos de Bunge. Refuerzan la cadena de rigor: desde la clasificación de proposiciones hasta la detección de pseudociencia.

---

## A. MEJORAS A SKILLS EXISTENTES (5)

### A1. teprih-inf-bunge → Agregar niveles de ley (1/2/3/4)
**Qué:** Agregar a la ficha epistémica la clasificación de cada proposición central en 4 niveles: ley 1 (pauta objetiva), ley 2 (hipótesis), ley 3 (predicción), ley 4 (principio metodológico).
**Por qué:** Los estudiantes confunden "lo que la realidad hace" con "lo que su hipótesis dice" con "lo que pueden predecir".
**Dónde:** En la ficha epistémica, después de "hipótesis con consecuencia derivable". En la auditoría de F3, como verificación adicional.

### A2. teprih-inf-copi → Regla de salto ley 2 → ley 3
**Qué:** Agregar regla que verifica que el paso de hipótesis (ley 2) a predicción/recomendación (ley 3) no introduzca causalidad que los datos no soportan.
**Por qué:** Bunge demuestra que la causalidad no es propiedad intrínseca de una ley sino que depende del uso. Un estudio correlacional no puede producir recomendaciones causales.
**Dónde:** En la ficha de restricciones, después de "léxico causal admitido". En comp-copi para auditar conclusiones y recomendaciones.

### A3. teprih-comp-bunge → Junturas sistémicas
**Qué:** Las junturas entre capítulos deben responder: (1) qué descompuso este capítulo, (2) cómo se conecta con los anteriores, (3) qué aporta al todo.
**Por qué:** Bunge: la ciencia es sistémica, no atomista. Las junturas vacías ("En el siguiente capítulo...") no son sistémicas.
**Dónde:** En la revisión de junturas de comp-bunge. Prueba: si se leen solo las junturas, se reconstruye la lógica del documento.

### A4. teprih-00-sistema → Tercer régimen definicional-formal
**Qué:** Agregar régimen "definicional-formal" para secciones que definen términos, operacionalizan variables y fijan convenciones sin pretensión fáctica.
**Por qué:** Bunge distingue ciencia formal (demuestra) de ciencia fáctica (verifica). Las secciones de definición no son ni deductivas ni empíricas.
**Dónde:** En el discriminador de régimen de F0. Secciones típicas: marco conceptual, operacionalización, cuadro de variables.

### A5. teprih-estilistica → Precisión conceptual
**Qué:** Agregar revisión de "términos no definidos": todo concepto clave debe estar definido explícitamente. Verificar fidelidad: el término se usa con el mismo sentido en todo el documento.
**Por qué:** Bunge: "La ciencia define la mayoría de sus conceptos" y "una vez elegida una definición, el discurso restante debe guardarle fidelidad".
**Dónde:** En la revisión estilística, como capa adicional de "precisión conceptual".

---

## B. SKILLS NUEVAS (4)

### B1. teprih-inf-bunge-leyes (NUEVA)
**Fase:** F1 (después de inf-bunge), F3 (auditoría)
**Qué hace:** Clasifica las proposiciones centrales del documento en los 4 niveles de ley de Bunge. Detecta confusiones de nivel.
**Precedencia:** Refina inf-bunge. No puede revertir su dictamen.

### B2. teprih-inf-verificabilidad (NUEVA)
**Fase:** F1 (después de inf-bunge), F3 (auditoría)
**Qué hace:** Verifica que cada hipótesis tiene consecuencias particulares contrastables con la experiencia. Detecta hipótesis decorativas (aparecen pero no se prueban).
**Regla clave:** "Si una hipótesis no tiene consecuencia verificable, no es científica" (Bunge).

### B3. teprih-comp-sistematica (NUEVA)
**Fase:** F2 (después de comp-bunge)
**Qué hace:** Verifica que el marco teórico funciona como sistema y no como lista de autores. Aplica la "prueba de supresión": si se quita una subsección sin que el argumento cambie, no es parte del sistema.
**Produce:** Mapa de sistematicidad con dependencias entre conceptos.

### B4. teprih-inf-pseudociencia (NUEVA)
**Fase:** F3 (después de todos los dictámenes inferenciales)
**Qué hace:** Filtra argumentos pseudocientíficos: irrefutabilidad como virtud, apelación a autoridad sin evidencia, confusión dato/interpretación, lenguaje hermético sin contenido verificable.
**Precedencia:** No puede revertir dictámenes de otras skills. Solo agrega observaciones y eleva al orquestador.

---

## C. INTEGRACIÓN EN FASES

### F0 — Admisión
- **A4:** Agregar régimen definicional-formal al discriminador.

### F1 — Fundamentación
- Orden: inf-bunge → **B1 inf-bunge-leyes** → **B2 inf-verificabilidad** → inf-barriga → inf-copi (con **A2**)
- **A1:** inf-bunge produce ficha epistémica con niveles de ley.
- **B1:** Clasifica proposiciones en 4 niveles.
- **B2:** Verifica que las hipótesis son verificables.
- **A2:** inf-copi incluye regla de salto ley 2 → ley 3.

### F2 — Composición
- Orden: comp-bunge (con **A3**) → **B3 comp-sistematica** → comp-copi → comp-barriga → comp-eco
- **A3:** comp-bunge exige junturas sistémicas.
- **B3:** Audita sistematicidad del marco teórico.
- **A5:** estilistica incluye precisión conceptual.

### F3 — Contrastación
- Orden existente + **B4 inf-pseudociencia** al final, antes de Clío.
- **B1:** inf-bunge-leyes en modo auditoría.
- **B2:** inf-verificabilidad verifica verificación efectiva.
- **B4:** Filtro de pseudociencia como capa final.

---

## D. INSTRUCCIONES PARA EL SKILL-CREATOR

Pegar a tu skill-creator de Claude.ai:

> "Necesito actualizar sistema-teprih con el paquete Bunge. Son 5 mejoras a skills existentes y 4 skills nuevas. Todas vienen del libro 'La ciencia. Su método y su filosofía' de Mario Bunge. Los archivos detallados están en el repositorio produccion/wiki/skills-bunge/. El resumen ejecutivo con las instrucciones de integración en cada fase está en RESUMEN-PARA-SKILL-CREATOR.md."
