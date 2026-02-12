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

  const statement = sectionRef.value.querySelector('[data-manifesto="statement"]')
  const counters = sectionRef.value.querySelectorAll('[data-manifesto="counter"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    statement,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
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
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Estudio 4A" class="mb-block" />

      <!-- Statement — alineado izquierda, tensión editorial -->
      <p
        data-manifesto="statement"
        class="max-w-[var(--max-width-narrow)] font-display text-statement leading-snug tracking-tight text-text"
        style="font-weight: 300; opacity: 0; transform: translateY(40px)"
      >
        Somos la evolución de cuarenta años de oficio global, fusionada con la energía de una generación que se niega a repetir fórmulas.
      </p>

      <!-- Counters — alineados izquierda -->
      <div class="mt-block flex flex-col gap-element sm:flex-row sm:gap-block">
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
