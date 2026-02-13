# Estudio 4A — Arquitectura de la Página "Contacto"

> La página de Contacto no es un formulario.
> Es una **invitación a conversar** — el último paso de un recorrido
> que empezó con emoción (Home), pasó por confianza (Estudio)
> y prueba (Proyectos). Aquí se cierra el arco: el visitante
> se convierte en interlocutor.

---

## Lógica narrativa

El visitante que llega a Contacto ya tomó una decisión. No necesita más argumentos, más imágenes, más secciones persuasivas. Necesita:

```
1. ¿Cómo los contacto?         → FORMULARIO + CANALES
2. ¿Dónde están?               → UBICACIÓN
3. ¿Puedo ir personalmente?    → MAPA + DIRECCIÓN
```

Tres preguntas. Tres respuestas. Nada más.

El error más común en páginas de contacto es **seguir vendiendo**. El visitante ya compró la idea — ahora quiere actuar. Cada palabra extra es fricción. Cada sección extra es un obstáculo entre la intención y la acción.

**Principio rector: esta es la página más corta del sitio, y eso es correcto.**

---

## Mapa de ritmo visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░                                                       ░  │
│  ░   1. HERO + FORMULARIO                                ░  │
│  ░                                                       ░  │
│  ░   Fondo: BLANCO (#FFFFFF)                             ░  │
│  ░   Tipo: FUNCIONAL, acción directa                     ░  │
│  ░   Ritmo: claro, sin preámbulos                        ░  │
│  ░                                                       ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ▒                                                       ▒  │
│  ▒   2. UBICACIÓN + MAPA                                 ▒  │
│  ▒                                                       ▒  │
│  ▒   Fondo: GRIS PIEDRA (#EBEBEB)                        ▒  │
│  ▒   Tipo: INFORMATIVO, geográfico                       ▒  │
│  ▒   Ritmo: contextual, orientador                       ▒  │
│  ▒                                                       ▒  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │
│                                                             │
│  ██████████████████████████████████████████████████████████  │
│  █                                                       █  │
│  █   3. FOOTER                                           █  │
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
Hero+Form  Ubicación     Footer
```

Tres bloques. La misma cadencia final que la página de Proyectos (blanco → gris → negro), creando consistencia sistémica entre páginas.

**Lo que NO hay**: hero con imagen, secciones de filosofía, testimonios, preguntas frecuentes, "por qué elegirnos". Nada de eso. El visitante ya hizo ese recorrido.

---

## Sección por sección

### ① HERO + FORMULARIO — "Ir al grano con elegancia"
**Función narrativa**: Acción. Es la primera y principal sección. El formulario no está "abajo" ni "después de" — está desde el primer scroll.

```
┌─────────────────────────────────────────────┐
│                                             │
│  [Logo 4a]                     [Nav links]  │  ← Navbar sólido desde inicio
│                                             │     (no hay imagen de fondo)
│                                             │
│                                             │
│                                             │
│  ┌───────────────────┐  ┌───────────────┐  │
│  │                   │  │               │  │
│  │  ── CONTACTO      │  │               │  │
│  │                   │  │  FORMULARIO   │  │
│  │  Conversemos.     │  │               │  │
│  │                   │  │  Nombre       │  │
│  │  La mejor         │  │  ─────────    │  │
│  │  arquitectura     │  │               │  │
│  │  empieza con      │  │  Email        │  │
│  │  una buena        │  │  ─────────    │  │
│  │  conversación.    │  │               │  │
│  │                   │  │  Teléfono     │  │
│  │                   │  │  ─────────    │  │
│  │                   │  │               │  │
│  │  ── (línea roja)  │  │  Mensaje      │  │
│  │                   │  │  ─────────    │  │
│  │  También puedes   │  │  ─────────    │  │
│  │  escribirnos:     │  │  ─────────    │  │
│  │                   │  │  ─────────    │  │
│  │  hola@4a.bo       │  │               │  │
│  │  +591 XXX XXXX    │  │  [ Enviar ]   │  │
│  │                   │  │               │  │
│  │  WhatsApp →       │  │               │  │
│  │                   │  │               │  │
│  └───────────────────┘  └───────────────┘  │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg (#FFFFFF)
Layout: dos columnas 45% / 55%
Padding-top: 160px (navbar + respiro generoso)
Padding-bottom: spacing-section
```

**¿Por qué dos columnas y no formulario centrado?**
- Un formulario centrado y solo en la página se siente vacío e institucional (como un formulario de soporte técnico).
- El layout a dos columnas permite que el lado izquierdo *acompañe* al formulario con texto cálido e información de contacto alternativa, sin competir con él.
- La columna izquierda le da al visitante opciones: si no quiere llenar un formulario, puede escribir un email o enviar un WhatsApp. La barrera de entrada baja.
- Es un layout editorial, no un layout de aplicación web.

---

#### Columna izquierda: La invitación

```
UiSectionLabel:
  Línea roja + "CONTACTO"

Headline:
  "Conversemos."
  font-display, text-5xl, peso light

Subtexto:
  "La mejor arquitectura empieza
   con una buena conversación."
  font-body, text-lg, color text-secondary
  max-width: 360px

  (Este texto conecta con el CTA del homepage y de
   las otras páginas — cierra el arco narrativo)

Separador:
  Línea roja, 48px, margen vertical spacing-block

Canales directos:
  Label: "También puedes escribirnos:"
         font-body, text-xs, UPPERCASE, tracking-wider, text-tertiary

  Email:
    "hola@4a.bo" (o el email real)
    font-body, text-base, color text
    hover → color accent
    Es un mailto: link

  Teléfono:
    "+591 XXX XXXX"
    font-body, text-base, color text
    hover → color accent
    Es un tel: link

  WhatsApp:
    "WhatsApp →"
    font-body, text-sm, UPPERCASE, tracking-wide
    color accent
    hover → accent-hover
    Link directo a wa.me/591XXXXXXX

  Redes:
    Instagram · LinkedIn
    font-body, text-sm, color text-tertiary
    hover → color text
    Solo texto, NO iconos grandes
```

**¿Por qué ofrecer tantos canales?**
- El formulario tiene fricción (llenar campos, esperar respuesta). No todo el mundo quiere usarlo.
- En Bolivia y Latinoamérica, **WhatsApp es el canal preferido** para contacto profesional. No incluirlo sería un error.
- El email es para quien quiere enviar un brief o información detallada.
- Las redes son para quien quiere seguir, no contactar — por eso van al final y en tamaño discreto.

---

#### Columna derecha: El formulario

```
┌───────────────────────────────────┐
│                                   │
│  Nombre                          │  ← Label
│  ────────────────────────────     │  ← Input (línea inferior)
│                                   │
│                                   │
│  Correo electrónico              │
│  ────────────────────────────     │
│                                   │
│                                   │
│  Teléfono (opcional)             │
│  ────────────────────────────     │
│                                   │
│                                   │
│  ¿Sobre qué te gustaría          │  ← Select o campo abierto
│  conversar?                       │
│  ────────────────────────────     │
│                                   │
│                                   │
│  Cuéntanos sobre tu proyecto     │
│  ────────────────────────────     │  ← Textarea
│  ────────────────────────────     │
│  ────────────────────────────     │
│  ────────────────────────────     │
│                                   │
│                                   │
│  [ Enviar mensaje ]              │  ← UiButton primary
│                                   │
│                                   │
└───────────────────────────────────┘
```

**Diseño del formulario — reglas estrictas:**

```
ESTILO DE INPUTS:

  ❌ NO: inputs con borde completo (caja rectangular)
  ❌ NO: inputs con background gris/coloreado
  ❌ NO: inputs con border-radius grande
  ❌ NO: inputs con iconos adentro
  ❌ NO: floating labels (se ven "tech startup")
  ❌ NO: placeholder como label (accesibilidad pobre)

  ✅ SÍ: inputs con SOLO línea inferior (border-bottom: 1px)
  ✅ SÍ: label arriba del input, siempre visible
  ✅ SÍ: transición sutil al focus

  Input styling:
    border: none
    border-bottom: 1px solid var(--color-border)
    background: transparent
    padding: 12px 0
    font-family: var(--font-body)
    font-size: var(--text-base)
    color: var(--color-text)
    outline: none
    width: 100%
    border-radius: 0 (importante: eliminar radius del browser)

  Focus state:
    border-bottom-color: var(--color-accent) ← Línea se vuelve roja
    transition: border-color var(--duration-normal) var(--ease-out-quart)

    NO: glow, box-shadow, outline azul
    SÍ: solo la línea cambia de gris a rojo. Sutil, preciso.

  Label styling:
    font-family: var(--font-body)
    font-size: var(--text-sm)
    color: var(--color-text-tertiary)
    text-transform: uppercase
    letter-spacing: var(--tracking-wide)
    margin-bottom: 8px

  Textarea:
    Misma estética que inputs
    min-height: 120px
    resize: vertical (permitir, no horizontal)

  Spacing entre campos:
    spacing-element (24px) entre cada campo
    spacing-block (48px) antes del botón

  "(opcional)":
    Cuando un campo no es obligatorio, el label dice:
    "Teléfono (opcional)"
    El "(opcional)" en peso regular, no uppercase, color text-tertiary
```

**Campos del formulario:**
```
1. Nombre *              → text input
2. Correo electrónico *  → email input
3. Teléfono              → tel input (opcional)
4. Tipo de consulta      → select o radio discreto (opcional)
5. Mensaje *             → textarea

Tipo de consulta (opciones):
  "Proyecto residencial"
  "Proyecto corporativo"
  "Proyecto urbano"
  "Consulta general"
  "Prensa / Colaboración"

Este campo es OPCIONAL. Si se incluye, usar un select
nativo estilizado (NO un custom dropdown complejo) o
un grupo de radio buttons discretos.

Máximo 5 campos. Un formulario con más de 5 campos
pierde conversiones. Si el estudio necesita más información,
la obtiene en la conversación posterior.
```

**El select (si se incluye):**
```
Estilo del select:
  Mismo estilo visual que los inputs (línea inferior)
  appearance: none (eliminar estilo nativo)
  Flecha custom: chevron pequeño (SVG inline), color text-tertiary

  Al abrir: usar el dropdown nativo del browser
  (un custom dropdown es complejidad innecesaria
  para 5 opciones)
```

**Botón de envío:**
```
UiButton variante primary:
  bg: accent (#B81716)
  text: text-inverse (#FFFFFF)
  hover: accent-hover (#D41D1C)
  font: font-body, text-sm, UPPERCASE, tracking-wide, medium
  padding: 16px 32px
  border-radius: radius-sm (2px)

  Es el ÚNICO elemento rojo dominante en la página.
  Cumple la regla: un solo botón primary por viewport.

  Alineación: izquierda (no centrado, no full-width)
  Esto lo hace sentirse como parte del formulario,
  no como un banner de conversión.
```

**Estados del formulario:**

```
Validación:
  En tiempo real, campo por campo (no al enviar)
  Error: label y línea inferior cambian a accent (#B81716)
         + mensaje de error debajo: text-xs, color accent
         "Este campo es obligatorio"
         "Ingresa un correo válido"

  NO: tooltips, modales, shaking animations
  SÍ: color + texto debajo. Discreto.

Enviando:
  Botón cambia texto: "Enviando..."
  Botón se deshabilita (opacity 0.6, cursor not-allowed)
  NO: spinner/loader visual complejo
  SÍ: solo el cambio de texto comunica el estado

Enviado (éxito):
  El formulario hace un fade out sutil (0.4s)
  En su lugar aparece un mensaje de confirmación:

  ┌───────────────────────────────────┐
  │                                   │
  │                                   │
  │  Mensaje enviado.                │  ← font-display, text-3xl
  │                                   │     peso light
  │  Te responderemos                │
  │  en las próximas                 │  ← font-body, text-base
  │  24 horas.                       │     color text-secondary
  │                                   │
  │                                   │
  └───────────────────────────────────┘

  NO: confetti, checkmarks animados, redirect automático
  SÍ: texto sereno que confirma y establece expectativa

Error de envío:
  Mensaje debajo del botón:
  "No pudimos enviar el mensaje.
   Intenta de nuevo o escríbenos a hola@4a.bo"
  text-sm, color accent

  El email alternativo es clave: si el formulario falla,
  el visitante tiene un plan B inmediato.
```

**Animación de entrada:**
```
1. Columna izquierda:
   UiSectionLabel: línea crece + texto fade in
   Headline: reveal (translateY + opacity)
   Subtexto: fade in (delay 0.2s)
   Canales: stagger fade in (delay 0.3s)

2. Columna derecha:
   Formulario completo: fade in (delay 0.3s desde headline)
   NO animar campo por campo — es un bloque funcional,
   no un elemento decorativo. Aparece junto.
```

---

### ② UBICACIÓN + MAPA — "Dónde encontrarnos"
**Función narrativa**: Orientación geográfica. Para el visitante local (potencial cliente boliviano), saber dónde está el Galpón es relevante. Para el visitante internacional, da contexto.

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│  ┌───────────────────┐  ┌───────────────┐  │
│  │                   │  │               │  │
│  │  ── VISÍTANOS     │  │               │  │
│  │                   │  │               │  │
│  │  Galpón 4A        │  │     MAPA      │  │
│  │                   │  │               │  │
│  │  Calle [X], #[X]  │  │   (estático   │  │
│  │  Calacoto         │  │    o embed    │  │
│  │  La Paz, Bolivia  │  │    mínimo)    │  │
│  │                   │  │               │  │
│  │                   │  │               │  │
│  │  Lunes a viernes  │  │               │  │
│  │  9:00 — 18:00     │  │               │  │
│  │                   │  │               │  │
│  │  Cómo llegar →    │  │               │  │
│  │                   │  │               │  │
│  └───────────────────┘  └───────────────┘  │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Fondo: bg-alt (#EBEBEB)
Layout: dos columnas 40% / 60%
Padding: spacing-section arriba y abajo
```

**Columna izquierda: información**

```
UiSectionLabel:
  Línea roja + "VISÍTANOS"

Nombre del espacio:
  "Galpón 4A"
  font-display, text-3xl, peso regular

Dirección:
  "Calle [X], #[X]
   Calacoto
   La Paz, Bolivia"
  font-body, text-base, color text-secondary
  line-height: leading-relaxed (1.8)

Horario:
  "Lunes a viernes"
  font-body, text-sm, color text-tertiary, UPPERCASE, tracking-wide

  "9:00 — 18:00"
  font-body, text-base, color text

Link:
  "Cómo llegar →"
  font-body, text-sm, UPPERCASE, tracking-wide
  color accent
  hover → accent-hover
  Abre Google Maps en nueva pestaña

Spacing entre bloques: spacing-element (24px)
```

**Columna derecha: el mapa**

```
OPCIÓN A — Mapa estático (RECOMENDADA):
  Imagen estática de Google Maps Static API
  o captura de mapa estilizada en escala de grises

  ¿Por qué estático?
  - Un embed interactivo de Google Maps rompe la estética
    del sitio (colores, tipografía, UI de Google)
  - Carga rápida, sin JavaScript de terceros
  - Se ve limpio y controlado
  - El link "Cómo llegar" abre el mapa interactivo
    para quien lo necesite

  Estilo: escala de grises / monocromático
  Aspect ratio: 4:3 o 1:1
  Border-radius: radius-md (4px)

  Un punto/marcador en accent (#B81716) marca la ubicación

OPCIÓN B — Google Maps embed estilizado:
  Si el cliente insiste en mapa interactivo:
  - Usar Snazzy Maps o Google Maps Styling API
    para crear un estilo monocromático
  - Colores: gris piedra, blanco, negro carbón
  - Marcador custom en rojo (#B81716)
  - Desactivar POIs (puntos de interés) para limpieza
  - Desactivar controles estándar de Google excepto zoom
  - Height: 400px desktop, 300px mobile

  Es más trabajo pero respeta la paleta si se hace bien.

OPCIÓN C — Imagen fotográfica:
  Una foto exterior del Galpón 4A
  (la fachada, la entrada, el barrio)
  Muestra el lugar real, no un mapa abstracto
  El link "Cómo llegar" provee la navegación GPS

  Esta opción es la más "humana" y coherente con
  "Human to Human", pero requiere una buena foto.
```

**¿Por qué esta sección existe si ya está toda la info en la columna izquierda del formulario?**
- La columna izquierda del formulario tiene email, teléfono, WhatsApp: canales digitales.
- Esta sección tiene dirección, horario, mapa: información física.
- Separarlas conceptualmente es más claro. "Escríbenos" vs "Visítanos".
- El mapa/imagen le da presencia geográfica al estudio. No es una empresa virtual — tiene un lugar real, un Galpón con nombre propio.

**Mobile:**
```
Stack vertical: información arriba, mapa abajo.
Mapa: full-width, height 280px.
Link "Cómo llegar": abre app de mapas nativa del dispositivo.
```

**Animación:**
```
1. Columna info: stagger reveal (label, título, dirección, horario)
2. Mapa/imagen: fade in + scale sutil (1.02 → 1.0)
```

---

### ③ FOOTER

Idéntico al resto de páginas. Continuidad sistémica.

**Sin CTA "Conversemos" antes del footer en esta página** — sería redundante. El visitante ya ESTÁ en la página de contacto. El formulario es el CTA. El footer cierra directamente.

---

## Resumen

| # | Sección | Fondo | Propósito |
|---|---------|-------|-----------|
| 1 | Hero + Formulario | Blanco | La acción principal |
| 2 | Ubicación + Mapa | Gris piedra | Contexto geográfico |
| 3 | Footer | Negro | Cierre |

**Total scroll**: ~2.5-3 viewports. Es la página más corta del sitio, y deliberadamente así. Aquí no se contempla — se actúa.

---

## Lo que NO incluí y por qué

**FAQ / Preguntas frecuentes**
- Un estudio boutique de arquitectura no es un SaaS. Si el visitante tiene preguntas, las hace en el formulario o por WhatsApp. Una sección de FAQ se siente corporativa y genérica.

**Testimonios / "Lo que dicen nuestros clientes"**
- Si el visitante llegó hasta Contacto, ya decidió. Los testimonios en la página de contacto son un intento desesperado de convencer al ya convencido. Sobran.

**Calculadora de presupuesto / "Solicita tu cotización"**
- Demasiado transaccional. La arquitectura boutique no cotiza por formulario — inicia con una conversación. El tono debe ser "conversemos", no "cotiza aquí".

**Sección "Nuestro proceso" o "Cómo trabajamos"**
- Ya está en la página de Estudio. Repetir contenido es ruido.

**Múltiples oficinas / sedes**
- Si 4A tiene una sede (el Galpón), una sola ubicación. Si en el futuro tiene más, se adapta. No diseñar para un caso que no existe.

**Chat en vivo / Chatbot**
- Contradice el principio de "interacción contenida, sin artificio tecnológico innecesario". Un chatbot es lo opuesto a "Human to Human".

**Banner de cookies gigante**
- Implementar un notice de cookies mínimo (texto + link, no modal), solo si es legalmente necesario. No es una sección de diseño.

---

## Notas de implementación

### Envío del formulario

```typescript
// composables/useContactForm.ts

interface ContactForm {
  name: string
  email: string
  phone?: string
  type?: 'residencial' | 'corporativo' | 'urbano' | 'general' | 'prensa'
  message: string
}

// Opciones de backend (elegir UNA):
//
// A) Formspree (sin backend propio)
//    POST https://formspree.io/f/{form_id}
//    Pros: cero configuración, inbox de email
//    Contras: dependencia externa
//
// B) Nuxt server route (/server/api/contact.post.ts)
//    Envía email vía Resend, SendGrid o similar
//    Pros: control total, sin terceros
//    Contras: requiere API key y configuración
//
// C) Notion como CMS de contactos
//    Crea una entrada en una base de datos de Notion
//    Pros: el cliente ve los contactos en su Notion
//    Contras: API de Notion, más complejidad
//
// Recomendación: B (server route + Resend)
// Es la opción más profesional y controlada.
```

```typescript
// server/api/contact.post.ts (ejemplo con Resend)
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validación server-side
  if (!body.name || !body.email || !body.message) {
    throw createError({ statusCode: 400, message: 'Campos requeridos faltantes' })
  }

  // Enviar email
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Sitio Web <web@4a.bo>',
    to: 'hola@4a.bo',
    replyTo: body.email,
    subject: `Nuevo contacto: ${body.name}`,
    html: `
      <p><strong>Nombre:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.phone ? `<p><strong>Teléfono:</strong> ${body.phone}</p>` : ''}
      ${body.type ? `<p><strong>Tipo:</strong> ${body.type}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${body.message}</p>
    `
  })

  return { success: true }
})
```

### Validación client-side

```typescript
// Validación simple, sin librerías pesadas
// (Zod es aceptable si ya está en el proyecto,
//  pero para 5 campos es overkill)

const validate = (form: ContactForm) => {
  const errors: Record<string, string> = {}

  if (!form.name.trim())
    errors.name = 'Tu nombre es necesario'

  if (!form.email.trim())
    errors.email = 'Necesitamos tu correo'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Ingresa un correo válido'

  if (!form.message.trim())
    errors.message = 'Cuéntanos sobre tu proyecto'

  return errors
}

// Mensajes de error en tono HUMANO, no técnico:
// NO: "Campo requerido" / "Email inválido"
// SÍ: "Tu nombre es necesario" / "Ingresa un correo válido"
// SÍ: "Cuéntanos sobre tu proyecto"
```

### Anti-spam

```
NO: reCAPTCHA visible (rompe la estética, fricciona al usuario)

SÍ: Honeypot field (campo oculto que solo bots llenan)
    <input type="text" name="website" class="sr-only" tabindex="-1" />
    Si 'website' tiene contenido → es bot → rechazar silenciosamente

SÍ: Rate limiting en el server route (máx 5 envíos por IP/hora)

SÍ: Validación server-side (no confiar solo en el frontend)

Opcional: Turnstile de Cloudflare (invisible, no intrusivo)
          Si el spam se vuelve problema, añadirlo después.
```

### Estructura de archivos

```
pages/
  contacto.vue

components/
  sections/
    contact/
      ContactHero.vue        ← Columna izq (texto) + columna der (form)
      ContactForm.vue         ← El formulario como componente aislado
      ContactLocation.vue     ← Ubicación + mapa

server/
  api/
    contact.post.ts           ← Endpoint de envío
```

```vue
<!-- pages/contacto.vue -->
<template>
  <div>
    <ContactHero />
    <ContactLocation />
  </div>
</template>
```

Nota: no hay componente CTA antes del footer — la página entera ES el CTA.

---

## Responsive

```
Desktop (≥ 1024px):
  Hero + Form: dos columnas 45/55
  Ubicación: dos columnas 40/60

Tablet (768-1023px):
  Hero + Form: dos columnas 45/55 (se mantiene,
               pero con padding reducido)
  Ubicación: dos columnas 40/60

Mobile (< 768px):
  Hero + Form: stack vertical
    1. Headline + subtexto
    2. Formulario (full width)
    3. Canales de contacto (email, tel, WhatsApp)
       Estos bajan DEBAJO del formulario en mobile.
       ¿Por qué? Porque en mobile, el formulario debe
       ser lo primero que el pulgar alcanza. Los canales
       alternativos son secundarios.

  Ubicación: stack vertical
    1. Info (dirección, horario)
    2. Mapa (full-width, 280px alto)

  Input font-size: mínimo 16px (evitar zoom en iOS)
```

**Mobile: orden especial de la columna izquierda**
```
En desktop:
  Headline → Subtexto → Línea → Canales

En mobile:
  Headline → Subtexto → [FORMULARIO SE INSERTA AQUÍ] → Línea → Canales

Esto se logra reordenando con CSS (order) o
reestructurando el markup con un breakpoint slot.
El formulario toma prioridad visual en mobile.
```

---

## Accesibilidad

```
Formulario:
  - Todos los inputs tienen <label> asociado (for/id)
  - Labels SIEMPRE visibles (no solo placeholder)
  - Tab order lógico (nombre → email → tel → tipo → mensaje → enviar)
  - Errores anunciados con aria-live="polite"
  - Botón submit: type="submit", no solo onClick
  - Textarea: aria-describedby con contador de caracteres si se limita

Mapa:
  - Si es imagen: alt descriptivo ("Ubicación del Galpón 4A en Calacoto, La Paz")
  - Si es embed: title="Mapa de ubicación de Estudio 4A"
  - Link "Cómo llegar": abre en nueva pestaña con rel="noopener"

Links de contacto:
  - Email: href="mailto:hola@4a.bo"
  - Teléfono: href="tel:+591XXXXXXX"
  - WhatsApp: href="https://wa.me/591XXXXXXX"
  - Todos con aria-label descriptivo si el texto visual es ambiguo
```

---

*La página de Contacto es donde la sofisticación
se mide en lo que NO hay.
Sin secciones extra, sin argumentos, sin ruido.
Solo una invitación clara, canales accesibles
y un formulario que se llena en 60 segundos.*
