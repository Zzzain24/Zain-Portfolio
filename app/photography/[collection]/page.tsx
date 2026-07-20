import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { collections, getCollection } from "@/lib/photography-data"
import { PhotographyCollectionView } from "@/components/photography/collection-view"

export function generateStaticParams() {
  return collections.map((c) => ({ collection: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string }>
}): Promise<Metadata> {
  const { collection: slug } = await params
  const collection = getCollection(slug)
  if (!collection) return {}
  return {
    title: `${collection.title} — Photography — Zain Bharde`,
    description: collection.description ?? `${collection.title} photo collection.`,
  }
}

export default async function PhotographyCollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>
}) {
  const { collection: slug } = await params
  const collection = getCollection(slug)
  if (!collection) notFound()
  return <PhotographyCollectionView collection={collection} />
}
