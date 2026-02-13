<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
  caption?: string
}>()

const { $gsap } = useNuxtApp()

const containerRef = ref<HTMLElement>()
let tween: ReturnType<typeof $gsap.fromTo> | null = null

onMounted(() => {
  if (!containerRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const img = containerRef.value.querySelector('img')

  $gsap.set(img, { opacity: 0 })

  tween = $gsap.to(
    img,
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top 85%',
        once: true,
      },
    },
  )
})

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <div
    ref="containerRef"
    class="bg-bg"
    style="padding-bottom: var(--spacing-block)"
  >
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="overflow-hidden">
        <img
          :src="src"
          :alt="alt"
          loading="lazy"
          class="w-full object-cover"
          style="aspect-ratio: 16 / 9"
        />
      </div>

      <p
        v-if="caption"
        class="mt-micro text-center font-body text-xs text-text-tertiary"
      >
        {{ caption }}
      </p>
    </div>
  </div>
</template>
