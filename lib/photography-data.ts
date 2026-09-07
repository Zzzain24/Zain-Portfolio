import { list } from "@vercel/blob"

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

interface CollectionMeta {
  slug: string
  title: string
  description?: string
  /** Folder prefix in the Blob store, e.g. "SF2026" for zain-portfolio-images/SF2026/... */
  blobFolder: string
  cover?: string
  /** Optional explicit filename order. Files not listed here are appended after, sorted naturally by filename. */
  order?: string[]
}

export const collectionsMeta: CollectionMeta[] = [
  {
    slug: "san-diego-2026",
    title: "San Diego 2026",
    description: "Shots from San Diego, 2026.",
    blobFolder: "San Diego 2026",
  },
  {
    slug: "san-francisco-2026",
    title: "San Francisco 2026",
    description: "Shots from San Francisco, 2026.",
    blobFolder: "SF2026",
  },
]

function sortFilenames(filenames: string[], order: string[] = []): string[] {
  const orderIndex = new Map(order.map((f, i) => [f, i]))
  return [...filenames].sort((a, b) => {
    const ai = orderIndex.get(a)
    const bi = orderIndex.get(b)
    if (ai !== undefined && bi !== undefined) return ai - bi
    if (ai !== undefined) return -1
    if (bi !== undefined) return 1
    return a.localeCompare(b, undefined, { numeric: true })
  })
}

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i

async function getCollectionPhotos(meta: CollectionMeta): Promise<Photo[]> {
  const { blobs } = await list({ prefix: `${meta.blobFolder}/` })
  const imageBlobs = blobs.filter((b) => IMAGE_EXTENSIONS.test(b.pathname))
  const byFilename = new Map(imageBlobs.map((b) => [b.pathname.split("/").pop()!, b.url]))
  const orderedFilenames = sortFilenames([...byFilename.keys()], meta.order)

  return orderedFilenames.map((filename, i) => ({
    id: `${meta.slug}-${i + 1}`,
    src: byFilename.get(filename),
    alt: `${meta.title} photo ${i + 1}`,
  }))
}

export async function getCollections(): Promise<Collection[]> {
  return Promise.all(
    collectionsMeta.map(async (meta) => ({
      slug: meta.slug,
      title: meta.title,
      description: meta.description,
      cover: meta.cover,
      photos: await getCollectionPhotos(meta),
    })),
  )
}

export async function getCollection(slug: string): Promise<Collection | undefined> {
  const meta = collectionsMeta.find((c) => c.slug === slug)
  if (!meta) return undefined
  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    cover: meta.cover,
    photos: await getCollectionPhotos(meta),
  }
}

export function getCoverSrc(collection: Collection): string | undefined {
  return collection.cover ?? collection.photos.find((p) => p.src)?.src
}
