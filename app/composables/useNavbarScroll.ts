export function useNavbarScroll(threshold = 50) {
  const ui = useUiStore()
  const { y } = useWindowScroll()

  watch(y, (scrollY) => {
    ui.isNavbarScrolled = scrollY >= threshold
  }, { immediate: true })
}
