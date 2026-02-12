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
    const divider = sectionRef.value.querySelector<HTMLElement>('[data-cta="divider"]')
    if (divider) divider.style.transform = 'scaleX(1)'
    return
  }

  const heading = sectionRef.value.querySelector('[data-cta="heading"]')
  const divider = sectionRef.value.querySelector('[data-cta="divider"]')
  const words = sectionRef.value.querySelectorAll('[data-cta-word]')
  const paragraph2 = sectionRef.value.querySelector('[data-cta="paragraph2"]')
  const button = sectionRef.value.querySelector('[data-cta="button"]')
  const links = sectionRef.value.querySelector('[data-cta="links"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  // Heading enormous centered
  tl.fromTo(
    heading,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
    0.2,
  )
  // Partial divider centered
  .fromTo(
    divider,
    { scaleX: 0 },
    { scaleX: 1, duration: 0.8, ease: 'power4.out' },
    '-=0.5',
  )
  // Word chunks paragraph
  .fromTo(
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12 },
    '-=0.4',
  )
  // Second paragraph fade in
  .fromTo(
    paragraph2,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.out' },
    '-=0.2',
  )
  // Button with scale settle
  .fromTo(
    button,
    { scale: 0.98, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: 'power4.out' },
    '-=0.2',
  )
  // Links
  .fromTo(
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

      <!-- Heading ENORME centrado -->
      <h2
        data-cta="heading"
        class="text-center font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(4rem, 9vw, 7rem); font-weight: 300; opacity: 0; transform: translateY(60px)"
      >
        Conversemos.
      </h2>

      <!-- Divider parcial centrado — mas corto que A's full-width -->
      <div
        data-cta="divider"
        class="my-block h-px w-full max-w-[200px] bg-border-dark"
        style="transform-origin: center; transform: scaleX(0)"
      />

      <!-- Paragraph con word chunks centrado -->
      <div class="max-w-[var(--max-width-text)] text-center">
        <p class="font-body text-lg leading-relaxed text-text-inverse-muted">
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">La mejor arquitectura </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">empieza con </span>
          <span data-cta-word class="inline" style="opacity: 0; transform: translateY(50px)">una conversación.</span>
        </p>

        <!-- Second paragraph — fade in (propio de D) -->
        <p
          data-cta="paragraph2"
          class="mx-auto mt-4 font-body text-lg leading-relaxed text-text-inverse-muted"
          style="opacity: 0"
        >
          Cuéntanos tu visión — lo demás lo construimos juntos.
        </p>
      </div>

      <!-- Button centrado con scale settle -->
      <div data-cta="button" class="mt-element" style="opacity: 0; transform: scale(0.98)">
        <UiButton variant="inverse" to="/contacto">
          Iniciar conversación
        </UiButton>
      </div>

      <!-- Links centrados -->
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
  </section>
</template>
