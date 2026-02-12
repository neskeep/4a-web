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
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto="counter"]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const leftCol = sectionRef.value.querySelector('[data-col="left"]')
  const rightCol = sectionRef.value.querySelector('[data-col="right"]')
  const words = sectionRef.value.querySelectorAll('[data-manifesto-word]')
  const counters = sectionRef.value.querySelectorAll('[data-manifesto="counter"]')

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
      counters,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.2 },
      '-=0.3',
    )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg">
    <div class="flex min-h-[70vh] flex-col lg:flex-row">
      <!-- Zona izquierda 55% — statement -->
      <div
        data-col="left"
        class="flex w-full flex-col justify-center bg-bg px-8 py-section lg:w-[55%] lg:px-16"
        style="clip-path: inset(0 100% 0 0)"
      >
        <UiSectionLabel label="Estudio 4A" class="mb-block" />

        <p
          class="max-w-[var(--max-width-text)] font-display text-statement leading-snug tracking-tight text-text"
          style="font-weight: 300"
        >
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">Somos </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">la evolución </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">de cuarenta años </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">de oficio global, </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">fusionada </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">con la energía </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">de una generación </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">que se niega </span>
          <span data-manifesto-word class="inline" style="opacity: 0; transform: translateY(50px)">a repetir fórmulas.</span>
        </p>
      </div>

      <!-- Zona derecha 45% — counters -->
      <div
        data-col="right"
        class="flex w-full flex-col items-center justify-center gap-block bg-bg-alt px-8 py-section lg:w-[45%]"
        style="clip-path: inset(0 0 0 100%)"
      >
        <div data-manifesto="counter" style="opacity: 0; transform: translateY(30px)">
          <UiCounter :value="40" suffix="+" label="Años" />
        </div>
        <div data-manifesto="counter" style="opacity: 0; transform: translateY(30px)">
          <UiCounter :value="120" suffix="+" label="Proyectos" />
        </div>
        <div data-manifesto="counter" style="opacity: 0; transform: translateY(30px)">
          <UiCounter :value="8" label="Países" />
        </div>
      </div>
    </div>
  </section>
</template>
