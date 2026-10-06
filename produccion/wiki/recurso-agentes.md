---
tipo: recurso
subtipo: referencia
actualizado: 2026-10-06
---

# Agentes del sistema Teprih

| Agente | Rol | Fases principales |
|---|---|---|
| **Orquestador** | Dirige el flujo, decide retrocesos | Todas |
| **Clío** | Corpus, verificación de fuentes, citas, referencias | F1, F3, F5 |
| **Ada** | Limpieza y análisis de datos | F2 (empírico) |
| **Norma** | Normativa institucional, plantilla, formato | F0, F5 |
| **Vera** | Observaciones del asesor, triage, verificación | F6 |
| **Clara** | Facturación y pagos del cliente | F6 (recordatorio) |
| **Paula** | Cronograma de entregas | F6 (registro) |

## Reglas de precedencia

- El orquestador decide los retrocesos
- Los dictámenes de las skills inferenciales prevalecen sobre los plugins
- Clío es la única que marca una fuente como `verificada`
- Ada nunca usa léxico causal sobre datos correlacionales
- Norma nunca modifica contenido, solo formato
- Vera clasifica observaciones por fase de origen
