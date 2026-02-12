# Stack Técnico — Estudio 4A

## Core

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **Nuxt 4** | ^4.3 | Framework (app/ directory structure) |
| **Tailwind CSS v4** | ^4.1 | CSS-first, @theme configuration |
| **TypeScript** | strict | Tipado estático |
| **Pinia** | ^3.0 | State management |
| **VueUse** | ^14.2 | Composables utilitarios |

## UI y Componentes

| Tecnología | Paquete | Propósito |
|-----------|---------|-----------|
| **Reka UI** | `reka-ui` | Componentes headless accesibles (antes Radix Vue) |

### Reka UI — Detalles

- **Paquete**: `reka-ui`
- **Módulo Nuxt**: `reka-ui/nuxt` (auto-import de todos los componentes)
- **Qué es**: Librería headless de componentes accesibles para Vue. 50+ primitivos.
- **Uso**: Primitivos accesibles (Dialog, Navigation Menu, Tabs, Accordion, Scroll Area, etc.)
- **Estilos**: Se estilan con Tailwind — sin estilos propios, control total del diseño
- **Cuándo usar**: Cualquier componente interactivo que necesite accesibilidad (modales, menús, dropdowns, tabs)
- **Cuándo NO usar**: Componentes puramente visuales sin interacción compleja (UiDivider, UiMarquee)
- **Por qué sobre Headless UI**: Más primitivos (50+), auto-import via Nuxt module, mantenido activamente (v2)

## Animaciones

| Tecnología | Paquete | Propósito |
|-----------|---------|-----------|
| **GSAP 3** | `gsap` | Animaciones de scroll, reveals, timelines |
| **ScrollTrigger** | `gsap/ScrollTrigger` | Trigger de animaciones por scroll |
| **Lenis** | `lenis` | Smooth scroll cinematográfico |

**NO usar**: AOS, Animate.css, ni ninguna librería genérica de animación.

## Imágenes y Media

| Tecnología | Paquete | Propósito |
|-----------|---------|-----------|
| **@nuxt/image** | `@nuxt/image` | Optimización de imágenes |

- Formatos: AVIF > WebP > JPG
- Lazy loading nativo con placeholder blur
- Videos: WebM + fallback MP4, poster obligatorio, preload metadata

## Fuentes

| Tecnología | Paquetes | Propósito |
|-----------|----------|-----------|
| **@fontsource** | `@fontsource/cormorant-garamond`, `@fontsource/dm-sans` | Fuentes self-hosted |

- Preload
- `font-display: swap`
- NUNCA Google Fonts (privacy + performance)

---

## Reglas Tailwind v4 (CRITICO)

```
- NO existe tailwind.config.js ni tailwind.config.ts
- Toda la configuración en CSS con @theme en app/assets/css/main.css
- NO usar @apply salvo casos extremadamente justificados
- Usar las variables CSS del @theme como clases utilitarias
- Si no estás seguro de que una clase exista en v4, usa CSS puro
- Las variables @theme se convierten automáticamente en clases:
    --color-carbon → bg-carbon, text-carbon, border-carbon
    --spacing-section → p-section, m-section, gap-section
- Integración: @tailwindcss/vite (NO @nuxtjs/tailwindcss)
```

---

## Estructura de Directorios

```
4a-web/
├── app/
│   ├── assets/
│   │   ├── css/main.css          ← Design tokens (@theme)
│   │   ├── fonts/                ← Fuentes self-hosted
│   │   └── images/logo/          ← SVGs del logo
│   ├── components/
│   │   ├── ui/                   ← Componentes base reutilizables
│   │   ├── layout/               ← Navbar, Footer, Preloader
│   │   ├── sections/             ← Secciones por página
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   └── project/              ← Componentes de detalle de proyecto
│   ├── composables/              ← useScrollReveal, useParallax, etc.
│   ├── layouts/default.vue
│   ├── pages/                    ← Rutas del sitio
│   ├── plugins/                  ← gsap.client.ts, lenis.client.ts
│   └── stores/                   ← Pinia stores
├── public/
│   ├── videos/                   ← Videos hero
│   └── images/projects/          ← Fotos de proyectos
├── server/                       ← API routes (contact form)
├── types/                        ← TypeScript interfaces
└── nuxt.config.ts
```

---

## GSAP

- Solo client-side (`*.client.ts`)
- Tree-shaking: importar solo lo necesario
- `build.transpile: ['gsap']` en nuxt.config.ts

## Performance

- Lighthouse targets: 90+ en todas las categorías
- CLS: aspect-ratio en imágenes, poster en videos
- Video poster obligatorio
- Fuentes preloaded con font-display swap

## SEO

- `useHead()` + `useSeoMeta()` dinámicos por página
- Schema.org: Organization + ArchitecturalProject
- Open Graph images por proyecto
- Sitemap automático

## Responsive

- **Mobile first** siempre
- Breakpoints: sm (640), md (768), lg (1024), xl (1280), 2xl (1536)
- `clamp()` para scaling fluido entre breakpoints

## Workflow de Desarrollo

```
1. Estructura HTML semántica
2. Estilos con Tailwind (mobile first)
3. Animaciones GSAP (client-side)
4. Sección por sección, nunca páginas completas
5. Checklist de filosofía antes de terminar
```
