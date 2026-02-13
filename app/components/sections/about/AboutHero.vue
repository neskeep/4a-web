<script setup lang="ts">
const { $gsap } = useNuxtApp()

const heroRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!heroRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const headline = heroRef.value.querySelector('[data-hero="headline"]')

  $gsap.set(headline, { opacity: 0, y: 50 })

  tl = $gsap.timeline({ delay: 0.3 })

  tl.to(
    headline,
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative w-full overflow-hidden bg-bg-dark"
    style="height: 85vh"
  >
    <!-- Imagen de fondo -->
    <img
      src="/images/studio/studio-team.jpg"
      alt="Interior del Galpon 4A — espacio de trabajo con luz natural"
      class="absolute inset-0 z-0 h-full w-full object-cover"
    />

    <!-- Overlay gradiente inferior -->
    <div
      class="absolute inset-0 z-[1]"
      style="background: linear-gradient(to top, rgba(29, 29, 27, 0.55) 0%, rgba(29, 29, 27, 0.1) 35%, transparent 60%)"
    />

    <!-- Contenido -->
    <div class="relative z-10 flex h-full flex-col justify-end px-8 pb-[clamp(64px,10vh,120px)] lg:px-16">
      <h1
        data-hero="headline"
        class="font-display text-hero leading-tight tracking-tight text-text-inverse"
        style="font-weight: 400"
      >
        Estudio
      </h1>
    </div>
  </section>
</template>
