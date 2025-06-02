import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Essays</h1>
      <h2 className="font-semibold text-1xl mb-6 tracking-tighter">My insights on tech, finance, and life</h2>
      <BlogPosts />
    </section>
  )
}
