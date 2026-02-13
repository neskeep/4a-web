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
  const body = sectionRef.value.querySelector('[data-cta="body"]')
  const button = sectionRef.value.querySelector('[data-cta="button"]')

  $gsap.set(heading, { opacity: 0, y: 60 })
  $gsap.set(divider, { scaleX: 0, transformOrigin: 'left' })
  $gsap.set(body, { opacity: 0 })
  $gsap.set(button, { opacity: 0 })

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
    body,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  ).to(
    button,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Contacto" :inverse="true" class="mb-block" />

      <h2
        data-cta="heading"
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 300"
      >
        ¿Tiene un proyecto<br>en mente?
      </h2>

      <div
        data-cta="divider"
        class="my-block h-px w-full bg-border-dark"
      />

      <div class="grid grid-cols-1 gap-element lg:grid-cols-[7fr_5fr] lg:items-start">
        <p
          data-cta="body"
          class="max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
        >
          La mejor arquitectura empieza con una conversación.
          Cuéntenos su visión — lo demás lo construimos juntos.
        </p>

        <div class="flex flex-col items-start lg:items-end">
          <div data-cta="button">
            <UiButton variant="inverse" to="/contacto">
              Iniciar conversación
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
