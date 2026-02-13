<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  // Quote reveal
  const quote = sectionRef.value.querySelector('[data-narrative="quote"]')
  if (quote) {
    $gsap.set(quote, { opacity: 0, y: 30 })
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: quote, start: 'top 80%', once: true },
    })
    tl.to(
      quote,
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    )
    timelines.push(tl)
  }

  // Image reveals
  const images = sectionRef.value.querySelectorAll('[data-narrative="image"]')
  $gsap.set(images, { opacity: 0 })
  images.forEach((img) => {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: img, start: 'top 85%', once: true },
    })
    tl.to(
      img,
      { opacity: 1, duration: 0.8, ease: 'power3.out' },
    )
    timelines.push(tl)
  })

  // Paragraph reveals
  const paragraphs = sectionRef.value.querySelectorAll('[data-narrative="paragraph"]')
  $gsap.set(paragraphs, { opacity: 0 })
  paragraphs.forEach((p) => {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: p, start: 'top 85%', once: true },
    })
    tl.to(
      p,
      { opacity: 1, duration: 0.7, ease: 'power2.out' },
    )
    timelines.push(tl)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg py-section-sm">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Concepto" class="mb-block" />

      <!-- Concept quote -->
      <blockquote
        data-narrative="quote"
        class="mx-auto max-w-[var(--max-width-narrow)] font-display leading-snug tracking-tight text-text"
        style="font-size: var(--text-statement); font-weight: 300"
      >
        {{ project.conceptQuote }}
      </blockquote>

      <!-- First narrative image (full width) -->
      <div
        v-if="project.images[0]"
        data-narrative="image"
        class="mt-section-sm"
      >
        <UiImage
          :src="project.images[0].src"
          :alt="project.images[0].alt"
          aspect-ratio="16:9"
          :parallax="true"
        />
      </div>

      <!-- Description paragraphs -->
      <div class="mx-auto mt-section-sm max-w-[var(--max-width-text)]">
        <p
          v-for="(paragraph, index) in project.description.slice(0, 2)"
          :key="index"
          data-narrative="paragraph"
          class="font-body text-lg leading-relaxed text-text-secondary"
          :class="index > 0 ? 'mt-element' : ''"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Two detail images (50/50) -->
      <div
        v-if="project.images[1] && project.images[2]"
        class="mt-section-sm grid grid-cols-1 gap-[var(--grid-gutter)] md:grid-cols-2"
      >
        <div data-narrative="image">
          <UiImage
            :src="project.images[1].src"
            :alt="project.images[1].alt"
            aspect-ratio="4:5"
          />
        </div>
        <div data-narrative="image">
          <UiImage
            :src="project.images[2].src"
            :alt="project.images[2].alt"
            aspect-ratio="4:5"
          />
        </div>
      </div>

      <!-- Optional third paragraph -->
      <div
        v-if="project.description[2]"
        class="mx-auto mt-section-sm max-w-[var(--max-width-text)]"
      >
        <p
          data-narrative="paragraph"
          class="font-body text-lg leading-relaxed text-text-secondary"
        >
          {{ project.description[2] }}
        </p>
      </div>
    </div>
  </section>
</template>
