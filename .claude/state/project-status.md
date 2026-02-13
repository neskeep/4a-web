# Estado del Proyecto — Estudio 4A

**Ultima actualizacion**: 12 Febrero 2026

## Estado Actual

**Fase**: Homepage completo (4 variantes). Proxima: paginas internas.

---

## Lo que Existe

### Infraestructura
- Estructura Nuxt 4 (app/ directory)
- Tailwind CSS v4 con @tailwindcss/vite
- Pinia + VueUse configurados
- Zod para validacion
- Design tokens en `app/assets/css/main.css` (@theme)
- Fuentes: Cormorant Garamond (display) + DM Sans (body)
- `nuxt.config` actualizado

### Plugins y Composables
- `gsap.client.ts` — Plugin GSAP
- `lenis.client.ts` — Plugin Lenis (smooth scroll)
- `useNavbarScroll.ts` — Composable para comportamiento del navbar

### Stores
- `navigation.ts`
- `ui.ts`

### Layout
- [x] `layouts/default.vue`
- [x] `components/layout/Header.vue` — Navbar con transparencia sobre hero
- [x] `components/layout/Footer.vue`

### Componentes UI
- [x] `UiButton.vue`
- [x] `UiSectionLabel.vue` — Linea roja + label
- [x] `UiCounter.vue` — Contador animado
- [x] `UiMarquee.vue` — Texto en scroll continuo
- [x] `Logo4a.vue`
- [x] `UiLogo4aStudio.vue`

### Homepage — 4 Variantes Completas (A, B, C, D)

Cada variante tiene las 7 secciones:

| Seccion | A | B | C | D |
|---------|---|---|---|---|
| Hero | HeroVariantA | HeroVariantB | HeroVariantC | HeroVariantD |
| Manifiesto | ManifestoVariantA | ManifestoVariantB | ManifestoVariantC | ManifestoVariantD |
| Proyectos | ProjectsVariantA | ProjectsVariantB | ProjectsVariantC | ProjectsVariantD |
| Editorial | EditorialVariantA | EditorialVariantB | EditorialVariantC | EditorialVariantD |
| Filosofia | PhilosophyVariantA | PhilosophyVariantB | PhilosophyVariantC | PhilosophyVariantD |
| Studio | StudioVariantA | StudioVariantB | StudioVariantC | StudioVariantD |
| CTA | CtaVariantA | CtaVariantB | CtaVariantC | CtaVariantD |

Pagina: `pages/index.vue`

### Assets (public/)
- `logos/logo.svg`, `logos/logo-v2.svg`
- `videos/hero-reel.mp4`
- `images/editorial/`, `images/philosophy/`, `images/projects/`, `images/studio/`
- `favicon.ico`, `robots.txt`

### Documentacion (5/5 paginas documentadas)
- `homepage-architecture.md`
- `studio-architecture.md`
- `projects-architecture.md`
- `journal-architecture.md`
- `contact-architecture.md`

---

## Lo que Falta

### Componentes UI pendientes
- [ ] UiLink
- [ ] UiDivider
- [ ] UiImage (parallax + reveal)
- [ ] UiVideo (autoplay + lazy)

### Layout pendiente
- [ ] ThePreloader

### Paginas Internas
- [ ] Nosotros (`/nosotros`) — 9 secciones, ver `studio-architecture.md`
- [ ] Proyectos indice (`/proyectos`) — Hero + grid asimetrico + CTA, ver `projects-architecture.md`
- [ ] Proyectos detalle (`/proyectos/[slug]`) — Hero imagen + ficha + narrativa + galeria + siguiente
- [ ] Journal indice (`/journal`) — Hero + destacada + grid 3 cols + CTA, ver `journal-architecture.md`
- [ ] Journal detalle (`/journal/[slug]`) — Header + imagen + contenido editorial + relacionadas
- [ ] Contacto (`/contacto`) — Hero + formulario + ubicacion/mapa, ver `contact-architecture.md`

### Polish
- [ ] Page transitions
- [ ] SEO completo (meta tags, structured data, sitemap)
- [ ] Performance optimization
- [ ] Responsive testing

---

## Assets Pendientes

- **Video hero**: placeholder actual funcional, necesita video definitivo del cliente
- **Fotos proyectos**: necesita contenido real para paginas de detalle
- **Fotos equipo**: para pagina Nosotros (natural, en el Galpon)
- **Contenido Journal**: entradas .md para Nuxt Content
- **Datos de contacto**: email, telefono, direccion reales del estudio
