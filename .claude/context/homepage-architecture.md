# Estudio 4A — Arquitectura del Homepage

> El homepage no es una lista de secciones. Es un **recorrido arquitectónico** —
> una secuencia de espacios que el visitante atraviesa, cada uno con su propia
> atmósfera, ritmo y propósito narrativo.

---

## La lógica narrativa

El visitante llega al sitio sin contexto. El homepage debe responder a estas preguntas, en este orden exacto:

```
1. ¿Qué siento?           → HERO (impacto sensorial)
2. ¿Quiénes son?          → MANIFIESTO (identidad en una frase)
3. ¿Qué hacen?            → PROYECTOS (prueba tangible)
4. ¿Por qué son distintos? → FILOSOFÍA (profundidad conceptual)
5. ¿Quién está detrás?    → EL ESTUDIO (cercanía humana)
6. ¿Cómo empiezo?         → CONTACTO (invitación)
```

Esta secuencia sigue el patrón clásico de persuasión arquitectónica:
**Emoción → Razón → Confianza → Acción**

---

## Mapa de ritmo visual

El homepage alterna entre secciones claras y oscuras, entre densas y respiradas, entre imagen y texto. Este ritmo es lo que evita la monotonía y mantiene la atención sin recurrir a artificios.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   1. HERO                                             █  │
│  █   ▓▓▓▓▓▓▓ VIDEO FULLSCREEN ▓▓▓▓▓▓▓                   █  │
│  █                                                       █  │
│  █   Fondo: VIDEO + overlay oscuro                       █  │
│  █   Tipo: INMERSIVO                                     █  │
│  █   Ritmo: lento, contemplativo                         █  │
│  █   Altura: 100vh                                       █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   2. MANIFIESTO                                       ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: TEXTUAL, centrado                             ░  │
│  ░   Ritmo: pausa, lectura                               ░  │
│  ░   Altura: ~70-80vh (respira mucho)                    ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   3. PROYECTOS                                        ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒   Tipo: VISUAL, grid asimétrico                       ▒  │
│  ▒   Ritmo: dinámico, exploración                        ▒  │
│  ▒   Altura: variable (según cantidad)                   ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   4. TRANSICIÓN EDITORIAL                             ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: frase + imagen panorámica                     ░  │
│  ░   Ritmo: pausa entre lo visual y lo conceptual        ░  │
│  ░   Altura: ~60vh                                       ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   5. FILOSOFÍA                                        █  │
│  █                                                       █  │
│  █   Fondo: NEGRO CARBÓN (#1D1D1B)                       █  │
│  █   Tipo: CONCEPTUAL, texto + imagen                    █  │
│  █   Ritmo: profundo, introspectivo                      █  │
│  █   Altura: ~90-100vh                                   █  │
│  █                                                       █  │
│  █   + MARQUEE separador                                 █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   6. EL ESTUDIO                                       ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: HUMANO, editorial                             ░  │
│  ░   Ritmo: cercano, cálido                              ░  │
│  ░   Altura: ~80vh                                       ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   7. CONTACTO CTA                                     █  │
│  █                                                       █  │
│  █   Fondo: NEGRO CARBÓN (#1D1D1B)                       █  │
│  █   Tipo: INVITACIÓN, centrado                          █  │
│  █   Ritmo: cierre, resolución                           █  │
│  █                                                       █  │
│  █   8. FOOTER (continuación visual)                     █  │
│  █                                                       █  │
│  ██████████████████████████████████████████████████████████  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Secuencia cromática del scroll:**
```
OSCURO → CLARO → GRIS → CLARO → OSCURO → CLARO → OSCURO
Hero     Manif.   Proy.   Trans.   Filos.   Estud.   CTA+Foot
```

Esto crea un ritmo de **respiración**: inhalar (oscuro, inmersivo) → exhalar (claro, espacio) → inhalar → exhalar. El visitante nunca se cansa porque la atmósfera cambia constantemente sin ser caótica.

---

## Sección por sección

### ① HERO — "La primera impresión es un espacio"
**Función narrativa**: Impacto sensorial. El visitante debe *sentir* antes de pensar.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a — blanco]           [Nav links]   │  ← Navbar transparente
│                                             │
│                                             │
│                                             │
│                                             │
│             VIDEO DE FONDO                  │  ← Detalles: luz atravesando
│           (fullscreen, loop)                │     hormigón, manos sobre
│                                             │     planos, texturas de
│                                             │     materiales, el Galpón
│                                             │
│                                             │
│  Experiencia                                │  ← font-display, text-hero
│  y rebeldía.                                │     peso regular, color blanco
│                                             │
│  Pensar sin pausa,                          │  ← font-body, text-xl
│  crear sin miedo.                           │     peso light, blanco 80%
│                                             │
│                    │                        │  ← Scroll indicator
│                 Scroll                      │     (línea vertical + texto)
└─────────────────────────────────────────────┘

Altura: 100vh
Fondo: Video + overlay gradiente (bottom → top)
       linear-gradient(to top, rgba(29,29,27,0.6) 0%,
       rgba(29,29,27,0.1) 40%, transparent 70%)
Texto: posición bottom-left, padding generoso
Animación entrada:
  1. Video ya cargado (poster como fallback)
  2. Título reveal línea por línea (translateY + opacity, delay 0.2s)
  3. Subtítulo fade in (delay 0.6s desde el título)
  4. Scroll indicator aparece (delay 1.2s, fade in)
```

**¿Por qué así?**
- El video comunica *atmósfera*, no proyectos específicos. Debe mostrar la *experiencia* de la arquitectura: luz, materia, espacio, personas.
- El texto está abajo-izquierda (no centrado) porque eso le da tensión compositiva y deja espacio para que el video respire.
- El gradiente es más denso abajo para dar legibilidad al texto sin matar la imagen.

**Contenido del video (guía para producción):**
```
Secuencias ideales (5-8 clips de 3-4s cada uno, loop de ~30s):
- Luz natural entrando por una abertura de hormigón
- Manos de arquitecto trazando sobre un plano
- Detalle de textura: madera, concreto, acero
- Vista del Galpón 4A desde dentro (el espacio de trabajo)
- Persona caminando por un espacio diseñado por 4A
- Detalle de maqueta a escala
- Vista aérea suave de un proyecto terminado

Tonalidad: cálida, natural, sin filtros saturados.
Ritmo: lento, contemplativo. Cuts suaves (dissolve, no cortes duros).
Sonido: mudo (siempre).
```

---

### ② MANIFIESTO — "Decir quiénes somos en una respiración"
**Función narrativa**: Identidad. Responde "¿quiénes son?" con una sola frase poderosa.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│          ── ESTUDIO 4A                      │  ← UiSectionLabel
│                                             │     (línea roja + texto)
│                                             │
│     Somos la evolución de                   │
│     cuarenta años de oficio                 │  ← font-display
│     global, fusionada con la                │     text-statement
│     energía de una generación               │     peso light
│     que se niega a repetir                  │     centrado
│     fórmulas.                               │     max-width: 540px
│                                             │
│                                             │
│                                             │
│      40+          120+            8          │  ← UiCounter x3
│      Años       Proyectos     Países        │     horizontal, centrado
│                                             │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Altura: ~70-80vh (determinada por el spacing, no forzada)
Fondo: bg (#FFFFFF)
Padding: spacing-section arriba y abajo (96-180px)
```

**¿Por qué así?**
- Después del impacto visual del hero, el visitante necesita una **pausa textual**. Un solo bloque de texto centrado, grande, ligero.
- El texto no es un párrafo de "Sobre Nosotros" — es un *manifiesto* de una sola frase. Conciso, conceptual, preciso. Principio de sofisticación: dice lo justo.
- Los counters dan *credibilidad cuantitativa* sin ser corporativos. Tres métricas, nada más.
- El enorme espacio blanco alrededor del texto ES el diseño. Le da peso a las palabras.

**Animación:**
```
1. UiSectionLabel: línea crece 0→48px, texto fade in (delay 0.2s)
2. Texto statement: reveal por líneas (clip-path o translateY),
   stagger 0.1s entre líneas
3. Counters: aparecen con fade, luego animan de 0 al valor
   (duración 1.5s, ease-out)
```

---

### ③ PROYECTOS — "Mostrar, no contar"
**Función narrativa**: Prueba tangible. El portafolio habla más que cualquier texto.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ── PROYECTOS                               │  ← UiSectionLabel
│                                             │
│  Obras seleccionadas                        │  ← font-display, text-3xl
│                                             │
│  ┌──────────────────────┐ ┌────────────┐   │
│  │                      │ │            │   │  ← Fila 1: 65% + 35%
│  │                      │ │            │   │     Imagen grande +
│  │    El Bosque          │ │  Edificio  │   │     imagen vertical
│  │    Boulevard          │ │  MSC       │   │
│  │                      │ │            │   │
│  │    Espacio Urbano    │ │  Corp.     │   │
│  └──────────────────────┘ └────────────┘   │
│                                             │
│  ┌────────────┐ ┌──────────────────────┐   │
│  │            │ │                      │   │  ← Fila 2: 45% + 55%
│  │ Costanera  │ │                      │   │     Invertida respecto
│  │ 1000       │ │   Concurso BISA      │   │     a la fila 1
│  │            │ │                      │   │
│  │ Residencial│ │   Institucional      │   │
│  └────────────┘ └──────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  ← Fila 3: 100%
│  │     Proyecto destacado              │   │     Panorámica full-width
│  │     (imagen panorámica 16:9)        │   │     Impacto visual máximo
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│               Ver todos los proyectos →     │  ← UiLink
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-alt (#EBEBEB)
Nota: El gris piedra como fondo hace que las imágenes
"floten" — les da un marco sutil sin necesidad de bordes.
```

**¿Por qué gris piedra y no blanco?**
- Crea **contraste con el manifiesto** anterior (blanco → gris = cambio de espacio).
- Las fotografías arquitectónicas se ven mejor sobre gris que sobre blanco puro — reduce el contraste perimetral y deja que la imagen mande.
- Evoca *materialidad*: el gris piedra remite al hormigón, que es coherente con el contenido.

**¿Por qué grid asimétrico?**
- Un grid de 3 columnas iguales es lo que hace todo el mundo. Es un patrón visual que dice "template".
- La asimetría imita un *layout editorial* de revista de arquitectura. Cada proyecto tiene un tamaño que sugiere jerarquía.
- La alternancia de proporciones (grande-izq → grande-der → full-width) guía el ojo en zigzag, creando movimiento.

**Interacción por proyecto:**
```
Estado normal:
  - Imagen visible completa
  - Nombre: font-display, text-2xl, color carbon, debajo de imagen
  - Categoría: text-xs, UPPERCASE, tracking-wide, color text-tertiary

Estado hover:
  - Imagen: scale 1.02 (0.6s ease-out-quart)
  - Overlay: gradiente sutil bottom→top (rgba negro 0.15)
  - Nombre y categoría permanecen debajo (NO se superponen a la imagen)
  - Cursor: pointer

Estado mobile:
  - Grid colapsa a 1 columna
  - Todas las imágenes en aspect-ratio 16:10
  - Espaciado entre items: spacing-element (24px)
```

**Animación:**
```
Cada fila entra con stagger:
  Fila 1: imágenes aparecen con fade+translateY, stagger 0.15s
  Fila 2: lo mismo, trigger independiente
  Fila 3: lo mismo
CTA final: fade in
```

---

### ④ TRANSICIÓN EDITORIAL — "Una pausa que conecta"
**Función narrativa**: Puente entre el portafolio (lo hecho) y la filosofía (el por qué). Sin esta sección, el salto de proyectos a filosofía sería abrupto.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│                                             │
│      "Cada proyecto es una                  │  ← font-display
│       respuesta que nunca                   │     text-4xl, peso light
│       se repite."                           │     centrado
│                                             │
│       — Michael Palza                       │  ← font-body, text-sm
│                                             │     tracking-wide, tertiary
│                                             │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  ← Imagen panorámica
│  │   Fotografía editorial:             │   │     full-width
│  │   el equipo, el proceso,            │   │     aspect-ratio 21:9
│  │   o un detalle arquitectónico       │   │     con parallax sutil
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Altura: ~60vh
```

**¿Por qué esta sección existe?**
- Las mejores revistas de arquitectura (El Croquis, a+u) insertan *pausas editoriales* entre bloques de contenido. Una cita, una imagen a sangre completa.
- Crea un **momento de respiración** entre la densidad visual de los proyectos y la densidad conceptual de la filosofía.
- La cita de Michael Palza humaniza la marca y conecta con la narrativa de "40+ años de oficio".
- Es una sección *corta*. No toda sección necesita ser larga.

---

### ⑤ FILOSOFÍA — "El pensamiento detrás del oficio"
**Función narrativa**: Profundidad. Explica *por qué* 4A es diferente. Es la sección más conceptual.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ── FILOSOFÍA                               │  ← UiSectionLabel (inverse)
│                                             │
│                                             │
│  ┌─────────────────────┐ ┌──────────────┐  │
│  │                     │ │              │  │
│  │  Human              │ │              │  │  ← Dos columnas
│  │  to Human           │ │   IMAGEN     │  │     55% texto / 45% imagen
│  │                     │ │   (Galpón    │  │
│  │  No diseñamos       │ │    4A o      │  │
│  │  edificios.         │ │    detalle   │  │
│  │  Diseñamos la       │ │    arq.)     │  │
│  │  experiencia de     │ │              │  │
│  │  habitarlos.        │ │              │  │
│  │                     │ │              │  │
│  │  [Conocer más →]    │ │              │  │
│  │                     │ │              │  │
│  └─────────────────────┘ └──────────────┘  │
│                                             │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  ← Premisas de diseño
│  │  ┌──────┐ ┌──────┐ ┌──────┐        │   │     3 columnas compactas
│  │  │Lugar │ │Color │ │Sensa-│        │   │     Solo título + 1 línea
│  │  │      │ │      │ │ción  │        │   │
│  │  │Cada  │ │Atmos-│ │Arqu- │        │   │
│  │  │sitio │ │fera, │ │itec- │        │   │
│  │  │es    │ │no    │ │tura  │        │   │
│  │  │único │ │deco- │ │que se│        │   │
│  │  │      │ │rado  │ │siente│        │   │
│  │  └──────┘ └──────┘ └──────┘        │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│─────────────────────────────────────────────│
│                                             │
│  ESPACIO · LUGAR · SENSORIAL · COLOR ·      │  ← UiMarquee
│  FRICCIÓN · MATIZ · ESPACIO · LUGAR ·       │     scroll horizontal
│                                             │     font-display, text-3xl
│─────────────────────────────────────────────│     opacity 0.25
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-dark (#1D1D1B)
Textos: text-inverse, text-inverse-muted
Altura: ~90-100vh
```

**¿Por qué oscura?**
- El cambio a fondo negro crea un **evento visual** en el scroll. El visitante entra en un espacio diferente — más íntimo, más serio.
- Simula la experiencia de entrar en una sala de exposición oscura. Cambia la disposición del visitante.
- Genera contraste máximo con las secciones claras anterior y posterior.

**Estructura interna:**
- **"Human to Human"** como heading gigante — es el concepto central del estudio, merece protagonismo visual.
- **Párrafo breve** (3-4 líneas máximo) — no explicar de más. Principio de claridad silenciosa.
- **Premisas** — 3 bloques compactos que destilan los valores de diseño. No son servicios, son *principios*.
- **Marquee** — funciona como separador visual y como textura. Los conceptos flotan como una corriente de pensamiento continua. Opacity baja (0.25) para que sea atmosférico, no protagonista.

**Animación:**
```
1. Transición de fondo: natural al scrollear (no abrupta)
2. "Human to Human": reveal grande (translateY 60px → 0, 1s)
3. Párrafo: fade in (delay 0.3s)
4. Premisas: stagger reveal (delay 0.12s entre cada una)
5. Marquee: ya en movimiento cuando entra en viewport
```

---

### ⑥ EL ESTUDIO — "Las personas detrás del oficio"
**Función narrativa**: Cercanía humana. Después de la profundidad conceptual, el visitante necesita ver *personas*.

```
┌─────────────────────────────────────────────┐
│                                             │
│  ── EL ESTUDIO                              │  ← UiSectionLabel
│                                             │
│  ┌──────────────┐                           │
│  │              │                           │
│  │              │  Más que una oficina,      │  ← Layout editorial
│  │   FOTO       │  un manifiesto vivo.       │     Imagen a la izq (50%)
│  │   EQUIPO     │                           │     Texto a la der (50%)
│  │   (editorial,│  Desde el Galpón 4A en    │
│  │    natural,  │  La Paz, un equipo joven  │     font-display para
│  │    en el     │  y diverso reimagina la   │     el título, font-body
│  │    Galpón)   │  arquitectura cada día.   │     para el párrafo
│  │              │                           │
│  │              │  Conocer al equipo →      │  ← UiLink
│  │              │                           │
│  └──────────────┘                           │
│                                             │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐   │
│  │      │  │      │  │      │  │      │   │  ← Tira de fotos
│  │ M.P. │  │ C.V. │  │ Arq. │  │ Arq. │   │     horizontal scroll
│  │      │  │      │  │  3   │  │  4   │   │     o grid 4 cols
│  └──────┘  └──────┘  └──────┘  └──────┘   │     aspect-ratio 3:4
│  Michael    Cecilia   [Nombre]  [Nombre]   │     Portraits profesionales
│  Palza      Velasco                        │     pero naturales
│  Fundador   Directora                      │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Altura: ~80vh
```

**¿Por qué aquí y no antes?**
- Mostrar al equipo *después* de los proyectos y la filosofía es más persuasivo. El visitante ya sabe qué hacen y por qué — ahora quiere saber *quiénes*.
- Si el equipo fuera primero, el visitante aún no tiene razón para interesarse en estas personas.

**Tratamiento de las fotos del equipo:**
```
NO: headshots corporativos sobre fondo gris
NO: fotos de estudio con iluminación artificial
NO: poses forzadas o sonrisas genéricas

SÍ: fotos en el Galpón, trabajando, en conversación
SÍ: luz natural
SÍ: encuadres no convencionales (3/4, mirada desviada)
SÍ: fotos que muestren la personalidad del equipo

Los portraits individuales: aspect-ratio 3:4, blanco y negro
o tonos cálidos desaturados. Consistentes entre sí.
```

---

### ⑦ CONTACTO CTA — "La invitación"
**Función narrativa**: Cierre. La conversión no es agresiva — es una invitación a dialogar.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│                                             │
│                                             │
│              Conversemos.                   │  ← font-display, text-5xl
│                                             │     peso light, centrado
│         La mejor arquitectura               │     color text-inverse
│         empieza con una                     │
│         conversación.                       │  ← font-body, text-lg
│                                             │     text-inverse-muted
│                                             │
│          [ Iniciar conversación ]            │  ← UiButton inverse
│                                             │
│           WhatsApp · Email                  │  ← Links secundarios
│                                             │     text-sm, subtle
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-dark (#1D1D1B)
Centrado vertical y horizontalmente
Padding: spacing-section generoso
```

**¿Por qué esta sección es minimalista?**
- El CTA es más poderoso cuando está rodeado de vacío.
- No necesita imágenes, no necesita formulario visible, no necesita argumentar más.
- "Conversemos" es una palabra que conecta con "Human to Human" — cierra el arco narrativo.
- Los canales (WhatsApp, Email) se ofrecen de forma discreta, no invasiva.

---

### ⑧ FOOTER — "Cierre silencioso"
Continuación visual del CTA (mismo fondo oscuro). No es una sección nueva, es el *remate* del recorrido.

```
┌─────────────────────────────────────────────┐
│  ─────────────────────────── (línea fina)   │
│                                             │
│  Estudio                                    │
│  4a          Inicio        Galpón 4A        │
│              Proyectos     Calle [X], #[X]  │
│              Nosotros      Calacoto          │  ← Grid 4 columnas
│              Journal       La Paz, Bolivia   │     Limpio, funcional
│              Contacto                        │
│                            IG  LI            │  ← Iconos redes
│                                             │
│  ─────────────────────────── (línea fina)   │
│  © 2026 Estudio 4A. Todos los derechos...  │
└─────────────────────────────────────────────┘
```

---

## Resumen: el ritmo completo

| # | Sección | Fondo | Tipo | Emoción | Altura aprox. |
|---|---------|-------|------|---------|---------------|
| 1 | Hero | Video+overlay | Inmersivo | Impacto | 100vh |
| 2 | Manifiesto | Blanco | Textual | Identidad | 70-80vh |
| 3 | Proyectos | Gris piedra | Visual | Exploración | Variable |
| 4 | Transición | Blanco | Editorial | Pausa | ~60vh |
| 5 | Filosofía | Negro | Conceptual | Profundidad | 90-100vh |
| 6 | El Estudio | Blanco | Humano | Cercanía | ~80vh |
| 7 | CTA | Negro | Invitación | Resolución | ~60vh |
| 8 | Footer | Negro | Funcional | Cierre | Auto |

**Total scroll estimado**: ~7-8 viewports de altura. Es un homepage *largo pero no excesivo*. Cada sección justifica su existencia.

**Lo que NO se incluyó y por qué:**
- **Blog/Journal preview**: no es prioridad para la primera impresión. El journal tiene su página propia.
- **Testimonios/reseñas**: un estudio boutique de autor no necesita validación de terceros en el home. Los proyectos hablan solos.
- **Lista de servicios**: listar "Arquitectura residencial, comercial, urbana" es genérico y debilita la percepción boutique. La diversidad se muestra en los proyectos.
- **Partners/logos de clientes**: corporativo, no boutique.
- **Slider de noticias**: distrae y es difícil de mantener actualizado.

---

## Nota sobre implementación en Nuxt 4

```vue
<!-- pages/index.vue -->
<template>
  <div>
    <HeroSection />
    <ManifestoSection />
    <ProjectsShowcase />
    <EditorialTransition />
    <PhilosophySection />
    <StudioPreview />
    <ContactCta />
  </div>
</template>
```

Cada sección es un componente independiente en `components/sections/home/`. Esto permite:
- Trabajar sección por sección con Claude Code
- Testing y refinamiento aislado
- Lazy loading de secciones pesadas
- Reordenar fácilmente si el cliente quiere experimentar con el flujo

---

*El homepage es el vestíbulo de Estudio 4A.
El visitante no debería salir de él pensando "bonito sitio".
Debería salir pensando "quiero trabajar con ellos".*
