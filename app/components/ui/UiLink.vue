<script setup lang="ts">
const props = withDefaults(defineProps<{
  to: string
  variant?: 'default' | 'inverse' | 'accent'
  external?: boolean
  arrow?: 'right' | 'left' | 'none'
}>(), {
  variant: 'default',
  external: false,
  arrow: 'none',
})

const variantClasses: Record<string, string> = {
  default: 'text-text hover:text-accent',
  inverse: 'text-text-inverse hover:text-text-inverse',
  accent: 'text-accent hover:text-accent-hover',
}

const lineClasses: Record<string, string> = {
  default: 'bg-accent',
  inverse: 'bg-text-inverse',
  accent: 'bg-accent',
}
</script>

<template>
  <NuxtLink
    :to="to"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    class="group inline-flex items-center font-body text-sm uppercase tracking-wide"
    :class="variantClasses[variant]"
    style="font-weight: 500; transition: color var(--duration-normal) var(--ease-out-quart)"
  >
    <span v-if="arrow === 'left'" class="mr-2">&larr;</span>
    <span class="relative">
      <slot />
      <span
        class="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
        :class="lineClasses[variant]"
        style="transition: transform var(--duration-normal) var(--ease-out-quart)"
      />
    </span>
    <span v-if="arrow === 'right'" class="ml-2">&rarr;</span>
  </NuxtLink>
</template>
