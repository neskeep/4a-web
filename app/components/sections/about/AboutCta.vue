<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-cta="heading"]')
  const divider = sectionRef.value.querySelector('[data-cta="divider"]')
  const paragraph = sectionRef.value.querySelector('[data-cta="paragraph"]')
  const button = sectionRef.value.querySelector('[data-cta="button"]')
  const links = sectionRef.value.querySelector('[data-cta="links"]')

  $gsap.set(heading, { opacity: 0, y: 60 })
  $gsap.set(divider, { scaleX: 0 })
  $gsap.set(paragraph, { opacity: 0 })
  $gsap.set(button, { opacity: 0 })
  $gsap.set(links, { opacity: 0 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    0.2,
  ).to(
    divider,
    { scaleX: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6',
  ).to(
    paragraph,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  ).to(
    button,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  ).to(
    links,
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

      <!-- Heading -->
      <h2
        data-cta="heading"
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 300"
      >
        Conversemos.
      </h2>

      <!-- Divider -->
      <div
        data-cta="divider"
        class="my-block h-px w-full bg-border-dark"
        style="transform-origin: left"
      />

      <!-- Grid: paragraph + button -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[7fr_5fr] lg:items-start">
        <!-- Paragraph -->
        <p
          data-cta="paragraph"
          class="max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
        >
          La mejor arquitectura empieza con una conversacion. Cuentanos tu vision — lo demas lo construimos juntos.
        </p>

        <!-- Button + links -->
        <div class="flex flex-col items-start lg:items-end">
          <div data-cta="button">
            <UiButton variant="inverse" to="/contacto">
              Iniciar conversacion
            </UiButton>
          </div>

          <div
            data-cta="links"
            class="mt-element flex items-center gap-tight font-body text-sm"
          >
            <a
              href="https://wa.me/59178000000"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-inverse-muted transition-colors hover:text-text-inverse"
              style="transition-duration: var(--duration-normal); transition-timing-function: var(--ease-out-quart)"
            >
              WhatsApp
            </a>
            <span class="text-text-inverse-muted opacity-40">&middot;</span>
            <a
              href="mailto:info@estudio4a.com"
              class="text-text-inverse-muted transition-colors hover:text-text-inverse"
              style="transition-duration: var(--duration-normal); transition-timing-function: var(--ease-out-quart)"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
