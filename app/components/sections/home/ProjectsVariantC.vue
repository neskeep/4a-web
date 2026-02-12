<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

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
  {
    slug: 'centro-cultural',
    title: 'Centro Cultural',
    category: 'Cultural',
    location: 'Cochabamba',
    image: '/images/projects/centro-cultural.jpg',
    gradient: 'linear-gradient(140deg, #CCCAC7 0%, #AFADA9 100%)',
  },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-projects]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.clipPath = 'inset(0 0 0 0)'
    })
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
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    )
    timelines.push(tl)
  }

  // Par 1: info izq + imagen der (42/58)
  const pair1 = sectionRef.value.querySelector('[data-projects-pair="1"]')
  if (pair1) {
    const info1 = pair1.querySelector('[data-projects="info-1"]')
    const image1 = pair1.querySelector('[data-projects="image-1"]')

    const tl = $gsap.timeline({
      scrollTrigger: { trigger: pair1, start: 'top 75%', once: true },
    })

    tl.fromTo(
      image1,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
    )
      .fromTo(
        info1,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.3,
      )
    timelines.push(tl)
  }

  // Par 2: imagen izq + info der (58/42) — invertido
  const pair2 = sectionRef.value.querySelector('[data-projects-pair="2"]')
  if (pair2) {
    const image2 = pair2.querySelector('[data-projects="image-2"]')
    const info2 = pair2.querySelector('[data-projects="info-2"]')

    const tl = $gsap.timeline({
      scrollTrigger: { trigger: pair2, start: 'top 75%', once: true },
    })

    tl.fromTo(
      image2,
      { clipPath: 'inset(0 0 0 100%)' },
      { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
    )
      .fromTo(
        info2,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.3,
      )
    timelines.push(tl)
  }

  // Full width panoramic — apertura desde centro
  const full = sectionRef.value.querySelector('[data-projects="full"]')
  if (full) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: full, start: 'top 80%', once: true },
    })
    tl.fromTo(
      full,
      { clipPath: 'inset(0 50% 0 50%)' },
      { clipPath: 'inset(0 0% 0 0%)', duration: 1, ease: 'power3.inOut' },
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

      <div class="mt-block space-y-block">
        <!-- Par 1: info izq + imagen der (42/58) -->
        <div
          data-projects-pair="1"
          class="grid grid-cols-1 gap-element lg:grid-cols-[42fr_58fr]"
        >
          <div
            data-projects="info-1"
            class="flex flex-col justify-center"
            style="opacity: 0; transform: translateX(-30px)"
          >
            <h3
              class="font-display text-2xl text-text lg:text-3xl"
              style="font-weight: 400"
            >
              {{ projects[0].title }}
            </h3>
            <p class="mt-2 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[0].category }} · {{ projects[0].location }}
            </p>
            <NuxtLink
              :to="`/proyectos/${projects[0].slug}`"
              class="mt-4 inline-block font-body text-sm tracking-wide text-text-secondary transition-colors hover:text-accent"
            >
              Ver proyecto &rarr;
            </NuxtLink>
          </div>
          <div
            data-projects="image-1"
            class="overflow-hidden rounded-radius-sm"
            :style="{ clipPath: 'inset(0 100% 0 0)', background: projects[0].gradient }"
          >
            <NuxtImg
              :src="projects[0].image"
              :alt="projects[0].title"
              class="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Par 2: imagen izq + info der (58/42) — invertido -->
        <div
          data-projects-pair="2"
          class="grid grid-cols-1 gap-element lg:grid-cols-[58fr_42fr]"
        >
          <div
            data-projects="image-2"
            class="overflow-hidden rounded-radius-sm lg:order-none"
            :style="{ clipPath: 'inset(0 0 0 100%)', background: projects[1].gradient }"
          >
            <NuxtImg
              :src="projects[1].image"
              :alt="projects[1].title"
              class="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            data-projects="info-2"
            class="flex flex-col justify-center"
            style="opacity: 0; transform: translateX(30px)"
          >
            <h3
              class="font-display text-2xl text-text lg:text-3xl"
              style="font-weight: 400"
            >
              {{ projects[1].title }}
            </h3>
            <p class="mt-2 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[1].category }} · {{ projects[1].location }}
            </p>
            <NuxtLink
              :to="`/proyectos/${projects[1].slug}`"
              class="mt-4 inline-block font-body text-sm tracking-wide text-text-secondary transition-colors hover:text-accent"
            >
              Ver proyecto &rarr;
            </NuxtLink>
          </div>
        </div>

        <!-- Full width panoramic — tercer proyecto -->
        <div
          data-projects="full"
          class="overflow-hidden rounded-radius-sm"
          :style="{ clipPath: 'inset(0 50% 0 50%)', background: projects[2].gradient }"
        >
          <NuxtLink :to="`/proyectos/${projects[2].slug}`" class="group block">
            <div class="relative">
              <NuxtImg
                :src="projects[2].image"
                :alt="projects[2].title"
                class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] lg:aspect-[21/9] motion-safe:group-hover:scale-[1.02]"
                style="transition-timing-function: var(--ease-out-quart)"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3
              class="mt-4 font-display text-xl text-text lg:text-2xl"
              style="font-weight: 400"
            >
              {{ projects[2].title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[2].category }} · {{ projects[2].location }}
            </p>
          </NuxtLink>
        </div>
      </div>

      <!-- CTA -->
      <NuxtLink
        to="/proyectos"
        data-projects="cta"
        class="mt-block inline-block font-body text-sm tracking-wide text-text-secondary transition-colors hover:text-accent"
        style="opacity: 0"
      >
        Ver todos los proyectos &rarr;
      </NuxtLink>
    </div>
  </section>
</template>
