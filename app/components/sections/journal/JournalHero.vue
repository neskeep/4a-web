<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

const activeFilter = defineModel<string>({ default: '' })

const filters = [
  { label: 'Ensayo', value: 'ensayo' },
  { label: 'Proyecto', value: 'proyecto' },
  { label: 'Proceso', value: 'proceso' },
  { label: 'Referencia', value: 'referencia' },
]

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-hero="heading"]')
  const filterBar = sectionRef.value.querySelector('[data-hero="filters"]')

  $gsap.set(heading, { opacity: 0, y: 40 })
  $gsap.set(filterBar, { opacity: 0 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
      once: true,
    },
  })

  tl.to(
    heading,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    0.3,
  ).to(
    filterBar,
    { opacity: 1, duration: 0.6, ease: 'power2.out' },
    '-=0.3',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-bg"
    style="padding-top: 140px; padding-bottom: var(--spacing-section-sm)"
  >
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Journal" class="mb-block" />

      <h1
        data-hero="heading"
        class="max-w-[var(--max-width-narrow)] font-display text-hero leading-tight tracking-tight text-text"
        style="font-weight: 300"
      >
        Notas sobre arquitectura, proceso y lugar.
      </h1>

      <div
        data-hero="filters"
        class="mt-block"
      >
        <UiFilterBar
          v-model="activeFilter"
          :filters="filters"
        />
      </div>
    </div>
  </section>
</template>
