# Estudio 4A — Arquitectura de la Página "Proyectos"

> La página de Proyectos no es un portafolio.
> Es una **galería curada** — cada proyecto tiene su lugar,
> su peso visual y su razón de estar ahí.
> El visitante no navega una lista: recorre una exposición.

---

## Dos páginas, un sistema

A diferencia de Home y Estudio, "Proyectos" son en realidad **dos páginas** que funcionan como un sistema:

```
/proyectos              → ÍNDICE (la galería)
/proyectos/[slug]       → DETALLE (la obra)
```

Ambas deben sentirse como parte del mismo espacio, pero con roles opuestos:

| | Índice | Detalle |
|---|--------|---------|
| **Propósito** | Mostrar amplitud | Mostrar profundidad |
| **Ritmo** | Rápido, exploración | Lento, inmersión |
| **Imágenes** | Una por proyecto | Muchas por proyecto |
| **Texto** | Mínimo (nombre + categoría) | Narrativa completa |
| **Acción del visitante** | Escanear, elegir | Leer, contemplar |

El índice es la puerta. El detalle es la habitación.

---

# PARTE 1: ÍNDICE DE PROYECTOS

## Lógica narrativa

El visitante llega preguntándose: **"¿Qué han hecho?"**

Pero la respuesta no es "todo lo que hemos hecho". Es **"lo que elegimos mostrar"**. Un estudio boutique cura su portafolio. No muestra 120 proyectos — muestra 15-20 que definen quiénes son.

```
1. ¿Qué tipo de trabajo hacen?    → HERO (título + categorías)
2. ¿Qué proyectos destacan?       → GRID (la galería curada)
3. ¿Puedo ver más?                 → CTA (contacto)
```

Es una página *simple* por diseño. No necesita secciones narrativas, ni textos largos, ni métricas. Las imágenes hablan. El layout comunica jerarquía. Punto.

---

## Mapa de ritmo visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   1. HERO PROYECTOS                                   ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: TIPOGRÁFICO, sin imagen                       ░  │
│  ░   Ritmo: apertura contenida                           ░  │
│  ░   Altura: ~40vh                                       ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   2. GRID DE PROYECTOS                                ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒   Tipo: VISUAL, galería curada                        ▒  │
│  ▒   Ritmo: exploración libre                            ▒  │
│  ▒   Altura: variable (el contenido principal)           ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   3. CTA + FOOTER                                     █  │
│  █                                                       █  │
│  █   Fondo: NEGRO CARBÓN (#1D1D1B)                       █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Secuencia cromática:**
```
BLANCO → GRIS PIEDRA → NEGRO
Hero     Grid          CTA+Footer
```

Solo tres bloques. La simplicidad ES la sofisticación. La página no necesita más secciones porque su contenido (los proyectos) ES la sección.

---

## Sección por sección

### ① HERO PROYECTOS — "Sin imagen, solo intención"
**Función narrativa**: Establecer contexto mínimo. El visitante ya sabe que viene a ver proyectos.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a]                     [Nav links]  │  ← Navbar sólido
│                                             │     (esta página no tiene
│                                             │      hero visual = navbar
│                                             │      con fondo desde inicio)
│                                             │
│                                             │
│  ── PROYECTOS                               │  ← UiSectionLabel
│                                             │
│  Obras                                      │  ← font-display, text-hero
│  seleccionadas                              │     peso light
│                                             │
│                                             │
│  Todo  Residencial  Corporativo  Urbano     │  ← Filtros / categorías
│   ·                                         │     (detalle abajo)
│                                             │
└─────────────────────────────────────────────┘

Altura: ~40vh (compacto — el protagonismo es del grid)
Fondo: bg (#FFFFFF)
Padding-top: 140px (espacio para navbar fija + respiro)
```

**¿Por qué NO hay imagen en este hero?**
- El homepage ya tiene hero con video. Estudio tiene hero con imagen. Repetir el patrón en cada página lo vuelve *plantilla*.
- En una página de portafolio, las imágenes de los proyectos SON el contenido visual. Un hero con imagen competiría con ellos.
- El hero tipográfico (solo texto grande sobre blanco) crea un **contraste de ritmo** con las páginas anteriores. Se siente fresco y diferente.
- Es un recurso editorial clásico: las revistas de arquitectura a menudo abren sus secciones de portafolio con una página de solo texto.

**¿Por qué "Obras seleccionadas" y no "Proyectos"?**
- "Proyectos" es genérico. "Obras seleccionadas" implica curaduría — no es todo lo que han hecho, es lo que eligen mostrar.
- "Obras" tiene connotación artística. "Proyectos" tiene connotación corporativa.
- El label de sección ya dice "PROYECTOS", así que el heading puede permitirse ser más expresivo.

### Los filtros

```
Diseño:
  Layout: horizontal, alineados al texto del heading
  Font: font-body, text-sm, UPPERCASE, tracking-wide
  Color inactivo: text-tertiary (#8A8A87)
  Color activo: text (#1D1D1B) + underline en accent (#B81716)
  Color hover: text-secondary (#5C5C5A)

  Transición al filtrar: las imágenes NO desaparecen bruscamente.
  Los items que no coinciden hacen fade out (opacity 1→0, 0.3s)
  y luego el grid se recompone con animación (0.4s ease-out-expo).
  Los items que coinciden hacen fade in (opacity 0→1, 0.3s).

Categorías:
  "Todo" (default, activo al cargar)
  "Residencial"
  "Corporativo"
  "Urbano"

  Estas categorías vienen del briefing del cliente.
  NO fragmentar más — 3-4 categorías máximo.
  Si el cliente tiene más tipologías, agrupar.

Mobile:
  Filtros en scroll horizontal si no caben,
  o en 2 filas. NUNCA en dropdown/select —
  los filtros deben estar siempre visibles.
```

**¿Por qué filtros tan simples?**
- No es un e-commerce con 500 productos. Son 15-20 proyectos.
- Filtros complejos (por año, por país, por tamaño, multi-select) agregan complejidad técnica y visual sin aportar valor.
- "Todo | Residencial | Corporativo | Urbano" es suficiente para un estudio boutique.
- El visitante que llega a esta página quiere *explorar*, no *buscar*.

---

### ② GRID DE PROYECTOS — "La galería"
**Función narrativa**: Mostrar el trabajo con jerarquía visual. No todos los proyectos son iguales — el layout lo refleja.

Este es el corazón de la página y la decisión de diseño más importante del sitio. Hay dos caminos posibles:

#### OPCIÓN A: Grid Asimétrico Fijo (recomendada)

Un patrón asimétrico que se repite cada 5 proyectos, creando ritmo sin monotonía:

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌──────────────────────┐ ┌────────────┐   │
│  │                      │ │            │   │
│  │                      │ │            │   │  FILA A
│  │     PROYECTO 1       │ │ PROYECTO 2 │   │  Grande (65%) + Vertical (35%)
│  │     (destacado)      │ │ (secund.)  │   │
│  │                      │ │            │   │  Img 1: aspect-ratio 16:10
│  │     16:10            │ │   3:4      │   │  Img 2: aspect-ratio 3:4
│  │                      │ │            │   │
│  └──────────────────────┘ └────────────┘   │
│                                             │
│  ┌────────────┐ ┌──────────────────────┐   │
│  │            │ │                      │   │  FILA B
│  │ PROYECTO 3 │ │                      │   │  Vertical (35%) + Grande (65%)
│  │ (secund.)  │ │     PROYECTO 4       │   │  (espejo de Fila A)
│  │            │ │     (destacado)      │   │
│  │   3:4      │ │                      │   │
│  │            │ │     16:10            │   │
│  │            │ │                      │   │
│  └────────────┘ └──────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  FILA C
│  │          PROYECTO 5                 │   │  Panorámica full-width
│  │          (impacto)                  │   │
│  │                                     │   │  aspect-ratio 21:9
│  │          21:9                       │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─── patrón se repite con proyectos 6-10 ──│
│                                             │
│  ┌──────────────────────┐ ┌────────────┐   │
│  │                      │ │            │   │
│  │     PROYECTO 6       │ │ PROYECTO 7 │   │  FILA A (repetición)
│  │                      │ │            │   │
│  ...                    ...            ... │
│                                             │
└─────────────────────────────────────────────┘
```

**¿Por qué este patrón?**
- El patrón A-B-C (grande/pequeño — pequeño/grande — panorámica) crea un movimiento en **zigzag** que guía el ojo naturalmente.
- La panorámica cada 5 proyectos rompe el ritmo y crea un "respiro" — como un pasillo entre salas de una galería.
- Los proyectos en posición "grande" (65%) tienen más peso visual — ahí van los destacados.
- Los proyectos en posición "vertical" (35%) funcionan bien para renders o vistas verticales.
- NO es un grid uniforme de 3 columnas. Es un layout *editorial* que dice "esto fue diseñado, no generado".

#### OPCIÓN B: Grid Masonry

```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │        │ │        │ │        │          │
│  │  P1    │ │  P2    │ │  P3    │          │  3 columnas
│  │        │ │  (más  │ │        │          │  Alturas variables
│  │        │ │  alto) │ └────────┘          │  según aspect ratio
│  └────────┘ │        │ ┌────────┐          │  de cada imagen
│  ┌────────┐ │        │ │        │          │
│  │  P4    │ └────────┘ │  P5    │          │
│  │        │ ┌────────┐ │        │          │
│  ...      │ │  P6    │ │        │          │
│            │ │        │ └────────┘          │
│                                             │
└─────────────────────────────────────────────┘
```

**Trade-offs del masonry:**
- Más flexible, las imágenes mantienen su aspect ratio natural
- Se siente más orgánico y "Pinterest-like"
- Más difícil de controlar la jerarquía (¿qué proyecto destaca?)
- Puede sentirse desordenado si las imágenes tienen ratios muy dispares
- CSS masonry aún es experimental — requiere JS (Masonry.js) o hacks de CSS

**Mi recomendación: Opción A.** El grid asimétrico fijo da más control sobre la narrativa visual. Cada posición tiene un propósito. Es predecible para el desarrollador y curable para el cliente. Y se implementa con CSS Grid puro, sin dependencias.

---

### Anatomía de cada proyecto en el grid

```
┌──────────────────────────────┐
│                              │
│                              │
│                              │
│         IMAGEN               │  ← Imagen en .parallax-wrap
│         (aspecto según       │     Scale 1.12 → parallax sutil
│          posición en grid)   │     Lazy loading + placeholder blur
│                              │
│                              │
│                              │
│                              │
└──────────────────────────────┘
  El Bosque Boulevard            ← font-display, text-xl, peso regular
  Espacio Urbano · La Paz        ← font-body, text-xs, UPPERCASE,
                                    tracking-wide, color text-tertiary
                                    Categoría · Ciudad
```

**El texto va DEBAJO de la imagen, no sobre ella.**

¿Por qué? Porque:
- Superponer texto sobre la imagen es un patrón de template. Además oscurece la fotografía arquitectónica, que es el contenido principal.
- Texto debajo = la imagen respira. El visitante la ve completa, sin interferencia.
- Es el patrón editorial de revistas como El Croquis, AV, a+u.
- La jerarquía es clara: imagen → nombre → metadato.

**Estados de interacción:**

```
Normal:
  Imagen: estática
  Texto: visible
  Cursor: default

Hover:
  Imagen: scale 1.0 → 1.02 (0.6s ease-out-quart)
  Overlay: gradiente muy sutil bottom (rgba(29,29,27,0.08))
  Texto nombre: color carbon → accent (#B81716) (0.35s)
  Cursor: pointer

  NO: overlay oscuro pesado
  NO: texto que aparece/desaparece sobre la imagen
  NO: cambio de opacidad de la imagen
  NO: borde que aparece

  SÍ: solo scale + color de texto. Lo mínimo necesario.
```

**Mobile (< 768px):**
```
Grid colapsa a 1 columna.
Todas las imágenes en aspect-ratio 16:10 (consistente).
Spacing entre items: spacing-element (24px).
Nombre y categoría siempre visibles debajo.
Sin hover effects (no hay hover en touch).
```

**Tablet (768-1024px):**
```
Grid a 2 columnas iguales (50/50).
Sin fila panorámica — todas 2 columnas.
Aspect ratio: 16:10 para ambas columnas.
```

---

### Animación del grid

```
Al cargar la página:
  Los primeros 5 proyectos (Fila A + B + C) hacen stagger reveal:
    translateY 40px → 0, opacity 0 → 1
    stagger: 0.12s entre cada proyecto
    ease: power3.out, duration 0.8s

Al hacer scroll:
  Cada fila siguiente entra con el mismo reveal,
  trigger: cuando la fila entra al 88% del viewport.

Al filtrar por categoría:
  1. Items que no coinciden: opacity → 0 (0.25s)
  2. Grid se recompone: layout shift animado (0.4s ease-out-expo)
  3. Items que coinciden: opacity 0 → 1 (0.3s, stagger 0.08s)

  GSAP Flip plugin es ideal para esto, o LayoutGroup de Framer Motion
  si se usa un approach con Vue transitions.

  Alternativa más simple: CSS transitions con position absolute
  temporal durante el reflow.
```

---

### Fondo y spacing del grid

```
Fondo: bg-alt (#EBEBEB)

El gris piedra como fondo tiene tres funciones:
1. Las fotos "flotan" sin necesidad de bordes ni sombras
2. Diferencia visualmente esta zona del hero (blanco)
3. Remite a materialidad (pared de galería, hormigón)

Padding:
  Top: spacing-section-sm (64-120px)
  Bottom: spacing-section (96-180px)
  Horizontal: dentro de max-width-content (1200px), centrado

Gap entre items del grid:
  Row gap: spacing-block (48px)
  Column gap: grid-gutter (16-32px adaptativo)

Entre nombre/categoría y la siguiente fila:
  spacing-block (48px) — esto da aire entre proyectos
```

---

### ③ CTA + FOOTER

Idénticos a Home y Estudio. El CTA aquí puede variar ligeramente el texto:

```
"¿Tiene un proyecto en mente?"     ← font-display, text-5xl, inverse
 Conversemos.                      ← font-body, text-lg, inverse-muted

 [ Iniciar conversación ]          ← UiButton inverse
```

Es más directo que el "Conversemos" del Home porque el visitante que llega a la página de proyectos tiene más probabilidad de ser un potencial cliente activo.

---

# PARTE 2: DETALLE DE PROYECTO

## Lógica narrativa

El visitante hizo click en un proyecto. Quiere **inmersión total**. Las preguntas:

```
1. ¿Cómo se ve?              → HERO (imagen principal)
2. ¿Qué es?                  → FICHA (datos del proyecto)
3. ¿Cuál es la historia?     → NARRATIVA (el relato)
4. ¿Cómo se vive?            → GALERÍA (exploración visual)
5. ¿Qué más tienen?          → SIGUIENTE (navegación a otro proyecto)
```

El arco: **Impacto → Contexto → Comprensión → Exploración → Continuidad**

---

## Mapa de ritmo visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   1. HERO PROYECTO                                    █  │
│  █                                                       █  │
│  █   Fondo: IMAGEN principal, full-width                 █  │
│  █   Tipo: INMERSIVO                                     █  │
│  █   Altura: 90vh                                        █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   2. FICHA TÉCNICA                                    ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: DATOS, compacto                               ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   3. NARRATIVA                                        ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: EDITORIAL, texto + imágenes intercaladas      ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   4. GALERÍA EXPANDIDA                                ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒   Tipo: VISUAL, exploración libre                     ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   5. SIGUIENTE PROYECTO                               █  │
│  █                                                       █  │
│  █   Fondo: NEGRO CARBÓN (#1D1D1B)                       █  │
│  █   Tipo: NAVEGACIÓN                                    █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █   FOOTER                                              █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Secuencia cromática:**
```
IMAGEN → BLANCO → BLANCO → GRIS → NEGRO → NEGRO
Hero     Ficha    Narrat.   Gal.   Sig.    Footer
```

Predomina el blanco — es una página de *lectura y contemplación*. Las imágenes son el contenido, el fondo es el silencio.

---

## Sección por sección

### ① HERO DE PROYECTO — "La imagen que define la obra"
**Función narrativa**: Primera impresión del proyecto. Una sola imagen, grande, dominante.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a — blanco]            [Nav links]  │  ← Navbar transparente
│                                             │     (vuelve a ser transparente
│                                             │      porque hay imagen)
│                                             │
│                                             │
│                                             │
│                                             │
│          FOTOGRAFÍA PRINCIPAL               │  ← La MEJOR foto del proyecto
│          DEL PROYECTO                       │     La que lo define
│          (una sola, elegida con criterio)   │     Arquitectura + luz + contexto
│                                             │
│                                             │
│                                             │
│                                             │
│                                             │
│  El Bosque Boulevard                        │  ← font-display, text-hero
│                                             │     peso light, color blanco
│                                             │     posición bottom-left
└─────────────────────────────────────────────┘

Altura: 90vh
Fondo: Imagen full-width + overlay gradiente inferior
       linear-gradient(to top, rgba(29,29,27,0.55) 0%,
       rgba(29,29,27,0.08) 35%, transparent 60%)
```

**¿Por qué 90vh y no 100vh?**
- Igual que en Estudio: dejar entrever la siguiente sección invita al scroll.
- Diferencia sutil con el hero del Home (100vh). Cada página tiene su propia respiración.

**Solo el nombre del proyecto, nada más.**
- Sin subtítulo. Sin categoría. Sin año. Esa información va en la ficha técnica.
- Una palabra (o frase) grande sobre una imagen poderosa. Claridad silenciosa.

**Selección de la imagen principal:**
```
La imagen hero debe:
  ✅ Mostrar el proyecto en su MEJOR ángulo y luz
  ✅ Incluir contexto (entorno, paisaje, calle)
  ✅ Tener calidad profesional (resolución, composición)
  ✅ Funcionar bien en formato muy panorámico (se recortará en mobile)

NO debe:
  ❌ Ser un render — siempre preferir fotografía real si existe
  ❌ Ser un detalle o interior — la primera impresión debe ser la totalidad
  ❌ Tener personas posando — la arquitectura es protagonista
```

**Animación:**
```
1. Imagen ya visible (sin animación de entrada para la imagen)
2. Nombre del proyecto: fade in + translateY (delay 0.3s después de page transition)
```

---

### ② FICHA TÉCNICA — "Los datos, limpios"
**Función narrativa**: Contexto factual. Antes de la narrativa, el visitante necesita ubicarse: qué es, dónde está, cuándo, qué tamaño.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │                                       │  │
│  │  Ubicación          Tipología         │  │
│  │  La Paz, Bolivia    Espacio Urbano    │  │
│  │                                       │  │  ← Grid horizontal
│  │  Año                Superficie        │  │     de metadatos
│  │  2022               12,400 m²         │  │
│  │                                       │  │     4-6 campos máximo
│  │  Estado             Colaboradores     │  │     Limpios, sin iconos
│  │  Construido         [Nombre Ing.]     │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Padding-top: spacing-section-sm
```

**Diseño de la ficha:**
```
Layout: grid de 2-3 columnas × 2 filas
        (adaptable según cantidad de campos)

Labels (Ubicación, Tipología, Año...):
  font-body, text-xs, UPPERCASE, tracking-wider
  color: text-tertiary
  margin-bottom: spacing-micro (8px)

Valores (La Paz, Espacio Urbano, 2022...):
  font-display, text-lg, peso regular
  color: text

Separación entre campos:
  horizontal: grid-gutter
  vertical: spacing-element (24px)

Línea separadora fina:
  1px, color border-subtle, debajo de la ficha
  margen: spacing-block arriba y abajo

NO: cards, bordes, fondos, iconos por campo
NO: más de 6 campos — si sobra info, va en la narrativa
SÍ: limpio, tipográfico, como la ficha técnica de una revista
```

**Campos recomendados (elegir 4-6 por proyecto):**
```
Siempre presentes:
  - Ubicación (Ciudad, País)
  - Tipología (Residencial / Corporativo / Urbano)
  - Año (o rango: 2020-2023)
  - Superficie (m²)

Opcionales según proyecto:
  - Estado (Construido / En construcción / Concurso)
  - Cliente (si es público)
  - Colaboradores (ingenierías, consultores)
  - Premios (si los tiene)
```

---

### ③ NARRATIVA — "El relato del proyecto"
**Función narrativa**: La historia. No es una descripción técnica — es el *por qué* del proyecto. ¿Cuál fue el desafío? ¿Qué idea lo guió? ¿Cómo se resolvió?

```
┌─────────────────────────────────────────────┐
│                                             │
│  ── CONCEPTO                                │  ← UiSectionLabel
│                                             │
│                                             │
│  "El desafío era crear un espacio           │
│   que respirara con la ciudad,              │  ← font-display, text-statement
│   no contra ella."                          │     peso light
│                                             │     centrado o alineado izq
│                                             │     max-width-narrow (540px)
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   IMAGEN COMPLEMENTARIA 1           │   │  ← Full-width
│  │   (vista interior, detalle,         │   │     aspect-ratio 16:9
│  │    o contexto urbano)               │   │     con parallax sutil
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│                                             │
│     El Bosque Boulevard nace de la          │
│     necesidad de conectar dos barrios       │  ← font-body, text-lg
│     que históricamente daban la espalda     │     peso regular
│     al río. La propuesta convierte el       │     max-width-text (680px)
│     borde fluvial en un eje de actividad    │     centrado o alineado izq
│     pública que integra comercio,           │
│     recreación y movilidad sostenible.      │     2-3 párrafos máximo
│                                             │
│     La materialidad del proyecto...         │
│     [segundo párrafo]                       │
│                                             │
│                                             │
│  ┌────────────┐           ┌────────────┐   │
│  │            │           │            │   │
│  │  IMAGEN 2  │           │  IMAGEN 3  │   │  ← Dos imágenes, 50/50
│  │  (detalle  │           │  (detalle  │   │     con gap entre ellas
│  │   material)│           │   o escala │   │     aspect-ratio 4:5
│  │            │           │   humana)  │   │
│  │            │           │            │   │
│  └────────────┘           └────────────┘   │
│                                             │
│                                             │
│     [Tercer párrafo opcional sobre          │
│      el resultado, el impacto, la          │
│      experiencia del espacio]              │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
```

**El patrón es editorial: texto → imagen → texto → imágenes → texto**

```
La narrativa sigue este ritmo:

  CITA/CONCEPTO (frase que define la idea)
       ↓
  IMAGEN grande (la idea visualizada)
       ↓
  TEXTO (2-3 párrafos que explican)
       ↓
  IMÁGENES de detalle (lo que el texto describe)
       ↓
  TEXTO de cierre (opcional, 1 párrafo)

Este intercalado texto-imagen es el lenguaje de las
publicaciones de arquitectura. El visitante lee, ve,
lee, ve. Nunca se aburre porque el formato cambia.
```

**Reglas del texto narrativo:**
```
Tono: editorial, conceptual, en tercera persona.
      NO es un texto de venta. NO es un brief técnico.
      ES un ensayo breve sobre la idea del proyecto.

Extensión: 150-300 palabras máximo (3-4 párrafos cortos).
           Cada párrafo: 3-4 líneas.
           Si el proyecto tiene mucho que contar, la galería
           y las imágenes hacen el trabajo.

Estructura:
  Párrafo 1: El problema/desafío/contexto
  Párrafo 2: La idea/concepto/respuesta
  Párrafo 3: El resultado/materialidad/experiencia (opcional)

NO: jerga técnica incomprensible
NO: "El proyecto se desarrolla en un predio de 1,200m²..."
SÍ: "El desafío era crear un espacio que..."
SÍ: lenguaje que un no-arquitecto pueda apreciar
```

**Animación:**
```
1. Cita concepto: reveal (translateY + opacity)
2. Imágenes: parallax sutil + fade in al entrar viewport
3. Párrafos: fade in progresivo, sin stagger (lectura natural)
```

---

### ④ GALERÍA EXPANDIDA — "Explorar la obra"
**Función narrativa**: Exploración visual libre. El visitante que llega hasta aquí quiere *ver más*. Se le da todo.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │     IMAGEN PANORÁMICA               │   │  ← Full-width, 21:9
│  │     (vista general / exterior)      │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │          │ │          │ │          │   │
│  │  IMG 5   │ │  IMG 6   │ │  IMG 7   │   │  ← Grid 3 columnas
│  │          │ │          │ │          │   │     aspect-ratio 4:5
│  │  4:5     │ │  4:5     │ │  4:5     │   │     (detalles, interiores)
│  │          │ │          │ │          │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│  ┌────────────────┐ ┌────────────────┐     │
│  │                │ │                │     │
│  │    IMG 8       │ │    IMG 9       │     │  ← Grid 2 columnas
│  │                │ │                │     │     aspect-ratio 16:10
│  │    16:10       │ │    16:10       │     │
│  │                │ │                │     │
│  └────────────────┘ └────────────────┘     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  ← Full-width cierre
│  │     IMAGEN PANORÁMICA FINAL         │   │     21:9
│  │     (la "despedida" del proyecto)   │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-alt (#EBEBEB)
```

**¿Por qué un grid variado y no un slider?**
- Los sliders ocultan contenido. En un portafolio de arquitectura, ocultar imágenes es contraproducente.
- Un grid variado (1 col, 3 cols, 2 cols, 1 col) crea ritmo visual sin JavaScript adicional.
- El visitante controla su propio ritmo de exploración con el scroll. Un slider impone el ritmo del diseñador.
- Es más accesible (todo el contenido visible en el DOM) y mejor para SEO.

**Patrón de la galería:**
```
El patrón de aspect ratios crea ritmo:

  PANORÁMICA (21:9)   — vista amplia, contexto
  3 × VERTICAL (4:5)  — detalles, materiales, interiores
  2 × MEDIA (16:10)   — vistas complementarias
  PANORÁMICA (21:9)   — cierre visual

Este patrón funciona para 7-10 imágenes.
Si hay menos (4-5), simplificar:
  PANORÁMICA → 2 × MEDIA → PANORÁMICA

Si hay más (12+), repetir el bloque central:
  PANORÁMICA → 3×VERT → 2×MEDIA → 3×VERT → PANORÁMICA
```

**Cada imagen:**
```
Sin captions debajo (a diferencia del grid del índice).
Las imágenes hablan solas en esta sección.
Hover: lightbox/zoom si el cliente lo desea (opcional).
Parallax sutil en las panorámicas.
Fade in al entrar en viewport para todas.
Gap entre imágenes: grid-gutter (16-32px).
```

**Mobile:**
```
Todo colapsa a 1 columna.
Panorámicas mantienen 16:9.
Verticales y medias: aspect-ratio 4:5 o 3:4.
Gap reducido: spacing-tight (16px).
```

---

### ⑤ SIGUIENTE PROYECTO — "Nunca dejar al visitante en un callejón sin salida"
**Función narrativa**: Navegación. El visitante terminó de ver este proyecto. ¿Ahora qué? Se le ofrece el siguiente.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  Siguiente proyecto                         │  ← font-body, text-xs
│                                             │     UPPERCASE, tracking-wider
│                                             │     color text-inverse-muted
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │                                     │   │
│  │    IMAGEN PREVIEW DEL               │   │  ← Imagen del siguiente proyecto
│  │    SIGUIENTE PROYECTO               │   │     aspect-ratio 21:9
│  │                                     │   │     hover: scale 1.02
│  │                                     │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Edificio MSC                               │  ← font-display, text-4xl
│  Corporativo · La Paz                       │     color text-inverse
│                                             │
│                                             │
│  ← Todos los proyectos                     │  ← UiLink, text-sm
│                                             │     volver al índice
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-dark (#1D1D1B)
Padding: spacing-section generoso
```

**¿Por qué dedicar una sección entera a esto?**
- Es el patrón de navegación más efectivo en portafolios de arquitectura. El visitante NO quiere volver al índice si le interesó lo que vio — quiere ver *más*.
- Crea un **loop de exploración**: Proyecto A → Proyecto B → Proyecto C. El visitante puede recorrer todo el portafolio sin volver al grid.
- El fondo oscuro crea un cierre visual claro para el proyecto actual y un "umbral" hacia el siguiente.

**Lógica del "siguiente":**
```
Opciones de implementación:

A) Secuencial: el siguiente en la lista del CMS
B) Misma categoría: siguiente proyecto de la misma tipología
C) Aleatorio: un proyecto random diferente al actual

Recomendación: Secuencial. Es predecible y garantiza
que el visitante eventualmente vea todo el portafolio.

También incluir "← Todos los proyectos" como escape
al índice para quienes quieran elegir manualmente.
```

**Hover en la imagen del siguiente proyecto:**
```
Scale 1.0 → 1.02 (0.6s)
Nombre: color shift a accent (0.35s)
Cursor: pointer
Toda la sección es clickeable (link wrapper)
```

---

## Resumen completo

### Índice (/proyectos)

| # | Sección | Fondo | Propósito |
|---|---------|-------|-----------|
| 1 | Hero | Blanco | Título + filtros |
| 2 | Grid | Gris piedra | La galería curada |
| 3 | CTA + Footer | Negro | Cierre |

### Detalle (/proyectos/[slug])

| # | Sección | Fondo | Propósito |
|---|---------|-------|-----------|
| 1 | Hero proyecto | Imagen | Impacto visual |
| 2 | Ficha técnica | Blanco | Datos factuales |
| 3 | Narrativa | Blanco | El relato + imágenes intercaladas |
| 4 | Galería | Gris piedra | Exploración visual completa |
| 5 | Siguiente | Negro | Navegación continua |
| 6 | Footer | Negro | Cierre |

---

## Modelo de datos (para CMS / Nuxt Content)

```typescript
// types/project.ts
interface Project {
  // Identidad
  slug: string
  title: string
  category: 'residencial' | 'corporativo' | 'urbano'

  // Ficha técnica
  location: string          // "La Paz, Bolivia"
  year: string              // "2022" o "2020-2023"
  area: string              // "12,400 m²"
  status: string            // "Construido" | "En construcción" | "Concurso"
  client?: string           // Opcional
  collaborators?: string[]  // Opcional
  awards?: string[]         // Opcional

  // Narrativa
  conceptQuote: string      // La frase que define el concepto
  description: string       // El texto narrativo (markdown)

  // Imágenes
  heroImage: Image          // La foto principal (hero)
  images: Image[]           // Todas las imágenes del proyecto

  // Metadata
  order: number             // Orden en el grid del índice
  featured: boolean         // ¿Es proyecto destacado? (para home)
  gridSize: 'large' | 'vertical' | 'panoramic'  // Tamaño en el grid

  // SEO
  seoTitle?: string
  seoDescription?: string
  ogImage?: Image
}

interface Image {
  src: string
  alt: string
  aspectRatio: '21:9' | '16:10' | '16:9' | '4:5' | '3:4' | '1:1'
  caption?: string          // Opcional, para la galería si se necesita
}
```

---

## Notas de implementación Nuxt 4

```
Estructura de archivos:
  pages/
    proyectos/
      index.vue           ← Índice con grid + filtros
      [slug].vue          ← Detalle dinámico

  components/
    sections/
      projects/
        ProjectsHero.vue       ← Hero tipográfico + filtros
        ProjectsGrid.vue       ← Grid asimétrico con lógica de filtrado
        ProjectGridItem.vue    ← Item individual del grid

    project/
      ProjectHero.vue          ← Hero con imagen full-width
      ProjectMeta.vue          ← Ficha técnica
      ProjectNarrative.vue     ← Texto + imágenes intercaladas
      ProjectGallery.vue       ← Grid de galería expandida
      ProjectNext.vue          ← Navegación al siguiente proyecto

  content/                     ← Si se usa Nuxt Content
    projects/
      el-bosque-boulevard.md
      edificio-msc.md
      costanera-1000.md
      ...
```

```vue
<!-- pages/proyectos/[slug].vue -->
<template>
  <div>
    <ProjectHero :project="project" />
    <ProjectMeta :project="project" />
    <ProjectNarrative :project="project" />
    <ProjectGallery :images="project.images" />
    <ProjectNext :next="nextProject" />
  </div>
</template>
```

---

## Lo que NO incluí y por qué

- **Vista de mapa** con ubicaciones: complejidad técnica alta, valor bajo para un estudio boutique con proyectos concentrados regionalmente.
- **Comparación lado a lado**: patrón de e-commerce, no de galería de arquitectura.
- **Filtros avanzados** (año, tamaño, país, multi-select): son 15-20 proyectos, no 200. Sobra con 3-4 categorías.
- **Slider de imágenes** en el detalle: oculta contenido, impone ritmo al visitante. El scroll vertical es superior.
- **Planos técnicos / planos de planta**: pueden incluirse como imágenes en la galería si el cliente quiere, pero no como sección dedicada. Esta es una web para clientes, no para arquitectos.
- **Videos por proyecto**: posible en el futuro pero no para la primera versión. Añade complejidad de producción y hosting significativa.
- **Comentarios o "me gusta"**: esto no es Behance.

---

*La página de Proyectos es donde el estudio prueba
que su filosofía no es discurso — es obra construida.
Cada imagen debe confirmar lo que el visitante
leyó en Home y Estudio.*
