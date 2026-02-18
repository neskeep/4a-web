<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  projects: Project[]
}>()

const { $gsap } = useNuxtApp()

const gridRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

/**
 * Pattern repeats every 5 projects:
 * Row A: 65% (16:10) + 35% (3:4)
 * Row B: 35% (3:4) + 65% (16:10)
 * Row C: 100% (21:9)
 */
const rows = computed(() => {
  const result: Array<{
    type: 'split-a' | 'split-b' | 'full'
    items: Array<{ project: Project; aspectRatio: string }>
  }> = []

  const list = props.projects
  let i = 0

  while (i < list.length) {
    // Row A: 65/35
    if (i < list.length) {
      const items: Array<{ project: Project; aspectRatio: string }> = []
      const a1 = list[i]
      if (a1) items.push({ project: a1, aspectRatio: '16:10' })
      const a2 = list[i + 1]
      if (a2) items.push({ project: a2, aspectRatio: '3:4' })
      result.push({ type: 'split-a', items })
      i += items.length
    }

    // Row B: 35/65 (mirror)
    if (i < list.length) {
      const items: Array<{ project: Project; aspectRatio: string }> = []
      const b1 = list[i]
      if (b1) items.push({ project: b1, aspectRatio: '3:4' })
      const b2 = list[i + 1]
      if (b2) items.push({ project: b2, aspectRatio: '16:10' })
      result.push({ type: 'split-b', items })
      i += items.length
    }

    // Row C: full width
    const c1 = list[i]
    if (c1) {
      result.push({
        type: 'full',
        items: [{ project: c1, aspectRatio: '21:9' }],
      })
      i++
    }
  }

  return result
})

onMounted(() => {
  if (!gridRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const rowEls = gridRef.value.querySelectorAll('[data-grid-row]')

  if (prefersReduced) return

  rowEls.forEach((row, index) => {
    const items = row.querySelectorAll('[data-grid-item]')

    $gsap.set(items, { opacity: 0, y: 40 })

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: index === 0 ? 'top 90%' : 'top 88%',
        once: true,
      },
    })

    tl.to(
      items,
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
    )

    timelines.push(tl)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="gridRef" class="bg-bg-alt pt-block pb-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="space-y-block">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          data-grid-row
          :class="[
            row.type === 'split-a' ? 'grid grid-cols-1 gap-[var(--grid-gutter)] lg:grid-cols-[13fr_7fr]' : '',
            row.type === 'split-b' ? 'grid grid-cols-1 gap-[var(--grid-gutter)] lg:grid-cols-[7fr_13fr]' : '',
          ]"
        >
          <div
            v-for="(item, itemIndex) in row.items"
            :key="item.project.slug"
            data-grid-item
          >
            <SectionsProjectsGridItem
              :project="item.project"
              :aspect-ratio="itemIndex === 0 && row.items.length === 1 ? '21:9' : item.aspectRatio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
