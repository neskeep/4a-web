<script setup lang="ts">
import { getProjectBySlug, getNextProject } from '~/data/projects'

definePageMeta({ layout: 'default', navbarTheme: 'light' })

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const project = computed(() => {
  const p = getProjectBySlug(slug.value)
  if (!p) {
    throw createError({ statusCode: 404, statusMessage: 'Proyecto no encontrado' })
  }
  return p
})

const nextProject = computed(() => {
  return getNextProject(slug.value)
})
</script>

<template>
  <div>
    <ProjectHero :project="project" />
    <ProjectSpecs :project="project" />
    <ProjectNarrative :project="project" />
    <ProjectPlans :plans="project.plans" :sketches="project.sketches" />
    <ProjectGallery :images="project.images" />
    <ProjectNext :next="nextProject" />
  </div>
</template>
