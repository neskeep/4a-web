<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const leftCol = sectionRef.value.querySelector<HTMLElement>('[data-col="left"]')
    const rightCol = sectionRef.value.querySelector<HTMLElement>('[data-col="right"]')
    if (leftCol) leftCol.style.clipPath = 'inset(0 0 0 0)'
    if (rightCol) rightCol.style.clipPath = 'inset(0 0 0 0)'
    sectionRef.value.querySelectorAll<HTMLElement>('[data-editorial-word]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const line = sectionRef.value.querySelector<HTMLElement>('[data-editorial="line"]')
    if (line) line.style.width = '32px'
    const attribution = sectionRef.value.querySelector<HTMLElement>('[data-editorial="attribution"]')
    if (attribution) attribution.style.opacity = '1'
    return
  }

  const leftCol = sectionRef.value.querySelector('[data-col="left"]')
  const rightCol = sectionRef.value.querySelector('[data-col="right"]')
  const words = sectionRef.value.querySelectorAll('[data-editorial-word]')
  const line = sectionRef.value.querySelector('[data-editorial="line"]')
  const attribution = sectionRef.value.querySelector('[data-editorial="attribution"]')
  const imageWrap = sectionRef.value.querySelector('[data-editorial="image-wrap"]')

  // Timeline 1 — Split reveal + content
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    leftCol,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' },
  )
    .fromTo(
      rightCol,
      { clipPath: 'inset(0 0 0 100%)' },
      { clipPath: 'inset(0 0 0 0%)', duration: 0.9, ease: 'power3.inOut' },
      0,
    )
    .fromTo(
      words,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
      0.5,
    )
    .fromTo(
      line,
      { width: 0 },
      { width: 32, duration: 0.6, ease: 'power3.out' },
      '-=0.3',
    )
    .fromTo(
      attribution,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
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
  <section ref="sectionRef" class="bg-bg">
    <div class="flex min-h-[50vh] flex-col lg:flex-row">
      <!-- Zona izquierda 42% — quote -->
      <div
        data-col="left"
        class="flex w-full flex-col justify-center bg-bg px-8 py-section-sm lg:w-[42%] lg:px-16"
        style="clip-path: inset(0 100% 0 0)"
      >
        <blockquote class="max-w-[var(--max-width-narrow)]">
          <p
            class="font-display text-3xl leading-snug tracking-tight text-text italic lg:text-4xl"
            style="font-weight: 300"
          >
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">"Cada </span>
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">proyecto </span>
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">es una </span>
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">respuesta </span>
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">que nunca </span>
            <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(40px)">se repite."</span>
          </p>
          <footer class="mt-element flex items-center gap-tight">
            <div
              data-editorial="line"
              class="h-px bg-accent"
              style="width: 0"
            />
            <cite
              data-editorial="attribution"
              class="font-body text-sm not-italic tracking-wide text-text-tertiary"
              style="opacity: 0"
            >
              Michael Palza
            </cite>
          </footer>
        </blockquote>
      </div>

      <!-- Zona derecha 58% — imagen panoramica con parallax -->
      <div
        data-col="right"
        class="relative w-full lg:w-[58%]"
        style="clip-path: inset(0 0 0 100%)"
      >
        <div
          data-editorial="image-wrap"
          class="parallax-wrap h-full overflow-hidden"
          style="background: linear-gradient(135deg, #D4D0CC 0%, #B5AFA8 100%)"
        >
          <NuxtImg
            src="/images/editorial/editorial-panoramic.jpg"
            alt="Detalle arquitectónico — Estudio 4A"
            class="h-full min-h-[40vh] w-full object-cover lg:min-h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
