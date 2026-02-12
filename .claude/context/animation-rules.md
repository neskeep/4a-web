# Reglas de Animación — Estudio 4A

## Filosofía

> Las animaciones se notan solo cuando faltan, como el aire acondicionado.

---

## Lista PERMITIDO

Animaciones contenidas y funcionales:
- Fade in + `translateY` sutil (30-50px) con scroll trigger
- Stagger entre elementos (delay 0.08-0.15s)
- Parallax sutil en imágenes (máximo 10-12%)
- Scale en hover de imágenes (1.0 → 1.02, 0.6s)
- Línea roja que crece de 0 a 48px
- Counter animado para métricas
- Smooth scroll con Lenis
- Page transitions con overlay
- Navbar: fade in de fondo al scroll

## Lista PROHIBIDO

Animaciones artificiosas y genéricas:
- Bounce, wobble, elastic, overshoot
- Parallax > 15%
- Animaciones en loop (excepto scroll indicator y marquee)
- Typing effects
- Elementos que "vuelan" desde los lados
- Duración > 1s (excepto page transitions)
- Scroll hijacking
- Animaciones que retrasen el acceso al contenido

---

## Composable useScrollReveal

Código de referencia:

```typescript
// composables/useScrollReveal.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal() {
  const reveal = (el: HTMLElement, opts = {}) => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        ...opts
      }
    )
  }

  const stagger = (els: HTMLElement[], delay = 0.1) => {
    gsap.fromTo(els,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: delay,
        scrollTrigger: { trigger: els[0], start: 'top 88%', once: true }
      }
    )
  }

  return { reveal, stagger }
}
```

---

## Plugin GSAP

```typescript
// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8
  })

  return { provide: { gsap, ScrollTrigger } }
})
```

---

## Plugin Lenis

```typescript
// plugins/lenis.client.ts
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return { provide: { lenis } }
})
```

---

## Page Transitions

1. Click → overlay `bg-dark` entra desde abajo (500ms `ease-in-out-quart`)
2. Nueva página carga detrás
3. Overlay sale arriba (500ms)
4. Animaciones de nueva página se disparan

---

## Prefers-Reduced-Motion

Cuando el usuario tiene `prefers-reduced-motion: reduce`:
- Desactivar animaciones GSAP
- Mantener transiciones CSS a 0ms o mínimas
- Lenis sigue funcionando (es smooth scroll, no animación decorativa)

---

## Cleanup

**OBLIGATORIO**: En `onUnmounted()` de cada componente que use ScrollTrigger:

```typescript
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
```

O mejor, guardar referencia y matar solo las propias:

```typescript
const triggers: ScrollTrigger[] = []
// ... crear triggers y pushear a array
onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
```
