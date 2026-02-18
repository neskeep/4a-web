import type { Project } from '~/types/project'

export const projectCategories = [
  { label: 'Residencial', value: 'residencial' },
  { label: 'Comercial', value: 'comercial' },
  { label: 'Urbano', value: 'urbano' },
  { label: 'Corporativo', value: 'corporativo' },
]

export const projects: Project[] = [
  {
    slug: 'el-bosque',
    title: 'El Bosque Boulevard',
    category: 'urbano',
    location: 'Cochabamba, Bolivia',
    year: '2020–2024',
    area: '12,400 m²',
    status: 'Construido',
    client: 'Gobierno Autónomo Departamental',
    bgImage: '/bosque-bg-frame.png',
    conceptQuote: 'Devolver el río a la ciudad — un borde que conecta en lugar de separar.',
    description: [
      'El Bosque Boulevard nace de la necesidad de conectar dos barrios que históricamente daban la espalda al río Rocha. La propuesta convierte el borde fluvial en un eje de actividad pública que integra comercio, recreación y movilidad sostenible.',
      'La materialidad del proyecto — adoquines de piedra local, acero corten y vegetación nativa — responde a criterios de durabilidad y bajo mantenimiento. El mobiliario urbano fue diseñado específicamente para el proyecto, evitando el catálogo genérico.',
      'Publicado en la Revista CAPBA 2025, El Bosque Boulevard demuestra que la infraestructura pública puede ser simultáneamente funcional y sensible al lugar.',
    ],
    heroImage: {
      src: '/images/projects/el-bosque/foto-oficial.webp',
      alt: 'El Bosque Boulevard — vista oficial del proyecto urbano',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/el-bosque/exterior-01.jpg', alt: 'Vista exterior del boulevard con vegetación integrada', aspectRatio: '16:9' },
      { src: '/images/projects/el-bosque/exterior-02.jpg', alt: 'Paseo peatonal y mobiliario urbano', aspectRatio: '4:5' },
      { src: '/images/projects/el-bosque/oficial-02.jpg', alt: 'Vista oficial del conjunto urbano', aspectRatio: '4:5' },
      { src: '/images/projects/el-bosque/entrada.jpg', alt: 'Acceso principal desde Calle 15', aspectRatio: '16:9' },
      { src: '/images/projects/el-bosque/oficial-03.jpg', alt: 'Detalle de materialidad — piedra local y acero', aspectRatio: '4:5' },
      { src: '/images/projects/el-bosque/detalle-01.jpg', alt: 'Detalle constructivo del boulevard', aspectRatio: '4:5' },
      { src: '/images/projects/el-bosque/detalle-02.jpg', alt: 'Iluminación nocturna del paseo', aspectRatio: '16:10' },
      { src: '/images/projects/el-bosque/vista-aerea.jpg', alt: 'Vista aérea del Boulevard El Bosque', aspectRatio: '16:10' },
    ],
    plans: [
      { src: '/images/projects/el-bosque/planta-baja.png', label: 'Planta General — Nivel 1' },
      { src: '/images/projects/el-bosque/planta-alta.png', label: 'Planta General — Nivel 2' },
    ],
    publication: {
      name: 'Revista CAPBA 2025',
    },
    order: 1,
    featured: true,
  },
  {
    slug: 'ramoni',
    title: 'Ramoni',
    category: 'residencial',
    location: 'Cochabamba, Bolivia',
    year: '2022–2024',
    area: '320 m²',
    status: 'Construido',
    conceptQuote: 'Una casa que no se impone al lugar, sino que aprende de él.',
    description: [
      'Ramoni es una vivienda unifamiliar que nace del diálogo entre el programa doméstico y las condiciones específicas del sitio. La orientación, las visuales y la topografía natural dictaron cada decisión de proyecto.',
      'La materialidad cruda — hormigón visto, madera y vidrio — busca envejecer con dignidad, ganando carácter con el tiempo en lugar de perderlo. Los espacios interiores se conectan visualmente a través de dobles alturas y vacíos que permiten la circulación natural de luz y aire.',
      'El resultado es una vivienda donde cada espacio tiene su propia relación con el exterior, su propia calidad de luz, su propia atmósfera.',
    ],
    heroImage: {
      src: '/images/projects/ramoni/interior-03.jpg',
      alt: 'Residencia Ramoni — vista principal',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/ramoni/exterior-01.jpg', alt: 'Fachada principal de la Residencia Ramoni', aspectRatio: '16:9' },
      { src: '/images/projects/ramoni/exterior-02.jpg', alt: 'Vista lateral con vegetación', aspectRatio: '4:5' },
      { src: '/images/projects/ramoni/detalle-01.jpg', alt: 'Detalle constructivo — hormigón y madera', aspectRatio: '4:5' },
      { src: '/images/projects/ramoni/interior-01.jpg', alt: 'Espacio interior con doble altura', aspectRatio: '16:9' },
      { src: '/images/projects/ramoni/interior-02.jpg', alt: 'Sala principal con iluminación natural', aspectRatio: '4:5' },
      { src: '/images/projects/ramoni/interior-03.jpg', alt: 'Conexión interior-exterior', aspectRatio: '4:5' },
      { src: '/images/projects/ramoni/detalle-02.jpg', alt: 'Detalle de materialidad', aspectRatio: '16:10' },
      { src: '/images/projects/ramoni/detalle-03.jpg', alt: 'Escalera en hormigón visto', aspectRatio: '16:10' },
      { src: '/images/projects/ramoni/foto-01.jpg', alt: 'Vista desde el jardín', aspectRatio: '16:9' },
    ],
    order: 2,
    featured: true,
  },
  {
    slug: 'yaffar',
    title: 'Yaffar',
    category: 'residencial',
    location: 'Cochabamba, Bolivia',
    year: '2021–2023',
    area: '280 m²',
    status: 'Construido',
    conceptQuote: 'Habitar entre la luz y el silencio — espacios que respiran.',
    description: [
      'La residencia Yaffar explora la relación entre intimidad y apertura. Los espacios privados se protegen del exterior mientras que las áreas sociales se abren generosamente al paisaje, creando un gradiente de privacidad que organiza toda la vivienda.',
      'La planta se articula en torno a un patio central que funciona como regulador térmico y lumínico. Este vacío doméstico conecta todos los niveles visualmente y permite la ventilación cruzada natural, reduciendo la dependencia de climatización artificial.',
    ],
    heroImage: {
      src: '/images/projects/yaffar/hero.jpg',
      alt: 'Residencia Yaffar — vista aérea',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/yaffar/exterior-01.jpg', alt: 'Fachada principal de la Residencia Yaffar', aspectRatio: '16:9' },
      { src: '/images/projects/yaffar/exterior-02.jpg', alt: 'Volumen principal y acceso', aspectRatio: '4:5' },
      { src: '/images/projects/yaffar/interior-01.jpg', alt: 'Sala con iluminación cenital', aspectRatio: '4:5' },
      { src: '/images/projects/yaffar/interior-02.jpg', alt: 'Espacio de doble altura', aspectRatio: '16:9' },
      { src: '/images/projects/yaffar/interior-03.jpg', alt: 'Cocina integrada al living', aspectRatio: '4:5' },
      { src: '/images/projects/yaffar/interior-04.jpg', alt: 'Dormitorio principal', aspectRatio: '4:5' },
      { src: '/images/projects/yaffar/detalle-01.jpg', alt: 'Detalle de fachada', aspectRatio: '16:10' },
      { src: '/images/projects/yaffar/detalle-02.jpg', alt: 'Materialidad — hormigón y vidrio', aspectRatio: '16:10' },
    ],
    plans: [
      { src: '/images/projects/yaffar/planta-baja.png', label: 'Planta Baja' },
      { src: '/images/projects/yaffar/planta-alta.png', label: 'Planta Alta' },
    ],
    order: 3,
    featured: true,
  },
  {
    slug: 'wineshop',
    title: 'Wineshop',
    category: 'comercial',
    location: 'Cochabamba, Bolivia',
    year: '2022',
    area: '180 m²',
    status: 'Construido',
    conceptQuote: 'Un espacio donde el ritual del vino encuentra su arquitectura.',
    description: [
      'Wineshop es un espacio comercial que trasciende la tienda convencional para convertirse en un lugar de experiencia. El diseño interior fue concebido como una secuencia espacial que guía al visitante desde la calle hasta la sala de cata, creando un recorrido sensorial.',
      'La materialidad combina superficies cálidas — madera y ladrillo visto — con elementos industriales que dialogan con la tradición vinícola. La iluminación fue diseñada para resaltar los productos sin competir con ellos.',
    ],
    heroImage: {
      src: '/images/projects/wineshop/hero.jpg',
      alt: 'Wineshop — vista exterior del local',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/wineshop/interior-01.jpg', alt: 'Interior de la vinoteca', aspectRatio: '16:9' },
      { src: '/images/projects/wineshop/interior-02.jpg', alt: 'Zona de cata y exhibición', aspectRatio: '4:5' },
      { src: '/images/projects/wineshop/construccion-01.jpg', alt: 'Proceso de construcción', aspectRatio: '4:5' },
      { src: '/images/projects/wineshop/detalle-01.jpg', alt: 'Detalle de mobiliario', aspectRatio: '16:9' },
      { src: '/images/projects/wineshop/detalle-02.jpg', alt: 'Estantería de exhibición', aspectRatio: '4:5' },
      { src: '/images/projects/wineshop/construccion-02.jpg', alt: 'Obra en proceso', aspectRatio: '4:5' },
      { src: '/images/projects/wineshop/render-01.png', alt: 'Render del proyecto', aspectRatio: '16:10' },
      { src: '/images/projects/wineshop/render-02.png', alt: 'Render interior', aspectRatio: '16:10' },
    ],
    order: 4,
    featured: false,
  },
  {
    slug: 'espinoza',
    title: 'Espinoza',
    category: 'residencial',
    location: 'Cochabamba, Bolivia',
    year: '2021–2023',
    area: '350 m²',
    status: 'En construcción',
    conceptQuote: 'La vivienda como paisaje — volúmenes que dialogan con el jardín.',
    description: [
      'La residencia Espinoza se desarrolla como una composición de volúmenes que se articulan alrededor del jardín, difuminando el límite entre interior y exterior. Cada volumen responde a una función específica, permitiendo que la luz y la vegetación penetren en todos los espacios.',
      'El proyecto fue desarrollado íntegramente en modelo tridimensional, permitiendo al cliente recorrer virtualmente cada espacio antes de su construcción. Este proceso de diseño paramétrico aseguró que cada decisión fuera verificada y validada en contexto.',
    ],
    heroImage: {
      src: '/images/projects/espinoza/hero.jpg',
      alt: 'Residencia Espinoza — vista aérea del conjunto',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/espinoza/aerea-02.jpg', alt: 'Vista aérea del conjunto', aspectRatio: '16:9' },
      { src: '/images/projects/espinoza/jardin.jpg', alt: 'Vista desde el jardín', aspectRatio: '4:5' },
      { src: '/images/projects/espinoza/lateral-derecha.jpg', alt: 'Fachada lateral derecha', aspectRatio: '4:5' },
      { src: '/images/projects/espinoza/lateral-izquierda.jpg', alt: 'Fachada lateral izquierda', aspectRatio: '16:9' },
      { src: '/images/projects/espinoza/maqueta-01.jpg', alt: 'Maqueta volumétrica', aspectRatio: '4:5' },
      { src: '/images/projects/espinoza/maqueta-02.jpg', alt: 'Maqueta — detalle', aspectRatio: '4:5' },
      { src: '/images/projects/espinoza/render-01.jpg', alt: 'Render exterior', aspectRatio: '16:10' },
      { src: '/images/projects/espinoza/render-02.jpg', alt: 'Render desde jardín', aspectRatio: '16:10' },
    ],
    order: 5,
    featured: false,
  },
  {
    slug: 'altamira',
    title: 'Altamira',
    category: 'corporativo',
    location: 'La Paz, Bolivia',
    year: '2022',
    area: '4,200 m²',
    status: 'Construido',
    client: 'BISA',
    conceptQuote: 'Arquitectura corporativa con identidad — más allá del vidrio y el acero.',
    description: [
      'El proyecto Altamira para BISA desafía la tipología corporativa convencional. En lugar del edificio-caja de vidrio, propone un volumen articulado que responde a la orientación solar y las visuales del entorno, generando fachadas diferenciadas que le otorgan identidad al edificio.',
      'La planta libre permite configuraciones flexibles, mientras las áreas comunes fueron diseñadas como espacios de encuentro que fomentan la colaboración. La materialidad exterior combina concreto prefabricado con vidrio de control solar.',
    ],
    heroImage: {
      src: '/images/projects/altamira/hero.jpg',
      alt: 'Edificio Altamira BISA — fachada principal',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/altamira/exterior-01.jpg', alt: 'Vista lateral del edificio', aspectRatio: '16:9' },
      { src: '/images/projects/altamira/exterior-02.jpg', alt: 'Detalle de fachada', aspectRatio: '4:5' },
      { src: '/images/projects/altamira/interior-01.jpg', alt: 'Lobby de acceso', aspectRatio: '4:5' },
      { src: '/images/projects/altamira/interior-02.jpg', alt: 'Espacio de oficinas', aspectRatio: '16:9' },
      { src: '/images/projects/altamira/detalle-01.jpg', alt: 'Detalle constructivo', aspectRatio: '4:5' },
      { src: '/images/projects/altamira/detalle-02.jpg', alt: 'Materialidad — hormigón y vidrio', aspectRatio: '4:5' },
      { src: '/images/projects/altamira/render-01.jpg', alt: 'Render del conjunto', aspectRatio: '16:10' },
    ],
    plans: [
      { src: '/images/projects/altamira/planta-01.png', label: 'Planta Tipo — Nivel 1' },
      { src: '/images/projects/altamira/planta-02.png', label: 'Planta Tipo — Nivel 2' },
    ],
    order: 6,
    featured: true,
  },
  {
    slug: 'bodega-aranjuez',
    title: 'Bodega Aranjuez',
    category: 'comercial',
    location: 'Tarija, Bolivia',
    year: '2019–2023',
    area: '2,800 m²',
    status: 'Construido',
    conceptQuote: 'Donde el vino nace, la arquitectura respira la tierra.',
    description: [
      'La Bodega Aranjuez es un proyecto que fusiona programa productivo con experiencia turística. Los espacios de producción — cateo, alambiques, tanques — se organizan en una secuencia que permite tanto el funcionamiento industrial como la visita guiada.',
      'La arquitectura responde al clima seco de Tarija con muros gruesos, cubiertas ventiladas y orientaciones calculadas. Los materiales locales — piedra y ladrillo — dialogan con la tradición constructiva de los valles tarijeños.',
    ],
    heroImage: {
      src: '/images/projects/bodega-aranjuez/hero.png',
      alt: 'Bodega Aranjuez — vista principal',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/bodega-aranjuez/exterior-01.png', alt: 'Fachada de la bodega', aspectRatio: '16:9' },
      { src: '/images/projects/bodega-aranjuez/exterior-02.png', alt: 'Vista lateral del conjunto', aspectRatio: '4:5' },
      { src: '/images/projects/bodega-aranjuez/exterior-03.png', alt: 'Acceso principal', aspectRatio: '4:5' },
      { src: '/images/projects/bodega-aranjuez/interior-cateo-01.png', alt: 'Sala de cateo', aspectRatio: '16:9' },
      { src: '/images/projects/bodega-aranjuez/interior-cateo-02.png', alt: 'Cateo — detalle', aspectRatio: '4:5' },
      { src: '/images/projects/bodega-aranjuez/interior-01.png', alt: 'Interior de producción', aspectRatio: '4:5' },
      { src: '/images/projects/bodega-aranjuez/interior-02.png', alt: 'Espacio interior', aspectRatio: '16:10' },
      { src: '/images/projects/bodega-aranjuez/aerea.png', alt: 'Vista aérea del conjunto', aspectRatio: '16:10' },
      { src: '/images/projects/bodega-aranjuez/alambiques-01.jpg', alt: 'Zona de alambiques', aspectRatio: '16:9' },
    ],
    order: 7,
    featured: false,
  },
  {
    slug: 'peniaranda',
    title: 'Peñaranda',
    category: 'residencial',
    location: 'Cochabamba, Bolivia',
    year: '2023',
    area: '260 m²',
    status: 'En proyecto',
    conceptQuote: 'Habitar la honestidad del material — hormigón y acero corten como expresión.',
    description: [
      'La residencia Peñaranda explora dos materialidades contrastantes — hormigón visto y acero corten — como elementos que definen la identidad del proyecto. Cada opción fue desarrollada en paralelo, permitiendo al cliente experimentar ambas atmósferas antes de elegir.',
      'La volumetría se compone de dos cuerpos articulados que generan un patio interior protegido. Las elevaciones limpias y las proporciones cuidadas buscan una estética atemporal que envejezca con gracia.',
    ],
    heroImage: {
      src: '/images/projects/peniaranda/hero.png',
      alt: 'Residencia Peñaranda — render fachada principal',
      aspectRatio: '16:9',
    },
    images: [
      { src: '/images/projects/peniaranda/lateral-01.png', alt: 'Vista lateral — opción hormigón', aspectRatio: '16:9' },
      { src: '/images/projects/peniaranda/opcion-corten.png', alt: 'Fachada — opción acero corten', aspectRatio: '4:5' },
      { src: '/images/projects/peniaranda/lateral-corten.png', alt: 'Vista lateral — opción acero corten', aspectRatio: '4:5' },
      { src: '/images/projects/peniaranda/vista-02.jpg', alt: 'Vista nocturna del proyecto', aspectRatio: '16:9' },
      { src: '/images/projects/peniaranda/vista-04.jpg', alt: 'Perspectiva del conjunto', aspectRatio: '4:5' },
      { src: '/images/projects/peniaranda/render-01.jpg', alt: 'Render del acceso', aspectRatio: '4:5' },
      { src: '/images/projects/peniaranda/elevacion-frontal.jpg', alt: 'Elevación frontal', aspectRatio: '16:10' },
      { src: '/images/projects/peniaranda/elevacion-lateral-bln.jpg', alt: 'Elevación lateral', aspectRatio: '16:10' },
    ],
    plans: [
      { src: '/images/projects/peniaranda/elevacion-frontal-bln.jpg', label: 'Elevación Frontal' },
      { src: '/images/projects/peniaranda/elevacion-lateral-bln.jpg', label: 'Elevación Lateral' },
    ],
    order: 8,
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]!
}

export function getProjectsByCategory(category: string): Project[] {
  if (!category) return projects
  return projects.filter(p => p.category === category)
}
