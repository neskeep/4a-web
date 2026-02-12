# Decisiones Técnicas

**Estado**: Aprobadas
**Fecha**: Febrero 2026

## GSAP sobre AOS/Animate.css

- **Elegido**: GSAP 3 + ScrollTrigger
- **Razón**: Control preciso, timelines, ScrollTrigger profesional para scroll-driven animations
- **Descartado**: AOS (genérico, sin timelines), Animate.css (presets fijos, sin scroll trigger)

## Lenis sobre scroll nativo

- **Elegido**: Lenis
- **Razón**: Suavidad cinematográfica, integración con GSAP, touch multiplier configurable
- **Descartado**: Scroll nativo (no tiene la fluidez requerida para el tono del sitio)

## @fontsource sobre Google Fonts

- **Elegido**: @fontsource (self-hosted)
- **Razón**: Privacy (sin requests a Google), performance (preload local), control total
- **Descartado**: Google Fonts CDN (tracking, CORS, dependencia externa)

## Tailwind v4 CSS-first sobre config file

- **Elegido**: @theme en main.css + @tailwindcss/vite
- **Razón**: Moderno, tokens directos en CSS, sin archivo de config JavaScript
- **Descartado**: tailwind.config.ts (patrón v3, innecesario en v4)

## @tailwindcss/vite sobre @nuxtjs/tailwindcss

- **Elegido**: @tailwindcss/vite
- **Razón**: Compatibilidad nativa con Tailwind 4, integración directa con Vite
- **Descartado**: @nuxtjs/tailwindcss (no soporta Tailwind v4 CSS-first completamente)

## Reka UI sobre Headless UI / construir desde cero

- **Elegido**: Reka UI (reka-ui + reka-ui/nuxt)
- **Razón**:
  - Accesibilidad ARIA nativa en 50+ primitivos
  - Auto-import via módulo Nuxt (reka-ui/nuxt)
  - Sin estilos impuestos → control total con Tailwind
  - Mantenido activamente (v2, evolución de Radix Vue)
- **Descartado**:
  - Headless UI (menos primitivos, orientado a React/Tailwind Labs)
  - Construir desde cero (reinventar accesibilidad ARIA es propenso a errores)
