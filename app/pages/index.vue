<script setup lang="ts">
definePageMeta({ navbarTheme: 'light' })

const route = useRoute()

const variant = computed(() => {
  const v = (route.query.variant as string)?.toLowerCase()
  if (v === 'b' || v === 'c' || v === 'd') return v
  return 'a'
})

const variants = [
  { key: 'a', label: 'A' },
  { key: 'b', label: 'B' },
  { key: 'c', label: 'C' },
  { key: 'd', label: 'D' },
] as const

watch(variant, () => {
  window.scrollTo({ top: 0 })
})
</script>

<template>
  <div>
    <!-- Variante activa — Hero -->
    <SectionsHomeHeroVariantA v-if="variant === 'a'" />
    <SectionsHomeHeroVariantB v-else-if="variant === 'b'" />
    <SectionsHomeHeroVariantC v-else-if="variant === 'c'" />
    <SectionsHomeHeroVariantD v-else />

    <!-- Sección 2: Manifiesto -->
    <SectionsHomeManifestoVariantA v-if="variant === 'a'" />
    <SectionsHomeManifestoVariantB v-else-if="variant === 'b'" />
    <SectionsHomeManifestoVariantC v-else-if="variant === 'c'" />
    <SectionsHomeManifestoVariantD v-else />

    <!-- Sección 3: Proyectos -->
    <SectionsHomeProjectsVariantA v-if="variant === 'a'" />
    <SectionsHomeProjectsVariantB v-else-if="variant === 'b'" />
    <SectionsHomeProjectsVariantC v-else-if="variant === 'c'" />
    <SectionsHomeProjectsVariantD v-else />

    <!-- Sección 4: Transición Editorial -->
    <SectionsHomeEditorialVariantA v-if="variant === 'a'" />
    <SectionsHomeEditorialVariantB v-else-if="variant === 'b'" />
    <SectionsHomeEditorialVariantC v-else-if="variant === 'c'" />
    <SectionsHomeEditorialVariantD v-else />

    <!-- Sección 5: Filosofía -->
    <SectionsHomePhilosophyVariantA v-if="variant === 'a'" />
    <SectionsHomePhilosophyVariantB v-else-if="variant === 'b'" />
    <SectionsHomePhilosophyVariantC v-else-if="variant === 'c'" />
    <SectionsHomePhilosophyVariantD v-else />

    <!-- Sección 6: El Estudio -->
    <SectionsHomeStudioVariantA v-if="variant === 'a'" />
    <SectionsHomeStudioVariantB v-else-if="variant === 'b'" />
    <SectionsHomeStudioVariantC v-else-if="variant === 'c'" />
    <SectionsHomeStudioVariantD v-else />

    <!-- Sección 7: Contacto CTA -->
    <SectionsHomeCtaVariantA v-if="variant === 'a'" />
    <SectionsHomeCtaVariantB v-else-if="variant === 'b'" />
    <SectionsHomeCtaVariantC v-else-if="variant === 'c'" />
    <SectionsHomeCtaVariantD v-else />

    <!-- Selector flotante (bottom-right, no choca con header) -->
    <nav class="fixed bottom-4 right-4 z-50 flex gap-1 rounded-radius-md bg-bg-dark/90 p-1 shadow-md backdrop-blur-sm">
      <NuxtLink
        v-for="v in variants"
        :key="v.key"
        :to="{ query: { variant: v.key } }"
        class="rounded-radius-sm px-3 py-1.5 font-body text-xs transition-colors"
        :class="[
          variant === v.key
            ? 'bg-accent text-text-inverse'
            : 'text-text-inverse-muted hover:text-text-inverse'
        ]"
      >
        {{ v.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
