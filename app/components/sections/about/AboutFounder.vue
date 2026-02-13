<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const imageWrap = sectionRef.value.querySelector('[data-founder="image"]')
  const name = sectionRef.value.querySelector('[data-founder="name"]')
  const role = sectionRef.value.querySelector('[data-founder="role"]')
  const line = sectionRef.value.querySelector('[data-founder="line"]')
  const bio = sectionRef.value.querySelector('[data-founder="bio"]')
  const quote = sectionRef.value.querySelector('[data-founder="quote"]')
  const footer = sectionRef.value.querySelector('[data-founder="footer"]')

  $gsap.set(imageWrap, { opacity: 0, y: 30 })
  $gsap.set(name, { opacity: 0, y: 40 })
  $gsap.set(role, { opacity: 0 })
  $gsap.set(line, { scaleX: 0 })
  $gsap.set(bio, { opacity: 0 })
  $gsap.set(quote, { opacity: 0, y: 20 })
  $gsap.set(footer, { opacity: 0 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    imageWrap,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    0.2,
  ).to(
    name,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    '-=0.5',
  ).to(
    role,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.4',
  ).to(
    line,
    { scaleX: 1, duration: 0.6, ease: 'power3.out' },
    '-=0.3',
  ).to(
    bio,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.3',
  ).to(
    quote,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.3',
  ).to(
    footer,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  )
  timelines.push(tl)

  // Parallax on image
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
  <section ref="sectionRef" class="bg-bg py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Fundador" class="mb-block" />

      <!-- Grid: imagen izquierda / texto derecha -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[9fr_11fr]">
        <!-- Columna izquierda: retrato -->
        <div
          data-founder="image"
          class="parallax-wrap overflow-hidden rounded-radius-sm"
          style="background: linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)"
        >
          <img
            src="/images/studio/michael-palza.jpg"
            alt="Michael Palza — Fundador de Estudio 4A"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Columna derecha: texto -->
        <div class="flex flex-col justify-center">
          <h2
            data-founder="name"
            class="font-display text-4xl leading-snug tracking-tight text-text"
            style="font-weight: 300"
          >
            Michael Palza
          </h2>

          <p
            data-founder="role"
            class="mt-tight font-body text-sm uppercase tracking-wide text-text-tertiary"
            style="font-weight: 500"
          >
            Arquitecto. Fundador. Mentor.
          </p>

          <!-- Linea roja -->
          <div
            data-founder="line"
            class="my-element h-px w-8 bg-accent"
            style="transform-origin: left"
          />

          <div
            data-founder="bio"
            class="max-w-[var(--max-width-narrow)]"
          >
            <p class="font-body text-lg leading-relaxed text-text-secondary">
              Con mas de cuatro decadas disenando en tres continentes, Michael no busca imponer un estilo: busca descubrir la respuesta que cada proyecto guarda. Su practica se construyo sobre la conviccion de que la arquitectura no es un acto de voluntad, sino de escucha.
            </p>

            <p class="mt-element font-body text-lg leading-relaxed text-text-secondary">
              Desde La Paz hasta proyectos en Estados Unidos, Europa y Asia, su trayectoria demuestra que la calidad no depende de la escala, sino de la atencion al detalle y el compromiso con cada lugar.
            </p>
          </div>

          <!-- Cita -->
          <blockquote
            data-founder="quote"
            class="mt-block max-w-[var(--max-width-narrow)]"
          >
            <p class="font-display text-xl leading-snug text-accent" style="font-weight: 300; font-style: italic">
              &ldquo;La arquitectura no es lo que yo quiero hacer. Es lo que el lugar necesita ser.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      <!-- Footer datos -->
      <div
        data-founder="footer"
        class="mt-block text-center font-body text-sm tracking-wide text-text-tertiary"
      >
        EE.UU. &middot; Europa &middot; Asia &middot; Sudamerica &nbsp;&mdash;&nbsp; Mas de 120 proyectos realizados
      </div>
    </div>
  </section>
</template>
