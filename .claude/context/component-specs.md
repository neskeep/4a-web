# Especificaciones de Componentes — Estudio 4A

## Estructura de Directorios

```
app/components/
├── ui/
│   ├── UiButton.vue
│   ├── UiLink.vue
│   ├── UiImage.vue            ← Parallax + reveal
│   ├── UiVideo.vue            ← Autoplay + lazy + poster
│   ├── UiSectionLabel.vue     ← Línea roja + UPPERCASE
│   ├── UiMarquee.vue          ← Ticker horizontal
│   ├── UiCounter.vue          ← Número animado
│   └── UiDivider.vue          ← Línea separadora
├── layout/
│   ├── TheNavbar.vue
│   ├── TheFooter.vue
│   └── ThePreloader.vue
├── sections/
│   ├── home/
│   │   ├── HeroSection.vue
│   │   ├── ManifestoSection.vue
│   │   ├── ProjectsShowcase.vue
│   │   ├── PhilosophySection.vue
│   │   ├── StudioPreview.vue
│   │   └── ContactCta.vue
│   ├── about/
│   ├── projects/
│   └── contact/
└── project/
    ├── ProjectHero.vue
    ├── ProjectGallery.vue
    ├── ProjectNarrative.vue
    └── ProjectMeta.vue
```

---

## Regla Reka UI

Para componentes interactivos con necesidad de accesibilidad, usar primitivos de Reka UI como base y estilizar con Tailwind.

### Mapeo de Primitivos

| Componente | Primitivo Reka UI | Motivo |
|------------|------------------|--------|
| TheNavbar (mobile menu) | `NavigationMenuRoot` / `DialogRoot` para overlay | Accesibilidad de navegación + diálogo modal |
| Formulario contacto | `Label`, `Separator` | Labels accesibles |
| Filtros proyectos | `TabsRoot`, `TabsList`, `TabsTrigger`, `TabsContent` | Teclado + ARIA para filtros |
| Lightbox/galería | `DialogRoot`, `DialogOverlay`, `DialogContent` | Modal accesible |
| Accordion (FAQ/detalles) | `AccordionRoot`, `AccordionItem` | Expand/collapse accesible |

### Cuándo NO usar Reka UI

Componentes puramente visuales sin interacción compleja: UiDivider, UiMarquee, UiSectionLabel, UiCounter.

---

## UiButton

### Variantes
| Variante | Estilos |
|----------|---------|
| `primary` | `bg-accent` → hover `bg-accent-hover`. Texto `text-inverse`. |
| `secondary` | `border border-border`, bg transparent → hover `bg-accent-subtle`. |
| `ghost` | Transparent → hover `text-accent`. |
| `inverse` | `bg-white text-carbon` → hover `bg-stone`. |

### Estilos Comunes
- `font-body`, `text-sm`, UPPERCASE, `tracking-wide`, peso medium
- Padding: `14px 28px`
- Border-radius: `radius-sm` (2px)
- Transición: `duration-normal`

---

## UiLink

### Comportamiento
- Underline animado con `scaleX(0)` → `scaleX(1)` en hover
- Línea inferior de 1px, `transform-origin: left`

### Variantes
| Variante | Color Base | Color Hover | Línea |
|----------|-----------|-------------|-------|
| `default` | `text` | `accent` | `accent` |
| `inverse` | `text-inverse` | `text-inverse` | `text-inverse` |
| `accent` | `accent` | `accent-hover` | `accent` |

---

## UiSectionLabel

```
[línea roja 48px, 1px alto] — [gap 16px] — [TEXTO UPPERCASE]
```

- Fuente: `font-body`, `text-xs`, `tracking-wider`, color `text-tertiary`
- Animación: línea width 0→48px, luego fade texto (delay 0.2s)
- Implementación: flex row, items-center

---

## UiDivider

- Línea de 1px
- Variantes: `light` (`border-subtle`) / `dark` (`border-dark`)

---

## UiImage

- Wrapper `.parallax-wrap`
- Usa `NuxtImg` con lazy + blur placeholder
- Enter viewport: opacity 0→1 + scale 1.05→1.0 (`ease-out-expo`, 1s)
- Hover: scale 1.02 (0.6s)
- Aspect ratios soportados: 16:9, 3:4, 1:1

---

## UiVideo

- Autoplay, muted, loop, playsinline
- Pausa automática fuera del viewport (IntersectionObserver)
- Poster obligatorio
- Formatos: WebM + fallback MP4
- Preload: `metadata`

---

## UiCounter

- Número animado 0→valor final
- `font-display`, peso light (300)
- Se activa al entrar en viewport
- Duración: ~2s con easing out

---

## UiMarquee

- Ticker horizontal infinito, ~40px/s
- Contenido duplicado para loop continuo
- Separador: " · "
- `font-display`, `text-3xl`
- Fade en bordes con `.marquee-mask`

---

## TheNavbar

### Desktop
- Posición fija, transparente al inicio
- Scroll → fondo `bg` (#FFF) + `border-bottom` sutil, transición 400ms
- Logo "4a" izquierda (dark default, light en secciones oscuras)
- Links derecha: `font-body`, `text-sm`, UPPERCASE, `tracking-wide`, peso medium
- Hover links: color → `accent`. Transición 350ms. Sin underline genérico.
- Espaciado entre links: 32px. Padding: `grid-gutter` horizontal, 20px vertical.
- **Usar Reka UI `NavigationMenuRoot`** para accesibilidad

### Mobile (< lg)
- Hamburger: dos líneas finas (no tres), 24px ancho, color `text`
- Overlay fullscreen en `bg-dark`, links centrados, `font-display`, `text-4xl`, peso light
- Links con stagger (delay 0.08s). Cierre: líneas rotan a X.
- **Usar Reka UI `DialogRoot`** para overlay accesible

---

## TheFooter

- Fondo: `bg-dark` (continuación visual del CTA)
- Grid 4 columnas: Logo "Estudio 4a" completo | Nav links | Dirección + contacto | Redes
- Línea 1px (`border-dark`) + copyright `text-xs`

---

## ThePreloader

- Fondo: `bg-dark` (#1D1D1B)
- Logo "4a" centrado (versión blanca), aparece con fade (opacity 0→1, 0.5s)
- Sin barra de progreso. Sin porcentaje. Solo el logo que respira.
- Duración: 1.5-2s, luego contenido se revela con clip-path o fade
- **Principio**: lo mínimo necesario, sin espectáculo
