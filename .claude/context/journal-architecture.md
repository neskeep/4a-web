# Estudio 4A — Arquitectura de la Página "Journal"

> El Journal no es un blog.
> Es un **cuaderno de bitácora** — registros breves de lo que
> el estudio piensa, construye y descubre. No busca posicionar
> en Google ni generar tráfico. Busca mostrar que 4A es un
> estudio vivo, que piensa en voz alta.

---

## ¿Por qué "Journal" y no "Blog" o "Noticias"?

La palabra importa. Define el tono de todo lo que se publica ahí.

```
"Blog"       → casual, frecuente, SEO-driven, tips & tricks
               Asociación: startups, marketing digital, contenido genérico

"Noticias"   → institucional, comunicados, logros corporativos
               Asociación: grandes empresas, gobierno, notas de prensa

"Journal"    → reflexivo, selectivo, autoral, editorial
               Asociación: revistas de arquitectura, cuadernos de viaje,
               diarios de proceso creativo
```

"Journal" dice: **publicamos cuando tenemos algo que decir, no porque toca**. Es coherente con un estudio boutique que no produce contenido por obligación sino por convicción.

---

## Qué se publica en el Journal

El Journal tiene **4 tipos de contenido**, cada uno con su propio peso visual y editorial:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  TIPO 1: ENSAYO                                         │
│  ─────────────────                                      │
│  Reflexión conceptual sobre arquitectura, ciudad,       │
│  materialidad, proceso. Texto largo (800-1500 palabras) │
│  con imágenes intercaladas. Lo más sustantivo.          │
│                                                         │
│  Frecuencia: 1-2 al año                                 │
│  Ejemplo: "Sobre el color como experiencia espacial"    │
│  Ejemplo: "La fricción como principio de diseño"        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TIPO 2: PROYECTO                                       │
│  ─────────────────                                      │
│  Anuncio o nota sobre un proyecto: inicio de obra,      │
│  entrega, reconocimiento, publicación en medio externo. │
│  Texto breve (200-400 palabras) + imágenes.             │
│                                                         │
│  Frecuencia: 4-6 al año                                 │
│  Ejemplo: "El Bosque Boulevard: entrega final"          │
│  Ejemplo: "Publicados en ArchDaily"                     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TIPO 3: PROCESO                                        │
│  ─────────────────                                      │
│  Vistazo al interior del estudio: bocetos, maquetas,    │
│  visitas de obra, materialidad. Predominan las imágenes │
│  con texto mínimo. Muestra el "detrás de escena".       │
│                                                         │
│  Frecuencia: 3-4 al año                                 │
│  Ejemplo: "Maquetas de estudio: Edificio MSC"           │
│  Ejemplo: "Visita de obra: Costanera 1000"              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TIPO 4: REFERENCIA                                     │
│  ─────────────────                                      │
│  Algo que inspira al estudio: un viaje, un libro, una   │
│  exposición, un edificio visitado. Breve y personal.    │
│  Muestra la cultura y las influencias del equipo.       │
│                                                         │
│  Frecuencia: 2-3 al año                                 │
│  Ejemplo: "Peter Zumthor: Therme Vals, revisitado"      │
│  Ejemplo: "Notas desde la Bienal de Venecia"            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Frecuencia total estimada: 10-15 publicaciones al año.** Eso es una publicación cada 3-4 semanas. Manejable para un estudio pequeño y suficiente para que el Journal se sienta vivo sin convertirse en una carga.

---

## Estructura: dos páginas

```
/journal              → ÍNDICE (el cuaderno)
/journal/[slug]       → ENTRADA (la página completa)
```

Misma lógica que Proyectos: índice para descubrir, detalle para profundizar.

---

# PARTE 1: ÍNDICE DEL JOURNAL

## Lógica narrativa

El visitante llega preguntándose: **"¿Qué piensa este estudio? ¿Están activos? ¿Son interesantes?"**

El Journal debe demostrar tres cosas en un vistazo:
1. **Actividad** — publican con regularidad (no es un blog abandonado)
2. **Criterio** — el contenido es selecto y relevante
3. **Voz propia** — tienen algo que decir, no solo muestran lo que hacen

```
1. ¿Qué es esto?         → HERO (título + contexto mínimo)
2. ¿Qué han publicado?   → GRID (las entradas)
3. ¿Puedo contactarlos?  → CTA + FOOTER
```

---

## Mapa de ritmo visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   1. HERO JOURNAL                                     ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: TIPOGRÁFICO, sin imagen                       ░  │
│  ░   Altura: ~35vh                                       ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   2. ENTRADA DESTACADA                                ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: EDITORIAL, grande                             ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   3. GRID DE ENTRADAS                                 ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒   Tipo: LISTADO, exploración                          ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   4. CTA + FOOTER                                     █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Secuencia cromática:**
```
BLANCO → BLANCO → GRIS PIEDRA → NEGRO
Hero     Destac.   Grid          CTA+Footer
```

El blanco domina las primeras dos secciones porque el Journal es lectura — necesita limpieza máxima. El gris piedra aparece en el grid para dar "pared de galería" a las entradas.

---

## Sección por sección

### ① HERO JOURNAL — "Abrir el cuaderno"
**Función narrativa**: Contexto mínimo. El visitante entiende qué es esta página en dos segundos.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a]                     [Nav links]  │  ← Navbar sólido
│                                             │
│                                             │
│                                             │
│  ── JOURNAL                                 │  ← UiSectionLabel
│                                             │
│  Notas sobre                                │  ← font-display, text-hero
│  arquitectura,                              │     peso light
│  proceso y lugar.                           │
│                                             │
│                                             │
│  Todo  Ensayo  Proyecto  Proceso  Referencia│  ← Filtros por tipo
│   ·                                         │
│                                             │
└─────────────────────────────────────────────┘

Altura: ~35vh (más compacto que el hero de Proyectos)
Fondo: bg (#FFFFFF)
Padding-top: 140px (navbar + respiro)
```

**¿Por qué el subtítulo "Notas sobre arquitectura, proceso y lugar"?**
- A diferencia de Proyectos (donde "Obras seleccionadas" era autoexplicativo), "Journal" necesita una línea que aclare qué tipo de contenido encontrará el visitante.
- "Notas sobre..." establece el tono: esto no son noticias corporativas, son *notas* — reflexiones, observaciones, registros.
- Las tres palabras (arquitectura, proceso, lugar) enmarcan el territorio conceptual sin limitarlo.

**Los filtros:**
```
Diseño: idéntico a los filtros de Proyectos
  Layout: horizontal
  Font: font-body, text-sm, UPPERCASE, tracking-wide
  Activo: color text + underline accent
  Inactivo: color text-tertiary
  Hover: color text-secondary

Categorías:
  "Todo" (default)
  "Ensayo"
  "Proyecto"
  "Proceso"
  "Referencia"

Mobile: scroll horizontal si no caben.
```

---

### ② ENTRADA DESTACADA — "Lo más reciente, con presencia"
**Función narrativa**: Destacar la publicación más reciente o la más relevante. Demuestra actividad y da una primera pieza de contenido con presencia editorial.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  ┌──────────────────────┐ ┌─────────────┐  │
│  │                      │ │             │  │
│  │                      │ │  ENSAYO     │  │  ← Tag: tipo de entrada
│  │                      │ │             │  │     text-xs, UPPERCASE
│  │                      │ │  Sobre el   │  │     tracking-wider
│  │    IMAGEN PRINCIPAL   │ │  color como │  │     color accent
│  │    de la entrada      │ │  experiencia│  │
│  │    destacada          │ │  espacial   │  │  ← font-display, text-3xl
│  │                      │ │             │  │     peso regular
│  │    aspect-ratio      │ │             │  │
│  │    16:10             │ │  El color no│  │
│  │                      │ │  decora: el │  │  ← font-body, text-base
│  │                      │ │  color      │  │     color text-secondary
│  │                      │ │  construye  │  │     2-3 líneas de preview
│  │                      │ │  atmósfera, │  │     max-width-text
│  │                      │ │  define...  │  │
│  │                      │ │             │  │
│  │                      │ │  Feb 2026   │  │  ← font-body, text-xs
│  │                      │ │             │  │     color text-tertiary
│  │                      │ │  Leer →     │  │  ← UiLink
│  │                      │ │             │  │
│  └──────────────────────┘ └─────────────┘  │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Layout: dos columnas 55% imagen / 45% texto
Separación con el hero: spacing-section-sm
Separación con el grid: spacing-section
```

**¿Por qué una entrada destacada separada del grid?**
- Le da *jerarquía temporal* al contenido más reciente. El visitante ve inmediatamente que el estudio está activo.
- El formato grande (dos columnas, imagen generosa) diferencia esta entrada del grid que sigue. Crea un **evento editorial** antes del listado.
- En revistas de arquitectura, la portada o apertura siempre destaca UN artículo con tratamiento visual especial antes de pasar al índice general. Mismo principio.

**Interacción:**
```
Hover:
  Imagen: scale 1.02 (0.6s ease-out-quart)
  Título: color carbon → accent (0.35s)
  Cursor: pointer

Toda la sección es un link clickeable (wrapper <NuxtLink>).
```

**¿Qué entrada se destaca?**
```
Lógica de selección (en el CMS/content):
  1. Si hay una entrada marcada como "destacada" → esa
  2. Si no → la más reciente

Solo una entrada destacada a la vez. Nunca dos.
Si se filtra por categoría y la destacada no coincide,
se oculta y el grid sube. Transición suave.
```

---

### ③ GRID DE ENTRADAS — "El índice del cuaderno"
**Función narrativa**: Exploración. El visitante escanea las entradas disponibles y elige según su interés.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  ┌────────────┐ ┌────────────┐ ┌────────┐  │
│  │            │ │            │ │        │  │
│  │            │ │            │ │        │  │
│  │  IMG       │ │  IMG       │ │  IMG   │  │  ← Fila 1
│  │            │ │            │ │        │  │     3 columnas
│  │  16:10     │ │  16:10     │ │  16:10 │  │
│  │            │ │            │ │        │  │
│  └────────────┘ └────────────┘ └────────┘  │
│  PROCESO        PROYECTO       REFERENCIA  │  ← Tags
│  Maquetas de    Publicados     Peter       │  ← Títulos
│  estudio:       en ArchDaily   Zumthor:    │
│  Edificio MSC                  Therme Vals │
│  Oct 2025       Sep 2025       Jul 2025    │  ← Fechas
│                                             │
│                                             │
│  ┌────────────┐ ┌────────────┐ ┌────────┐  │
│  │            │ │            │ │        │  │
│  │  IMG       │ │  IMG       │ │  IMG   │  │  ← Fila 2
│  │            │ │            │ │        │  │
│  │  16:10     │ │  16:10     │ │  16:10 │  │
│  │            │ │            │ │        │  │
│  └────────────┘ └────────────┘ └────────┘  │
│  ENSAYO         PROCESO        PROYECTO    │
│  La fricción    Visita de      El Bosque   │
│  como principio obra:          Boulevard:  │
│  de diseño      Costanera      entrega     │
│  Mar 2025       Ene 2025       Nov 2024    │
│                                             │
│                                             │
│  ┌────────────┐ ┌────────────┐ ┌────────┐  │
│  │            │ │            │ │        │  │
│  │  ...       │ │  ...       │ │  ...   │  │  ← Filas siguientes
│  │            │ │            │ │        │  │
│  └────────────┘ └────────────┘ └────────┘  │
│                                             │
│                                             │
│            [ Cargar más entradas ]           │  ← Botón si hay
│                                             │     más entradas
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-alt (#EBEBEB)
Grid: 3 columnas iguales (desktop)
```

**¿Por qué grid uniforme de 3 columnas y no asimétrico como Proyectos?**

Es una decisión deliberada, no una contradicción:

- **Proyectos** son *obra de autor* — cada uno merece un peso visual diferente. La asimetría comunica curaduría.
- Las **entradas del Journal** son *registros cronológicos* — tienen igual jerarquía entre sí (excepto la destacada, que ya se separó). Un grid uniforme comunica consistencia, ritmo regular, cuaderno bien organizado.
- Un grid uniforme de 3 columnas NO es genérico si cada tarjeta está bien diseñada. Lo que hace genérica a una tarjeta no es su grid, es su contenido y estética.
- Además, ya hay asimetría en la página: la entrada destacada (55/45) vs el grid (33/33/33). El contraste entre formatos crea suficiente variedad.

---

### Anatomía de cada entrada en el grid

```
┌──────────────────────────┐
│                          │
│                          │
│      IMAGEN              │  ← Imagen de la entrada
│      (aspect-ratio       │     .parallax-wrap (sutil)
│       16:10)             │     Lazy loading + blur placeholder
│                          │
│                          │
└──────────────────────────┘
  ENSAYO                     ← Tag: tipo de contenido
                               font-body, text-xs, UPPERCASE
                               tracking-wider, color accent

  Sobre el color como        ← Título
  experiencia espacial         font-display, text-xl, peso regular
                               color text
                               max 2 líneas (line-clamp: 2)

  Feb 2026                   ← Fecha
                               font-body, text-xs
                               color text-tertiary
```

**Diseño de cada tarjeta:**
```
Estructura vertical: imagen → tag → título → fecha
Padding interno: 0 (sin bordes, sin fondo propio, sin card)
Gap entre elementos textuales: spacing-micro (8px)
Gap entre imagen y tag: spacing-tight (16px)
Gap entre tarjetas (grid): grid-gutter column, spacing-block row

La tarjeta NO tiene:
  ❌ Fondo blanco ni de otro color
  ❌ Borde
  ❌ Sombra
  ❌ Border-radius
  ❌ Extracto de texto / descripción
  ❌ Botón "Leer más"
  ❌ Autor
  ❌ Tiempo de lectura

La imagen y el título son suficientes para decidir si
hacer click. Cada elemento extra es ruido. El extracto
se reserva para la entrada destacada — en el grid,
el título hace el trabajo.
```

**Estados de interacción:**
```
Hover:
  Imagen: scale 1.02 (0.6s ease-out-quart)
  Título: color carbon → accent (0.35s)
  Cursor: pointer

Toda la tarjeta es un link clickeable.
Area de click: toda la superficie, no solo el título.
```

**Paginación:**
```
NO: paginación numérica (1, 2, 3... →)
    Demasiado corporativo para 10-15 entradas al año.

NO: infinite scroll
    Agresivo, dificulta llegar al footer, malo para SEO.

SÍ: "Cargar más entradas" (botón)
    UiButton variante secondary
    font-body, text-sm, UPPERCASE, tracking-wide
    Centrado debajo del grid
    Solo visible si hay más entradas no cargadas.

    Al clickear: nuevas entradas aparecen con fade +
    stagger (delay 0.08s), sin recargar la página.

Para 10-15 entradas al año: mostrar las últimas 9 (3 filas)
y un botón "Cargar más" si hay más antiguas. En la práctica,
con tan poco contenido, el botón raramente será necesario.
```

**Mobile:**
```
Grid: 1 columna
Imagen: full-width, aspect-ratio 16:10
Spacing entre entradas: spacing-element (24px)
La entrada destacada: stack vertical (imagen arriba, texto abajo)
```

**Tablet (768-1024px):**
```
Grid: 2 columnas
Entrada destacada: mantiene layout 2 columnas (55/45)
```

---

### Animación del grid

```
Carga inicial:
  Entrada destacada: reveal (translateY + opacity, 0.8s)
  Grid: stagger por fila (cada fila es un trigger)
        delay 0.1s entre tarjetas de la misma fila

Filtrado por categoría:
  Misma lógica que Proyectos:
  1. Items que no coinciden: opacity → 0 (0.25s)
  2. Grid se recompone (0.4s ease-out-expo)
  3. Items que coinciden: opacity 0 → 1 (0.3s, stagger 0.08s)

  Si la entrada destacada no coincide con el filtro:
  fade out + la sección colapsa (height transition 0.4s)
  El grid sube a llenar el espacio.

"Cargar más":
  Nuevas tarjetas: fade in + translateY (30px → 0)
  stagger 0.08s entre cada una
```

---

### ④ CTA + FOOTER

CTA antes del footer, texto adaptado al contexto:

```
"¿Quieres saber más sobre                ← font-display, text-4xl
 nuestro trabajo?"                          peso light, text-inverse

 Conversemos →                            ← UiLink inverse
```

Más sutil que el CTA del homepage (no necesita botón grande aquí — el visitante del Journal no está necesariamente en modo "contratación"). Un link con flecha es suficiente.

Fondo: bg-dark (#1D1D1B). Footer continúa.

---

# PARTE 2: ENTRADA DEL JOURNAL (Detalle)

## Lógica narrativa

El visitante hizo click en una entrada. Quiere leer, contemplar y volver al índice cuando termine.

```
1. ¿De qué trata?         → HEADER (título + metadata)
2. ¿Qué dice?             → CONTENIDO (el artículo)
3. ¿Qué más hay?          → ENTRADAS RELACIONADAS
```

Es una página de **lectura**. El diseño debe desaparecer para que el contenido brille. Como un buen libro: la tipografía, los márgenes y el papel están cuidados al extremo, pero no notas su presencia — solo notas la lectura.

---

## Mapa de ritmo visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   1. HEADER                                           ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: TIPOGRÁFICO                                   ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   2. IMAGEN PRINCIPAL                                 ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: VISUAL, full-width                            ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   3. CONTENIDO                                        ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: EDITORIAL, columna de lectura                 ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   4. ENTRADAS RELACIONADAS                            ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █   FOOTER                                              █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Secuencia cromática:**
```
BLANCO → BLANCO → BLANCO → GRIS → NEGRO
Header   Imagen   Contenido  Relac.  Footer
```

Predomina el blanco casi absoluto. Es una página de lectura — el fondo debe ser silencio puro.

---

## Sección por sección

### ① HEADER — "Abrir la entrada"
**Función narrativa**: Contexto y título. El visitante sabe qué va a leer antes de empezar.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a]                     [Nav links]  │
│                                             │
│                                             │
│                                             │
│                                             │
│              ENSAYO                         │  ← Tag
│                                             │     font-body, text-xs
│                                             │     UPPERCASE, tracking-wider
│              Sobre el color                 │     color accent
│              como experiencia               │
│              espacial                       │  ← font-display, text-5xl
│                                             │     peso light, centrado
│              Febrero 2026                   │     max-width: 800px
│                                             │
│                                             │  ← font-body, text-sm
│                                             │     color text-tertiary
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Padding-top: 160px
Texto: centrado
```

**¿Por qué centrado?**
- Para los artículos y entradas, el centrado crea un eje de lectura claro. El ojo sabe dónde buscar.
- Es el estándar editorial para openings de artículos en revistas de arquitectura.
- El título grande centrado + fecha pequeña debajo crea una jerarquía vertical limpia: lo importante arriba, lo funcional abajo.

**Lo que NO está en el header:**
```
❌ Autor (es un estudio, no un blog personal. Todo se publica como "Estudio 4A")
❌ Tiempo de lectura ("5 min read" es un patrón de Medium, no de una revista)
❌ Tags múltiples (solo el tipo: Ensayo, Proyecto, Proceso o Referencia)
❌ Botones de compartir (sobran aquí, pueden ir al final si se desea)
❌ Imagen de cabecera (va en la siguiente sección, separada)
```

---

### ② IMAGEN PRINCIPAL — "La portada de la entrada"
**Función narrativa**: Visual de apertura. Establece la atmósfera de lo que se va a leer.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │                                     │   │
│  │    IMAGEN PRINCIPAL                 │   │  ← Full-width dentro
│  │    DE LA ENTRADA                    │   │     del max-width-content
│  │                                     │   │     aspect-ratio 16:9
│  │    (fotografía, render,             │   │     o 21:9
│  │     boceto, detalle)                │   │
│  │                                     │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│    Detalle del proyecto El Bosque Boulevard │  ← Caption (opcional)
│    Foto: [Crédito]                         │     font-body, text-xs
│                                             │     color text-tertiary
│                                             │     centrado
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Margin-top: spacing-block desde el header
```

**¿Por qué separar la imagen del header?**
- Permite que el título respire sin imagen compitiendo.
- La imagen funciona como transición entre el header y el contenido.
- Si una entrada no tiene imagen principal (posible en un ensayo puramente textual), la sección simplemente no se renderiza y el contenido empieza directamente.

---

### ③ CONTENIDO — "El artículo"
**Función narrativa**: El cuerpo del texto. Aquí el diseño desaparece y el contenido habla.

```
┌─────────────────────────────────────────────┐
│                                             │
│           ┌───────────────────┐             │
│           │                   │             │
│           │  El color en la   │             │
│           │  arquitectura no  │             │  ← Columna de lectura
│           │  es decoración.   │             │     max-width-text (680px)
│           │  Es una decisión  │             │     centrada
│           │  tan estructural  │             │
│           │  como elegir el   │             │     font-body, text-lg
│           │  material de un   │             │     leading-relaxed (1.8)
│           │  muro portante.   │             │     color text
│           │                   │             │
│           │  Cuando hablamos  │             │
│           │  de "matiz" en    │             │
│           │  Estudio 4A, no   │             │
│           │  hablamos de      │             │
│           │  pintura...       │             │
│           │                   │             │
│           └───────────────────┘             │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  ← Imagen intercalada
│  │   IMAGEN EN EL CUERPO DEL TEXTO    │   │     sale del ancho de lectura
│  │   (full-width dentro del content)   │   │     max-width-content (1200px)
│  │                                     │   │     aspect-ratio 16:9
│  └─────────────────────────────────────┘   │
│                                             │
│           ┌───────────────────┐             │
│           │                   │             │
│           │  Continúa el      │             │  ← Texto continúa
│           │  texto después    │             │     en columna estrecha
│           │  de la imagen...  │             │
│           │                   │             │
│           │  > "El color no   │             │  ← Blockquote
│           │  > construye      │             │     font-display, text-xl
│           │  > paredes.       │             │     italic, peso regular
│           │  > Construye      │             │     border-left: 2px accent
│           │  > silencios."    │             │     padding-left: 24px
│           │                   │             │
│           │  Texto final...   │             │
│           │                   │             │
│           └───────────────────┘             │
│                                             │
│                                             │
│           ── (línea divisoria fina) ──      │  ← Cierre del artículo
│                                             │     1px, color border-subtle
│                                             │     width: 120px, centrada
│                                             │
│           ← Volver al Journal              │  ← UiLink
│                                             │     font-body, text-sm
│                                             │     UPPERCASE, tracking-wide
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
```

**El patrón editorial del contenido:**
```
Columna de texto estrecha (680px):
  - El ancho óptimo de lectura es 55-75 caracteres por línea
  - 680px con text-lg logra ~65 caracteres — ideal
  - El texto se centra en la página con márgenes amplios a ambos lados
  - Los márgenes vacíos NO son desperdicio — son espacio de lectura

Imágenes intercaladas:
  - SALEN del ancho de lectura para crear contraste
  - Se expanden a max-width-content (1200px)
  - Esto crea un ritmo de "estrecho → ancho → estrecho"
  - Es el patrón editorial de Medium, pero aplicado con más espacio

Citas (blockquote):
  - font-display, text-xl, italic
  - Border-left: 2px solid accent (#B81716)
  - Padding-left: 24px
  - Margin: spacing-block arriba y abajo
  - Color: text (no accent — el borde ya marca la cita)
```

**Estilos de prose para Nuxt Content / markdown renderizado:**
```css
/* Estilos del contenido renderizado desde markdown */

.journal-content {
  max-width: var(--max-width-text);
  margin: 0 auto;
}

.journal-content p {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text);
  margin-bottom: 1.5em;
}

.journal-content h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-light);
  margin-top: 2.5em;
  margin-bottom: 0.8em;
}

.journal-content h3 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-regular);
  margin-top: 2em;
  margin-bottom: 0.6em;
}

.journal-content img,
.journal-content figure {
  /* Salen de la columna de lectura */
  max-width: var(--max-width-content);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: var(--spacing-block);
  margin-bottom: var(--spacing-block);
}

.journal-content figcaption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-align: center;
  margin-top: var(--spacing-micro);
}

.journal-content blockquote {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  border-left: 2px solid var(--color-accent);
  padding-left: 24px;
  margin: var(--spacing-block) 0;
}

.journal-content a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.journal-content a:hover {
  color: var(--color-accent-hover);
}

/* Listas (usarlas con moderación) */
.journal-content ul,
.journal-content ol {
  padding-left: 1.5em;
  margin-bottom: 1.5em;
}

.journal-content li {
  margin-bottom: 0.5em;
}
```

**Animación del contenido:**
```
Minimal:
  - Header: reveal (translateY + opacity)
  - Imagen principal: fade in
  - Párrafos: NO animar individualmente (interfiere con la lectura)
  - Imágenes intercaladas: fade in al entrar viewport
  - La lectura fluye naturalmente con Lenis smooth scroll

  El contenido de lectura NO debe tener animaciones
  agresivas. El visitante vino a leer, no a ver animaciones.
```

---

### ④ ENTRADAS RELACIONADAS — "Seguir explorando"
**Función narrativa**: Retención. El visitante terminó de leer — se le ofrecen más entradas relevantes.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ── MÁS EN EL JOURNAL                      │  ← UiSectionLabel
│                                             │
│                                             │
│  ┌────────────┐ ┌────────────┐ ┌────────┐  │
│  │            │ │            │ │        │  │
│  │  IMG       │ │  IMG       │ │  IMG   │  │  ← 3 entradas
│  │            │ │            │ │        │  │     Mismo formato que
│  │  16:10     │ │  16:10     │ │  16:10 │  │     las tarjetas del
│  │            │ │            │ │        │  │     índice
│  └────────────┘ └────────────┘ └────────┘  │
│  PROCESO        ENSAYO         PROYECTO    │
│  Visita de      La fricción    El Bosque   │
│  obra:          como principio Boulevard   │
│  Costanera      de diseño      entrega     │
│  Ene 2025       Mar 2025       Nov 2024    │
│                                             │
│                                             │
│           Ver todo el Journal →             │  ← UiLink centrado
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-alt (#EBEBEB)
```

**Lógica de selección de las 3 entradas:**
```
1. Priorizar misma categoría (si la actual es "Ensayo",
   mostrar otros ensayos)
2. Si no hay suficientes de la misma categoría, mezclar
   con las más recientes
3. NUNCA mostrar la entrada actual
4. Siempre exactamente 3 (ni más ni menos)

Mobile: 1 columna, mostrar solo 2 entradas
```

---

## Resumen completo

### Índice (/journal)

| # | Sección | Fondo | Propósito |
|---|---------|-------|-----------|
| 1 | Hero | Blanco | Título + filtros |
| 2 | Entrada destacada | Blanco | Lo más reciente, con presencia |
| 3 | Grid de entradas | Gris piedra | Exploración del archivo |
| 4 | CTA + Footer | Negro | Cierre |

### Detalle (/journal/[slug])

| # | Sección | Fondo | Propósito |
|---|---------|-------|-----------|
| 1 | Header | Blanco | Título + metadata |
| 2 | Imagen principal | Blanco | Apertura visual |
| 3 | Contenido | Blanco | El artículo |
| 4 | Relacionadas | Gris piedra | Más entradas |
| 5 | Footer | Negro | Cierre |

---

## Modelo de datos

```typescript
// types/journal.ts
interface JournalEntry {
  // Identidad
  slug: string
  title: string
  type: 'ensayo' | 'proyecto' | 'proceso' | 'referencia'

  // Metadata
  date: string              // "2026-02-15"
  featured: boolean         // ¿Es la entrada destacada?

  // Contenido
  excerpt: string           // 1-2 frases para la entrada destacada
  body: string              // Contenido markdown completo

  // Imágenes
  coverImage: Image         // Imagen de portada (grid + hero)

  // Relaciones (opcional)
  relatedProject?: string   // slug del proyecto vinculado

  // SEO
  seoTitle?: string
  seoDescription?: string
  ogImage?: Image
}
```

---

## Notas de implementación

### Nuxt Content como CMS

```
El Journal es el caso de uso perfecto para Nuxt Content:
  - Archivos .md en content/journal/
  - Frontmatter para metadata (title, type, date, featured)
  - Markdown para el cuerpo del artículo
  - Imágenes en public/journal/[slug]/

  El equipo de 4A puede agregar entradas escribiendo
  archivos markdown — no necesita un CMS externo para
  10-15 publicaciones al año.

Si en el futuro necesitan un CMS visual:
  - Nuxt Studio (integrado con Nuxt Content)
  - Notion como CMS (via API, más familiar para no-técnicos)
  - Tina CMS (git-based, edición visual)
```

### Ejemplo de archivo de entrada

```markdown
---
title: "Sobre el color como experiencia espacial"
type: "ensayo"
date: "2026-02-10"
featured: true
excerpt: "El color no decora: el color construye atmósfera, define recorridos y transforma la experiencia de habitar un espacio."
coverImage:
  src: "/journal/color-experiencia-espacial/cover.jpg"
  alt: "Muro de hormigón coloreado con luz natural"
  aspectRatio: "16:9"
seoDescription: "Reflexión de Estudio 4A sobre el uso del color como herramienta arquitectónica, más allá de lo decorativo."
---

El color en la arquitectura no es decoración. Es una decisión tan estructural como elegir el material de un muro portante.

Cuando hablamos de "matiz" en Estudio 4A, no hablamos de pintura. Hablamos de la capacidad del color para transformar la percepción del espacio, alterar la temperatura emocional de una habitación, guiar el movimiento del cuerpo a través de un recorrido.

![Interior con luz coloreada](/journal/color-experiencia-espacial/interior-luz.jpg)

> "El color no construye paredes. Construye silencios."
> — Michael Palza

[El artículo continúa...]
```

### Estructura de archivos

```
pages/
  journal/
    index.vue              ← Índice
    [slug].vue             ← Detalle

components/
  sections/
    journal/
      JournalHero.vue          ← Hero tipográfico + filtros
      JournalFeatured.vue      ← Entrada destacada (2 cols)
      JournalGrid.vue          ← Grid 3 cols
      JournalGridItem.vue      ← Tarjeta individual

  journal/
    JournalHeader.vue          ← Tag + título + fecha
    JournalCover.vue           ← Imagen principal
    JournalContent.vue         ← Prose renderizado
    JournalRelated.vue         ← 3 entradas relacionadas

content/
  journal/
    sobre-el-color.md
    maquetas-edificio-msc.md
    publicados-archdaily.md
    ...
```

---

## Lo que NO incluí y por qué

**Newsletter / Suscripción email**
- Para 10-15 publicaciones al año, un newsletter es desproporcionado. El estudio no es un medio de comunicación. Quien quiera seguirlos tiene Instagram.

**Comentarios**
- No es un blog comunitario. Es un cuaderno del estudio. Los comentarios generan moderación, spam, y rompen la estética editorial.

**Tags múltiples por entrada**
- Una sola categoría por entrada (Ensayo, Proyecto, Proceso, Referencia). Tags cruzados (material, color, Bolivia, residencial) crean complejidad de navegación que no se justifica para 15 entradas.

**Autor por entrada**
- Todo se publica como "Estudio 4A". Nombrar autores individuales en el Journal fragmenta la voz del estudio. En la página de Estudio ya se presenta al equipo.

**Barra lateral (sidebar)**
- El sidebar con "entradas populares", "categorías", "archivo" es un patrón de blog de 2012. La columna única centrada es más limpia, más editorial, más contemporánea.

**Breadcrumbs**
- Con solo dos niveles de profundidad (/journal → /journal/slug), un link "← Volver al Journal" al final del artículo es suficiente. Los breadcrumbs son ruido visual innecesario.

**Botones de compartir prominentes**
- Si alguien quiere compartir, copia la URL. Los botones flotantes de compartir distraen y son ignorados por la mayoría de los usuarios.

**Modo oscuro del artículo**
- Complejidad adicional que no aporta al concepto de sofisticación. El blanco como fondo de lectura es suficiente.

---

*El Journal es donde Estudio 4A piensa en voz alta.
No compite por atención — la merece por contenido.
Cada entrada debe hacer que el visitante piense:
"Este estudio tiene algo interesante que decir".*
