export const useUiStore = defineStore('ui', () => {
  const isMobileMenuOpen = ref(false)
  const isLoading = ref(false)
  const isNavbarScrolled = ref(false)
  const isNavbarHidden = ref(false)
  const isPreloaderDone = ref(false)
  const navbarTheme = ref<'light' | 'dark'>('light')

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  return {
    isMobileMenuOpen,
    isLoading,
    isNavbarScrolled,
    isNavbarHidden,
    isPreloaderDone,
    navbarTheme,
    toggleMobileMenu,
    setLoading
  }
})
