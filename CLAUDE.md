# Estudio 4A — Web

Sitio web institucional para Estudio 4A, estudio boutique de arquitectura en Bolivia (40+ años). Concepto: "Simbiosis y Matiz" — sofisticación por sustracción, no por adición.

**Stack**: Nuxt 4 + Tailwind CSS v4 (CSS-first) + Reka UI + GSAP + Lenis

---

## Contexto del Proyecto

| Archivo | Contenido |
|---------|-----------|
| [`.claude/context/brand-identity.md`](.claude/context/brand-identity.md) | Marca, logo, paleta, distribución cromática, reglas del rojo |
| [`.claude/context/design-system.md`](.claude/context/design-system.md) | Tokens @theme: colores, tipografía, espaciado, layout, sombras, transiciones |
| [`.claude/context/design-philosophy.md`](.claude/context/design-philosophy.md) | 5 principios, regla de oro, checklist, lo que NUNCA debe pasar |
| [`.claude/context/component-specs.md`](.claude/context/component-specs.md) | Specs de cada componente UI, layout y sección + regla Reka UI |
| [`.claude/context/page-specs.md`](.claude/context/page-specs.md) | Specs por página: Home (6 secciones), Nosotros, Proyectos, Journal, Contacto |
| [`.claude/context/animation-rules.md`](.claude/context/animation-rules.md) | Permitido/prohibido, composables, plugins GSAP/Lenis, cleanup |
| [`.claude/context/tech-stack.md`](.claude/context/tech-stack.md) | Stack completo, reglas Tailwind v4, estructura directorios, workflow |
| [`.claude/context/references.md`](.claude/context/references.md) | Steven Holl, Sommet, Lumarra, Dwellis — qué tomamos de cada uno |
| [`.claude/context/homepage-architecture.md`](.claude/context/homepage-architecture.md) | Arquitectura narrativa del homepage: lógica de recorrido, ritmo visual, 8 secciones detalladas |

## Decisiones Registradas

| Archivo | Decisión |
|---------|----------|
| [`.claude/decisions/typography.md`](.claude/decisions/typography.md) | Cormorant Garamond (display) + DM Sans (body) |
| [`.claude/decisions/color-palette.md`](.claude/decisions/color-palette.md) | 4 colores, distribución 70/15/12/3 |
| [`.claude/decisions/tech-decisions.md`](.claude/decisions/tech-decisions.md) | GSAP, Lenis, @fontsource, Tailwind v4 CSS-first, Reka UI |

## Estado del Proyecto

[`.claude/state/project-status.md`](.claude/state/project-status.md) — Fase actual, lo que existe, lo que falta, assets pendientes.

---

## Agentes

| Agente | Dominio |
|--------|---------|
| `project-orchestrator` | Coordinación y planificación — NUNCA implementa directamente |
| `nuxt-ui` | UI, componentes Vue, Tailwind, Reka UI — UNICA autoridad sobre tokens y estilos |
| `nuxt-logic` | Composables, stores, server routes, validación |
| `nuxt-seo` | Meta tags, structured data, sitemap |
| `context-keeper` | Documentación .claude/ y CLAUDE.md |
| `frontend-design` | Diseño creativo de alta calidad visual |

**Detalle completo**: [`.claude/context/agent-assignments.md`](.claude/context/agent-assignments.md)

**Regla**: Toda tarea debe ser ejecutada por el agente especializado correspondiente.

## Plugins

- **frontend-design** (skill): Invocar para crear UI de alta calidad visual. El agente `nuxt-ui` lo usa como herramienta principal.
- **context7** (MCP): Consultar documentación actualizada de librerías del stack ANTES de implementar.

---

## Reglas Criticas

1. **Paleta**: SOLO #1D1D1B, #B81716, #EBEBEB, #FFFFFF. Sin excepciones.
2. **Tailwind v4**: NO config file. Todo en `app/assets/css/main.css` con `@theme`. NO `@apply`.
3. **Tipografía**: Títulos en `font-display` peso light/regular. NUNCA bold. Max 2 pesos por sección.
4. **Rojo**: Uso quirúrgico (3%). Max 1-2 apariciones por viewport.
5. **Animaciones**: Imperceptibles. NO bounce, wobble, elastic. Cleanup obligatorio en `onUnmounted`.
6. **Regla de oro**: "¿Esto fue pensado o fue agregado?" — Si fue agregado, elimínalo.

## Workflow

```
1. Leer CLAUDE.md (este archivo)
2. Leer contexto relevante (.claude/context/)
3. Consultar Context7 para APIs actualizadas de librerías
4. Ejecutar tarea (estructura → estilo → animación)
5. Verificar con checklist (design-philosophy.md)
```
