import { getBlogPosts } from 'app/essays/utils'

export const baseUrl = 'https://alexzavalny.com'

export default async function sitemap() {
  let essays = getBlogPosts().map((post) => ({
    url: `${baseUrl}/essays/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/essays'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...essays]
}
