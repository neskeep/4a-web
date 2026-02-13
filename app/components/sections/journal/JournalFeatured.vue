<script setup lang="ts">
import type { JournalEntry } from '~/types/journal'

const props = defineProps<{
  entry: JournalEntry
}>()

const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
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
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const image = sectionRef.value.querySelector('[data-featured="image"]')
  const content = sectionRef.value.querySelector('[data-featured="content"]')

  if (prefersReduced) return

  $gsap.set([image, content], { opacity: 0 })
  $gsap.set(image, { y: 30 })
  $gsap.set(content, { y: 20 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    image,
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    0.2,
  ).to(
    content,
    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.4',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg pb-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <NuxtLink
        :to="`/journal/${entry.slug}`"
        class="group grid grid-cols-1 gap-block lg:grid-cols-[55fr_45fr] lg:items-center"
      >
        <!-- Imagen -->
        <div
          data-featured="image"
          class="overflow-hidden"
        >
          <img
            :src="entry.coverImage.src"
            :alt="entry.coverImage.alt"
            loading="lazy"
            class="h-full w-full object-cover"
            style="aspect-ratio: 16 / 10; transition: transform 0.6s var(--ease-out-quart)"
            :class="'group-hover:scale-[1.02]'"
          />
        </div>

        <!-- Contenido -->
        <div
          data-featured="content"
          class="flex flex-col items-start lg:pl-block"
        >
          <span
            class="font-body text-xs uppercase tracking-wider text-accent"
            style="font-weight: 500"
          >
            {{ typeLabel }}
          </span>

          <h2
            class="mt-tight font-display text-3xl leading-snug tracking-tight text-text"
            style="font-weight: 400; transition: color var(--duration-normal) var(--ease-out-quart)"
            :class="'group-hover:text-accent'"
          >
            {{ entry.title }}
          </h2>

          <p class="mt-element max-w-[var(--max-width-text)] font-body text-base leading-relaxed text-text-secondary">
            {{ entry.excerpt }}
          </p>

          <time
            :datetime="entry.date"
            class="mt-element font-body text-xs text-text-tertiary"
          >
            {{ formattedDate }}
          </time>

          <span
            class="mt-element inline-flex items-center font-body text-sm uppercase tracking-wide text-accent group-hover:text-accent-hover"
            style="font-weight: 500; transition: color var(--duration-normal) var(--ease-out-quart)"
          >
            <span class="relative">
              Leer
              <span
                class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent group-hover:scale-x-100"
                style="transition: transform var(--duration-normal) var(--ease-out-quart)"
              />
            </span>
            <span class="ml-2">&rarr;</span>
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
