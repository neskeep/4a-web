<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-cta]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const heading = sectionRef.value.querySelector('[data-cta="heading"]')
  const paragraph = sectionRef.value.querySelector('[data-cta="paragraph"]')
  const button = sectionRef.value.querySelector('[data-cta="button"]')
  const links = sectionRef.value.querySelector('[data-cta="links"]')
  const divider = sectionRef.value.querySelector('[data-cta="divider"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    heading,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    0.2,
  ).fromTo(
    divider,
    { scaleX: 0 },
    { scaleX: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6',
  ).fromTo(
    paragraph,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  ).fromTo(
    button,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  ).fromTo(
    links,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Contacto" :inverse="true" class="mb-block" />

      <!-- Heading — ocupa todo el ancho, grande y dominante -->
      <h2
        data-cta="heading"
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 300; opacity: 0; transform: translateY(60px)"
      >
        Conversemos.
      </h2>

      <!-- Divider animado -->
      <div
        data-cta="divider"
        class="my-block h-px w-full bg-border-dark"
        style="transform-origin: left; transform: scaleX(0)"
      />

      <!-- Grid: párrafo + botón alineados -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[7fr_5fr] lg:items-start">
        <!-- Columna izquierda: párrafo -->
        <p
          data-cta="paragraph"
          class="max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
          style="opacity: 0"
        >
          La mejor arquitectura empieza con una conversación.
          Cuéntanos tu visión — lo demás lo construimos juntos.
        </p>

        <!-- Columna derecha: botón + links -->
        <div class="flex flex-col items-start lg:items-end">
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
    </div>
  </section>
</template>
