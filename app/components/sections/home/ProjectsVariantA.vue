<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []
const parallaxTweens: ReturnType<typeof $gsap.to>[] = []

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

  // Row 1
  const row1 = sectionRef.value.querySelector('[data-projects-row="1"]')
  const row1Cards = sectionRef.value.querySelectorAll('[data-projects="row-1"]')
  if (row1 && row1Cards.length) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: row1, start: 'top 80%', once: true },
    })
    tl.fromTo(
      row1Cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
    )
    timelines.push(tl)
  }

  // Row 2
  const row2 = sectionRef.value.querySelector('[data-projects-row="2"]')
  const row2Cards = sectionRef.value.querySelectorAll('[data-projects="row-2"]')
  if (row2 && row2Cards.length) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: row2, start: 'top 80%', once: true },
    })
    tl.fromTo(
      row2Cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
    )
    timelines.push(tl)
  }

  // Row 3
  const row3Card = sectionRef.value.querySelector('[data-projects="row-3"]')
  if (row3Card) {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: row3Card, start: 'top 80%', once: true },
    })
    tl.fromTo(
      row3Card,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
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

  // Parallax on project images
  sectionRef.value.querySelectorAll<HTMLElement>('[data-parallax-wrap]').forEach((wrap) => {
    const img = wrap.querySelector('img')
    if (!img) return

    $gsap.set(img, { yPercent: -4 })
    const tween = $gsap.to(img, {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    parallaxTweens.push(tween)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
  parallaxTweens.forEach(tw => tw.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Proyectos" class="mb-block" />

      <!-- Heading — alineado izquierda, tensión editorial -->
      <h2
        data-projects="heading"
        class="font-display text-3xl leading-snug tracking-tight text-text"
        style="font-weight: 300; opacity: 0; transform: translateY(30px)"
      >
        Obras seleccionadas
      </h2>

      <!-- Projects grid -->
      <div class="mt-block space-y-element">
        <!-- Row 1: 65/35 -->
        <div data-projects-row="1" class="grid grid-cols-1 gap-element lg:grid-cols-[13fr_7fr]">
          <NuxtLink
            :to="`/proyectos/${projects[0].slug}`"
            data-projects="row-1"
            class="group"
            style="opacity: 0; transform: translateY(30px)"
          >
            <div
              data-parallax-wrap
              class="relative overflow-hidden rounded-radius-sm"
              :style="`background: ${projects[0].gradient}`"
            >
              <NuxtImg
                :src="projects[0].image"
                :alt="projects[0].title"
                class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] will-change-transform motion-safe:group-hover:scale-[1.02]"
                style="transition-timing-function: var(--ease-out-quart); scale: 1.12"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3 class="mt-4 font-display text-xl text-text lg:text-2xl" style="font-weight: 400">
              {{ projects[0].title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[0].category }} · {{ projects[0].location }}
            </p>
          </NuxtLink>

          <NuxtLink
            :to="`/proyectos/${projects[1].slug}`"
            data-projects="row-1"
            class="group"
            style="opacity: 0; transform: translateY(30px)"
          >
            <div
              data-parallax-wrap
              class="relative overflow-hidden rounded-radius-sm"
              :style="`background: ${projects[1].gradient}`"
            >
              <NuxtImg
                :src="projects[1].image"
                :alt="projects[1].title"
                class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] lg:aspect-[3/4] will-change-transform motion-safe:group-hover:scale-[1.02]"
                style="transition-timing-function: var(--ease-out-quart); scale: 1.12"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3 class="mt-4 font-display text-xl text-text lg:text-2xl" style="font-weight: 400">
              {{ projects[1].title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[1].category }} · {{ projects[1].location }}
            </p>
          </NuxtLink>
        </div>

        <!-- Row 2: 45/55 (zigzag invertido) -->
        <div data-projects-row="2" class="grid grid-cols-1 gap-element lg:grid-cols-[9fr_11fr]">
          <NuxtLink
            :to="`/proyectos/${projects[2].slug}`"
            data-projects="row-2"
            class="group"
            style="opacity: 0; transform: translateY(30px)"
          >
            <div
              data-parallax-wrap
              class="relative overflow-hidden rounded-radius-sm"
              :style="`background: ${projects[2].gradient}`"
            >
              <NuxtImg
                :src="projects[2].image"
                :alt="projects[2].title"
                class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] lg:aspect-[3/4] will-change-transform motion-safe:group-hover:scale-[1.02]"
                style="transition-timing-function: var(--ease-out-quart); scale: 1.12"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3 class="mt-4 font-display text-xl text-text lg:text-2xl" style="font-weight: 400">
              {{ projects[2].title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[2].category }} · {{ projects[2].location }}
            </p>
          </NuxtLink>

          <NuxtLink
            :to="`/proyectos/${projects[3].slug}`"
            data-projects="row-2"
            class="group"
            style="opacity: 0; transform: translateY(30px)"
          >
            <div
              data-parallax-wrap
              class="relative overflow-hidden rounded-radius-sm"
              :style="`background: ${projects[3].gradient}`"
            >
              <NuxtImg
                :src="projects[3].image"
                :alt="projects[3].title"
                class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] will-change-transform motion-safe:group-hover:scale-[1.02]"
                style="transition-timing-function: var(--ease-out-quart); scale: 1.12"
                loading="lazy"
              />
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
                style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
              />
            </div>
            <h3 class="mt-4 font-display text-xl text-text lg:text-2xl" style="font-weight: 400">
              {{ projects[3].title }}
            </h3>
            <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ projects[3].category }} · {{ projects[3].location }}
            </p>
          </NuxtLink>
        </div>

        <!-- Row 3: Full width panoramic -->
        <NuxtLink
          :to="`/proyectos/${projects[4].slug}`"
          data-projects="row-3"
          class="group block"
          style="opacity: 0; transform: translateY(30px)"
        >
          <div
            data-parallax-wrap
            class="relative overflow-hidden rounded-radius-sm"
            :style="`background: ${projects[4].gradient}`"
          >
            <NuxtImg
              :src="projects[4].image"
              :alt="projects[4].title"
              class="aspect-[16/10] w-full object-cover transition-transform duration-[600ms] lg:aspect-[16/9] will-change-transform motion-safe:group-hover:scale-[1.02]"
              style="transition-timing-function: var(--ease-out-quart); scale: 1.12"
              loading="lazy"
            />
            <div
              class="absolute inset-0 opacity-0 transition-opacity duration-[600ms] motion-safe:group-hover:opacity-100"
              style="background: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)"
            />
          </div>
          <h3 class="mt-4 font-display text-xl text-text lg:text-2xl" style="font-weight: 400">
            {{ projects[4].title }}
          </h3>
          <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
            {{ projects[4].category }} · {{ projects[4].location }}
          </p>
        </NuxtLink>
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
