<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const title = sectionRef.value.querySelector('[data-project-hero="title"]')

  $gsap.set(title, { opacity: 0, y: 30 })

  tl = $gsap.timeline({ delay: 0.3 })

  tl.to(
    title,
    { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="relative" style="height: 90vh; min-height: 600px">
    <img
      :src="project.heroImage.src"
      :alt="project.heroImage.alt"
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to top, rgba(29,29,27,0.55) 0%, rgba(29,29,27,0.08) 35%, transparent 60%)"
    />
    <div class="absolute inset-x-0 bottom-0 mx-auto max-w-[var(--max-width-content)] px-8 pb-16 lg:px-16 lg:pb-20">
      <h1
        data-project-hero="title"
        class="font-display leading-tight tracking-tight text-text-inverse"
        style="font-size: var(--text-hero); font-weight: 300"
      >
        {{ project.title }}
      </h1>
    </div>
  </section>
</template>
