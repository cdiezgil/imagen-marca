# Informe de Análisis de Datos

**Proyecto:** [Nombre del Proyecto (ej. Análisis Predictivo Onzia)]
**Analista:** cdiezgil
**Fecha de Extracción:** [DD/MM/AAAA]
**Periodo Analizado:** [Ej. Jornadas 1 a 10]

---

## 1. Objetivo del Análisis
El propósito de este informe es identificar patrones de rendimiento en jugadores que superan los 8 puntos de media tras jugar de visitantes contra equipos del top 5 de la clasificación. El objetivo final es optimizar los algoritmos de recomendación de fichajes.

## 2. Metodología y Filtros Aplicados
- **Fuente de Datos:** Base de datos SQL estructurada (API Onzia).
- **Filtros principales:**
  - Minutos jugados > 45min por partido.
  - Valor de mercado < 15.000.000 €.
  - Partidos de visitante exclusivamente.

## 3. Hallazgos Principales (Key Insights)

> [!TIP] 
> **Insight 1: La fatiga del medio campo.** Los mediocentros defensivos ven reducido su rendimiento en un 18% si el partido es posterior a una jornada de competiciones europeas intersemanales.

> [!IMPORTANTE]
> **Insight 2: Valor refugio.** Los defensas centrales de equipos de tabla baja tienden a puntuar de forma muy regular (6 pts) cuando juegan fuera de casa contra rivales superiores, debido al alto volumen de "despejes" y "duelos ganados".

## 4. Tabla Resumen de Métricas Críticas

*Los siguientes jugadores representan anomalías estadísticas positivas detectadas por el modelo.*

| Jugador | Equipo | Posición | Media Pts | xG (Esperados) | Tendencia Valor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [Nombre] | [Equipo A] | DF | 7.2 | 0.8 | ⬆️ Sube |
| [Nombre] | [Equipo B] | MC | 6.8 | 2.1 | ⬆️ Sube |
| [Nombre] | [Equipo C] | DL | 5.5 | 4.3 | ⬇️ Baja |

## 5. Conclusión y Recomendación Algorítmica
Recomendamos ajustar el ponderador del modelo para **penalizar** a los mediocentros en jornadas post-Europa y **sobreponderar** a defensas con alta tasa de despejes en partidos con pronóstico "muy desfavorable". Esta actualización se implementará en el motor v2.1 de la app.

---
*Análisis y modelado de datos* `by { cdiezgil }`
