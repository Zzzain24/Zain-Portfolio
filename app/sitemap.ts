import type { MetadataRoute } from "next"
import { collections } from "@/lib/photography-data"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zainbharde.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://zainbharde.com/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://zainbharde.com/#experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://zainbharde.com/#projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://zainbharde.com/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://zainbharde.com/photography",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...collections.map((c) => ({
      url: `https://zainbharde.com/photography/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ]
}
