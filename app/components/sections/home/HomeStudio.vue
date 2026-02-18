<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const animations: { kill: () => void }[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-studio]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.clipPath = 'none'
    })
    return
  }

  // Main photo reveal
  const mainPhoto = sectionRef.value.querySelector('[data-studio="main"]')

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: mainPhoto,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    mainPhoto,
    { clipPath: 'inset(8% 8% 8% 8%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power3.inOut' },
  )

  animations.push(tl)

  // Parallax on main image
  const mainImg = mainPhoto?.querySelector('img')
  if (mainImg) {
    const p = $gsap.to(mainImg, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: mainPhoto,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    animations.push(p)
  }

  // Text block reveal
  const textEls = sectionRef.value.querySelectorAll('[data-studio="text"]')
  if (textEls.length) {
    const tlText = $gsap.timeline({
      scrollTrigger: {
        trigger: textEls[0],
        start: 'top 75%',
        once: true,
      },
    })

    tlText.fromTo(
      textEls,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
    )

    animations.push(tlText)
  }
})

onUnmounted(() => {
  animations.forEach(a => a.kill())
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-stone"
    style="padding-bottom: var(--spacing-section-sm)"
  >
    <!-- Main atmospheric photo — full width, cinematic reveal -->
    <div
      data-studio="main"
      class="overflow-hidden"
      style="clip-path: inset(8% 8% 8% 8%)"
    >
      <img
        src="/images/studio/DSC_0062.webp"
        alt="Equipo de Estudio 4A"
        class="w-full object-cover"
        style="aspect-ratio: 21/9; scale: 1.1"
        loading="lazy"
      >
    </div>

    <!-- Studio narrative — clean editorial -->
    <div
      class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16"
      style="margin-top: var(--spacing-section-sm)"
    >
      <div class="grid grid-cols-1 items-start gap-element lg:grid-cols-[5fr_7fr]">
        <!-- Left: Headline -->
        <div>
          <h2
            data-studio="text"
            class="font-display leading-snug tracking-tight text-text"
            style="font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 300; opacity: 0; transform: translateY(25px)"
          >
            Más que una oficina,<br>un manifiesto vivo.
          </h2>
        </div>

        <!-- Right: Single paragraph + CTA -->
        <div class="lg:pt-2">
          <p
            data-studio="text"
            class="font-body text-lg leading-relaxed text-text-secondary"
            style="opacity: 0; transform: translateY(25px)"
          >
            Un equipo joven y diverso reimagina la arquitectura cada día
            desde el Galpón 4A en Cochabamba. Cada mirada, experiencia y
            habilidad, suma y amplifica el resultado final — un laboratorio
            creativo donde la versatilidad y la sensibilidad conviven a diario.
          </p>

          <NuxtLink
            data-studio="text"
            to="/nosotros"
            class="group mt-element inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-text-secondary transition-colors duration-[350ms] hover:text-text"
            style="opacity: 0; transform: translateY(25px); transition-timing-function: var(--ease-out-quart)"
          >
            Conocer al equipo
            <span
              class="inline-block transition-transform duration-[350ms] group-hover:translate-x-1"
              style="transition-timing-function: var(--ease-out-quart)"
            >→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
