<script setup lang="ts">
import { projects } from '~/data/projects'

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const animations: { kill: () => void }[] = []

// 3 featured projects — curated, not random
const featured = computed(() => {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)
})

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-work]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.clipPath = 'none'
    })
    return
  }

  const items = sectionRef.value.querySelectorAll('[data-work-item]')

  items.forEach((item) => {
    const img = item.querySelector('[data-work="image"]')
    const textEls = item.querySelectorAll('[data-work="text"]')

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 75%',
        once: true,
      },
    })

    // Image reveals with a horizontal curtain
    tl.fromTo(
      img,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.inOut' },
    )
    .fromTo(
      textEls,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
      '-=0.4',
    )

    animations.push(tl)

    // Parallax + grayscale-to-color on each project image
    const imgEl = img?.querySelector('img')
    if (imgEl) {
      // Parallax
      const p = $gsap.to(imgEl, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      animations.push(p)

      // Grayscale → color at center → grayscale
      $gsap.set(imgEl, { filter: 'grayscale(1)' })
      const colorTl = $gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      colorTl
        .to(imgEl, { filter: 'grayscale(0)', duration: 0.5, ease: 'power3.in' })
        .to(imgEl, { filter: 'grayscale(1)', duration: 0.5, ease: 'power3.out' })
      animations.push(colorTl)
    }
  })
})

onUnmounted(() => {
  animations.forEach(a => a.kill())
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-white overflow-x-hidden overflow-y-visible"
    style="padding-top: var(--spacing-section); padding-bottom: var(--spacing-section)"
  >
    <!--
      Three projects, each with a unique composition:
      1. Left-heavy (image ~70%, text floating right)
      2. Full-bleed (100% width, text overlaid)
      3. Right-heavy (image ~65% right-aligned, text floating left)
    -->

    <!-- Project 1 — Left-heavy composition -->
    <div
      v-if="featured[0]"
      data-work-item
      class="relative mx-auto mb-[var(--spacing-section)] max-w-[var(--max-width)] px-8 lg:px-16"
    >
      <!-- Floating sketch -->
      <img
        src="/images/projects/el-bosque/bg-sketch.png"
        alt=""
        class="pointer-events-none absolute right-0 top-0 hidden select-none lg:block"
        style="opacity: 0.3; width: clamp(400px, 50vw, 400px); translate: 55% -10%; z-index: 0; mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%); -webkit-mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%)"
      >
      <div class="relative z-[1] grid grid-cols-1 items-end gap-element lg:grid-cols-[2fr_1fr]">
        <NuxtLink
          :to="`/proyectos/${featured[0].slug}`"
          class="image-editorial block overflow-hidden"
          data-work="image"
          style="clip-path: inset(0 100% 0 0)"
        >
          <img
            :src="featured[0].heroImage.src"
            :alt="featured[0].heroImage.alt"
            class="w-full object-cover"
            style="aspect-ratio: 3/2; scale: 1.08"
            loading="lazy"
          >
        </NuxtLink>
        <div class="pb-2 lg:pb-4">
          <NuxtLink
            :to="`/proyectos/${featured[0].slug}`"
            class="group block"
          >
            <span
              data-work="text"
              class="font-body text-xs uppercase tracking-[0.15em] text-text-tertiary"
              style="opacity: 0; transform: translateY(15px)"
            >
              {{ featured[0].location }}
            </span>
            <h3
              data-work="text"
              class="mt-3 font-display tracking-tight text-text transition-colors duration-[350ms] group-hover:text-accent"
              style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 300; line-height: 1.15; transition-timing-function: var(--ease-out-quart); opacity: 0; transform: translateY(15px)"
            >
              {{ featured[0].title }}
            </h3>
            <p
              v-if="featured[0].conceptQuote"
              data-work="text"
              class="mt-3 max-w-xs font-display text-sm italic leading-relaxed text-text-secondary"
              style="font-weight: 300; opacity: 0; transform: translateY(15px)"
            >
              {{ featured[0].conceptQuote }}
            </p>
            <span
              data-work="text"
              class="mt-3 inline-block font-body text-xs uppercase tracking-[0.12em] text-text-tertiary"
              style="opacity: 0; transform: translateY(15px)"
            >
              {{ featured[0].year }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Project 2 — Full-bleed composition -->
    <div
      v-if="featured[1]"
      data-work-item
      class="mb-[var(--spacing-section)]"
    >
      <NuxtLink
        :to="`/proyectos/${featured[1].slug}`"
        class="image-editorial relative block overflow-hidden"
        data-work="image"
        style="clip-path: inset(0 100% 0 0)"
      >
        <img
          :src="featured[1].heroImage.src"
          :alt="featured[1].heroImage.alt"
          class="w-full object-cover"
          style="aspect-ratio: 21/9; scale: 1.06"
          loading="lazy"
        >
        <!-- Text overlay — bottom right -->
        <div class="absolute bottom-6 right-8 z-10 text-right lg:bottom-10 lg:right-16">
          <span class="font-body text-xs uppercase tracking-[0.15em] text-white/60">
            {{ featured[1].year }}
          </span>
          <h3
            class="mt-1 font-display tracking-tight text-white"
            style="font-size: clamp(1.25rem, 2vw, 1.75rem); font-weight: 300; line-height: 1.2"
          >
            {{ featured[1].title }}
          </h3>
        </div>
        <!-- Gradient for text legibility -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]"
          style="background: linear-gradient(to top, rgba(29, 29, 27, 0.4) 0%, transparent 100%)"
        />
      </NuxtLink>
      <!-- Caption below with quote -->
      <div
        class="mx-auto mt-6 max-w-[var(--max-width)] px-8 lg:px-16"
      >
        <div class="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8">
          <span
            data-work="text"
            class="font-body text-xs uppercase tracking-[0.15em] text-text-tertiary"
            style="opacity: 0; transform: translateY(15px)"
          >
            {{ featured[1].location }}
          </span>
          <p
            v-if="featured[1].conceptQuote"
            data-work="text"
            class="font-display text-sm italic leading-relaxed text-text-secondary"
            style="font-weight: 300; opacity: 0; transform: translateY(15px)"
          >
            {{ featured[1].conceptQuote }}
          </p>
        </div>
      </div>
    </div>

    <!-- Project 3 — Right-heavy composition -->
    <div
      v-if="featured[2]"
      data-work-item
      class="relative mx-auto max-w-[var(--max-width)] px-8 lg:px-16"
    >
      <!-- Floating sketch -->
      <img
        src="/images/projects/yaffar/bg-sketch.png"
        alt=""
        class="pointer-events-none absolute left-0 top-0 hidden select-none lg:block"
        style="opacity: 0.3; width: clamp(500px, 50vw, 600px); translate: -30% -15%; z-index: 0; mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%); -webkit-mask-image: radial-gradient(ellipse at center, black 55%, transparent 85%)"
      >
      <div class="relative z-[1] grid grid-cols-1 items-end gap-element lg:grid-cols-[1fr_2fr]">
        <div
          class="order-2 pb-2 lg:order-1 lg:pb-4"
        >
          <NuxtLink
            :to="`/proyectos/${featured[2].slug}`"
            class="group block"
          >
            <span
              data-work="text"
              class="font-body text-xs uppercase tracking-[0.15em] text-text-tertiary"
              style="opacity: 0; transform: translateY(15px)"
            >
              {{ featured[2].location }}
            </span>
            <h3
              data-work="text"
              class="mt-3 font-display tracking-tight text-text transition-colors duration-[350ms] group-hover:text-accent"
              style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 300; line-height: 1.15; transition-timing-function: var(--ease-out-quart); opacity: 0; transform: translateY(15px)"
            >
              {{ featured[2].title }}
            </h3>
            <p
              v-if="featured[2].conceptQuote"
              data-work="text"
              class="mt-3 max-w-xs font-display text-sm italic leading-relaxed text-text-secondary"
              style="font-weight: 300; opacity: 0; transform: translateY(15px)"
            >
              {{ featured[2].conceptQuote }}
            </p>
            <span
              data-work="text"
              class="mt-3 inline-block font-body text-xs uppercase tracking-[0.12em] text-text-tertiary"
              style="opacity: 0; transform: translateY(15px)"
            >
              {{ featured[2].year }}
            </span>
          </NuxtLink>
        </div>
        <NuxtLink
          :to="`/proyectos/${featured[2].slug}`"
          class="image-editorial order-1 block overflow-hidden lg:order-2"
          data-work="image"
          style="clip-path: inset(0 100% 0 0)"
        >
          <img
            :src="featured[2].heroImage.src"
            :alt="featured[2].heroImage.alt"
            class="w-full object-cover"
            style="aspect-ratio: 3/2; scale: 1.08"
            loading="lazy"
          >
        </NuxtLink>
      </div>
    </div>

    <!-- View all — minimal -->
    <div
      class="mx-auto mt-[var(--spacing-section-sm)] max-w-[var(--max-width)] px-8 text-center lg:px-16"
    >
      <NuxtLink
        to="/proyectos"
        class="inline-block font-body text-xs uppercase tracking-[0.15em] text-text-tertiary transition-colors duration-[350ms] hover:text-text"
        style="transition-timing-function: var(--ease-out-quart)"
      >
        Ver todos los proyectos
      </NuxtLink>
    </div>
  </section>
</template>
