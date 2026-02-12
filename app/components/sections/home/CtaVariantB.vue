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
    sectionRef.value.querySelectorAll<HTMLElement>('[data-cta-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const words = sectionRef.value.querySelectorAll('[data-cta-word]')
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
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
    0.3,
  ).fromTo(
    button,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2',
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
    <div class="mx-auto flex max-w-[var(--max-width-content)] flex-col items-center px-8 lg:px-16">
      <!-- Section label centrado -->
      <UiSectionLabel label="Contacto" :inverse="true" class="mb-block" />

      <!-- Contenido centrado -->
      <div class="max-w-[var(--max-width-text)] text-center">
        <h2
          class="font-display leading-tight tracking-tight text-text-inverse"
          style="font-size: clamp(3rem, 8vw, 5.5rem); font-weight: 300"
        >
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">Conversemos.</span>
        </h2>

        <p class="mx-auto mt-element font-body text-lg leading-relaxed text-text-inverse-muted">
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">La mejor </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">arquitectura </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">empieza </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">con una </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">conversación.</span>
        </p>

        <div data-cta="button" class="mt-element" style="opacity: 0">
          <UiButton variant="inverse" to="/contacto">
            Iniciar conversación
          </UiButton>
        </div>

        <div
          data-cta="links"
          class="mt-element flex items-center justify-center gap-tight font-body text-sm"
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
