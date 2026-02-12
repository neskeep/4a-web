<script setup lang="ts">
const { $gsap } = useNuxtApp()

const heroRef = ref<HTMLElement>()
const videoRef = ref<HTMLVideoElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null
let observer: IntersectionObserver | null = null

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
    return
  }

  const words = heroRef.value.querySelectorAll('[data-hero-word]')
  const line = heroRef.value.querySelector('[data-hero-line]')
  const subline = heroRef.value.querySelector('[data-hero="subline"]')
  const scroll = heroRef.value.querySelector('[data-hero="scroll"]')

  tl = $gsap.timeline({ delay: 0.4 })

  tl.fromTo(
    words,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15 }
  )
    .fromTo(
      line,
      { width: 0 },
      { width: 48, duration: 0.7, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(
      subline,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(
      scroll,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    )
})

onUnmounted(() => {
  tl?.kill()
  observer?.disconnect()
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-bg-dark"
  >
    <!-- Video de fondo (sutil, la tipografía es protagonista) -->
    <video
      ref="videoRef"
      class="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="/videos/hero-reel.mp4" type="video/mp4" />
    </video>

    <!-- Overlay para mantener legibilidad -->
    <div
      class="absolute inset-0 z-[1]"
      style="background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(29, 29, 27, 0.4) 0%, rgba(29, 29, 27, 0.8) 100%)"
    />

    <!-- Contenido centrado -->
    <div class="relative z-10 flex flex-col items-center px-6 text-center">
      <h1
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: clamp(3.5rem, 12vw, 10rem); font-weight: 300"
      >
        <span data-hero-word class="block" style="opacity: 0; transform: translateY(60px)">Experiencia</span>
        <span data-hero-word class="block" style="opacity: 0; transform: translateY(60px)">y rebeldía.</span>
      </h1>

      <div
        data-hero-line
        class="my-6 h-px bg-accent lg:my-8"
        style="width: 0"
      />

      <p
        data-hero="subline"
        class="max-w-lg font-body text-lg leading-relaxed text-text-inverse-muted lg:text-xl"
        style="opacity: 0; transform: translateY(20px)"
      >
        Pensar sin pausa, crear sin miedo.
      </p>
    </div>

    <!-- Scroll indicator -->
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
  </section>
</template>
