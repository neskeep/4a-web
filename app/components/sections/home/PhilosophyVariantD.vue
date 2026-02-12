<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const imageWrap = sectionRef.value.querySelector<HTMLElement>('[data-philosophy="image-wrap"]')
    if (imageWrap) imageWrap.style.clipPath = 'inset(0 0 0 0)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy="premise-divider"]').forEach((el) => {
      el.style.transform = 'scaleY(1)'
    })
    return
  }

  const words = sectionRef.value.querySelectorAll('[data-philosophy-word]')
  const paragraph = sectionRef.value.querySelector('[data-philosophy="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-philosophy="cta"]')
  const imageWrap = sectionRef.value.querySelector('[data-philosophy="image-wrap"]')
  const premises = sectionRef.value.querySelectorAll('[data-philosophy="premise"]')
  const premiseDividers = sectionRef.value.querySelectorAll('[data-philosophy="premise-divider"]')

  // Timeline 1 — Heading word stagger (slow 0.15s) + paragraph + cta
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    words,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.15 },
    0.3,
  ).fromTo(
    paragraph,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.4',
  ).fromTo(
    cta,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2',
  )
  timelines.push(tl)

  // Timeline 2 — Image full-width clip-path reveal (ascending)
  if (imageWrap) {
    const tlImage = $gsap.timeline({
      scrollTrigger: {
        trigger: imageWrap,
        start: 'top 80%',
        once: true,
      },
    })
    tlImage.fromTo(
      imageWrap,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0 0 0 0)', duration: 1.1, ease: 'power4.inOut' },
    )
    timelines.push(tlImage)

    // Parallax
    const img = imageWrap.querySelector('img')
    if (img) {
      const parallax = $gsap.timeline({
        scrollTrigger: {
          trigger: imageWrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      parallax.fromTo(
        img,
        { yPercent: -6 },
        { yPercent: 6, ease: 'none' },
      )
      timelines.push(parallax)
    }
  }

  // Timeline 3 — Premises with red dividers
  if (premises.length) {
    const tlPremises = $gsap.timeline({
      scrollTrigger: {
        trigger: premises[0],
        start: 'top 85%',
        once: true,
      },
    })

    tlPremises.fromTo(
      premises,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'power4.out', stagger: 0.12 },
    ).fromTo(
      premiseDividers,
      { scaleY: 0 },
      { scaleY: 1, duration: 0.5, ease: 'power4.out', stagger: 0.1 },
      '-=0.4',
    )
    timelines.push(tlPremises)
  }
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})

const marqueeWords = ['ESPACIO', 'LUGAR', 'SENSORIAL', 'COLOR', 'FRICCIÓN', 'MATIZ']
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Filosofía" :inverse="true" class="mb-block" />

      <!-- Heading ENORME — full-width, left-aligned, word stagger lento -->
      <h2
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(4rem, 10vw, 9rem); font-weight: 300"
      >
        <span data-philosophy-word class="block" style="opacity: 0; transform: translateY(60px)">Human</span>
        <span data-philosophy-word class="block" style="opacity: 0; transform: translateY(60px)">to Human</span>
      </h2>

      <!-- Paragraph + CTA — full-width stack, no grid -->
      <p
        data-philosophy="paragraph"
        class="mt-element max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
        style="opacity: 0"
      >
        No diseñamos edificios. Diseñamos la experiencia de habitarlos.
        Cada proyecto comienza con una conversación, no con un plano.
      </p>

      <NuxtLink
        to="/nosotros"
        data-philosophy="cta"
        class="mt-element inline-block font-body text-sm uppercase tracking-wide text-text-inverse-muted transition-colors hover:text-text-inverse"
        style="opacity: 0"
      >
        Conocer más &rarr;
      </NuxtLink>
    </div>

    <!-- Image: full-width panoramic 21/9 with clip-path -->
    <div class="mt-block px-4 lg:px-8">
      <div
        data-philosophy="image-wrap"
        class="parallax-wrap overflow-hidden rounded-radius-sm"
        style="clip-path: inset(100% 0 0 0); background: linear-gradient(145deg, #3A3A38 0%, #2A2A28 50%, #1D1D1B 100%)"
      >
        <NuxtImg
          src="/images/philosophy/philosophy-galpon.jpg"
          alt="Interior arquitectónico — materialidad y luz natural"
          class="aspect-[16/10] w-full object-cover lg:aspect-[21/9]"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Premisas con dividers rojos verticales entre ellas -->
    <div class="mx-auto mt-block max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="flex flex-col items-start gap-element sm:flex-row sm:items-center sm:gap-0">
        <div data-philosophy="premise" style="opacity: 0; transform: translateX(-20px)">
          <h3
            class="font-display text-2xl text-text-inverse"
            style="font-weight: 300"
          >
            Lugar
          </h3>
          <p class="mt-tight font-body text-sm leading-relaxed text-text-inverse-muted">
            Cada sitio es único
          </p>
        </div>

        <div
          data-philosophy="premise-divider"
          class="mx-6 hidden h-12 w-px bg-accent sm:block"
          style="transform: scaleY(0); transform-origin: top"
        />

        <div data-philosophy="premise" style="opacity: 0; transform: translateX(-20px)">
          <h3
            class="font-display text-2xl text-text-inverse"
            style="font-weight: 300"
          >
            Color
          </h3>
          <p class="mt-tight font-body text-sm leading-relaxed text-text-inverse-muted">
            Atmósfera, no decorado
          </p>
        </div>

        <div
          data-philosophy="premise-divider"
          class="mx-6 hidden h-12 w-px bg-accent sm:block"
          style="transform: scaleY(0); transform-origin: top"
        />

        <div data-philosophy="premise" style="opacity: 0; transform: translateX(-20px)">
          <h3
            class="font-display text-2xl text-text-inverse"
            style="font-weight: 300"
          >
            Sensación
          </h3>
          <p class="mt-tight font-body text-sm leading-relaxed text-text-inverse-muted">
            Arquitectura que se siente
          </p>
        </div>
      </div>
    </div>

    <!-- Marquee: full-width, fuera del content -->
    <div class="mt-block text-text-inverse opacity-25">
      <UiMarquee :items="marqueeWords" :speed="30" />
    </div>
  </section>
</template>
