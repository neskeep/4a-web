export interface ProjectImage {
  src: string
  alt: string
  aspectRatio: '21:9' | '16:10' | '16:9' | '4:5' | '3:4' | '1:1'
  caption?: string
}

export interface Project {
  slug: string
  title: string
  category: 'residencial' | 'corporativo' | 'urbano' | 'cultural'

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
  heroImage: ProjectImage
  images: ProjectImage[]

  // Metadata
  order: number
  featured: boolean
}
