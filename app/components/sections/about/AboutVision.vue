<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const premises = [
  {
    number: '01',
    title: 'Espacio + Lugar',
    text: 'Cada sitio pide su propia respuesta. No imponemos un lenguaje: escuchamos lo que el lugar necesita ser.',
  },
  {
    number: '02',
    title: 'Color + Materia',
    text: 'El color no es adorno, es atmosfera. La materialidad define la experiencia antes que la forma.',
  },
  {
    number: '03',
    title: 'Friccion Sensorial',
    text: 'La mejor arquitectura no es comoda ni predecible. Es honesta, tactil, y genera una respuesta emocional.',
  },
  {
    number: '04',
    title: 'Human to Human',
    text: 'Disenamos para personas, no para publicaciones. Cada proyecto empieza con una conversacion, no con un plano.',
  },
  {
    number: '05',
    title: 'Simbiosis',
    text: 'Cuarenta anos de oficio fusionados con la energia de una generacion que cuestiona todo. Experiencia y rebeldia.',
  },
  {
    number: '06',
    title: 'El Matiz',
    text: 'La diferencia esta en lo sutil. No en el gesto grandilocuente, sino en el detalle que solo se descubre habitando.',
  },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  // Main reveal
  const heading = sectionRef.value.querySelector('[data-vision="heading"]')
  const paragraph = sectionRef.value.querySelector('[data-vision="paragraph"]')

  $gsap.set(heading, { opacity: 0, y: 50 })
  $gsap.set(paragraph, { opacity: 0 })

  const tl = $gsap.timeline({
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
    paragraph,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  )
  timelines.push(tl)

  // Premises stagger
  const premiseEls = sectionRef.value.querySelectorAll('[data-vision="premise"]')
  if (premiseEls.length) {
    $gsap.set(premiseEls, { opacity: 0, y: 30 })

    const tlPremises = $gsap.timeline({
      scrollTrigger: {
        trigger: premiseEls[0],
        start: 'top 85%',
        once: true,
      },
    })

    tlPremises.to(
      premiseEls,
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
    )
    timelines.push(tlPremises)
  }
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Vision" class="mb-block" />

      <!-- Central statement -->
      <div class="text-center">
        <h2
          data-vision="heading"
          class="mx-auto font-display text-5xl leading-tight tracking-tight text-text"
          style="font-weight: 300"
        >
          &ldquo;Dejarnos ser&rdquo;
        </h2>

        <p
          data-vision="paragraph"
          class="mx-auto mt-element max-w-[var(--max-width-text)] font-body text-lg leading-relaxed text-text-secondary"
        >
          Nuestro mantra es la libertad creativa. No seguimos formulas, no repetimos soluciones. Cada proyecto empieza desde cero, desde la escucha.
        </p>
      </div>

      <!-- Premisas de diseno -->
      <div class="mt-section-sm">
        <p class="mb-block font-body text-xs uppercase tracking-wider text-text-tertiary">
          Premisas de diseno
        </p>

        <div class="grid grid-cols-1 gap-block sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="premise in premises"
            :key="premise.number"
            data-vision="premise"
          >
            <!-- Numero -->
            <span class="font-body text-sm text-accent" style="font-weight: 500">
              {{ premise.number }}
            </span>

            <!-- Titulo -->
            <h3
              class="mt-tight font-display text-2xl text-text"
              style="font-weight: 400"
            >
              {{ premise.title }}
            </h3>

            <!-- Separador -->
            <div class="my-tight h-px w-6 bg-border" />

            <!-- Texto -->
            <p class="font-body text-base leading-relaxed text-text-secondary">
              {{ premise.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
