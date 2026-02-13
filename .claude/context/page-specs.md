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

> Documento detallado: [`.claude/context/homepage-architecture.md`](homepage-architecture.md)

6 secciones en secuencia narrativa: Hero (video fullscreen) → Manifiesto (statement + métricas) → Proyectos Destacados (grid asimétrico 65/35, 50/50, 100) → Filosofía (sección oscura, "Human to Human" + marquee) → El Estudio (preview + CTA) → Contact CTA ("Conversemos").
Arco persuasivo: Emoción → Razón → Confianza → Acción. Componentes en `components/sections/home/`.

---

## NOSOTROS (`/nosotros`)

> Documento detallado: [`.claude/context/studio-architecture.md`](studio-architecture.md)

9 secciones: Hero Estudio → Origen → Visión + Premisas → Michael Palza → Equipo → El Galpón → Método → Trayectoria → CTA.
Arco emocional: Historia → Convicción → Respeto → Confianza → Deseo.
Componentes en `components/sections/about/`.

---

## PROYECTOS (`/proyectos`) y DETALLE (`/proyectos/[slug]`)

> Documento detallado: [`.claude/context/projects-architecture.md`](projects-architecture.md)

Sistema de dos páginas: índice (galería curada) + detalle (inmersión en la obra).

**Índice** — 3 secciones: Hero tipográfico (sin imagen, filtros simples) → Grid asimétrico fijo (patrón A-B-C cada 5 proyectos) → CTA.
**Detalle** — 5 secciones: Hero imagen (90vh) → Ficha técnica → Narrativa editorial (texto + imágenes intercaladas) → Galería expandida (grid variado) → Siguiente proyecto.

Modelo de datos TypeScript: `Project` + `Image`. Componentes en `components/sections/projects/` y `components/project/`.

---

## JOURNAL (`/journal`)

> Documento detallado: [`.claude/context/journal-architecture.md`](journal-architecture.md)

**Índice** — 4 secciones: Hero tipográfico (filtros por tipo) → Entrada destacada (2 cols 55/45) → Grid uniforme 3 cols → CTA + Footer.
**Detalle** — 5 secciones: Header centrado (tag + título + fecha) → Imagen principal → Contenido editorial (columna 680px + imágenes expandidas) → Entradas relacionadas (3) → Footer.

4 tipos de contenido: Ensayo, Proyecto, Proceso, Referencia. ~10-15 publicaciones/año.
Modelo de datos TypeScript: `JournalEntry`. Nuxt Content como CMS. Componentes en `components/sections/journal/` y `components/journal/`.

---

## CONTACTO (`/contacto`)

> Documento detallado: [`.claude/context/contact-architecture.md`](contact-architecture.md)

3 secciones: Hero + Formulario (2 columnas: invitación + form) → Ubicación + Mapa → Footer (sin CTA previo).
Formulario: 5 campos (inputs con solo línea inferior), validación en tiempo real, envío vía server route + Resend.
Canales alternativos: email, teléfono, WhatsApp. Componentes en `components/sections/contact/`.
