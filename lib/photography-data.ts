export interface Photo {
  id: string
  src?: string
  alt: string
}

export interface Collection {
  slug: string
  title: string
  description?: string
  cover?: string
  photos: Photo[]
}

export const collections: Collection[] = [
  {
    slug: "san-francisco-2026",
    title: "San Francisco 2026",
    description: "Shots from San Francisco, 2026.",
    photos: Array.from({ length: 8 }, (_, i) => ({
      id: `san-francisco-2026-${i + 1}`,
      alt: `San Francisco 2026 photography placeholder ${i + 1}`,
    })),
  },
]

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

export function getCoverSrc(collection: Collection): string | undefined {
  return collection.cover ?? collection.photos.find((p) => p.src)?.src
}
