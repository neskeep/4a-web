<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    sectionRef.value.querySelectorAll<HTMLElement>('[data-editorial]').forEach((el) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
    const line = sectionRef.value.querySelector<HTMLElement>('[data-editorial="line"]')
    if (line) line.style.width = '32px'
    return
  }

  const quote = sectionRef.value.querySelector('[data-editorial="quote"]')
  const line = sectionRef.value.querySelector('[data-editorial="line"]')
  const attribution = sectionRef.value.querySelector('[data-editorial="attribution"]')
  const imageWrap = sectionRef.value.querySelector('[data-editorial="image-wrap"]')

  // Timeline 1 — Reveal
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.fromTo(
    quote,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.2,
  ).fromTo(
    line,
    { width: 0 },
    { width: 32, duration: 0.6, ease: 'power3.out' },
    '-=0.3',
  ).fromTo(
    attribution,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.2',
  ).fromTo(
    imageWrap,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.3',
  )
  timelines.push(tl)

  // Timeline 2 — Parallax
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
    <!-- Cita: contenida en max-w-content -->
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 pt-section-sm lg:px-16">
      <blockquote
        data-editorial="quote"
        class="max-w-[var(--max-width-narrow)]"
        style="opacity: 0; transform: translateY(40px)"
      >
        <p
          class="font-display text-3xl leading-snug tracking-tight text-text italic lg:text-4xl"
          style="font-weight: 300"
        >
          "Cada proyecto es una respuesta que nunca se repite."
        </p>
        <footer class="mt-element flex items-center gap-tight">
          <div data-editorial="line" class="h-px bg-accent" style="width: 0" />
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

    <!-- Imagen panorámica: fuera del content wrapper, edge-to-edge -->
    <div class="mt-block px-4 pb-section-sm lg:px-8">
      <div
        data-editorial="image-wrap"
        class="parallax-wrap overflow-hidden rounded-radius-sm"
        style="opacity: 0; transform: translateY(30px); background: linear-gradient(135deg, #D4D0CC 0%, #B5AFA8 100%)"
      >
        <NuxtImg
          src="/images/editorial/editorial-panoramic.jpg"
          alt="Detalle arquitectónico — Estudio 4A"
          class="aspect-[16/9] w-full object-cover lg:aspect-[21/9]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
