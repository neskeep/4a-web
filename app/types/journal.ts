export interface JournalEntry {
  slug: string
  title: string
  type: 'ensayo' | 'proyecto' | 'proceso' | 'referencia'

  date: string
  featured: boolean

  excerpt: string
  body: string

  coverImage: {
    src: string
    alt: string
  }

  relatedProject?: string
}
