# Design System — Tokens Técnicos

> Este archivo contiene los design tokens del proyecto. Todo se define en `app/assets/css/main.css` dentro de `@theme {}`.
> **NO existe** `tailwind.config.js` — todo es CSS-first con `@tailwindcss/vite`.

## Regla Tailwind v4

Las variables `@theme` se convierten automáticamente en clases utilitarias:
```
--color-carbon  →  bg-carbon, text-carbon, border-carbon
--spacing-section  →  p-section, m-section, gap-section
--font-display  →  font-display
```

---

## Paleta de Colores

### Colores Base
| Token | Valor | Clase | Uso |
|-------|-------|-------|-----|
| `--color-carbon` | `#1D1D1B` | `bg-carbon`, `text-carbon` | Textos, fondos oscuros, logo |
| `--color-red` | `#B81716` | `bg-red`, `text-red` | Acento quirúrgico (3%) |
| `--color-stone` | `#EBEBEB` | `bg-stone`, `text-stone` | Fondos alternativos |
| `--color-white` | `#FFFFFF` | `bg-white`, `text-white` | Fondo principal (70%) |

### Semánticos — Fondos
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#FFFFFF` | Fondo principal |
| `--color-bg-alt` | `#EBEBEB` | Secciones alternativas |
| `--color-bg-dark` | `#1D1D1B` | Secciones oscuras |
| `--color-bg-dark-elevated` | `#2A2A28` | Elementos elevados sobre dark |

### Semánticos — Textos
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-text` | `#1D1D1B` | Texto principal |
| `--color-text-secondary` | `#5C5C5A` | Texto secundario |
| `--color-text-tertiary` | `#8A8A87` | Labels, captions |
| `--color-text-inverse` | `#FFFFFF` | Texto sobre fondos oscuros |
| `--color-text-inverse-muted` | `rgba(255,255,255,0.6)` | Texto sutil sobre dark |

### Semánticos — Acento
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-accent` | `#B81716` | CTA, líneas decorativas |
| `--color-accent-hover` | `#D41D1C` | Estado hover de acento |
| `--color-accent-subtle` | `rgba(184,23,22,0.06)` | Fondo hover secondary button |

### Semánticos — Bordes
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-border` | `#DCDCDA` | Bordes normales |
| `--color-border-subtle` | `#EBEBEB` | Bordes sutiles |
| `--color-border-dark` | `rgba(255,255,255,0.12)` | Bordes sobre fondos oscuros |

---

## Tipografía

### Familias
| Token | Valor | Uso |
|-------|-------|-----|
| `--font-display` | `'Cormorant Garamond', Georgia, serif` | Títulos, headlines, statements |
| `--font-body` | `'DM Sans', system-ui, sans-serif` | Body, labels, UI |

Fuentes self-hosted via `@fontsource`.

### Escala Tipográfica
| Token | Valor | Uso |
|-------|-------|-----|
| `--text-xs` | `0.75rem` | Labels mínimos |
| `--text-sm` | `0.875rem` | Labels, captions |
| `--text-base` | `1rem` | Body text |
| `--text-lg` | `1.125rem` | Body grande |
| `--text-xl` | `1.25rem` | Subtítulos |
| `--text-2xl` | `1.5rem` | Subtítulos grandes |
| `--text-3xl` | `2rem` | Headings |
| `--text-4xl` | `2.5rem` | Headings grandes |
| `--text-5xl` | `3.5rem` | Section headings |
| `--text-6xl` | `4.5rem` | Display |
| `--text-hero` | `clamp(3rem, 8vw, 7rem)` | Hero headline |
| `--text-statement` | `clamp(2rem, 5vw, 4rem)` | Statements centrales |

### Pesos
| Token | Valor | Regla |
|-------|-------|-------|
| `--font-weight-light` | `300` | Títulos por defecto |
| `--font-weight-regular` | `400` | H1, body text |
| `--font-weight-medium` | `500` | Labels, botones, nav links |

**Regla**: Máximo 2 pesos visibles por sección. NUNCA bold/extra-bold.

### Line Heights
| Token | Valor | Uso |
|-------|-------|-----|
| `--leading-tight` | `1.05` | H1, hero |
| `--leading-snug` | `1.2` | Headings generales |
| `--leading-normal` | `1.6` | Body text |
| `--leading-relaxed` | `1.8` | Body con mucho espacio |

### Letter Spacing
| Token | Valor | Uso |
|-------|-------|-----|
| `--tracking-tight` | `-0.02em` | Headings grandes |
| `--tracking-normal` | `0` | Body text |
| `--tracking-wide` | `0.08em` | Labels, nav links |
| `--tracking-wider` | `0.15em` | Section labels uppercase |

---

## Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `--spacing-section` | `clamp(96px, 12vw, 180px)` | Entre secciones |
| `--spacing-section-sm` | `clamp(64px, 8vw, 120px)` | Entre secciones menores |
| `--spacing-block` | `48px` | Entre bloques de contenido |
| `--spacing-element` | `24px` | Entre elementos relacionados |
| `--spacing-tight` | `16px` | Elementos cercanos |
| `--spacing-micro` | `8px` | Elementos mínimos |

---

## Layout

| Token | Valor | Uso |
|-------|-------|-----|
| `--max-width` | `1440px` | Container máximo |
| `--max-width-content` | `1200px` | Contenido principal |
| `--max-width-text` | `680px` | Columna de texto |
| `--max-width-narrow` | `540px` | Texto estrecho (statements) |
| `--grid-gutter` | `clamp(16px, 2vw, 32px)` | Gutter del grid |

---

## Radios

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `2px` | Botones, inputs |
| `--radius-md` | `4px` | Cards |
| `--radius-lg` | `8px` | Modales, overlays |

**NUNCA** `border-radius > 8px`. Arquitectura = geometría limpia.

---

## Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-subtle` | `0 1px 2px rgba(29,29,27,0.04)` | Elevación mínima |
| `--shadow-sm` | `0 2px 8px rgba(29,29,27,0.06)` | Cards, navbar |
| `--shadow-md` | `0 4px 16px rgba(29,29,27,0.08)` | Modales |

Casi imperceptibles. Sugieren, no gritan.

---

## Transiciones

### Easings
| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveals, entrances |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Hover states |
| `--ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)` | Page transitions |

### Duraciones
| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-fast` | `200ms` | Hover, micro-interacciones |
| `--duration-normal` | `350ms` | Transiciones normales |
| `--duration-slow` | `700ms` | Reveals de líneas |
| `--duration-reveal` | `1000ms` | Scroll reveals |

---

## Integración Técnica

- Plugin: `@tailwindcss/vite` (NO `@nuxtjs/tailwindcss`)
- Archivo: `app/assets/css/main.css`
- NO usar `@apply` salvo casos extremadamente justificados
- Si una clase Tailwind v4 no funciona → usar CSS puro con las variables
