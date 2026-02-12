<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const projects = [
  {
    slug: 'bosque-boulevard',
    title: 'El Bosque Boulevard',
    category: 'Espacio Urbano',
    location: 'La Paz',
    image: '/images/projects/bosque-boulevard.jpg',
    gradient: 'linear-gradient(145deg, #D4D0CC 0%, #B8B4B0 100%)',
  },
  {
    slug: 'edificio-msc',
    title: 'Edificio MSC',
    category: 'Corporativo',
    location: 'Santa Cruz',
    image: '/images/projects/edificio-msc.jpg',
    gradient: 'linear-gradient(135deg, #C8C4BF 0%, #A8A49F 100%)',
  },
  {
    slug: 'costanera-1000',
    title: 'Costanera 1000',
    category: 'Residencial',
    location: 'La Paz',
    image: '/images/projects/costanera-1000.jpg',
    gradient: 'linear-gradient(160deg, #D0CBC4 0%, #B5AFA8 100%)',
  },
  {
    slug: 'concurso-bisa',
    title: 'Concurso BISA',
    category: 'Institucional',
    location: 'La Paz',
    image: '/images/projects/concurso-bisa.jpg',
    gradient: 'linear-gradient(150deg, #D6D2CD 0%, #BAB6B1 100%)',
  },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-projects]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const featured = sectionRef.value.querySelector<HTMLElement>('[data-projects="featured-wrap"]')
    if (featured) featured.style.clipPath = 'inset(0 0 0 0)'
    return
  }

  // Heading
  const heading = sectionRef.value.querySelector('[data-projects="heading"]')
  if (heading) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: heading, start: 'top 80%', once: true },
    })
    tl.fromTo(
      heading,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' },
    )
    timelines.push(tl)
  }

  // Featured project — clip-path reveal + overlay info
  const featuredWrap = sectionRef.value.querySelector('[data-projects="featured-wrap"]')
  const featuredOverlay = sectionRef.value.querySelector('[data-projects="featured-overlay"]')
  if (featuredWrap) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: featuredWrap, start: 'top 80%', once: true },
    })
    tl.fromTo(
      featuredWrap,
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0 0 0 0)', duration: 1.1, ease: 'power4.inOut' },
    )
    if (featuredOverlay) {
      tl.fromTo(
        featuredOverlay,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power4.out' },
        '-=0.3',
      )
    }
    timelines.push(tl)
  }

  // Grid cards — stagger
  const gridCards = sectionRef.value.querySelectorAll('[data-projects="grid-card"]')
  if (gridCards.length) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: gridCards[0], start: 'top 80%', once: true },
    })
    tl.fromTo(
      gridCards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', stagger: 0.15 },
    )
    timelines.push(tl)
  }

  // CTA
  const cta = sectionRef.value.querySelector('[data-projects="cta"]')
  if (cta) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: cta, start: 'top 85%', once: true },
    })
    tl.fromTo(
      cta,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 },
    )
    timelines.push(tl)
  }
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Proyectos" class="mb-block" />

      <!-- Heading -->
      <h2
        data-projects="heading"
        class="font-display text-3xl leading-snug tracking-tight text-text"
        style="font-weight: 300; opacity: 0; transform: translateY(30px)"
      >
        Obras seleccionadas
      </h2>

      <div class="mt-block space-y-element">
        <!-- Row 1: Featured project FULL-WIDTH panoramic with overlay text -->
        <NuxtLink
          :to="`/proyectos/${projects[0].slug}`"
          class="group relative block"
        >
          <div
            data-projects="featured-wrap"
            class="relative overflow-hidden rounded-radius-sm"
            :style="`background: ${projects[0].gradient}; clip-path: inset(100% 0 0 0)`"
          >
            <NuxtImg
              :src="projects[0].image"
              :alt="projects[0].title"
              class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] lg:aspect-[21/9] motion-safe:group-hover:scale-[1.03]"
              style="transition-timing-function: var(--ease-out-quart)"
              loading="lazy"
            />
            <!-- Gradient overlay for text legibility -->
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to top, rgba(29, 29, 27, 0.7) 0%, rgba(29, 29, 27, 0.1) 40%, transparent 60%)"
            />
            <!-- Overlay text — bottom-left -->
            <div
              data-projects="featured-overlay"
              class="absolute bottom-0 left-0 p-6 lg:p-10"
              style="opacity: 0; transform: translateY(20px)"
            >
              <h3
                class="font-display text-2xl text-text-inverse lg:text-4xl"
                style="font-weight: 300"
              >
                {{ projects[0].title }}
              </h3>
              <p class="mt-2 font-body text-xs uppercase tracking-wide text-text-inverse-muted">
                {{ projects[0].category }} &middot; {{ projects[0].location }}
              </p>
            </div>
          </div>
        </NuxtLink>

        <!-- Row 2: 3-col uniform grid -->
        <div class="grid grid-cols-1 gap-element sm:grid-cols-3">
          <NuxtLink
            v-for="project in projects.slice(1)"
            :key="project.slug"
            :to="`/proyectos/${project.slug}`"
            data-projects="grid-card"
            class="group"
            style="opacity: 0; transform: translateY(30px)"
          >
            <div
              class="relative overflow-hidden rounded-radius-sm"
              :style="`background: ${project.gradient}`"
            >
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="aspect-[4/5] w-full object-cover transition-transform duration-[600ms] motion-safe:group-hover:scale-[1.03]"
                style="transition-timing-function: var(--ease-out-quart)"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3 class="mt-4 font-display text-xl text-text" style="font-weight: 400">
              {{ project.title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ project.category }} &middot; {{ project.location }}
            </p>
          </NuxtLink>
        </div>
      </div>

      <!-- CTA -->
      <NuxtLink
        to="/proyectos"
        data-projects="cta"
        class="mt-block inline-block font-body text-sm tracking-wide text-text-secondary hover:text-accent"
        style="opacity: 0"
      >
        Ver todos los proyectos &rarr;
      </NuxtLink>
    </div>
  </section>
</template>
