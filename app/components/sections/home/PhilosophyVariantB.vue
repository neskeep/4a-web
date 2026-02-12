<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const words = sectionRef.value.querySelectorAll('[data-philosophy-word]')
  const paragraph = sectionRef.value.querySelector('[data-philosophy="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-philosophy="cta"]')
  const imageWrap = sectionRef.value.querySelector('[data-philosophy="image-wrap"]')
  const premises = sectionRef.value.querySelectorAll('[data-philosophy="premise"]')

  // Timeline 1 — Reveal (word-by-word)
  const tl = $gsap.timeline({
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
    paragraph,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.3',
  ).fromTo(
    cta,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2',
  ).fromTo(
    imageWrap,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.3',
  )
  timelines.push(tl)

  // Timeline 2 — Premises
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
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
    )
    timelines.push(tlPremises)
  }

  // Timeline 3 — Parallax
  if (imageWrap) {
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
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})

const marqueeWords = ['ESPACIO', 'LUGAR', 'SENSORIAL', 'COLOR', 'FRICCIÓN', 'MATIZ']
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto flex max-w-[var(--max-width-content)] flex-col items-center px-8 lg:px-16">
      <!-- Section label centrado -->
      <UiSectionLabel label="Filosofía" :inverse="true" class="mb-block" />

      <!-- Heading + texto centrado -->
      <div class="max-w-[var(--max-width-text)] text-center">
        <h2
          class="font-display leading-tight tracking-tight text-text-inverse"
          style="font-size: clamp(3.5rem, 9vw, 8rem); font-weight: 300"
        >
          <span data-philosophy-word class="inline" style="opacity: 0; transform: translateY(50px)">Human </span>
          <span data-philosophy-word class="inline" style="opacity: 0; transform: translateY(50px)">to </span>
          <span data-philosophy-word class="inline" style="opacity: 0; transform: translateY(50px)">Human</span>
        </h2>

        <p
          data-philosophy="paragraph"
          class="mx-auto mt-element max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-inverse-muted"
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
          Conocer más →
        </NuxtLink>
      </div>

      <!-- Imagen panorámica: ancho completo dentro del container -->
      <div
        data-philosophy="image-wrap"
        class="parallax-wrap mt-block w-full overflow-hidden rounded-radius-sm"
        style="opacity: 0; transform: translateY(30px); background: linear-gradient(145deg, #3A3A38 0%, #2A2A28 50%, #1D1D1B 100%)"
      >
        <NuxtImg
          src="/images/philosophy/philosophy-galpon.jpg"
          alt="Interior arquitectónico — materialidad y luz natural"
          class="aspect-[16/9] w-full object-cover lg:aspect-[21/9]"
          loading="lazy"
        />
      </div>

      <!-- Premisas centradas -->
      <div class="mt-block grid max-w-[var(--max-width-text)] grid-cols-1 gap-element text-center sm:grid-cols-3">
        <div data-philosophy="premise" style="opacity: 0; transform: translateY(30px)">
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

        <div data-philosophy="premise" style="opacity: 0; transform: translateY(30px)">
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

        <div data-philosophy="premise" style="opacity: 0; transform: translateY(30px)">
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
