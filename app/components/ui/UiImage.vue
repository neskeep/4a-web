<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt: string
  aspectRatio?: string
  parallax?: boolean
  reveal?: boolean
  sizes?: string
}>(), {
  parallax: false,
  reveal: true,
})

const { $gsap } = useNuxtApp()

const containerRef = ref<HTMLElement>()
const imgRef = ref<HTMLImageElement>()
let revealTween: ReturnType<typeof $gsap.fromTo> | null = null
let parallaxTween: ReturnType<typeof $gsap.fromTo> | null = null

const aspectStyle = computed(() => {
  if (!props.aspectRatio) return undefined
  const parts = props.aspectRatio.split(':').map(Number)
  if (parts.length !== 2 || !parts[0] || !parts[1]) return undefined
  return `aspect-ratio: ${parts[0]} / ${parts[1]}`
})

onMounted(() => {
  if (!containerRef.value || !imgRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  if (props.reveal) {
    const initial = props.parallax
      ? { opacity: 0 }
      : { opacity: 0, y: 20 }
    const target = props.parallax
      ? { opacity: 1 }
      : { opacity: 1, y: 0 }

    $gsap.set(imgRef.value, initial)

    revealTween = $gsap.to(imgRef.value, {
      ...target,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top 85%',
        once: true,
      },
    })
  }

  if (props.parallax) {
    $gsap.set(imgRef.value, { y: -30 })

    parallaxTween = $gsap.to(imgRef.value, {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }
})

onUnmounted(() => {
  revealTween?.kill()
  parallaxTween?.kill()
})
</script>

<template>
  <div
    ref="containerRef"
    class="overflow-hidden"
    :class="{ 'parallax-wrap': parallax }"
    :style="aspectStyle"
  >
    <img
      ref="imgRef"
      :src="src"
      :alt="alt"
      :sizes="sizes"
      loading="lazy"
      class="h-full w-full object-cover"
    />
  </div>
</template>
