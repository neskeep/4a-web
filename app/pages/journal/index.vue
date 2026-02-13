<script setup lang="ts">
import { journalEntries } from '~/data/journal'

definePageMeta({ navbarTheme: 'dark' })

const activeFilter = ref('')

const featuredEntry = computed(() => {
  if (activeFilter.value) {
    const featured = journalEntries.find(e => e.featured && e.type === activeFilter.value)
    return featured || null
  }
  return journalEntries.find(e => e.featured) || journalEntries[0]
})

const gridEntries = computed(() => {
  const filtered = activeFilter.value
    ? journalEntries.filter(e => e.type === activeFilter.value)
    : journalEntries

  if (featuredEntry.value) {
    return filtered.filter(e => e.slug !== featuredEntry.value!.slug)
  }
  return filtered
})
</script>

<template>
  <div>
    <SectionsJournalHero v-model="activeFilter" />

    <SectionsJournalFeatured
      v-if="featuredEntry"
      :entry="featuredEntry"
    />

    <SectionsJournalGrid
      v-if="gridEntries.length"
      :entries="gridEntries"
    />

    <!-- CTA -->
    <section class="bg-bg-dark py-section">
      <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
        <h2
          class="max-w-[var(--max-width-narrow)] font-display text-4xl leading-snug tracking-tight text-text-inverse"
          style="font-weight: 300"
        >
          ¿Quieres saber mas sobre nuestro trabajo?
        </h2>

        <div class="mt-block">
          <UiLink to="/contacto" variant="inverse" arrow="right">
            Conversemos
          </UiLink>
        </div>
      </div>
    </section>
  </div>
</template>
