<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const marqueeWords = ['ESPACIO', 'LUGAR', 'SENSORIAL', 'COLOR', 'FRICCIÓN', 'MATIZ']

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const leftCol = sectionRef.value.querySelector<HTMLElement>('[data-col="left"]')
    const rightCol = sectionRef.value.querySelector<HTMLElement>('[data-col="right"]')
    if (leftCol) leftCol.style.clipPath = 'inset(0 0 0 0)'
    if (rightCol) rightCol.style.clipPath = 'inset(0 0 0 0)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-philosophy]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const leftCol = sectionRef.value.querySelector('[data-col="left"]')
  const rightCol = sectionRef.value.querySelector('[data-col="right"]')
  const words = sectionRef.value.querySelectorAll('[data-philosophy-word]')
  const paragraph = sectionRef.value.querySelector('[data-philosophy="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-philosophy="cta"]')
  const premises = sectionRef.value.querySelectorAll('[data-philosophy="premise"]')

  // Timeline 1 — Split reveal + content
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    leftCol,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
  )
    .fromTo(
      rightCol,
      { clipPath: 'inset(0 0 0 100%)' },
      { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
      0,
    )
    .fromTo(
      words,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
      0.5,
    )
    .fromTo(
      paragraph,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.out' },
      '-=0.3',
    )
    .fromTo(
      cta,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
    )
  timelines.push(tl)

  // Timeline 2 — Premises stagger
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
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark">
    <div class="flex min-h-[80vh] flex-col lg:flex-row">
      <!-- Zona izquierda 50% — texto -->
      <div
        data-col="left"
        class="flex w-full flex-col justify-center bg-bg-dark px-8 py-section lg:w-1/2 lg:px-16"
        style="clip-path: inset(0 100% 0 0)"
      >
        <UiSectionLabel label="Filosofía" :inverse="true" class="mb-block" />

        <h2
          class="font-display text-5xl leading-tight tracking-tight text-text-inverse"
          style="font-weight: 300"
        >
          <span data-philosophy-word class="block" style="opacity: 0; transform: translateY(50px)">Human</span>
          <span data-philosophy-word class="block" style="opacity: 0; transform: translateY(50px)">to Human</span>
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
          Conocer más &rarr;
        </NuxtLink>
      </div>

      <!-- Zona derecha 50% — imagen con premisas overlay -->
      <div
        data-col="right"
        class="relative w-full bg-bg-dark-elevated lg:w-1/2"
        style="clip-path: inset(0 0 0 100%)"
      >
        <!-- Imagen -->
        <NuxtImg
          src="/images/philosophy/philosophy-galpon.jpg"
          alt="Interior arquitectónico — materialidad y luz natural"
          class="h-full min-h-[50vh] w-full object-cover opacity-60 lg:min-h-full"
          loading="lazy"
        />

        <!-- Premisas overlay en bottom -->
        <div class="absolute inset-x-0 bottom-0 flex gap-element px-8 pb-8 lg:px-12">
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
    </div>

    <!-- Marquee full-width debajo del split -->
    <div class="py-block text-text-inverse opacity-25">
      <UiMarquee :items="marqueeWords" :speed="30" />
    </div>
  </section>
</template>
