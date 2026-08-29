import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog";
import { PRACTICE_AREA_LANDING_PAGES } from "@/data/content";

const STATIC_ROUTES = [
  "",
  "/about",
  "/practice-areas",
  "/advocate-in-nashik",
  "/insights",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const practiceAreaEntries = PRACTICE_AREA_LANDING_PAGES.map((page) => ({
    url: `${SITE_URL}/practice-areas/${page.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...practiceAreaEntries, ...blogEntries];
}
