# Asignación de Agentes — Estudio 4A

## Agentes Disponibles

| Agente | Dominio | Responsabilidades |
|--------|---------|-------------------|
| `project-orchestrator` | Coordinación | Planifica fases, descompone tareas, asigna a agentes, valida resultados. NUNCA implementa directamente. |
| `nuxt-ui` | UI + Diseño | Componentes Vue, Tailwind, Reka UI, maquetación, layouts, design system. UNICA autoridad sobre tokens visuales, colores, tipografía. |
| `nuxt-logic` | Lógica de negocio | Composables, stores Pinia, server routes, validación Zod, manejo de datos. Enforces NO hardcoding. |
| `nuxt-seo` | SEO técnico | Meta tags (useSeoMeta/useHead), structured data JSON-LD, sitemap, robots.txt, canonical URLs. |
| `context-keeper` | Documentación | Mantiene CLAUDE.md, gestiona archivos .claude/, preserva estado entre sesiones. |
| `directus-specialist` | CMS (futuro) | Si se integra Directus: schemas, colecciones, queries, permisos. |
| `frontend-design` | Diseño creativo | Interfaces de alta calidad visual. Consultar para decisiones de diseño no cubiertas por el spec. |

---

## Plugins Disponibles

| Plugin | Función | Cuándo Usar |
|--------|---------|-------------|
| `frontend-design` (skill) | Genera interfaces frontend de alta calidad visual, evitando estética genérica de AI | Invocar al crear componentes UI, páginas, o secciones que requieren calidad de diseño. Especialmente útil para layouts complejos (grids asimétricos, hero sections, composiciones editoriales). El agente `nuxt-ui` debe usarlo como herramienta principal de ejecución visual. |
| `context7` (MCP) | Trae documentación actualizada de librerías al contexto | Invocar cuando se trabaje con APIs de Nuxt 4, Tailwind v4, GSAP, Lenis, Reka UI, o cualquier librería del stack. Previene usar APIs deprecadas o inventar métodos que no existen. Todos los agentes técnicos deben usarlo antes de implementar. |

**Regla de plugins**: Antes de implementar cualquier componente o funcionalidad que use una librería del stack, el agente DEBE consultar Context7 para verificar la API actual. Para toda tarea visual, considerar invocar frontend-design para calidad de diseño superior.

---

## Reglas de Asignación

1. **Toda tarea va a un agente especializado** — nunca al general-purpose si hay especialista
2. **Un componente = un agente principal + consultores**:
   - Ejemplo: TheNavbar → `nuxt-ui` implementa, consulta a `nuxt-logic` para store/composables, `nuxt-seo` revisa meta
3. **Tokens y estilos**: solo `nuxt-ui` puede definir o modificar valores en design-system.md y main.css
4. **Datos y lógica**: solo `nuxt-logic` puede crear/modificar stores, composables, server routes
5. **SEO**: solo `nuxt-seo` toca meta tags, structured data, sitemap
6. **Documentación**: solo `context-keeper` actualiza CLAUDE.md y archivos .claude/
7. **Conflictos**: el `project-orchestrator` resuelve cualquier conflicto entre agentes

---

## Flujo de Trabajo

```
1. project-orchestrator recibe la tarea
2. Descompone en sub-tareas y asigna a agentes
3. Agentes ejecutan en paralelo donde sea posible
4. Cada agente verifica con checklist (design-philosophy.md)
5. project-orchestrator valida el resultado integrado
6. context-keeper actualiza estado del proyecto
```

---

## Mapeo Tarea → Agente

| Tarea | Agente Principal | Consultores |
|-------|-----------------|-------------|
| main.css (tokens @theme) | `nuxt-ui` | — |
| Plugins GSAP/Lenis | `nuxt-logic` | — |
| Composables (useScrollReveal, etc.) | `nuxt-logic` | `nuxt-ui` (parámetros visuales) |
| Componentes UI (UiButton, UiImage, etc.) | `nuxt-ui` | `nuxt-logic` (si necesita composable) |
| TheNavbar / TheFooter | `nuxt-ui` | `nuxt-logic` (stores), `nuxt-seo` (nav accesible) |
| Secciones Home (Hero, Manifesto, etc.) | `nuxt-ui` | `nuxt-logic` (datos), `nuxt-seo` (meta) |
| Páginas internas | `nuxt-ui` | `nuxt-logic` (data fetching), `nuxt-seo` (per-page SEO) |
| Formulario contacto | `nuxt-ui` (form UI) + `nuxt-logic` (validación + API) | `nuxt-seo` (structured data) |
| Server API (contact.post.ts) | `nuxt-logic` | — |
| SEO global + sitemap | `nuxt-seo` | — |
| Actualizar docs después de cada fase | `context-keeper` | — |
