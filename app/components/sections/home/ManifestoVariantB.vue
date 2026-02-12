<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

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
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
    0.3,
  ).fromTo(
    counters,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15 },
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
    class="bg-bg py-section"
  >
    <div class="mx-auto flex max-w-[var(--max-width-content)] flex-col items-center px-8 lg:px-16">
      <!-- Section label centrado -->
      <UiSectionLabel label="Estudio 4A" class="mb-block" />

      <!-- Statement — centrado, tipografía más grande, word-by-word stagger -->
      <p
        class="max-w-[var(--max-width-text)] text-center font-display leading-snug tracking-tight text-text"
        style="font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 300"
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

      <!-- Counters — centrados -->
      <div class="mt-block flex flex-col items-center gap-element sm:flex-row sm:gap-block">
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
