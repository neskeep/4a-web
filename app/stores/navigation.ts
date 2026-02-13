export const useNavigationStore = defineStore('navigation', () => {
  const menuItems = ref<MenuItem[]>([
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Estudio', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Journal', path: '/journal' },
  ])

  return { menuItems }
})
