import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  return ["", "/catalogue", "/services", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
