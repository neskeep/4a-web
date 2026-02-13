<script setup lang="ts">
import { journalEntries } from '~/data/journal'

definePageMeta({ navbarTheme: 'dark' })

const route = useRoute()

const entry = computed(() => {
  return journalEntries.find(e => e.slug === route.params.slug)
})

if (!entry.value) {
  throw createError({ statusCode: 404, statusMessage: 'Entrada no encontrada' })
}

const relatedEntries = computed(() => {
  if (!entry.value) return []

  const sameType = journalEntries
    .filter(e => e.type === entry.value!.type && e.slug !== entry.value!.slug)

  if (sameType.length >= 3) return sameType.slice(0, 3)

  const remaining = journalEntries
    .filter(e => e.slug !== entry.value!.slug && !sameType.includes(e))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return [...sameType, ...remaining].slice(0, 3)
})
</script>

<template>
  <div v-if="entry">
    <JournalHeader :entry="entry" />

    <JournalCover
      v-if="entry.coverImage"
      :src="entry.coverImage.src"
      :alt="entry.coverImage.alt"
    />

    <JournalContent :body="entry.body" />

    <JournalRelated
      v-if="relatedEntries.length"
      :entries="relatedEntries"
    />
  </div>
</template>
