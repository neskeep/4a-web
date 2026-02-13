<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'accent'
  width?: string
  centered?: boolean
}>(), {
  variant: 'default',
  width: '100%',
  centered: false,
})
</script>

<template>
  <div :class="{ 'flex justify-center': centered }">
    <div
      class="h-px"
      :class="variant === 'accent' ? 'bg-accent' : 'bg-border'"
      :style="{ width }"
      role="separator"
    />
  </div>
</template>
