<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const panorama = sectionRef.value.querySelector('[data-galpon="panorama"]')
  const heading = sectionRef.value.querySelector('[data-galpon="heading"]')
  const paragraph = sectionRef.value.querySelector('[data-galpon="paragraph"]')
  const details = sectionRef.value.querySelectorAll('[data-galpon="detail"]')

  $gsap.set(panorama, { opacity: 0, y: 30 })
  $gsap.set(heading, { opacity: 0, y: 50 })
  $gsap.set(paragraph, { opacity: 0 })
  $gsap.set(details, { opacity: 0, y: 30 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    panorama,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    0.2,
  ).to(
    heading,
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    '-=0.4',
  ).to(
    paragraph,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.5',
  )
  timelines.push(tl)

  // Detail images stagger
  if (details.length) {
    const tlDetails = $gsap.timeline({
      scrollTrigger: {
        trigger: details[0],
        start: 'top 85%',
        once: true,
      },
    })

    tlDetails.to(
      details,
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15 },
    )
    timelines.push(tlDetails)
  }

  // Parallax on panorama
  if (panorama) {
    const img = panorama.querySelector('img')
    if (img) {
      const parallax = $gsap.timeline({
        scrollTrigger: {
          trigger: panorama,
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
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto max-w-[var(--max-width)] px-0 lg:px-0">
      <!-- Imagen panoramica full-width -->
      <div
        data-galpon="panorama"
        class="parallax-wrap overflow-hidden"
      >
        <img
          src="/images/studio/studio-team.jpg"
          alt="Interior completo del Galpon 4A — espacio abierto con luz natural"
          class="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Galpon 4A" :inverse="true" class="mt-block mb-block" />

      <!-- Statement central -->
      <div class="text-center">
        <h2
          data-galpon="heading"
          class="mx-auto font-display text-statement leading-tight tracking-tight text-text-inverse"
          style="font-weight: 300"
        >
          Nuestro espacio es<br>nuestro primer proyecto.
        </h2>

        <p
          data-galpon="paragraph"
          class="mx-auto mt-element max-w-[var(--max-width-text)] font-body text-lg leading-relaxed text-text-inverse-muted"
        >
          Disenado por nosotros, para nosotros. Un laboratorio creativo donde la versatilidad y la sensibilidad conviven a diario.
        </p>
      </div>

      <!-- Imagenes de detalle -->
      <div class="mt-block grid grid-cols-1 gap-element sm:grid-cols-2">
        <div
          data-galpon="detail"
          class="overflow-hidden rounded-radius-sm"
          style="background: linear-gradient(145deg, #3A3A38 0%, #2A2A28 100%)"
        >
          <img
            src="/images/studio/michael-palza.jpg"
            alt="Detalle interior — maquetas y materiales de trabajo"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          data-galpon="detail"
          class="overflow-hidden rounded-radius-sm"
          style="background: linear-gradient(145deg, #3A3A38 0%, #2A2A28 100%)"
        >
          <img
            src="/images/studio/cecilia-velasco.jpg"
            alt="Espacio de trabajo — luz natural y texturas"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
