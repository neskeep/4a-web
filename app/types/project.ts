export interface ProjectImage {
  src: string
  alt: string
  aspectRatio: '21:9' | '16:10' | '16:9' | '4:5' | '3:4' | '1:1'
  caption?: string
}

export interface PlanImage {
  src: string
  label: string
}

export interface Project {
  slug: string
  title: string
  category: 'residencial' | 'corporativo' | 'urbano' | 'comercial'

  // Ficha tecnica
  location: string
  year: string
  area: string
  status: string
  client?: string
  collaborators?: string[]

  // Narrativa
  conceptQuote: string
  description: string[]

  // Imagenes
  bgImage?: string
  heroImage: ProjectImage
  images: ProjectImage[]

  // Planos y bocetos
  plans?: PlanImage[]
  sketches?: PlanImage[]

  // Publicacion
  publication?: {
    name: string
    file?: string
  }

  // Metadata
  order: number
  featured: boolean
}
