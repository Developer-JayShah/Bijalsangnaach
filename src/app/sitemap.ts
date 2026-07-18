import type { MetadataRoute } from "next";

const BASE_URL = "https://bijalsangnaach.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/classes", "/performance", "/gallery", "/contact", "/register"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
