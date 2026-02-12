<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: number
  suffix?: string
  label: string
}>(), {
  suffix: '',
})

const { $gsap, $ScrollTrigger } = useNuxtApp()

const counterRef = ref<HTMLElement>()
const numberRef = ref<HTMLElement>()
let tween: ReturnType<typeof $gsap.to> | null = null

onMounted(() => {
  if (!counterRef.value || !numberRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    numberRef.value.innerText = String(props.value)
    counterRef.value.style.opacity = '1'
    return
  }

  const target = { innerText: 0 }

  tween = $gsap.to(target, {
    innerText: props.value,
    snap: { innerText: 1 },
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: counterRef.value,
      start: 'top 85%',
      once: true,
    },
    onUpdate() {
      if (numberRef.value) {
        numberRef.value.innerText = String(Math.round(target.innerText))
      }
    },
  })
})

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <div ref="counterRef" class="flex flex-col items-center">
    <p class="font-display text-5xl font-weight-light leading-tight tracking-tight text-text">
      <span ref="numberRef">0</span><span v-if="suffix">{{ suffix }}</span>
    </p>
    <span class="mt-2 font-body text-xs uppercase tracking-wide text-text-tertiary">
      {{ label }}
    </span>
  </div>
</template>
