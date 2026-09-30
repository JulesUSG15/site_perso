import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: site.lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
