<script setup lang="ts">
const { $gsap } = useNuxtApp()
const navigation = useNavigationStore()
const ui = useUiStore()
const { menuItems } = storeToRefs(navigation)
const { isMobileMenuOpen, isNavbarScrolled, navbarTheme } = storeToRefs(ui)

useNavbarScroll()

// Logo: scrolled siempre dark, sin scroll depende del tema del hero
const logoDark = computed(() => isNavbarScrolled.value || navbarTheme.value === 'dark')

watch(isMobileMenuOpen, async (open) => {
  if (!open || !$gsap) return
  await nextTick()

  // Query DOM directly — refs inside DialogPortal (teleport) aren't reliable
  const links = document.querySelectorAll<HTMLElement>('[data-mobile-link]')
  if (!links.length) return

  $gsap.fromTo(
    links,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.08,
    },
  )
})

function closeMobileMenu() {
  ui.isMobileMenuOpen = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 z-40 w-full transition-all duration-400"
    :style="{ transitionTimingFunction: 'var(--ease-out-quart)' }"
    :class="[
      isNavbarScrolled
        ? 'bg-bg border-b border-border-subtle'
        : 'bg-transparent border-b border-transparent',
    ]"
  >
    <nav class="mx-auto flex h-16 max-w-[var(--max-width)] items-center justify-between px-6 lg:h-20 lg:px-8">
      <!-- Logo -->
      <NuxtLink
        to="/"
        aria-label="Estudio 4a — Inicio"
        class="transition-colors duration-350"
        :style="{ transitionTimingFunction: 'var(--ease-out-quart)' }"
        :class="logoDark ? 'text-text' : 'text-text-inverse'"
      >
        <UiLogo4a class="h-7 lg:h-8" height="32px" />
      </NuxtLink>

      <!-- Desktop nav: Reka UI NavigationMenu -->
      <NavigationMenuRoot class="hidden lg:block">
        <NavigationMenuList class="flex items-center gap-8">
          <NavigationMenuItem
            v-for="item in menuItems"
            :key="item.path"
          >
            <NuxtLink
              :to="item.path"
              class="font-body text-sm uppercase tracking-wide transition-colors duration-350"
              :style="{ transitionTimingFunction: 'var(--ease-out-quart)' }"
              :class="[
                isNavbarScrolled
                  ? 'text-text-secondary hover:text-accent'
                  : 'text-text-inverse-muted hover:text-accent',
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>

      <!-- Mobile hamburger -->
      <button
        class="relative flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        aria-label="Abrir menú"
        @click="ui.toggleMobileMenu()"
      >
        <span
          class="block h-px w-6 transition-colors duration-350"
          :style="{ transitionTimingFunction: 'var(--ease-out-quart)' }"
          :class="logoDark ? 'bg-text' : 'bg-text-inverse'"
        />
        <span
          class="block h-px w-6 transition-colors duration-350"
          :style="{ transitionTimingFunction: 'var(--ease-out-quart)' }"
          :class="logoDark ? 'bg-text' : 'bg-text-inverse'"
        />
      </button>
    </nav>
  </header>

  <!-- Mobile overlay: Reka UI Dialog -->
  <DialogRoot v-model:open="isMobileMenuOpen">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-bg-dark/60 backdrop-blur-sm" />
      <DialogContent
        class="fixed inset-0 z-50 flex flex-col bg-bg-dark"
        aria-describedby=""
        @escape-key-down="closeMobileMenu"
      >
        <VisuallyHidden as-child>
          <DialogTitle>Menú de navegación</DialogTitle>
        </VisuallyHidden>

        <!-- Close button -->
        <div class="flex h-16 items-center justify-end px-6">
          <DialogClose
            aria-label="Cerrar menú"
            class="flex h-10 w-10 items-center justify-center text-text-inverse"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </DialogClose>
        </div>

        <!-- Links -->
        <nav class="flex flex-1 flex-col items-center justify-center gap-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            data-mobile-link
            :to="item.path"
            class="font-display text-4xl leading-tight tracking-tight text-text-inverse transition-colors duration-350 hover:text-accent"
            :style="{
              fontWeight: 300,
              opacity: 0,
              transitionTimingFunction: 'var(--ease-out-quart)',
            }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
