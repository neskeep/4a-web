<script setup lang="ts">
import { projects, getProjectsByCategory } from '~/data/projects'

definePageMeta({ layout: 'default', navbarTheme: 'dark' })

const activeFilter = ref('')

const filteredProjects = computed(() => {
  return getProjectsByCategory(activeFilter.value)
})
</script>

<template>
  <div>
    <SectionsProjectsHero
      :active-filter="activeFilter"
      @update:active-filter="activeFilter = $event"
    />
    <SectionsProjectsGrid :projects="filteredProjects" />
    <SectionsProjectsCta />
  </div>
</template>
