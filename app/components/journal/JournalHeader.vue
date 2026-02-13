<script setup lang="ts">
import type { JournalEntry } from '~/types/journal'

const props = defineProps<{
  entry: JournalEntry
}>()

const { $gsap } = useNuxtApp()

const headerRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

const formattedDate = computed(() => {
  const d = new Date(props.entry.date)
  return d.toLocaleDateString('es-BO', { month: 'long', year: 'numeric' })
})

const typeLabel = computed(() => {
  const labels: Record<string, string> = {
    ensayo: 'Ensayo',
    proyecto: 'Proyecto',
    proceso: 'Proceso',
    referencia: 'Referencia',
  }
  return labels[props.entry.type] || props.entry.type
})

onMounted(() => {
  if (!headerRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const tag = headerRef.value.querySelector('[data-header="tag"]')
  const title = headerRef.value.querySelector('[data-header="title"]')
  const date = headerRef.value.querySelector('[data-header="date"]')

  $gsap.set(tag, { opacity: 0 })
  $gsap.set(title, { opacity: 0, y: 40 })
  $gsap.set(date, { opacity: 0 })

  tl = $gsap.timeline()

  tl.to(
    tag,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    0.3,
  ).to(
    title,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    '-=0.2',
  ).to(
    date,
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.4',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <header
    ref="headerRef"
    class="bg-bg text-center"
    style="padding-top: 160px; padding-bottom: var(--spacing-block)"
  >
    <div class="mx-auto" style="max-width: 800px; padding: 0 2rem">
      <span
        data-header="tag"
        class="font-body text-xs uppercase tracking-wider text-accent"
        style="font-weight: 500"
      >
        {{ typeLabel }}
      </span>

      <h1
        data-header="title"
        class="mt-element font-display text-5xl leading-tight tracking-tight text-text"
        style="font-weight: 300"
      >
        {{ entry.title }}
      </h1>

      <time
        data-header="date"
        :datetime="entry.date"
        class="mt-element inline-block font-body text-sm text-text-tertiary"
      >
        {{ formattedDate }}
      </time>
    </div>
  </header>
</template>
