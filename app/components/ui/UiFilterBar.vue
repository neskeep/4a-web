<script setup lang="ts">
const props = withDefaults(defineProps<{
  filters: Array<{ label: string; value: string }>
  modelValue: string
  allLabel?: string
}>(), {
  allLabel: 'Todo',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const allFilters = computed(() => [
  { label: props.allLabel, value: '' },
  ...props.filters,
])
</script>

<template>
  <div class="flex gap-element overflow-x-auto" role="tablist">
    <button
      v-for="filter in allFilters"
      :key="filter.value"
      type="button"
      role="tab"
      :aria-selected="modelValue === filter.value"
      class="shrink-0 border-b-2 pb-2 font-body text-sm uppercase tracking-wide whitespace-nowrap"
      :class="
        modelValue === filter.value
          ? 'border-accent text-text'
          : 'border-transparent text-text-tertiary hover:text-text-secondary'
      "
      style="font-weight: 500; transition: color var(--duration-normal) var(--ease-out-quart)"
      @click="emit('update:modelValue', filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>
