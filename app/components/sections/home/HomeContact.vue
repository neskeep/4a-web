<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: gsap.core.Timeline | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-contact]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const heading = sectionRef.value.querySelector('[data-contact="heading"]')
  const items = sectionRef.value.querySelectorAll('[data-contact="item"]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    heading,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
  )
  .fromTo(
    items,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15 },
    '-=0.5',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-carbon"
    style="padding: clamp(100px, 15vw, 240px) clamp(24px, 5vw, 64px)"
  >
    <!-- Floating sketch -->
    <img
      src="/bg-conversemos-sketch-2.webp"
      alt=""
      class="pointer-events-none absolute right-0 top-0 hidden select-none lg:block"
      style="opacity: 0.15; width: clamp(400px, 50vw, 750px); translate: -10% 20%; z-index: 0; mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%); -webkit-mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%)"
    >

    <div class="relative z-[1] mx-auto flex max-w-[var(--max-width-content)] flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2
          data-contact="heading"
          class="font-display tracking-tight text-white"
          style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 300; line-height: 1.1; opacity: 0; transform: translateY(30px)"
        >
          Conversemos.
        </h2>

        <p
          data-contact="item"
          class="mt-6 max-w-md font-body text-base leading-relaxed text-white/40 lg:text-lg"
          style="opacity: 0"
        >
          La mejor arquitectura empieza con una buena conversación.
          Cuéntanos tu visión — lo demás lo construimos juntos.
        </p>
      </div>

      <NuxtLink
        data-contact="item"
        to="/contacto"
        class="group flex items-center gap-3 font-body text-sm uppercase tracking-[0.15em] text-white/60 transition-colors duration-[350ms] hover:text-white"
        style="opacity: 0; transition-timing-function: var(--ease-out-quart)"
      >
        Iniciar conversación
        <span
          class="inline-block transition-transform duration-[350ms] group-hover:translate-x-1"
          style="transition-timing-function: var(--ease-out-quart)"
        >→</span>
      </NuxtLink>
    </div>
  </section>
</template>
