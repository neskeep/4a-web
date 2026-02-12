<script setup lang="ts">
const { $gsap } = useNuxtApp()
const ui = useUiStore()

const heroRef = ref<HTMLElement>()
const videoRef = ref<HTMLVideoElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null
let observer: IntersectionObserver | null = null

ui.navbarTheme = 'dark'

onMounted(() => {
  if (!heroRef.value || !$gsap) return

  if (videoRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.value?.play()
        } else {
          videoRef.value?.pause()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(heroRef.value)
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    heroRef.value.querySelectorAll<HTMLElement>('[data-hero]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const line = heroRef.value.querySelector<HTMLElement>('[data-hero-line]')
    if (line) line.style.width = '48px'
    const leftCol = heroRef.value.querySelector<HTMLElement>('[data-col="left"]')
    const rightCol = heroRef.value.querySelector<HTMLElement>('[data-col="right"]')
    if (leftCol) leftCol.style.clipPath = 'inset(0 0 0 0)'
    if (rightCol) rightCol.style.clipPath = 'inset(0 0 0 0)'
    return
  }

  const leftCol = heroRef.value.querySelector('[data-col="left"]')
  const rightCol = heroRef.value.querySelector('[data-col="right"]')
  const words = heroRef.value.querySelectorAll('[data-hero-word]')
  const line = heroRef.value.querySelector('[data-hero-line]')
  const subline = heroRef.value.querySelector('[data-hero="subline"]')
  const scroll = heroRef.value.querySelector('[data-hero="scroll"]')

  tl = $gsap.timeline({ delay: 0.2 })

  tl.fromTo(
    leftCol,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' }
  )
    .fromTo(
      rightCol,
      { clipPath: 'inset(0 0 0 100%)' },
      { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
      0
    )
    .fromTo(
      words,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
      0.5
    )
    .fromTo(
      line,
      { width: 0 },
      { width: 48, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(
      subline,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo(
      scroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.1'
    )
})

onUnmounted(() => {
  tl?.kill()
  observer?.disconnect()
  ui.navbarTheme = 'light'
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative flex h-dvh w-full flex-col lg:flex-row"
  >
    <!-- Columna izquierda — zona editorial clara -->
    <div
      data-col="left"
      class="flex w-full flex-col justify-center bg-bg px-8 py-16 lg:w-[42%] lg:px-12 xl:px-16"
      style="clip-path: inset(0 100% 0 0)"
    >
      <h1
        class="font-display leading-tight tracking-tight text-text"
        style="font-weight: 400; font-size: clamp(2.5rem, 5vw, 5rem)"
      >
        <span data-hero-word class="block" style="opacity: 0; transform: translateY(40px)">Experiencia</span>
        <span data-hero-word class="block" style="opacity: 0; transform: translateY(40px)">y rebeldía.</span>
      </h1>

      <div
        data-hero-line
        class="my-6 h-px bg-accent"
        style="width: 0"
      />

      <p
        data-hero="subline"
        class="max-w-sm font-body text-lg leading-relaxed text-text-secondary"
        style="opacity: 0; transform: translateY(20px)"
      >
        Pensar sin pausa, crear sin miedo.
      </p>
    </div>

    <!-- Columna derecha — zona oscura / media placeholder -->
    <div
      data-col="right"
      class="relative h-[45vh] w-full bg-bg-dark lg:h-full lg:flex-1"
      style="clip-path: inset(0 0 0 100%)"
    >
      <!-- Video de fondo -->
      <video
        ref="videoRef"
        class="absolute inset-0 z-0 h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
      </video>

      <!-- Overlay sutil para mantener tono oscuro -->
      <div
        class="absolute inset-0 z-[1]"
        style="background: linear-gradient(135deg, rgba(29, 29, 27, 0.3) 0%, rgba(29, 29, 27, 0.5) 100%)"
      />

      <!-- Scroll indicator en zona derecha -->
      <div
        data-hero="scroll"
        class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        style="opacity: 0"
      >
        <div class="h-8 w-px animate-pulse-subtle bg-text-inverse/30" />
        <span class="font-body text-xs uppercase tracking-wider text-text-inverse-muted">
          Scroll
        </span>
      </div>
    </div>
  </section>
</template>
