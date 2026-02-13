<script setup lang="ts">
const { $gsap } = useNuxtApp()

const sectionRef = ref<HTMLElement>()
let tl: ReturnType<typeof $gsap.timeline> | null = null

onMounted(() => {
  if (!sectionRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return

  const info = sectionRef.value.querySelector('[data-location="info"]')
  const map = sectionRef.value.querySelector('[data-location="map"]')

  $gsap.set(info, { opacity: 0, y: 30 })
  $gsap.set(map, { opacity: 0, scale: 1.02 })

  tl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
      once: true,
    },
  })

  tl.to(
    info,
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    0.2,
  ).to(
    map,
    { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
    '-=0.4',
  )
})

onUnmounted(() => {
  tl?.kill()
})
</script>

<template>
  <section ref="sectionRef" class="bg-bg-alt py-section">
    <div class="mx-auto max-w-[var(--max-width-content)] px-8 lg:px-16">
      <div class="grid grid-cols-1 gap-block lg:grid-cols-[40fr_60fr]">
        <!-- Informacion -->
        <div
          data-location="info"
        >
          <UiSectionLabel label="Visitanos" class="mb-block" />

          <h2
            class="font-display text-3xl leading-snug tracking-tight text-text"
            style="font-weight: 400"
          >
            Galpon 4A
          </h2>

          <address class="mt-element not-italic font-body text-base leading-relaxed text-text-secondary">
            Calle 15, #8023<br />
            Calacoto<br />
            La Paz, Bolivia
          </address>

          <div class="mt-element">
            <span
              class="block font-body text-sm uppercase tracking-wide text-text-tertiary"
              style="font-weight: 500"
            >
              Lunes a viernes
            </span>
            <span class="mt-micro block font-body text-base text-text">
              9:00 — 18:00
            </span>
          </div>

          <div class="mt-element">
            <UiLink
              to="https://maps.google.com/?q=Calacoto+La+Paz+Bolivia"
              :external="true"
              arrow="right"
              variant="accent"
            >
              Como llegar
            </UiLink>
          </div>
        </div>

        <!-- Mapa placeholder -->
        <div
          data-location="map"
          class="overflow-hidden rounded-[var(--radius-md)]"
        >
          <div
            class="flex items-center justify-center bg-border"
            style="aspect-ratio: 4 / 3; min-height: 280px"
          >
            <div class="text-center">
              <div
                class="mx-auto mb-tight flex h-8 w-8 items-center justify-center rounded-full bg-accent"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 1C4.79 1 3 2.79 3 5C3 8.25 7 13 7 13C7 13 11 8.25 11 5C11 2.79 9.21 1 7 1ZM7 6.5C6.17 6.5 5.5 5.83 5.5 5C5.5 4.17 6.17 3.5 7 3.5C7.83 3.5 8.5 4.17 8.5 5C8.5 5.83 7.83 6.5 7 6.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="font-body text-xs text-text-tertiary">
                Mapa estatico — Calacoto, La Paz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
