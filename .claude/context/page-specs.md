# Especificaciones de Páginas — Estudio 4A

## Mapa de Páginas

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `pages/index.vue` | Home — Hero, Manifiesto, Proyectos, Filosofía, Estudio, CTA |
| `/nosotros` | `pages/nosotros.vue` | About — Historia, equipo, valores |
| `/proyectos` | `pages/proyectos/index.vue` | Grid de proyectos + filtros |
| `/proyectos/:slug` | `pages/proyectos/[slug].vue` | Detalle de proyecto con galería |
| `/journal` | `pages/journal.vue` | Lista de artículos/novedades |
| `/contacto` | `pages/contacto.vue` | Formulario + datos de contacto |

---

## HOME (`/`)

### Hero Section
- Video fullscreen (muted, autoplay, loop) como fondo
- Overlay gradiente: `linear-gradient(to top, rgba(29,29,27,0.5) 0%, transparent 50%)`
- Headline en `text-hero`, `font-display`, peso regular, color white
  - "Experiencia y rebeldía."
  - Subline (`text-xl`, `font-body`, light): "Pensar sin pausa, crear sin miedo."
- Posición texto: tercio inferior izquierdo del viewport
- Entrada: fade + translateY, línea por línea, delay 0.2s
- Scroll indicator: línea vertical 1px, 40px alto, pulsa opacity (loop sutil). "Scroll" debajo.
- **NO slider/carousel. Un solo video continuo.**

### Manifiesto Section
- Fondo: `bg` (#FFF)
- `UiSectionLabel`: línea roja + "ESTUDIO 4A"
- Statement en `text-statement`, `font-display`, light, centrado:
  > "Somos la evolución de 40 años de oficio global, fusionada con la energía de una generación que se niega a repetir fórmulas."
- Max-width: 540px, centrado
- Tres métricas horizontal (`UiCounter`): "40+ Años" · "X Proyectos" · "X Países"
- Animación: texto reveal al scroll, counters al entrar viewport

### Proyectos Destacados
- Fondo: `bg` (#FFF)
- `UiSectionLabel`: línea roja + "PROYECTOS"
- Heading: "Obras seleccionadas" `text-3xl`, `font-display`
- **Grid asimétrico:**
  ```
  Fila 1: [──── 65% ────] [── 35% ──]
  Fila 2: [── 50% ──] [── 50% ──]
  Fila 3: [────────── 100% ──────────]
  ```
- Cada proyecto: imagen parallax, nombre (`font-display`, `text-2xl`, white, text-shadow), categoría (`text-xs`, UPPERCASE, tertiary)
- Hover: scale 1.02, overlay sutil
- Stagger reveal
- CTA: "Ver todos los proyectos →"

### Filosofía Section
- **Sección oscura**: `bg-dark` (#1D1D1B)
- `UiSectionLabel`: línea roja + "FILOSOFÍA" (color `inverse-muted`)
- Dos columnas:
  - **Izquierda (55%)**: "Human to Human" `text-5xl`, `font-display`, inverse + párrafo
  - **Derecha (45%)**: Imagen con parallax
- Debajo: `UiMarquee` "ESPACIO · LUGAR · SENSORIAL · COLOR · FRICCIÓN · MATIZ"
  - `font-display`, `text-3xl`, `inverse-muted` (opacity 0.3), scroll lento

### El Estudio (Studio Preview)
- Fondo: `bg-alt` (#EBEBEB) — diferenciación sutil
- `UiSectionLabel`: línea roja + "EL ESTUDIO"
- Layout editorial: foto grande del equipo + texto "Más que una oficina, un manifiesto vivo."
- CTA: "Conocer al equipo →"

### Contact CTA
- Fondo: `bg-dark` (#1D1D1B)
- Centrado: "Conversemos" `text-5xl`, `font-display`, inverse
- Subtexto + `UiButton` inverse + link WhatsApp discreto

---

## NOSOTROS (`/nosotros`)

- Historia del estudio (Palza Asociados → Estudio 4A)
- Equipo: grid de miembros con fotos + roles
- Valores y filosofía "Human to Human" expandida
- Timeline visual (40+ años de trayectoria)

---

## PROYECTOS (`/proyectos`)

### Grid de Proyectos
- Filtros por categoría usando tabs (Reka UI `TabsRoot`)
- Grid asimétrico (no uniforme)
- Cada card: imagen, nombre proyecto, categoría, ubicación
- Hover: scale 1.02 + datos overlay

### Detalle (`/proyectos/[slug]`)
- `ProjectHero`: imagen principal fullwidth
- `ProjectNarrative`: texto del proyecto, 2 columnas
- `ProjectGallery`: galería de imágenes (lightbox con Reka UI `DialogRoot`)
- `ProjectMeta`: ficha técnica (ubicación, área, año, categoría)

---

## JOURNAL (`/journal`)

- Lista de artículos / novedades del estudio
- Card editorial: imagen + título + extracto + fecha
- Layout 2 columnas desktop, 1 columna mobile

---

## CONTACTO (`/contacto`)

- Formulario: nombre, email, teléfono, mensaje
- Validación con Zod
- Labels accesibles (Reka UI `Label`)
- Datos del estudio: dirección, teléfono, email
- Mapa (opcional)
- Horarios de atención
