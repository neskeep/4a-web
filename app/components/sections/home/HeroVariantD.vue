<script setup lang="ts">
const { $gsap } = useNuxtApp()
const ui = useUiStore()

const heroRef = ref<HTMLElement>()
const videoRef = ref<HTMLVideoElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null
let observer: IntersectionObserver | null = null

ui.navbarTheme = 'light'

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
    heroRef.value.querySelectorAll<HTMLElement>('[data-hero-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    heroRef.value.querySelectorAll<HTMLElement>('[data-hero]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const media = heroRef.value.querySelector<HTMLElement>('[data-hero-media]')
    if (media) media.style.clipPath = 'inset(0 0 0 0)'
    const line = heroRef.value.querySelector<HTMLElement>('[data-hero-line]')
    if (line) line.style.width = '48px'
    return
  }

  const media = heroRef.value.querySelector('[data-hero-media]')
  const words = heroRef.value.querySelectorAll('[data-hero-word]')
  const line = heroRef.value.querySelector('[data-hero-line]')
  const subline = heroRef.value.querySelector('[data-hero="subline"]')
  const scroll = heroRef.value.querySelector('[data-hero="scroll"]')

  tl = $gsap.timeline({ delay: 0.3 })

  // Headline words enter first — typography is protagonist
  tl.fromTo(
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.15 },
  )
  // Video letterbox reveals with clip-path (curtain from center)
  .fromTo(
    media,
    { clipPath: 'inset(50% 0 50% 0)' },
    { clipPath: 'inset(0 0 0 0)', duration: 1.2, ease: 'power4.inOut' },
    0.4,
  )
  // Accent line grows
  .fromTo(
    line,
    { width: 0 },
    { width: 48, duration: 0.6, ease: 'power4.out' },
    '-=0.4',
  )
  // Subline fades in
  .fromTo(
    subline,
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.2',
  )
  // Scroll indicator
  .fromTo(
    scroll,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.1',
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
    class="relative flex h-dvh w-full flex-col justify-between overflow-hidden bg-bg-dark pt-28 pb-12 lg:pt-32 lg:pb-16"
  >
    <!-- Top zone: Headline ABOVE the video — typography dominates -->
    <div class="relative z-10 px-8 lg:px-16">
      <h1
        class="font-display leading-none tracking-tight text-text-inverse"
        style="font-size: clamp(2.5rem, 5.5vw, 5rem); font-weight: 300"
      >
        <span
          data-hero-word
          class="block"
          style="opacity: 0; transform: translateY(50px)"
        >Experiencia</span>
        <span
          data-hero-word
          class="block"
          style="opacity: 0; transform: translateY(50px)"
        >y rebeldía.</span>
      </h1>
    </div>

    <!-- Center zone: Video letterbox — framed by typography -->
    <div class="relative z-0 flex-1 flex items-center px-4 lg:px-8">
      <div
        data-hero-media
        class="w-full max-h-[45vh] overflow-hidden rounded-radius-sm"
        style="clip-path: inset(50% 0 50% 0)"
      >
        <video
          ref="videoRef"
          class="h-[45vh] w-full object-cover"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source src="/videos/hero-reel.mp4" type="video/mp4" />
        </video>
        <!-- Overlay sutil para coherencia tonal -->
        <div
          class="absolute inset-0"
          style="background: linear-gradient(to right, rgba(29, 29, 27, 0.3) 0%, transparent 30%, transparent 70%, rgba(29, 29, 27, 0.3) 100%)"
        />
      </div>
    </div>

    <!-- Bottom zone: Subline + accent line + scroll indicator -->
    <div class="relative z-10 flex flex-col items-start gap-6 px-8 lg:px-16">
      <div class="flex items-center gap-4">
        <div
          data-hero-line
          class="h-px bg-accent"
          style="width: 0"
        />
        <p
          data-hero="subline"
          class="font-body text-sm leading-relaxed text-text-inverse-muted lg:text-base"
          style="opacity: 0"
        >
          Pensar sin pausa, crear sin miedo.
        </p>
      </div>

      <!-- Scroll indicator inline -->
      <div
        data-hero="scroll"
        class="flex items-center gap-2"
        style="opacity: 0"
      >
        <div class="h-6 w-px animate-pulse-subtle bg-text-inverse/30" />
        <span class="font-body text-xs uppercase tracking-wider text-text-inverse-muted">
          Scroll
        </span>
      </div>
    </div>
  </section>
</template>
