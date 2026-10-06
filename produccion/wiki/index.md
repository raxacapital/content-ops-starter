---
tipo: indice
actualizado: 2026-10-06
total_paginas: 39
---

# Índice del Wiki de Producción Teprih

> Catálogo automático de todas las páginas del wiki.
> Se actualiza con cada ingesta.

---

## Proyectos activos

| Proyecto | Cliente | Universidad | Fase | Archivo |
|---|---|---|---|---|
| Avance 2 (T6) | Julio | FUNIBER | F0 | [[proyecto-julio-avance2]] |

## Normativas

| Universidad | Perfil | Archivo |
|---|---|---|
| FUNIBER | `funiber_memoria_investigacion.yaml` | [[normativa-funiber]] |
| Unitec | `unitec_maestria.yaml` | [[normativa-unitec]] |

## Fases del sistema

| Fase | Nombre | Archivo |
|---|---|---|
| F0 | Admisión | [[fase-f0]] |
| F1 | Fundamentación | [[fase-f1]] |
| F2 | Composición | [[fase-f2]] |
| F3 | Contrastación | [[fase-f3]] |
| F4 | Estilo | [[fase-f4]] |
| F5 | Maquetación | [[fase-f5]] |
| F6 | Emisión | [[fase-f6]] |

## Metodologías

| Concepto | Autor | Archivo |
|---|---|---|
| Taxonomía (Hurtado vs Sampieri) | Hurtado / Sampieri | [[metodologia-taxonomia]] |
| Rigor epistémico | Bunge | [[metodologia-bunge]] |
| Matriz de datos | Barriga | [[metodologia-barriga]] |
| Restricciones lógicas | Copi | [[metodologia-copi]] |
| Economía informativa | Eco | [[metodologia-eco]] |

## Validadores

| Herramienta | Fases | Archivo |
|---|---|---|
| `validar_texto.py` | F2, F4, F5 | [[validador-texto]] |
| `validar_citas.py` | F2, F3, F5 | [[validador-citas]] |
| `verificar_corpus.py` | F1, F3 | [[validador-corpus]] |
| `validar_plantilla.py` | F5 | [[validador-plantilla]] |
| `generar_referencias.py` | F5 | [[validador-referencias]] |

## Recursos

| Recurso | Archivo |
|---|---|
| Agentes del sistema | [[recurso-agentes]] |
| Plugins externos | [[recurso-plugins]] |
| Modos de operación | [[recurso-modos]] |

## Paquete Bunge — Mejoras y skills nuevas

> Basado en: Bunge, M. (2013). *La ciencia. Su método y su filosofía.*

### Mejoras a skills existentes

| Skill | Mejora | Archivo |
|---|---|---|
| `teprih-inf-bunge` | Niveles de ley (1/2/3/4) en ficha epistémica | [[skills-bunge/mejora-inf-bunge]] |
| `teprih-inf-copi` | Regla de salto ley 2 → ley 3 | [[skills-bunge/mejora-inf-copi]] |
| `teprih-comp-bunge` | Junturas sistémicas | [[skills-bunge/mejora-comp-bunge]] |
| `teprih-00-sistema` | Tercer régimen definicional-formal | [[skills-bunge/mejora-00-sistema]] |
| `teprih-estilistica` | Precisión conceptual y términos no definidos | [[skills-bunge/mejora-estilistica]] |

### Skills nuevas

| Skill | Fase | Qué hace | Archivo |
|---|---|---|---|
| `teprih-inf-bunge-leyes` | F1, F3 | Clasifica proposiciones en 4 niveles de ley | [[skills-bunge/skill-inf-bunge-leyes]] |
| `teprih-inf-verificabilidad` | F1, F3 | Audita que las hipótesis sean verificables | [[skills-bunge/skill-inf-verificabilidad]] |
| `teprih-comp-sistematica` | F2 | Audita sistematicidad del marco teórico | [[skills-bunge/skill-comp-sistematica]] |
| `teprih-inf-pseudociencia` | F3 | Filtra argumentos pseudocientíficos | [[skills-bunge/skill-inf-pseudociencia]] |

### Resumen de integración

| Archivo |
|---|
| [[skills-bunge/RESUMEN-PARA-SKILL-CREATOR]] |

## Paquete Copi — Mejoras y skills nuevas

> Basado en: Copi, I. (2014). *Introducción a la lógica.*

### Mejoras a skills existentes

| Skill | Mejora | Archivo |
|---|---|---|
| `teprih-inf-copi` | Métodos de Mill + reglas silogísticas | [[skills-copi/mejora-inf-copi]] |
| `teprih-comp-copi` | Catálogo de 14 falacias en 3 familias | [[skills-copi/mejora-comp-copi]] |
| `teprih-estilistica` | Detección de ambigüedad + reglas de definición | [[skills-copi/mejora-estilistica]] |

### Skills nuevas

| Skill | Fase | Qué hace | Archivo |
|---|---|---|---|
| `teprih-inf-falacias` | F2, F3 | Escaneo sistemático de falacias en todo el documento | [[skills-copi/skill-inf-falacias]] |
| `teprih-inf-definiciones` | F1, F2 | Audita definiciones contra las 5 reglas de Copi | [[skills-copi/skill-inf-definiciones]] |
| `teprih-inf-estructura-argumental` | F2, F3 | Reconstruye y evalúa la estructura lógica de argumentos | [[skills-copi/skill-inf-estructura-argumental]] |
| `teprih-inf-causal-mill` | F1, F3 | Audita afirmaciones causales con los 5 métodos de Mill | [[skills-copi/skill-inf-causal-mill]] |

### Resumen de integración

| Archivo |
|---|
| [[skills-copi/RESUMEN-PARA-SKILL-CREATOR]] |

## Lecciones aprendidas

_Sin lecciones registradas aún._

---

**Estadísticas:** 39 páginas · 1 proyecto · 2 normativas · 7 fases · 5 metodologías · 5 validadores · 3 recursos · 8 mejoras · 8 skills nuevas (Bunge: 5+4 / Copi: 3+4)
**Última actualización:** 2026-10-06
