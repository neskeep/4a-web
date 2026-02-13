<script setup lang="ts">
const props = defineProps<{
  body: string
}>()

const contentHtml = computed(() => {
  return props.body
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('> ')) {
        const quoteText = block
          .split('\n')
          .map(line => line.replace(/^>\s?/, ''))
          .join('<br>')
        return `<blockquote>${quoteText}</blockquote>`
      }
      return `<p>${block}</p>`
    })
    .join('')
})
</script>

<template>
  <div class="bg-bg pb-section">
    <div class="mx-auto" style="max-width: var(--max-width-text); padding: 0 2rem">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="journal-content" v-html="contentHtml" />

      <!-- Divisor -->
      <div class="mt-section-sm flex justify-center">
        <UiDivider variant="default" width="120px" centered />
      </div>

      <!-- Volver -->
      <div class="mt-block flex justify-center">
        <UiLink to="/journal" arrow="left">
          Volver al Journal
        </UiLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Deep selectors for rendered HTML content — no Tailwind equivalent */
.journal-content :deep(p) {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text);
  margin-bottom: 1.5em;
}

.journal-content :deep(blockquote) {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-style: italic;
  font-weight: var(--font-weight-regular);
  border-left: 2px solid var(--color-accent);
  padding-left: 24px;
  margin: var(--spacing-block) 0;
  color: var(--color-text);
}

.journal-content :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.journal-content :deep(a:hover) {
  color: var(--color-accent-hover);
}
</style>
