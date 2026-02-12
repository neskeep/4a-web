<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const team = [
  { name: 'Michael Palza', role: 'Fundador', image: '/images/studio/michael-palza.jpg', gradient: 'linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)' },
  { name: 'Cecilia Velasco', role: 'Directora', image: '/images/studio/cecilia-velasco.jpg', gradient: 'linear-gradient(135deg, #C8C4BF 0%, #A8A49F 100%)' },
  { name: '[Arq. 3]', role: 'Arquitecto', image: '/images/studio/team-member-3.jpg', gradient: 'linear-gradient(150deg, #D0CBC4 0%, #B5AFA8 100%)' },
  { name: '[Arq. 4]', role: 'Arquitecto', image: '/images/studio/team-member-4.jpg', gradient: 'linear-gradient(140deg, #D6D2CD 0%, #BAB6B1 100%)' },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const leftCol = sectionRef.value.querySelector<HTMLElement>('[data-col="left"]')
    const rightCol = sectionRef.value.querySelector<HTMLElement>('[data-col="right"]')
    if (leftCol) leftCol.style.clipPath = 'inset(0 0 0 0)'
    if (rightCol) rightCol.style.clipPath = 'inset(0 0 0 0)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-studio-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-studio]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const leftCol = sectionRef.value.querySelector('[data-col="left"]')
  const rightCol = sectionRef.value.querySelector('[data-col="right"]')
  const words = sectionRef.value.querySelectorAll('[data-studio-word]')
  const paragraph = sectionRef.value.querySelector('[data-studio="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-studio="cta"]')
  const imageWrap = sectionRef.value.querySelector('[data-col="left"]')
  const members = sectionRef.value.querySelectorAll('[data-studio="member"]')

  // Timeline 1 — Split reveal INVERTIDO (imagen desde izq, texto desde der)
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    leftCol,
    { clipPath: 'inset(0 0 0 100%)' },
    { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
  )
    .fromTo(
      rightCol,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
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

  // Timeline 2 — Parallax on image
  if (leftCol) {
    const img = leftCol.querySelector('img')
    if (img) {
      const parallax = $gsap.timeline({
        scrollTrigger: {
          trigger: leftCol,
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

  // Timeline 3 — Team members stagger
  if (members.length) {
    const tlMembers = $gsap.timeline({
      scrollTrigger: {
        trigger: members[0],
        start: 'top 85%',
        once: true,
      },
    })

    tlMembers.fromTo(
      members,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
    )
    timelines.push(tlMembers)
  }
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg">
    <!-- Split 58/42 invertido -->
    <div class="flex min-h-[70vh] flex-col lg:flex-row">
      <!-- Zona izquierda 58% — imagen con parallax -->
      <div
        data-col="left"
        class="parallax-wrap relative w-full overflow-hidden lg:w-[58%]"
        style="clip-path: inset(0 0 0 100%); background: linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)"
      >
        <NuxtImg
          src="/images/studio/studio-team.jpg"
          alt="Equipo de Estudio 4A trabajando en el Galpón"
          class="h-full min-h-[40vh] w-full object-cover lg:min-h-full"
          loading="lazy"
        />
      </div>

      <!-- Zona derecha 42% — texto -->
      <div
        data-col="right"
        class="flex w-full flex-col justify-center bg-bg-alt px-8 py-section lg:w-[42%] lg:px-16"
        style="clip-path: inset(0 100% 0 0)"
      >
        <UiSectionLabel label="El Estudio" class="mb-block" />

        <h2
          class="font-display text-4xl leading-snug tracking-tight text-text lg:text-5xl"
          style="font-weight: 300"
        >
          <span data-studio-word class="block" style="opacity: 0; transform: translateY(50px)">Más que</span>
          <span data-studio-word class="block" style="opacity: 0; transform: translateY(50px)">una oficina,</span>
          <span data-studio-word class="block" style="opacity: 0; transform: translateY(50px)">un manifiesto vivo.</span>
        </h2>

        <p
          data-studio="paragraph"
          class="mt-element max-w-[var(--max-width-narrow)] font-body text-lg leading-relaxed text-text-secondary"
          style="opacity: 0"
        >
          Desde el Galpón 4A en La Paz, un equipo joven y diverso reimagina la arquitectura cada día.
        </p>

        <NuxtLink
          to="/nosotros"
          data-studio="cta"
          class="mt-element inline-block font-body text-sm uppercase tracking-wide text-text-secondary transition-colors hover:text-accent"
          style="opacity: 0"
        >
          Conocer al equipo &rarr;
        </NuxtLink>
      </div>
    </div>

    <!-- Team grid full-width debajo del split -->
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 py-section-sm lg:px-16">
      <!-- Divider -->
      <div class="mb-block h-px w-full bg-border-subtle" />

      <!-- Team grid -->
      <div class="grid grid-cols-2 gap-element sm:grid-cols-4">
        <div
          v-for="member in team"
          :key="member.name"
          data-studio="member"
          style="opacity: 0; transform: translateY(30px)"
        >
          <div
            class="overflow-hidden rounded-radius-sm"
            :style="{ background: member.gradient }"
          >
            <NuxtImg
              :src="member.image"
              :alt="member.name"
              class="aspect-[3/4] w-full object-cover transition-transform duration-[600ms] motion-safe:hover:scale-[1.02]"
              style="transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1)"
              loading="lazy"
            />
          </div>
          <h3
            class="mt-tight font-display text-xl text-text"
            style="font-weight: 400"
          >
            {{ member.name }}
          </h3>
          <p class="font-body text-xs uppercase tracking-wide text-text-tertiary">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
