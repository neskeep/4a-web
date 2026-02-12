# Estado del Proyecto — Estudio 4A

**Última actualización**: Febrero 2026

## Estado Actual

**Fase**: Hero + Header completado. Próxima: secciones del homepage una por una.

## Lo que Existe

- Estructura Nuxt 4 (app/ directory)
- Pinia + VueUse configurados
- Tailwind CSS v4 con @tailwindcss/vite
- Zod para validación
- Stores básicos: navigation, ui
- Layout default con Header funcional
- Design tokens en main.css (@theme)
- Plugins GSAP y Lenis configurados
- Fuentes: Cormorant Garamond + DM Sans
- nuxt.config actualizado
- **Hero Section** con 3 variantes (A, B, C) + video de fondo
- **Header/Navbar** funcional con transparencia sobre hero

## Estado de Variantes del Hero

| Variante | Estado | Rol |
|----------|--------|-----|
| A | COMPLETADA | Referencia principal para el homepage completo |
| B | COMPLETADA | Se creará versión alternativa del homepage completo |
| C | PAUSADA | Código conservado, oculta del switcher UI. Accesible vía `?variant=c` |

## Lo que Falta (próximas fases)

### Fase 2: Componentes Base
- [ ] UiButton, UiLink, UiSectionLabel, UiDivider
- [ ] UiImage (parallax + reveal)
- [ ] UiVideo (autoplay + lazy)
- [ ] UiMarquee, UiCounter

### Fase 3: Layout
- [x] TheNavbar (desktop + mobile)
- [ ] TheFooter
- [ ] ThePreloader

### Fase 4: Home — Sección por sección (Variante A primero)
- [x] HeroSection (3 variantes)
- [ ] ManifestoSection
- [ ] ProjectsShowcase
- [ ] EditorialTransition
- [ ] PhilosophySection
- [ ] StudioPreview
- [ ] ContactCta

### Fase 4B: Home — Variante B completa
- [ ] Adaptar cada sección al estilo de Variante B

### Fase 5: Páginas Internas
- [ ] Nosotros
- [ ] Proyectos (grid + detalle)
- [ ] Journal
- [ ] Contacto

### Fase 6: Polish
- [ ] Page transitions
- [ ] SEO completo
- [ ] Performance optimization
- [ ] Responsive testing

## Assets Pendientes

- **Logos SVG**: el usuario los tiene (4a-dark.svg, 4a-light.svg, 4a-accent.svg, estudio-4a.svg)
- **Video hero**: necesita placeholder o video real
- **Fotos proyectos**: necesita contenido real o placeholders de calidad
- **Fotos equipo**: para sección El Estudio (natural, en el Galpón)
- **Imagen editorial**: para sección Transición Editorial
