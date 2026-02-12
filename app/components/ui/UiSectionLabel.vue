<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  inverse?: boolean
}>(), {
  inverse: false,
})

const { $gsap, $ScrollTrigger } = useNuxtApp()

const labelRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!labelRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    const line = labelRef.value.querySelector<HTMLElement>('[data-label-line]')
    const text = labelRef.value.querySelector<HTMLElement>('[data-label-text]')
    if (line) line.style.width = '48px'
    if (text) text.style.opacity = '1'
    return
  }

  const line = labelRef.value.querySelector('[data-label-line]')
  const text = labelRef.value.querySelector('[data-label-text]')

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: labelRef.value,
      start: 'top 85%',
      once: true,
    },
  })

  tl.fromTo(
    line,
    { width: 0 },
    { width: 48, duration: 0.7, ease: 'power3.out' },
  ).fromTo(
    text,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: 'power2.out' },
    '-=0.3',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <div ref="labelRef" class="flex items-center gap-tight">
    <div
      data-label-line
      class="h-px bg-accent"
      style="width: 0"
    />
    <span
      data-label-text
      class="font-body text-xs uppercase tracking-wider"
      :class="inverse ? 'text-text-inverse-muted' : 'text-text-tertiary'"
      style="opacity: 0"
    >
      {{ label }}
    </span>
  </div>
</template>
