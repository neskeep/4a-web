<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const leftCol = sectionRef.value.querySelector<HTMLElement>('[data-col="left"]')
    const rightCol = sectionRef.value.querySelector<HTMLElement>('[data-col="right"]')
    if (leftCol) leftCol.style.clipPath = 'inset(0 0 0 0)'
    if (rightCol) rightCol.style.clipPath = 'inset(0 0 0 0)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-cta-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-cta]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const leftCol = sectionRef.value.querySelector('[data-col="left"]')
  const rightCol = sectionRef.value.querySelector('[data-col="right"]')
  const words = sectionRef.value.querySelectorAll('[data-cta-word]')
  const paragraph = sectionRef.value.querySelector('[data-cta="paragraph"]')
  const button = sectionRef.value.querySelector('[data-cta="button"]')
  const links = sectionRef.value.querySelector('[data-cta="links"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    leftCol,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
  )
    .fromTo(
      rightCol,
      { clipPath: 'inset(0 0 0 100%)' },
      { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
      0,
    )
    .fromTo(
      words,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
      0.5,
    )
    .fromTo(
      paragraph,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.out' },
      '-=0.3',
    )
    .fromTo(
      button,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
    )
    .fromTo(
      links,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.1',
    )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark">
    <div class="flex min-h-[50vh] flex-col lg:flex-row">
      <!-- Zona izquierda 50% — heading + paragraph -->
      <div
        data-col="left"
        class="flex w-full flex-col justify-center bg-bg-dark px-8 py-section lg:w-1/2 lg:px-16"
        style="clip-path: inset(0 100% 0 0)"
      >
        <UiSectionLabel label="Contacto" :inverse="true" class="mb-block" />

        <h2
          class="font-display leading-tight tracking-tight text-text-inverse"
          style="font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 300"
        >
          <span data-cta-word class="block" style="opacity: 0; transform: translateY(50px)">Conversemos.</span>
        </h2>

        <p
          data-cta="paragraph"
          class="mt-element max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
          style="opacity: 0"
        >
          La mejor arquitectura empieza con una conversación.
          Cuéntanos tu visión — lo demás lo construimos juntos.
        </p>
      </div>

      <!-- Zona derecha 50% — button + links centrados -->
      <div
        data-col="right"
        class="flex w-full flex-col items-center justify-center bg-bg-dark-elevated px-8 py-section lg:w-1/2"
        style="clip-path: inset(0 0 0 100%)"
      >
        <div data-cta="button" style="opacity: 0">
          <UiButton variant="inverse" to="/contacto">
            Iniciar conversación
          </UiButton>
        </div>

        <div
          data-cta="links"
          class="mt-element flex items-center gap-tight font-body text-sm"
          style="opacity: 0"
        >
          <a
            href="https://wa.me/59178000000"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-inverse-muted transition-colors hover:text-text-inverse"
          >
            WhatsApp
          </a>
          <span class="text-text-inverse-muted opacity-40">&middot;</span>
          <a
            href="mailto:info@estudio4a.com"
            class="text-text-inverse-muted transition-colors hover:text-text-inverse"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
