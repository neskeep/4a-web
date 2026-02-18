<script setup lang="ts">
import { projectCategories, getProjectsByCategory } from '~/data/projects'

definePageMeta({ layout: 'default', navbarTheme: 'dark' })

const { $lenis } = useNuxtApp()

const activeFilter = ref('')
const gridAnchorRef = ref<HTMLElement>()

const filters = projectCategories

const filteredProjects = computed(() => {
  return getProjectsByCategory(activeFilter.value)
})

watch(activeFilter, () => {
  if (!gridAnchorRef.value || !$lenis) return
  $lenis.scrollTo(gridAnchorRef.value, { offset: -80, duration: 0.8 })
})
</script>

<template>
  <div>
    <SectionsProjectsHero />

    <div ref="gridAnchorRef">
      <div
        class="sticky top-16 z-30 border-b border-border-subtle bg-bg-alt/95 backdrop-blur-sm lg:top-20"
      >
        <div class="mx-auto max-w-[var(--max-width-content)] px-8 py-4 lg:px-16">
          <UiFilterBar
            :filters="filters"
            :model-value="activeFilter"
            @update:model-value="activeFilter = $event"
          />
        </div>
      </div>

      <SectionsProjectsGrid
        :key="activeFilter"
        :projects="filteredProjects"
      />
    </div>

    <SectionsProjectsCta />
  </div>
</template>
