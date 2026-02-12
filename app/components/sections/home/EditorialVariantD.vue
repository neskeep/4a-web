<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-editorial-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    sectionRef.value.querySelectorAll<HTMLElement>('[data-editorial]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const line = sectionRef.value.querySelector<HTMLElement>('[data-editorial="line"]')
    if (line) line.style.width = '32px'
    const imageWrap = sectionRef.value.querySelector<HTMLElement>('[data-editorial="image-wrap"]')
    if (imageWrap) imageWrap.style.clipPath = 'inset(0 0 0 0)'
    return
  }

  const words = sectionRef.value.querySelectorAll('[data-editorial-word]')
  const line = sectionRef.value.querySelector('[data-editorial="line"]')
  const attribution = sectionRef.value.querySelector('[data-editorial="attribution"]')
  const imageWrap = sectionRef.value.querySelector('[data-editorial="image-wrap"]')

  // Timeline 1 — Reveal: quote words + line + attribution + image clip-path
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.12 },
    0.3,
  ).fromTo(
    line,
    { width: 0 },
    { width: 32, duration: 0.6, ease: 'power4.out' },
    '-=0.3',
  ).fromTo(
    attribution,
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: 'power4.out' },
    '-=0.2',
  ).fromTo(
    imageWrap,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power4.inOut' },
    '-=0.6',
  )
  timelines.push(tl)

  // Timeline 2 — Parallax on image
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
  <section ref="sectionRef" class="bg-bg py-section-sm">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Grid side-by-side: quote left (5fr) + image right (7fr) -->
      <div class="grid grid-cols-1 items-center gap-element lg:grid-cols-[5fr_7fr]">
        <!-- Left column: Quote with word stagger -->
        <div>
          <blockquote>
            <p
              class="font-display leading-snug tracking-tight text-text italic"
              style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300"
            >
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">"Cada </span>
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">proyecto </span>
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">es una </span>
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">respuesta </span>
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">que nunca </span>
              <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">se repite."</span>
            </p>
            <footer class="mt-element flex items-center gap-tight">
              <div data-editorial="line" class="h-px bg-accent" style="width: 0" />
              <cite
                data-editorial="attribution"
                class="font-body text-sm not-italic tracking-wide text-text-tertiary"
                style="opacity: 0; transform: translateX(-20px)"
              >
                Michael Palza
              </cite>
            </footer>
          </blockquote>
        </div>

        <!-- Right column: Image with clip-path reveal + parallax -->
        <div
          data-editorial="image-wrap"
          class="parallax-wrap overflow-hidden rounded-radius-sm"
          style="clip-path: inset(0 100% 0 0); background: linear-gradient(135deg, #D4D0CC 0%, #B5AFA8 100%)"
        >
          <NuxtImg
            src="/images/editorial/editorial-panoramic.jpg"
            alt="Detalle arquitectónico — Estudio 4A"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
