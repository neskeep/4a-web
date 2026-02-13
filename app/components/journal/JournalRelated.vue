<script setup lang="ts">
import type { JournalEntry } from '~/types/journal'

defineProps<{
  entries: JournalEntry[]
}>()
</script>

<template>
  <section class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <UiSectionLabel label="Mas en el Journal" class="mb-block" />

      <div class="grid grid-cols-1 gap-x-[var(--grid-gutter)] gap-y-block md:grid-cols-2 lg:grid-cols-3">
        <SectionsJournalGridItem
          v-for="entry in entries.slice(0, 3)"
          :key="entry.slug"
          :entry="entry"
        />
      </div>

      <div class="mt-section-sm flex justify-center">
        <UiLink to="/journal" arrow="right" variant="accent">
          Ver todo el Journal
        </UiLink>
      </div>
    </div>
  </section>
</template>
