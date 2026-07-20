import type { Metadata } from "next"
import { PhotographyCollectionsView } from "@/components/photography/collections-view"

export const metadata: Metadata = {
  title: "Photography — Zain Bharde",
  description: "A collection of photography by Zain Bharde.",
}

export default function PhotographyPage() {
  return <PhotographyCollectionsView />
}
