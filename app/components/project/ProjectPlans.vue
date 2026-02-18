<script setup lang="ts">
import type { PlanImage } from '~/types/project'

const props = defineProps<{
  plans?: PlanImage[]
  sketches?: PlanImage[]
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

const hasPlanContent = computed(() => {
  return (props.plans && props.plans.length > 0) || (props.sketches && props.sketches.length > 0)
})

onMounted(() => {
  if (!sectionRef.value || !$gsap || !hasPlanContent.value) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const heading = sectionRef.value.querySelector('[data-plans="heading"]')
  if (heading) {
    $gsap.set(heading, { opacity: 0, y: 20 })
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
    })
    tl.to(heading, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    timelines.push(tl)
  }

  const items = sectionRef.value.querySelectorAll('[data-plans="item"]')
  $gsap.set(items, { opacity: 0 })
  items.forEach((item) => {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: item, start: 'top 85%', once: true },
    })
    tl.to(item, { opacity: 1, duration: 0.8, ease: 'power3.out' })
    timelines.push(tl)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section v-if="hasPlanContent" ref="sectionRef" class="bg-bg py-section-sm">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Documentación" class="mb-block" />

      <!-- Plans -->
      <div v-if="plans && plans.length">
        <h3
          data-plans="heading"
          class="font-display text-2xl tracking-tight text-text"
          style="font-weight: 300"
        >
          Planos
        </h3>

        <div
          class="mt-element"
          :class="plans.length >= 2 ? 'grid grid-cols-1 gap-[var(--grid-gutter)] md:grid-cols-2' : ''"
        >
          <div
            v-for="plan in plans"
            :key="plan.src"
            data-plans="item"
          >
            <div class="overflow-hidden rounded-radius-sm bg-white">
              <img
                :src="plan.src"
                :alt="plan.label"
                class="w-full object-contain"
                loading="lazy"
              >
            </div>
            <p class="mt-tight font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ plan.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Sketches -->
      <div v-if="sketches && sketches.length" :class="plans && plans.length ? 'mt-section-sm' : ''">
        <h3
          data-plans="heading"
          class="font-display text-2xl tracking-tight text-text"
          style="font-weight: 300"
        >
          Bocetos
        </h3>

        <div class="mt-element grid grid-cols-1 gap-[var(--grid-gutter)] md:grid-cols-2">
          <div
            v-for="sketch in sketches"
            :key="sketch.src"
            data-plans="item"
          >
            <div class="overflow-hidden rounded-radius-sm bg-white">
              <img
                :src="sketch.src"
                :alt="sketch.label"
                class="w-full object-contain"
                loading="lazy"
              >
            </div>
            <p class="mt-tight font-body text-xs uppercase tracking-wide text-text-tertiary">
              {{ sketch.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
