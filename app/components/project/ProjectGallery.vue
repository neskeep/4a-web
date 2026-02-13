<script setup lang="ts">
import type { ProjectImage } from '~/types/project'

const props = defineProps<{
  images: ProjectImage[]
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
const timelines: ReturnType<typeof $gsap.timeline>[] = []

/**
 * Gallery pattern:
 * 1. Panoramic (21:9) — full width
 * 2. Three vertical (4:5) — 3 columns
 * 3. Two medium (16:10) — 2 columns
 * 4. Panoramic (21:9) — full width close
 *
 * We use images starting from index 3 (0-2 used in narrative)
 */
const galleryImages = computed(() => {
  return props.images.slice(3)
})

const panoramic = computed(() => galleryImages.value[0] ?? null)
const tripleImages = computed(() => {
  const imgs = galleryImages.value
  if (imgs.length < 4) return null
  return [imgs[1]!, imgs[2]!, imgs[3]!] as const
})
const doubleImages = computed(() => {
  const imgs = galleryImages.value
  if (imgs.length < 6) return null
  return [imgs[4]!, imgs[5]!] as const
})
const closingImage = computed(() => galleryImages.value[6] ?? null)

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const rows = sectionRef.value.querySelectorAll('[data-gallery]')
  $gsap.set(rows, { opacity: 0 })
  rows.forEach((row) => {
    const tl = $gsap.timeline({
      scrollTrigger: { trigger: row, start: 'top 85%', once: true },
    })
    tl.to(
      row,
      { opacity: 1, duration: 0.8, ease: 'power3.out' },
    )
    timelines.push(tl)
  })
})

onUnmounted(() => {
  timelines.forEach(tl => tl.kill())
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="space-y-[var(--grid-gutter)]">
        <!-- Panoramic opening -->
        <div v-if="panoramic" data-gallery>
          <UiImage
            :src="panoramic.src"
            :alt="panoramic.alt"
            aspect-ratio="21:9"
            :parallax="true"
          />
        </div>

        <!-- Three vertical images -->
        <div
          v-if="tripleImages"
          data-gallery
          class="grid grid-cols-1 gap-[var(--grid-gutter)] md:grid-cols-3"
        >
          <UiImage
            v-for="img in tripleImages"
            :key="img.src"
            :src="img.src"
            :alt="img.alt"
            aspect-ratio="4:5"
          />
        </div>

        <!-- Two medium images -->
        <div
          v-if="doubleImages"
          data-gallery
          class="grid grid-cols-1 gap-[var(--grid-gutter)] md:grid-cols-2"
        >
          <UiImage
            v-for="img in doubleImages"
            :key="img.src"
            :src="img.src"
            :alt="img.alt"
            aspect-ratio="16:10"
          />
        </div>

        <!-- Closing panoramic -->
        <div v-if="closingImage" data-gallery>
          <UiImage
            :src="closingImage.src"
            :alt="closingImage.alt"
            aspect-ratio="21:9"
            :parallax="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
