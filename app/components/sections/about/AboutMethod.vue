<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const steps = [
  {
    number: '01',
    title: 'Escuchar',
    text: 'Cada proyecto empieza con una conversacion. Entendemos el lugar, el programa, el cliente. Antes de dibujar, preguntamos.',
  },
  {
    number: '02',
    title: 'Conceptualizar',
    text: 'Del dialogo nace una idea. No un estilo, sino un concepto que guiara cada decision de aqui en adelante.',
  },
  {
    number: '03',
    title: 'Materializar',
    text: 'El concepto toma forma. Bocetos, maquetas, materialidad. El proyecto se toca antes de construirse.',
  },
  {
    number: '04',
    title: 'Construir',
    text: 'Acompanamos el proyecto hasta el ultimo detalle. La obra es la prueba del concepto.',
  },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-method="heading"]')

  $gsap.set(heading, { opacity: 0, y: 40 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.2,
  )
  timelines.push(tl)

  // Steps — sequential reveal
  const stepEls = sectionRef.value.querySelectorAll('[data-method="step"]')
  const lineEls = sectionRef.value.querySelectorAll('[data-method-line]')

  stepEls.forEach((step, i) => {
    const number = step.querySelector('[data-method="number"]')
    const line = lineEls[i]
    const title = step.querySelector('[data-method="title"]')
    const text = step.querySelector('[data-method="text"]')

    $gsap.set(number, { opacity: 0 })
    if (line) $gsap.set(line, { width: '0%' })
    $gsap.set(title, { opacity: 0 })
    $gsap.set(text, { opacity: 0 })

    const stepTl = $gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        once: true,
      },
    })

    stepTl.to(
      number,
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
    )

    if (line) {
      stepTl.to(
        line,
        { width: '100%', duration: 0.6, ease: 'power3.out' },
        '-=0.2',
      )
    }

    stepTl.to(
      title,
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.3',
    ).to(
      text,
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
    )

    timelines.push(stepTl)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Metodo" class="mb-block" />

      <!-- Heading -->
      <h2
        data-method="heading"
        class="mb-section-sm font-display text-3xl leading-snug tracking-tight text-text lg:text-4xl"
        style="font-weight: 300"
      >
        Como pensamos<br>cada proyecto
      </h2>

      <!-- Steps -->
      <div class="flex flex-col gap-block">
        <div
          v-for="step in steps"
          :key="step.number"
          data-method="step"
        >
          <!-- Number + line + title row -->
          <div class="flex items-center gap-element">
            <span
              data-method="number"
              class="shrink-0 font-body text-sm text-accent"
              style="font-weight: 500"
            >
              {{ step.number }}
            </span>

            <div
              data-method-line
              class="h-px grow bg-border"
            />

            <h3
              data-method="title"
              class="shrink-0 font-display text-2xl text-text"
              style="font-weight: 400"
            >
              {{ step.title }}
            </h3>
          </div>

          <!-- Paragraph -->
          <p
            data-method="text"
            class="mt-element max-w-[var(--max-width-text)] font-body text-base leading-relaxed text-text-secondary lg:pl-[calc(var(--spacing-element)+2rem)]"
          >
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
