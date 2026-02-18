<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

const categoryLabel = computed(() => {
  const map: Record<string, string> = {
    residencial: 'Residencial',
    corporativo: 'Corporativo',
    urbano: 'Urbano',
    comercial: 'Comercial',
  }
  return map[props.project.category] || props.project.category
})

const specs = computed(() => {
  const items = [
    { label: 'Ubicación', value: props.project.location },
    { label: 'Tipología', value: categoryLabel.value },
    { label: 'Año', value: props.project.year },
    { label: 'Superficie', value: props.project.area },
    { label: 'Estado', value: props.project.status },
  ]

  if (props.project.collaborators?.length) {
    items.push({ label: 'Colaboradores', value: props.project.collaborators.join(', ') })
  }

  if (props.project.publication) {
    items.push({ label: 'Publicación', value: props.project.publication.name })
  }

  return items
})

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const items = sectionRef.value.querySelectorAll('[data-spec]')

  $gsap.set(items, { opacity: 0, y: 20 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      once: true,
    },
  })

  tl.to(
    items,
    { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08 },
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg" style="padding-top: var(--spacing-section-sm); padding-bottom: var(--spacing-block)">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="grid grid-cols-2 gap-x-[var(--grid-gutter)] gap-y-element lg:grid-cols-3">
        <div
          v-for="spec in specs"
          :key="spec.label"
          data-spec
        >
          <p
            class="font-body text-xs uppercase tracking-wider text-text-tertiary"
            style="margin-bottom: var(--spacing-micro)"
          >
            {{ spec.label }}
          </p>
          <p class="font-display text-lg text-text" style="font-weight: 400">
            {{ spec.value }}
          </p>
        </div>
      </div>

      <UiDivider class="mt-block" />
    </div>
  </section>
</template>
