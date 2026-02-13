<script setup lang="ts">
import type { JournalEntry } from '~/types/journal'

const props = defineProps<{
  entry: JournalEntry
}>()

const formattedDate = computed(() => {
  const d = new Date(props.entry.date)
  return d.toLocaleDateString('es-BO', { month: 'short', year: 'numeric' })
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
</script>

<template>
  <NuxtLink
    :to="`/journal/${entry.slug}`"
    class="group block"
  >
    <!-- Imagen -->
    <div class="overflow-hidden">
      <img
        :src="entry.coverImage.src"
        :alt="entry.coverImage.alt"
        loading="lazy"
        class="w-full object-cover"
        style="aspect-ratio: 16 / 10; transition: transform 0.6s var(--ease-out-quart)"
        :class="'group-hover:scale-[1.02]'"
      />
    </div>

    <!-- Tag -->
    <span
      class="mt-tight block font-body text-xs uppercase tracking-wider text-accent"
      style="font-weight: 500"
    >
      {{ typeLabel }}
    </span>

    <!-- Titulo -->
    <h3
      class="mt-micro font-display text-xl leading-snug tracking-tight text-text line-clamp-2"
      style="font-weight: 400; transition: color var(--duration-normal) var(--ease-out-quart)"
      :class="'group-hover:text-accent'"
    >
      {{ entry.title }}
    </h3>

    <!-- Fecha -->
    <time
      :datetime="entry.date"
      class="mt-micro block font-body text-xs text-text-tertiary"
    >
      {{ formattedDate }}
    </time>
  </NuxtLink>
</template>
