<script setup lang="ts">
import type { JournalEntry } from '~/types/journal'

const props = withDefaults(defineProps<{
  entries: JournalEntry[]
  initialCount?: number
}>(), {
  initialCount: 9,
})

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

const visibleCount = ref(props.initialCount)
const hasMore = computed(() => visibleCount.value < props.entries.length)
const visibleEntries = computed(() => props.entries.slice(0, visibleCount.value))

const loadMore = () => {
  const prevCount = visibleCount.value
  visibleCount.value = Math.min(visibleCount.value + 9, props.entries.length)

  nextTick(() => {
    if (!sectionRef.value || !$gsap) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const newItems = sectionRef.value.querySelectorAll(`[data-grid-item]:nth-child(n+${prevCount + 1})`)
    $gsap.set(newItems, { opacity: 0, y: 30 })
    $gsap.to(
      newItems,
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08 },
    )
  })
}

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  const items = sectionRef.value.querySelectorAll('[data-grid-item]')

  $gsap.set(items, { opacity: 0, y: 30 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
      once: true,
    },
  })

  tl.to(
    items,
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
    0.2,
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="grid grid-cols-1 gap-x-[var(--grid-gutter)] gap-y-block md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="entry in visibleEntries"
          :key="entry.slug"
          data-grid-item
        >
          <SectionsJournalGridItem :entry="entry" />
        </div>
      </div>

      <div v-if="hasMore" class="mt-section-sm flex justify-center">
        <UiButton variant="secondary" @click="loadMore">
          Cargar mas entradas
        </UiButton>
      </div>
    </div>
  </section>
</template>
