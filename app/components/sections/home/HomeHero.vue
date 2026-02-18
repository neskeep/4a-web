<script setup lang="ts">
const { $gsap } = useNuxtApp()

const heroRef = ref<HTMLElement>()
const animations: { kill: () => void }[] = []

const currentIndex = ref(0)

const slides = [
  { src: '/images/hero/toldo-aranjuez-1.webp', alt: 'Toldo de Aranjuez', name: 'Toldo de Aranjuez' },
  { src: '/images/hero/toldo-aranjuez-2.webp', alt: 'Toldo de Aranjuez', name: 'Toldo de Aranjuez' },
  // { src: '/images/hero/toldo-aranjuez-3.webp', alt: 'Toldo de Aranjuez', name: 'Toldo de Aranjuez' },
]

const currentSlideName = computed(() => slides[currentIndex.value]?.name ?? '')

// Ken Burns presets — each slide gets a different zoom + pan direction
const kenBurnsPresets = [
  { fromScale: 1.05, toScale: 1.16, fromX: 0, fromY: 0, toX: -1.5, toY: -1 },
  { fromScale: 1.14, toScale: 1.04, fromX: -2, fromY: -1.5, toX: 0.5, toY: 0.5 },
  { fromScale: 1.04, toScale: 1.14, fromX: 1.5, fromY: 0.5, toX: -1, toY: -0.5 },
  { fromScale: 1.12, toScale: 1.04, fromX: -0.5, fromY: 1.5, toX: 1.5, toY: -0.5 },
]

function startSlideshow(containerEls: HTMLElement[]) {
  const SLIDE_DUR = 8
  const FADE_DUR = 1.5

  function playSlide(idx: number) {
    const container = containerEls[idx]!
    const img = container.querySelector('img')!
    const nextIdx = (idx + 1) % containerEls.length
    const nextContainer = containerEls[nextIdx]!
    const nextImg = nextContainer.querySelector('img')!
    const preset = kenBurnsPresets[idx % kenBurnsPresets.length]!
    const nextPreset = kenBurnsPresets[nextIdx % kenBurnsPresets.length]!

    // Ken Burns on current image
    const kb = $gsap.fromTo(img,
      { scale: preset.fromScale, xPercent: preset.fromX, yPercent: preset.fromY },
      { scale: preset.toScale, xPercent: preset.toX, yPercent: preset.toY, duration: SLIDE_DUR, ease: 'none' },
    )
    animations.push(kb)

    // Schedule crossfade
    const dc = $gsap.delayedCall(SLIDE_DUR - FADE_DUR, () => {
      // Prepare next image at its KB start position
      $gsap.set(nextImg, {
        scale: nextPreset.fromScale,
        xPercent: nextPreset.fromX,
        yPercent: nextPreset.fromY,
      })

      // Crossfade containers
      const fadeOut = $gsap.to(container, { opacity: 0, duration: FADE_DUR, ease: 'power2.inOut' })
      currentIndex.value = nextIdx
      const fadeIn = $gsap.to(nextContainer, {
        opacity: 1,
        duration: FADE_DUR,
        ease: 'power2.inOut',
        onComplete: () => playSlide(nextIdx),
      })
      animations.push(fadeOut, fadeIn)
    })
    animations.push(dc)
  }

  playSlide(0)
}

onMounted(() => {
  if (!heroRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const mask = heroRef.value.querySelector<HTMLElement>('[data-hero-mask]')
    if (mask) mask.style.clipPath = 'inset(0% 0% 0% 0%)'
    heroRef.value.querySelectorAll<HTMLElement>('[data-hero-slide]').forEach((el, i) => {
      el.style.opacity = i === 0 ? '1' : '0'
    })
    heroRef.value.querySelectorAll<HTMLElement>('[data-hero-text]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    return
  }

  const mask = heroRef.value.querySelector('[data-hero-mask]')
  const containerEls = Array.from(heroRef.value.querySelectorAll<HTMLElement>('[data-hero-slide]'))
  const name = heroRef.value.querySelector('[data-hero-name]')
  const phrase = heroRef.value.querySelector('[data-hero-phrase]')
  const scroll = heroRef.value.querySelector('[data-hero-scroll]')

  // Initial state — all hidden, first visible
  containerEls.forEach((el, i) => {
    $gsap.set(el, { opacity: i === 0 ? 1 : 0 })
  })

  // Reveal timeline — curtain opens vertically
  const revealTl = $gsap.timeline({ delay: 0.2 })
  animations.push(revealTl)

  revealTl
    .fromTo(
      mask,
      { clipPath: 'inset(50% 0% 50% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power4.inOut' },
    )
    .fromTo(
      name,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' },
      1.0,
    )
    .fromTo(
      phrase,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      1.3,
    )
    .fromTo(
      scroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      1.8,
    )

  // Ken Burns slideshow starts immediately — motion is masked during reveal
  startSlideshow(containerEls)
})

onUnmounted(() => {
  animations.forEach(a => a.kill())
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative h-dvh w-full overflow-hidden bg-carbon"
  >
    <!-- Ken Burns slideshow — stacked images -->
    <div
      data-hero-mask
      class="absolute inset-0"
      style="clip-path: inset(50% 0% 50% 0%)"
    >
      <div
        v-for="(slide, i) in slides"
        :key="slide.src"
        data-hero-slide
        class="absolute inset-0"
        :style="{ opacity: i === 0 ? 1 : 0 }"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="h-full w-full object-cover"
          :loading="i === 0 ? 'eager' : 'lazy'"
        >
      </div>
    </div>

    <!-- Global tint — prevents text from getting lost on light images -->
    <div
      class="pointer-events-none absolute inset-0 z-[1]"
      style="background: rgba(29, 29, 27, 0.25)"
    />

    <!-- Vignette -->
    <div
      class="pointer-events-none absolute inset-0 z-[1]"
      style="box-shadow: inset 0 0 120px rgba(29, 29, 27, 0.3)"
    />

    <!-- Bottom gradient for legibility -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%]"
      style="background: linear-gradient(to top, rgba(29, 29, 27, 0.55) 0%, transparent 100%)"
    />

    <!-- Studio name — vertical watermark, right edge -->
    <div
      data-hero-text
      data-hero-name
      class="absolute right-8 top-1/2 z-10 -translate-y-1/2 lg:right-16"
      style="opacity: 0; writing-mode: vertical-rl"
    >
      <span class="font-body text-sm uppercase tracking-[0.25em] text-white/60">
        {{ currentSlideName }}
      </span>
    </div>

    <!-- Poetic phrase — bottom left -->
    <div class="absolute bottom-[clamp(60px,10vh,140px)] left-8 z-10 lg:left-16">
      <p
        data-hero-text
        data-hero-phrase
        class="font-display leading-tight tracking-tight text-white"
        style="font-size: clamp(1.5rem, 3.5vw, 3rem); font-weight: 300; opacity: 0; transform: translateY(20px); max-width: 480px"
      >
        Arquitectura que<br>se hace sentir.
      </p>
    </div>

    <!-- Scroll line -->
    <div
      data-hero-text
      data-hero-scroll
      class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      style="opacity: 0"
    >
      <div class="h-10 w-px animate-pulse-subtle bg-white/25" />
    </div>
  </section>
</template>
