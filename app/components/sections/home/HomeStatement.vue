<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const animations: { kill: () => void }[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-stmt]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.clipPath = 'none'
    })
    return
  }

  // Phase 1 — Section enters viewport
  const line = sectionRef.value.querySelector('[data-stmt="line"]')
  const imageA = sectionRef.value.querySelector('[data-stmt="image-a"]')
  const imageB = sectionRef.value.querySelector('[data-stmt="image-b"]')
  const quote = sectionRef.value.querySelector('[data-stmt="quote"]')
  const author = sectionRef.value.querySelector('[data-stmt="author"]')

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })
  animations.push(tl)

  tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.out' })
    .fromTo(
      quote,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
      0.2,
    )
    .fromTo(
      author,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      0.6,
    )
    .fromTo(
      imageA,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power4.inOut' },
      0.3,
    )
    .fromTo(
      imageB,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut' },
      0.5,
    )

  // Phase 2 — Bottom row
  const manifesto = sectionRef.value.querySelector('[data-stmt="manifesto"]')
  const imageC = sectionRef.value.querySelector('[data-stmt="image-c"]')

  const tl2 = $gsap.timeline({
    scrollTrigger: {
      trigger: manifesto,
      start: 'top 75%',
      once: true,
    },
  })
  animations.push(tl2)

  tl2.fromTo(
    manifesto,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
  )
  .fromTo(
    imageC,
    { clipPath: 'inset(0 0 0 100%)' },
    { clipPath: 'inset(0 0 0 0%)', duration: 1.2, ease: 'power4.inOut' },
    0,
  )

  // Parallax — continuous scrub
  const parallaxTargets = [
    { selector: '[data-stmt="image-a"] img', yPercent: 8 },
    { selector: '[data-stmt="image-b"] img', yPercent: 6 },
    { selector: '[data-stmt="image-c"] img', yPercent: 5 },
  ]

  parallaxTargets.forEach(({ selector, yPercent }) => {
    const el = sectionRef.value!.querySelector(selector)
    if (!el) return
    const p = $gsap.to(el, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('[data-stmt]'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    animations.push(p)
  })
})

onUnmounted(() => {
  animations.forEach(a => a.kill())
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-x-clip bg-white"
    style="padding-top: clamp(48px, 6vw, 96px); padding-bottom: clamp(48px, 6vw, 96px)"
  >
    <!-- Background sketch — floating near manifesto, bleeds into next section -->
    <img
      src="/images/bg/home-statement-bg.webp"
      alt=""
      class="pointer-events-none absolute bottom-0 left-0 select-none lg:left-0"
      style="opacity: 0.3; width: clamp(500px, 50vw, 600px); transform: translateY(35%); z-index: 0; mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%); -webkit-mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%)"
    >

    <!-- Single editorial grid — irregular areas, shared rows -->
    <div
      class="relative z-[1] mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 gap-y-8 px-8 lg:grid-cols-12 lg:grid-rows-[auto_40vh_42vh] lg:gap-4 lg:px-0"
    >
      <!-- Quote — row 1, cols 1-6 -->
      <div class="self-center lg:col-span-6 lg:row-start-1 lg:pl-16">
        <div
          data-stmt="line"
          class="h-px w-10 bg-accent"
          style="transform: scaleX(0); transform-origin: left"
        />

        <blockquote
          data-stmt="quote"
          class="mt-6 font-display leading-tight tracking-tight text-carbon"
          style="font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 300; opacity: 0; transform: translateY(25px)"
        >
          "Cada proyecto es una respuesta que nunca se repite."
        </blockquote>

        <p
          data-stmt="author"
          class="mt-4 font-body text-sm uppercase tracking-[0.15em] text-text-tertiary"
          style="opacity: 0"
        >
          Michael Palza · Fundador
        </p>
      </div>

      <!-- Image B — rows 1+2, cols 8-12, 60% width, bridges quote and image A -->
      <div class="flex justify-end lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-2">
        <div
          data-stmt="image-b"
          class="w-[65%] overflow-hidden sm:w-[50%] lg:h-full lg:w-[85%]"
          style="clip-path: inset(100% 0 0 0)"
        >
          <img
            src="/images/studio/cecilia-michael.webp"
            alt="Cecilia Velasco y Michael Palza — Fundadores"
            class="h-full w-full object-cover object-center"
            loading="lazy"
          >
        </div>
      </div>

      <!-- Image A — row 2, cols 1-7, bleed left -->
      <div
        class="lg:col-span-7 lg:row-start-2"
        style="margin-left: calc(-1 * clamp(16px, 4vw, 80px))"
      >
        <div
          data-stmt="image-a"
          class="h-full overflow-hidden"
          style="clip-path: inset(0 100% 0 0)"
        >
          <img
            src="/images/studio/DSC09314.webp"
            alt="Interior del estudio — Estudio 4A"
            class="h-full w-full object-cover"
            loading="lazy"
          >
        </div>
      </div>

      <!-- Manifesto — row 3, cols 1-5, vertically centered with Image C -->
      <div class="flex items-center lg:col-span-5 lg:row-start-3 lg:mt-14 lg:pl-16">
        <p
          data-stmt="manifesto"
          class="font-display leading-snug tracking-tight text-text"
          style="font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 300; opacity: 0; transform: translateY(20px)"
        >
          No diseñamos edificios.<br>
          Diseñamos la experiencia de habitarlos.
        </p>
      </div>

      <!-- Image C — row 3, cols 7-12, bleed right -->
      <div
        class="lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:mt-14"
        style="margin-right: calc(-1 * clamp(16px, 4vw, 80px))"
      >
        <div
          data-stmt="image-c"
          class="h-full overflow-hidden"
          style="clip-path: inset(0 0 0 100%)"
        >
          <img
            src="/images/studio/IMG_7101.webp"
            alt="Detalle del proceso creativo — Estudio 4A"
            class="h-full w-full object-cover object-left"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </section>
</template>
