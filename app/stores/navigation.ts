export const useNavigationStore = defineStore('navigation', () => {
  const menuItems = ref<MenuItem[]>([
    { name: 'Inicio', path: '/' },
    { name: 'Estudio', path: '/nosotros' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contacto', path: '/contacto' }
  ])

  return { menuItems }
})
