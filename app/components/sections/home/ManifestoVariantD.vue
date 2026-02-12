<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const accentBar = sectionRef.value.querySelector<HTMLElement>('[data-manifesto="accent-bar"]')
    if (accentBar) accentBar.style.transform = 'scaleY(1)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-manifesto="divider"]').forEach((el) => {
      el.style.transform = 'scaleY(1)'
    })
    return
  }

  const accentBar = sectionRef.value.querySelector('[data-manifesto="accent-bar"]')
  const words = sectionRef.value.querySelectorAll('[data-manifesto-word]')
  const counters = sectionRef.value.querySelectorAll('[data-manifesto="counter"]')
  const dividers = sectionRef.value.querySelectorAll('[data-manifesto="divider"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  // Accent bar grows downward first
  tl.fromTo(
    accentBar,
    { scaleY: 0 },
    { scaleY: 1, duration: 0.7, ease: 'power4.out' },
    0.2,
  )
  // Words stagger in (centered, large)
  .fromTo(
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12 },
    0.4,
  )
  // Counters enter with horizontal signature
  .fromTo(
    counters,
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: 'power4.out', stagger: 0.15 },
    '-=0.3',
  )
  // Red dividers between counters
  .fromTo(
    dividers,
    { scaleY: 0 },
    { scaleY: 1, duration: 0.5, ease: 'power4.out', stagger: 0.1 },
    '-=0.4',
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

      <!-- Barra vertical roja decorativa (firma D) -->
      <div
        data-manifesto="accent-bar"
        class="mx-auto mb-element h-16 w-px bg-accent"
        style="transform: scaleY(0); transform-origin: top"
      />

      <!-- Statement — centrado, tipografía ENORME (mayor que B), word stagger -->
      <p
        class="max-w-[var(--max-width-text)] text-center font-display leading-snug tracking-tight text-text"
        style="font-size: clamp(3rem, 6vw, 5rem); font-weight: 300"
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

      <!-- Counters con dividers verticales rojos — centrados -->
      <div class="mt-block flex flex-col items-center gap-element sm:flex-row sm:items-center sm:gap-0">
        <div data-manifesto="counter" style="opacity: 0; transform: translateX(-20px)">
          <UiCounter :value="40" suffix="+" label="Años" />
        </div>
        <div
          data-manifesto="divider"
          class="mx-6 hidden h-12 w-px bg-accent sm:block"
          style="transform: scaleY(0); transform-origin: top"
        />
        <div data-manifesto="counter" style="opacity: 0; transform: translateX(-20px)">
          <UiCounter :value="120" suffix="+" label="Proyectos" />
        </div>
        <div
          data-manifesto="divider"
          class="mx-6 hidden h-12 w-px bg-accent sm:block"
          style="transform: scaleY(0); transform-origin: top"
        />
        <div data-manifesto="counter" style="opacity: 0; transform: translateX(-20px)">
          <UiCounter :value="8" label="Países" />
        </div>
      </div>
    </div>
  </section>
</template>
