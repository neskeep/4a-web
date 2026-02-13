import type { Project } from '~/types/project'

export const projectCategories = [
  { label: 'Residencial', value: 'residencial' },
  { label: 'Corporativo', value: 'corporativo' },
  { label: 'Urbano', value: 'urbano' },
  { label: 'Cultural', value: 'cultural' },
]

export const projects: Project[] = [
  {
    slug: 'residencia-achumani',
    title: 'Residencia Achumani',
    category: 'residencial',
    location: 'La Paz, Bolivia',
    year: '2023',
    area: '480 m²',
    status: 'Construido',
    client: 'Privado',
    conceptQuote: 'Habitar entre la pendiente y el cielo — una casa que no se impone al cerro, sino que aprende de él.',
    description: [
      'Achumani presenta un desafío topográfico que muchos resolverían con muros de contención y plataformas artificiales. Nuestra propuesta fue diferente: escalonar la vivienda siguiendo la pendiente natural del terreno, generando una secuencia de niveles que descienden con la ladera.',
      'Cada nivel enmarca una vista distinta del valle. La materialidad — hormigón visto, vidrio y madera local — dialoga con el entorno sin mimetizarse. La casa no desaparece en el paisaje; convive con él.',
      'El resultado es una vivienda donde el recorrido interior replica la experiencia de caminar por la ladera: cada paso revela un nuevo encuadre, una nueva relación con la luz y el horizonte.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Residencia Achumani — vista exterior desde el jardín hacia la fachada escalonada',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Vista interior del salón principal con doble altura', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1600566753086-00f18f6b4963?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Detalle de la escalera en hormigón visto', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Terraza con vista al valle de La Paz', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1600596542815-611ed2f28a68?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Fachada lateral al atardecer', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Cocina integrada con iluminación cenital', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Dormitorio principal con ventanal panorámico', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Vista panorámica nocturna de la residencia', aspectRatio: '21:9' },
    ],
    order: 1,
    featured: true,
  },
  {
    slug: 'edificio-costanera',
    title: 'Edificio Costanera',
    category: 'corporativo',
    location: 'Santa Cruz, Bolivia',
    year: '2022',
    area: '6,200 m²',
    status: 'Construido',
    collaborators: ['Ing.Structura SRL'],
    conceptQuote: 'Un edificio corporativo que respira — donde la fachada no es barrera sino filtro entre el interior y el trópico.',
    description: [
      'Santa Cruz exige arquitectura que dialogue con el clima tropical. El Edificio Costanera responde con una doble piel de lamas de aluminio que filtra la radiación solar sin bloquear la ventilación cruzada, reduciendo el consumo energético en un 35%.',
      'La planta libre permite configuraciones flexibles para distintos inquilinos, mientras el lobby de triple altura establece una generosa transición entre la calle y el espacio de trabajo. La vegetación tropical se integra como elemento arquitectónico, no decorativo.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Edificio Costanera — fachada principal con sistema de lamas',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Lobby de triple altura con vegetación integrada', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Detalle del sistema de lamas en fachada', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Espacio de oficina tipo con iluminación natural', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Terraza corporativa en el último nivel', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Vista lateral del edificio al atardecer', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Circulación vertical con luz cenital', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Vista aérea del conjunto en contexto urbano', aspectRatio: '21:9' },
    ],
    order: 2,
    featured: true,
  },
  {
    slug: 'centro-cultural-sopocachi',
    title: 'Centro Cultural Sopocachi',
    category: 'cultural',
    location: 'La Paz, Bolivia',
    year: '2021–2024',
    area: '3,800 m²',
    status: 'En construcción',
    client: 'Gobierno Autónomo Municipal',
    collaborators: ['Acústica Andina', 'Ing. Villanueva & Asoc.'],
    conceptQuote: 'La cultura no se encierra — se abre. Un centro que es tan público por fuera como por dentro.',
    description: [
      'Sopocachi es el barrio cultural de La Paz, pero carecía de un espacio que articulara sus actividades dispersas. El Centro Cultural propone un edificio permeable: la planta baja se funde con la plaza pública, creando un espacio de transición que pertenece tanto al barrio como al programa cultural.',
      'El auditorio de 280 butacas, la galería flexible y los talleres se organizan alrededor de un vacío central que funciona como patio de luz y como organizador espacial. La cubierta plegada capta luz norte controlada para las salas de exposición.',
      'El proyecto fue ganador del concurso público convocado en 2021, seleccionado entre 47 propuestas por su integración urbana y eficiencia programática.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Centro Cultural Sopocachi — vista desde la plaza pública hacia la fachada principal',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Planta baja permeable con conexión a la plaza', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Patio central de luz con circulaciones perimetrales', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Interior del auditorio con acústica de madera', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Galería de exposiciones con luz cenital controlada', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Detalle de la cubierta plegada desde el exterior', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Talleres con ventanales hacia el patio interior', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Vista nocturna del centro cultural iluminado', aspectRatio: '21:9' },
    ],
    order: 3,
    featured: true,
  },
  {
    slug: 'boulevard-el-bosque',
    title: 'Boulevard El Bosque',
    category: 'urbano',
    location: 'Cochabamba, Bolivia',
    year: '2020–2023',
    area: '12,400 m²',
    status: 'Construido',
    client: 'Gobierno Autónomo Departamental',
    conceptQuote: 'Devolver el río a la ciudad — un borde que conecta en lugar de separar.',
    description: [
      'El Bosque Boulevard nace de la necesidad de conectar dos barrios que históricamente daban la espalda al río Rocha. La propuesta convierte el borde fluvial en un eje de actividad pública que integra comercio, recreación y movilidad sostenible.',
      'La materialidad del proyecto — adoquines de piedra local, acero corten y vegetación nativa — responde a criterios de durabilidad y bajo mantenimiento. El mobiliario urbano fue diseñado específicamente para el proyecto, evitando el catálogo genérico.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Boulevard El Bosque — vista aérea del paseo junto al río',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Paseo peatonal con vegetación nativa', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Mobiliario urbano diseñado a medida', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Zona de recreación junto al río', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Detalle de pavimentación en piedra local', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Ciclovía integrada al boulevard', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Plaza de acceso con pérgola metálica', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Vista panorámica del boulevard al atardecer', aspectRatio: '21:9' },
    ],
    order: 4,
    featured: false,
  },
  {
    slug: 'torre-obrajes',
    title: 'Torre Obrajes',
    category: 'residencial',
    location: 'La Paz, Bolivia',
    year: '2019–2022',
    area: '8,900 m²',
    status: 'Construido',
    collaborators: ['Ing. Prado & Asociados'],
    conceptQuote: 'Verticalidad con mesura — un edificio que crece sin imponerse al perfil del barrio.',
    description: [
      'Obrajes es un barrio residencial consolidado donde la altura es un tema sensible. La Torre Obrajes propone un volumen esbelto de 12 niveles que se retranquea progresivamente, reduciendo su impacto visual desde la calle y generando terrazas privadas en los pisos superiores.',
      'Los departamentos se organizan en torno a un núcleo central compacto, maximizando la superficie útil y la fachada exterior. Cada unidad tiene ventilación cruzada y al menos una vista hacia el Illimani.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Torre Obrajes — vista de la torre con retranqueos progresivos',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Lobby de acceso con doble altura', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Departamento tipo con vista al Illimani', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Terraza en retranqueo con jardín privado', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1486325212027-8a9f76f0f6f1?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Detalle de fachada en hormigón y vidrio', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1486325212027-8a9f76f0f6f1?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Salón común en último nivel', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Área de estacionamiento subterráneo', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Perspectiva urbana de la torre en contexto', aspectRatio: '21:9' },
    ],
    order: 5,
    featured: false,
  },
  {
    slug: 'edificio-calacoto',
    title: 'Edificio Calacoto',
    category: 'corporativo',
    location: 'La Paz, Bolivia',
    year: '2024',
    area: '4,600 m²',
    status: 'En construcción',
    conceptQuote: 'Trabajar entre jardines — oficinas que desdibujan el límite entre interior y exterior.',
    description: [
      'Calacoto concentra la mayor densidad corporativa de La Paz, pero sus edificios de oficinas rara vez dialogan con el entorno. El Edificio Calacoto invierte la lógica: en lugar de maximizar la ocupación del terreno, libera el 40% de la planta baja como jardín público.',
      'Las plantas de oficinas se organizan alrededor de patios ajardinados que funcionan como reguladores térmicos naturales. La fachada de vidrio bajo emisivo se protege con una malla vegetal que filtrará la luz directa una vez que la vegetación madure.',
    ],
    heroImage: {
      src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&h=675&q=80',
      alt: 'Edificio Calacoto — render de la fachada con malla vegetal',
      aspectRatio: '16:9',
    },
    images: [
      { src: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1200&h=675&q=80', alt: 'Jardín público en planta baja', aspectRatio: '16:9' },
      { src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Patio interior ajardinado entre oficinas', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Oficina tipo con vista al patio verde', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&h=1000&q=80', alt: 'Detalle de la malla vegetal en fachada', aspectRatio: '4:5' },
      { src: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Sala de reuniones con luz filtrada', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&h=750&q=80', alt: 'Acceso vehicular integrado al paisajismo', aspectRatio: '16:10' },
      { src: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1400&h=600&q=80', alt: 'Vista nocturna del edificio iluminado', aspectRatio: '21:9' },
    ],
    order: 6,
    featured: true,
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
