import type { Metadata } from "next"
import { PhotographyCollectionsView } from "@/components/photography/collections-view"
import { getCollections } from "@/lib/photography-data"

export const metadata: Metadata = {
  title: "Photography — Zain Bharde",
  description: "A collection of photography by Zain Bharde.",
}

export const dynamic = "force-dynamic"

export default async function PhotographyPage() {
  const collections = await getCollections()
  return <PhotographyCollectionsView collections={collections} />
}
