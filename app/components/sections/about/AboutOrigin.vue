<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const milestones = [
  { year: '1984', label: 'Fundacion La Paz', accent: false },
  { year: '1995', label: 'Expansion EE.UU.', accent: false },
  { year: '2008', label: 'Proyectos Asia', accent: false },
  { year: '2018', label: 'Nueva generacion', accent: false },
  { year: '2024', label: 'Estudio 4A', accent: true },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  // Text + image reveal
  const heading = sectionRef.value.querySelector('[data-origin="heading"]')
  const paragraphs = sectionRef.value.querySelectorAll('[data-origin="paragraph"]')
  const imageWrap = sectionRef.value.querySelector('[data-origin="image"]')

  $gsap.set(heading, { opacity: 0, y: 40 })
  $gsap.set(paragraphs, { opacity: 0 })
  $gsap.set(imageWrap, { opacity: 0, y: 30 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.2,
  ).to(
    paragraphs,
    { opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15 },
    '-=0.4',
  ).to(
    imageWrap,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.5',
  )
  timelines.push(tl)

  // Timeline animation
  const timelineLine = sectionRef.value.querySelector('[data-origin-line]')
  const dots = sectionRef.value.querySelectorAll('[data-origin="dot"]')

  if (timelineLine && dots.length) {
    $gsap.set(timelineLine, { width: '0%' })
    $gsap.set(dots, { scale: 0, opacity: 0 })

    const tlTimeline = $gsap.timeline({
      scrollTrigger: {
        trigger: timelineLine,
        start: 'top 85%',
        once: true,
      },
    })

    tlTimeline.to(
      timelineLine,
      { width: '100%', duration: 1, ease: 'power3.out' },
    ).to(
      dots,
      { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.12 },
      '-=0.5',
    )
    timelines.push(tlTimeline)
  }

  // Parallax on image
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
</script>

<template>
  <section ref="sectionRef" class="bg-bg py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Origen" class="mb-block" />

      <!-- Grid: texto + imagen -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[11fr_9fr]">
        <!-- Columna izquierda: texto -->
        <div>
          <h2
            data-origin="heading"
            class="font-display text-4xl leading-snug tracking-tight text-text"
            style="font-weight: 300"
          >
            De Palza<br>Asociados<br>a Estudio 4A
          </h2>

          <div class="mt-element max-w-[var(--max-width-narrow)]">
            <p
              data-origin="paragraph"
              class="font-body text-lg leading-relaxed text-text-secondary"
            >
              En 1984, Michael Palza fundo lo que hoy conocemos como Estudio 4A. Lo que empezo como una practica personal en La Paz se convirtio, proyecto a proyecto, en un estudio con presencia en tres continentes.
            </p>

            <p
              data-origin="paragraph"
              class="mt-element font-body text-lg leading-relaxed text-text-secondary"
            >
              Cuarenta anos despues, la incorporacion de una nueva generacion de arquitectos transformo la practica. No como ruptura, sino como simbiosis: la experiencia acumulada fusionada con la energia de quienes se niegan a repetir formulas.
            </p>

            <p
              data-origin="paragraph"
              class="mt-element font-body text-lg leading-relaxed text-text-secondary"
            >
              En 2024, Palza Asociados se convirtio en Estudio 4A — un nombre que honra el legado y abre espacio para lo que viene.
            </p>
          </div>
        </div>

        <!-- Columna derecha: imagen -->
        <div
          data-origin="image"
          class="parallax-wrap overflow-hidden rounded-radius-sm"
          style="background: linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)"
        >
          <img
            src="/images/studio/michael-palza.jpg"
            alt="Archivo historico — Estudio 4A en sus primeros anos"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Timeline horizontal -->
      <div class="mt-section-sm">
        <div class="relative">
          <!-- Linea base -->
          <div
            data-origin-line
            class="h-px bg-border"
          />

          <!-- Puntos del timeline -->
          <div class="mt-element flex justify-between">
            <div
              v-for="milestone in milestones"
              :key="milestone.year"
              data-origin="dot"
              class="flex flex-col items-center"
            >
              <!-- Dot -->
              <div
                class="mb-tight h-1.5 w-1.5 rounded-full"
                :class="milestone.accent ? 'bg-accent' : 'bg-carbon'"
              />
              <!-- Year -->
              <span
                class="font-display text-xl"
                :class="milestone.accent ? 'text-accent' : 'text-text'"
                style="font-weight: 400"
              >
                {{ milestone.year }}
              </span>
              <!-- Label -->
              <span class="mt-micro font-body text-sm text-text-tertiary">
                {{ milestone.label }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
