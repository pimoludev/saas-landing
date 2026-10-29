import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://saas-landing.pimolu.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
