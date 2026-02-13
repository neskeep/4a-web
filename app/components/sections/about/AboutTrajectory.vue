<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const publications = [
  'Sinapsis — Arquitectura Contemporanea',
  'Revista Cosas Bolivia',
  'Architectural Digest Latinoamerica',
  'Summa+ Argentina',
  'Plataforma Arquitectura',
]

const recognitions = [
  { name: 'Bienal de Arquitectura Boliviana', year: '2023' },
  { name: 'Premio Nacional de Arquitectura', year: '2020' },
  { name: 'Seleccion Bienal Panamericana', year: '2018' },
  { name: 'Mencion Concurso Iberoamericano', year: '2015' },
  { name: 'Premio Colegio de Arquitectos', year: '2010' },
]

const clients = [
  'Gobierno Autonomo Municipal de La Paz',
  'Universidad Catolica Boliviana',
  'Fundacion Simbiosis',
  'Grupo Farbo',
  'Minera San Cristobal',
  'Embassy Suites',
  'Residencias Privadas (EE.UU.)',
  'Corporacion Titicaca',
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const columns = sectionRef.value.querySelectorAll('[data-trajectory="column"]')
  const clientsEl = sectionRef.value.querySelector('[data-trajectory="clients"]')

  $gsap.set(columns, { opacity: 0, y: 30 })
  if (clientsEl) $gsap.set(clientsEl, { opacity: 0, y: 20 })

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    columns,
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.2 },
    0.2,
  )
  timelines.push(tl)

  if (clientsEl) {
    const tlClients = $gsap.timeline({
      scrollTrigger: {
        trigger: clientsEl,
        start: 'top 85%',
        once: true,
      },
    })

    tlClients.to(
      clientsEl,
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
    )
    timelines.push(tlClients)
  }
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <!-- Section label -->
      <UiSectionLabel label="Trayectoria" class="mb-block" />

      <!-- Two columns: Publications + Recognitions -->
      <div class="grid grid-cols-1 gap-block lg:grid-cols-2">
        <!-- Publications -->
        <div
          data-trajectory="column"
        >
          <p class="font-body text-xs uppercase tracking-wider text-text-tertiary">
            Publicaciones
          </p>
          <div class="mt-tight h-px w-full bg-border" />

          <ul class="mt-element flex flex-col gap-tight">
            <li
              v-for="pub in publications"
              :key="pub"
              class="font-display text-lg text-text"
              style="font-weight: 400"
            >
              {{ pub }}
            </li>
          </ul>
        </div>

        <!-- Recognitions -->
        <div
          data-trajectory="column"
        >
          <p class="font-body text-xs uppercase tracking-wider text-text-tertiary">
            Reconocimientos
          </p>
          <div class="mt-tight h-px w-full bg-border" />

          <ul class="mt-element flex flex-col gap-tight">
            <li
              v-for="item in recognitions"
              :key="item.name"
              class="flex items-baseline justify-between"
            >
              <span class="font-display text-lg text-text" style="font-weight: 400">
                {{ item.name }}
              </span>
              <span class="ml-element shrink-0 font-body text-sm text-text-tertiary">
                {{ item.year }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Clients + Collaborators -->
      <div
        data-trajectory="clients"
        class="mt-section-sm"
      >
        <p class="font-body text-xs uppercase tracking-wider text-text-tertiary">
          Clientes + Colaboradores
        </p>
        <div class="mt-tight h-px w-full bg-border" />

        <p class="mt-element font-body text-sm leading-relaxed text-text-secondary">
          <template v-for="(client, i) in clients" :key="client">
            {{ client }}<span v-if="i < clients.length - 1"> &middot; </span>
          </template>
        </p>
      </div>
    </div>
  </section>
</template>
