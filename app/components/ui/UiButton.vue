<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse'
  to?: string
  href?: string
  external?: boolean
}>(), {
  variant: 'primary',
})

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    return {
      href: props.href,
      ...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    }
  }
  return {}
})

const variantClasses: Record<string, string> = {
  primary: 'bg-accent text-text-inverse hover:bg-accent-hover',
  secondary: 'border border-border bg-transparent text-text hover:bg-accent-subtle',
  ghost: 'bg-transparent text-text hover:text-accent',
  inverse: 'bg-white text-carbon hover:bg-stone',
}
</script>

<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="inline-block rounded-[var(--radius-sm)] px-[28px] py-[14px] font-body text-sm uppercase tracking-wide"
    :class="variantClasses[variant]"
    style="font-weight: 500; transition-duration: var(--duration-normal); transition-timing-function: var(--ease-out-quart)"
  >
    <slot />
  </component>
</template>
