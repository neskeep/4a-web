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
    return
  }

  const heading = sectionRef.value.querySelector('[data-philosophy="heading"]')
  const paragraph = sectionRef.value.querySelector('[data-philosophy="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-philosophy="cta"]')
  const imageWrap = sectionRef.value.querySelector('[data-philosophy="image-wrap"]')
  const premises = sectionRef.value.querySelectorAll('[data-philosophy="premise"]')

  // Timeline 1 — Reveal
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    heading,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    0.2,
  ).fromTo(
    paragraph,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  ).fromTo(
    cta,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  ).fromTo(
    imageWrap,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6',
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
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Filosofía" :inverse="true" class="mb-block" />

      <!-- Grid: texto + imagen -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[11fr_9fr]">
        <!-- Columna izquierda: texto -->
        <div class="flex flex-col justify-center">
          <h2
            data-philosophy="heading"
            class="font-display text-5xl leading-tight tracking-tight text-text-inverse"
            style="font-weight: 300; opacity: 0; transform: translateY(60px)"
          >
            Human<br>to Human
          </h2>

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
            Conocer más →
          </NuxtLink>
        </div>

        <!-- Columna derecha: imagen -->
        <div
          data-philosophy="image-wrap"
          class="parallax-wrap overflow-hidden rounded-radius-sm"
          style="opacity: 0; transform: translateY(30px); background: linear-gradient(145deg, #3A3A38 0%, #2A2A28 50%, #1D1D1B 100%)"
        >
          <NuxtImg
            src="/images/philosophy/philosophy-galpon.jpg"
            alt="Interior arquitectónico — materialidad y luz natural"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Divider -->
      <div class="my-block h-px w-full bg-border-dark" />

      <!-- Premisas -->
      <div class="grid grid-cols-1 gap-element sm:grid-cols-3">
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
