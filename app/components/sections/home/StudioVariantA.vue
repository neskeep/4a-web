<script setup lang="ts">
const { $gsap } = useNuxtApp()

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
    sectionRef.value.querySelectorAll<HTMLElement>('[data-studio]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const heading = sectionRef.value.querySelector('[data-studio="heading"]')
  const paragraph = sectionRef.value.querySelector('[data-studio="paragraph"]')
  const cta = sectionRef.value.querySelector('[data-studio="cta"]')
  const imageWrap = sectionRef.value.querySelector('[data-studio="image-wrap"]')
  const members = sectionRef.value.querySelectorAll('[data-studio="member"]')

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

  // Timeline 2 — Team members
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
</script>

<template>
  <section ref="sectionRef" class="bg-bg py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="El Estudio" class="mb-block" />

      <!-- Grid: imagen + texto -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[1fr_1fr]">
        <!-- Columna izquierda: imagen -->
        <div
          data-studio="image-wrap"
          class="parallax-wrap overflow-hidden rounded-radius-sm"
          style="opacity: 0; transform: translateY(30px); background: linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)"
        >
          <NuxtImg
            src="/images/studio/studio-team.jpg"
            alt="Equipo de Estudio 4A trabajando en el Galpón"
            class="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Columna derecha: texto -->
        <div class="flex flex-col justify-center">
          <h2
            data-studio="heading"
            class="font-display text-4xl leading-snug tracking-tight text-text lg:text-5xl"
            style="font-weight: 300; opacity: 0; transform: translateY(60px)"
          >
            Más que una oficina,<br>un manifiesto vivo.
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
            Conocer al equipo →
          </NuxtLink>
        </div>
      </div>

      <!-- Divider -->
      <div class="my-block h-px w-full bg-border-subtle" />

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
