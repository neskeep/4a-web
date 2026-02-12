export interface MenuItem {
  name: string
  path: string
  children?: MenuItem[]
}

export interface Project {
  slug: string
  title: string
  category: string
  location: string
  year: number
  area?: string
  description: string
  excerpt: string
  coverImage: string
  images: string[]
  featured: boolean
}
