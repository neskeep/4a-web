<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-contact="heading"]')
  const subtitle = sectionRef.value.querySelector('[data-contact="subtitle"]')
  const line = sectionRef.value.querySelector('[data-contact="line"]')
  const channels = sectionRef.value.querySelector('[data-contact="channels"]')

  $gsap.set(heading, { opacity: 0, y: 40 })
  $gsap.set(subtitle, { opacity: 0 })
  $gsap.set(line, { width: 0 })
  $gsap.set(channels, { opacity: 0 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
      once: true,
    },
  })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.3,
  ).to(
    subtitle,
    { opacity: 1, duration: 0.6, ease: 'power2.out' },
    '-=0.5',
  ).to(
    line,
    { width: 48, duration: 0.7, ease: 'power3.out' },
    '-=0.3',
  ).to(
    channels,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-bg"
    style="padding-top: 160px; padding-bottom: var(--spacing-section)"
  >
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="grid grid-cols-1 gap-section-sm lg:grid-cols-[45fr_55fr]">
        <!-- Columna izquierda: Invitacion -->
        <div>
          <UiSectionLabel label="Contacto" class="mb-block" />

          <h1
            data-contact="heading"
            class="font-display text-5xl leading-tight tracking-tight text-text"
            style="font-weight: 300"
          >
            Conversemos.
          </h1>

          <p
            data-contact="subtitle"
            class="mt-element font-body text-lg leading-relaxed text-text-secondary"
            style="max-width: 360px"
          >
            La mejor arquitectura empieza con una buena conversacion.
          </p>

          <!-- Linea roja separadora -->
          <div
            data-contact="line"
            class="my-block h-px bg-accent"
          />

          <!-- Canales directos -->
          <div
            data-contact="channels"
          >
            <span class="block font-body text-xs uppercase tracking-wider text-text-tertiary" style="font-weight: 500">
              Tambien puedes escribirnos:
            </span>

            <div class="mt-tight flex flex-col gap-micro">
              <a
                href="mailto:hola@4a.bo"
                class="font-body text-base text-text hover:text-accent"
                style="transition: color var(--duration-normal) var(--ease-out-quart)"
              >
                hola@4a.bo
              </a>
              <a
                href="tel:+59178000000"
                class="font-body text-base text-text hover:text-accent"
                style="transition: color var(--duration-normal) var(--ease-out-quart)"
              >
                +591 780 00000
              </a>
            </div>

            <a
              href="https://wa.me/59178000000"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-element inline-block font-body text-sm uppercase tracking-wide text-accent hover:text-accent-hover"
              style="font-weight: 500; transition: color var(--duration-normal) var(--ease-out-quart)"
            >
              WhatsApp &rarr;
            </a>

            <div class="mt-element flex items-center gap-tight font-body text-sm text-text-tertiary">
              <a
                href="https://instagram.com/estudio4a"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-text"
                style="transition: color var(--duration-normal) var(--ease-out-quart)"
              >
                Instagram
              </a>
              <span class="opacity-40">&middot;</span>
              <a
                href="https://linkedin.com/company/estudio4a"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-text"
                style="transition: color var(--duration-normal) var(--ease-out-quart)"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Formulario -->
        <div>
          <SectionsContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
