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
    return
  }

  const words = sectionRef.value.querySelectorAll('[data-editorial-word]')
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
    words,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
    0.3,
  ).fromTo(
    attribution,
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power2.out' },
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
    <div class="mx-auto flex max-w-[var(--max-width-content)] flex-col items-center px-8 py-section-sm lg:px-16">
      <blockquote class="max-w-[var(--max-width-text)] text-center">
        <p
          class="font-display leading-snug tracking-tight text-text italic"
          style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300"
        >
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">"Cada </span>
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">proyecto </span>
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">es una </span>
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">respuesta </span>
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">que nunca </span>
          <span data-editorial-word class="inline" style="opacity: 0; transform: translateY(50px)">se repite."</span>
        </p>
        <footer
          data-editorial="attribution"
          class="mt-element flex items-center justify-center gap-tight"
          style="opacity: 0"
        >
          <div class="h-px w-6 bg-accent" />
          <cite class="font-body text-sm not-italic tracking-wide text-text-tertiary">
            Michael Palza
          </cite>
          <div class="h-px w-6 bg-accent" />
        </footer>
      </blockquote>

      <!-- Imagen dentro del container -->
      <div
        data-editorial="image-wrap"
        class="parallax-wrap mt-block w-full overflow-hidden rounded-radius-sm"
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
