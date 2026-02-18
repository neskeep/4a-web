<script setup lang="ts">
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
  aspectRatio: string
}>()

const { $gsap } = useNuxtApp()

const itemRef = ref<HTMLElement>()
const imgRef = ref<HTMLImageElement>()
let parallaxTween: ReturnType<typeof $gsap.to> | null = null

const aspectStyle = computed(() => {
  const parts = props.aspectRatio.split(':').map(Number)
  if (parts.length !== 2 || !parts[0] || !parts[1]) return ''
  return `aspect-ratio: ${parts[0]} / ${parts[1]}`
})

const categoryLabel = computed(() => {
  const map: Record<string, string> = {
    residencial: 'Residencial',
    corporativo: 'Corporativo',
    urbano: 'Urbano',
    comercial: 'Comercial',
  }
  return map[props.project.category] || props.project.category
})

onMounted(() => {
  if (!itemRef.value || !imgRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  $gsap.set(imgRef.value, { y: -15 })
  parallaxTween = $gsap.to(imgRef.value, {
    y: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: itemRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})

onUnmounted(() => {
  parallaxTween?.kill()
})
</script>

<template>
  <div ref="itemRef">
    <NuxtLink
      :to="`/proyectos/${project.slug}`"
      class="group block"
    >
      <div
        class="image-editorial parallax-wrap overflow-hidden rounded-[var(--radius-sm)]"
        :style="aspectStyle"
      >
        <img
          ref="imgRef"
          :src="project.heroImage.src"
          :alt="project.heroImage.alt"
          loading="lazy"
          class="h-full w-full object-cover"
          style="scale: 1.12"
        >
      </div>
      <h3
        class="mt-4 font-display text-xl text-text transition-colors duration-[350ms] lg:text-2xl motion-safe:group-hover:text-accent"
        style="font-weight: 400; transition-timing-function: var(--ease-out-quart)"
      >
        {{ project.title }}
      </h3>
      <p class="mt-1 font-body text-xs uppercase tracking-wide text-text-tertiary">
        {{ categoryLabel }} · {{ project.year }}
      </p>
    </NuxtLink>
  </div>
</template>
