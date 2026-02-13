<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const teamMembers = [
  { name: 'Andrea Quiroga', role: 'Arquitecta Senior', image: '/images/studio/team-member-3.jpg', gradient: 'linear-gradient(150deg, #D0CBC4 0%, #B5AFA8 100%)' },
  { name: 'Diego Fernandez', role: 'Arquitecto', image: '/images/studio/team-member-4.jpg', gradient: 'linear-gradient(140deg, #D6D2CD 0%, #BAB6B1 100%)' },
  { name: 'Valentina Rios', role: 'Interiorista', image: '/images/studio/team-member-3.jpg', gradient: 'linear-gradient(135deg, #C8C4BF 0%, #A8A49F 100%)' },
  { name: 'Santiago Morales', role: 'Arquitecto', image: '/images/studio/team-member-4.jpg', gradient: 'linear-gradient(145deg, #D4D0CC 0%, #B5AFA8 100%)' },
  { name: 'Camila Arce', role: 'Diseno Urbano', image: '/images/studio/team-member-3.jpg', gradient: 'linear-gradient(150deg, #D0CBC4 0%, #B5AFA8 100%)' },
  { name: 'Mateo Guzman', role: 'Arquitecto Junior', image: '/images/studio/team-member-4.jpg', gradient: 'linear-gradient(140deg, #D6D2CD 0%, #BAB6B1 100%)' },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  // Cecilia reveal
  const ceciliaName = sectionRef.value.querySelector('[data-team="cecilia-name"]')
  const ceciliaRole = sectionRef.value.querySelector('[data-team="cecilia-role"]')
  const ceciliaLine = sectionRef.value.querySelector('[data-team="cecilia-line"]')
  const ceciliaBio = sectionRef.value.querySelector('[data-team="cecilia-bio"]')
  const ceciliaImage = sectionRef.value.querySelector('[data-team="cecilia-image"]')

  $gsap.set(ceciliaName, { opacity: 0, y: 40 })
  $gsap.set(ceciliaRole, { opacity: 0 })
  $gsap.set(ceciliaLine, { scaleX: 0 })
  $gsap.set(ceciliaBio, { opacity: 0 })
  $gsap.set(ceciliaImage, { opacity: 0, y: 30 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    ceciliaName,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.2,
  ).to(
    ceciliaRole,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.4',
  ).to(
    ceciliaLine,
    { scaleX: 1, duration: 0.6, ease: 'power3.out' },
    '-=0.3',
  ).to(
    ceciliaBio,
    { opacity: 1, duration: 0.7, ease: 'power2.out' },
    '-=0.3',
  ).to(
    ceciliaImage,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6',
  )
  timelines.push(tl)

  // Team grid stagger
  const members = sectionRef.value.querySelectorAll('[data-team="member"]')
  if (members.length) {
    $gsap.set(members, { opacity: 0, y: 30 })

    const tlMembers = $gsap.timeline({
      scrollTrigger: {
        trigger: members[0],
        start: 'top 85%',
        once: true,
      },
    })

    tlMembers.to(
      members,
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
    )
    timelines.push(tlMembers)
  }

  // Parallax on Cecilia image
  if (ceciliaImage) {
    const img = ceciliaImage.querySelector('img')
    if (img) {
      const parallax = $gsap.timeline({
        scrollTrigger: {
          trigger: ceciliaImage,
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
      <UiSectionLabel label="El Equipo" class="mb-block" />

      <!-- Cecilia — layout INVERTIDO respecto a Michael -->
      <div class="grid grid-cols-1 gap-element lg:grid-cols-[11fr_9fr]">
        <!-- Columna izquierda: texto -->
        <div class="flex flex-col justify-center order-2 lg:order-1">
          <h2
            data-team="cecilia-name"
            class="font-display text-4xl leading-snug tracking-tight text-text"
            style="font-weight: 300"
          >
            Cecilia Velasco
          </h2>

          <p
            data-team="cecilia-role"
            class="mt-tight font-body text-sm uppercase tracking-wide text-text-tertiary"
            style="font-weight: 500"
          >
            Directora. Detalle. Equilibrio.
          </p>

          <!-- Linea roja -->
          <div
            data-team="cecilia-line"
            class="my-element h-px w-8 bg-accent"
            style="transform-origin: left"
          />

          <div
            data-team="cecilia-bio"
            class="max-w-[var(--max-width-narrow)]"
          >
            <p class="font-body text-lg leading-relaxed text-text-secondary">
              Cecilia aporta la sensibilidad y el rigor que equilibra la vision del estudio. Con formacion en diseno de interiores y una mirada atenta al detalle constructivo, su rol es asegurar que cada proyecto mantenga coherencia desde el concepto hasta el ultimo acabado.
            </p>

            <p class="mt-element font-body text-lg leading-relaxed text-text-secondary">
              Bajo su direccion, el estudio ha desarrollado una metodologia donde lo tecnico y lo poetico no compiten — conviven.
            </p>
          </div>
        </div>

        <!-- Columna derecha: imagen -->
        <div
          data-team="cecilia-image"
          class="parallax-wrap overflow-hidden rounded-radius-sm order-1 lg:order-2"
          style="background: linear-gradient(135deg, #C8C4BF 0%, #A8A49F 100%)"
        >
          <img
            src="/images/studio/cecilia-velasco.jpg"
            alt="Cecilia Velasco — Directora de Estudio 4A"
            class="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Divider -->
      <div class="my-block h-px w-full bg-border-subtle" />

      <!-- Grid del equipo -->
      <div class="grid grid-cols-2 gap-element sm:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          data-team="member"
        >
          <div
            class="overflow-hidden rounded-radius-sm"
            :style="{ background: member.gradient }"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="aspect-[3/4] w-full object-cover"
              loading="lazy"
              style="transition: transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
              @mouseenter="($event.target as HTMLImageElement).style.transform = 'scale(1.02)'"
              @mouseleave="($event.target as HTMLImageElement).style.transform = 'scale(1)'"
            />
          </div>
          <h3
            class="mt-tight font-display text-xl text-text"
            style="font-weight: 400"
          >
            {{ member.name }}
          </h3>
          <p class="font-body text-xs uppercase tracking-wide text-text-tertiary">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
