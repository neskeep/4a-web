<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: string[]
  separator?: string
  speed?: number
  reverse?: boolean
}>(), {
  separator: ' \u00b7 ',
  speed: 30,
  reverse: false,
})

const joinedText = computed(() => {
  return props.items.join(props.separator) + props.separator
})
</script>

<template>
  <div
    class="marquee-mask overflow-hidden"
    aria-hidden="true"
  >
    <div
      class="flex w-max whitespace-nowrap"
      :class="reverse ? 'animate-marquee-reverse' : 'animate-marquee'"
      :style="{ animationDuration: `${speed}s` }"
    >
      <span class="flex-shrink-0 font-display text-3xl" style="font-weight: 300">{{ joinedText }}</span>
      <span class="flex-shrink-0 font-display text-3xl" style="font-weight: 300">{{ joinedText }}</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee {
  will-change: transform;
  animation: marquee linear infinite;
}

.animate-marquee-reverse {
  will-change: transform;
  animation: marquee-reverse linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee,
  .animate-marquee-reverse {
    animation-play-state: paused;
  }
}
</style>
