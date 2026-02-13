<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  next: Project
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

const categoryLabel = (category: string) => {
  const map: Record<string, string> = {
    residencial: 'Residencial',
    corporativo: 'Corporativo',
    urbano: 'Urbano',
    cultural: 'Cultural',
  }
  return map[category] || category
}

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const elements = sectionRef.value.querySelectorAll('[data-next]')

  $gsap.set(elements, { opacity: 0, y: 30 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
      once: true,
    },
  })

  tl.to(
    elements,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-dark py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <p
        data-next
        class="font-body text-xs uppercase tracking-wider text-text-inverse-muted"
      >
        Siguiente proyecto
      </p>

      <NuxtLink
        :to="`/proyectos/${next.slug}`"
        class="group mt-element block"
      >
        <div
          data-next
          class="overflow-hidden rounded-[var(--radius-sm)]"
        >
          <img
            :src="next.heroImage.src"
            :alt="next.heroImage.alt"
            loading="lazy"
            class="w-full object-cover transition-transform duration-[600ms] motion-safe:group-hover:scale-[1.02]"
            style="aspect-ratio: 21/9; transition-timing-function: var(--ease-out-quart)"
          >
        </div>

        <h3
          data-next
          class="mt-element font-display tracking-tight text-text-inverse transition-colors duration-[350ms] motion-safe:group-hover:text-accent"
          style="font-size: var(--text-4xl); font-weight: 300; transition-timing-function: var(--ease-out-quart)"
        >
          {{ next.title }}
        </h3>
        <p
          data-next
          class="mt-2 font-body text-xs uppercase tracking-wide text-text-inverse-muted"
        >
          {{ categoryLabel(next.category) }} · {{ next.location }}
        </p>
      </NuxtLink>

      <div
        data-next
        class="mt-block"
      >
        <UiLink to="/proyectos" variant="inverse" arrow="left">
          Todos los proyectos
        </UiLink>
      </div>
    </div>
  </section>
</template>
