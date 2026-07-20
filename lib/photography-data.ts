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
    slug: "street",
    title: "Street",
    description: "Unscripted moments from city sidewalks.",
    photos: Array.from({ length: 8 }, (_, i) => ({
      id: `street-${i + 1}`,
      alt: `Street photography placeholder ${i + 1}`,
    })),
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Places passed through, briefly.",
    photos: Array.from({ length: 6 }, (_, i) => ({
      id: `travel-${i + 1}`,
      alt: `Travel photography placeholder ${i + 1}`,
    })),
  },
  {
    slug: "portraits",
    title: "Portraits",
    description: "Faces, light, and quiet attention.",
    photos: Array.from({ length: 5 }, (_, i) => ({
      id: `portraits-${i + 1}`,
      alt: `Portrait photography placeholder ${i + 1}`,
    })),
  },
]

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

export function getCoverSrc(collection: Collection): string | undefined {
  return collection.cover ?? collection.photos.find((p) => p.src)?.src
}
