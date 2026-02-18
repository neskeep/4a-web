<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-hero="heading"]')

  $gsap.set(heading, { opacity: 0, y: 40 })

  tl = $gsap.timeline({ delay: 0.2 })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg" style="padding-top: 140px; padding-bottom: var(--spacing-section-sm)">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Proyectos" class="mb-block" />

      <h1
        data-hero="heading"
        class="font-display leading-tight tracking-tight text-text"
        style="font-size: var(--text-hero); font-weight: 300"
      >
        Obras<br>seleccionadas
      </h1>
    </div>
  </section>
</template>
