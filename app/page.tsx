import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'
import { Linkedin, Instagram, Youtube, Github, GraduationCap } from 'lucide-react' // Import icons

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto p-4 text-center">
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
        Alex Zavalny
      </h1>
      <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg mx-auto">
        <Image
          src="/alex_headshot.png"
          alt="Alex Zavalny"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="mt-4 text-gray-700">
        <span className="text-xl font-bold">
          {`I'm a Machine Learning Engineer and YouTuber passionate about building data-driven software for enterprise and finance.`}
        </span>
        <br />
        <br />
        <span className="text-lg">
          {`I've worked at Apollo Global Management and JP Morgan, published AI research, and presented at top institutions and conferences like ACL, Harvard, Yale, and Brown.`}
        </span>
      </p>


      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/alex-zavalny-a98241185/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-12 h-12 text-blue-600 hover:text-blue-800 transition" />
        </a>
        <a href="https://www.youtube.com/@aiwithaz" target="_blank" rel="noopener noreferrer">
          <Youtube className="w-12 h-12 text-red-600 hover:text-red-800 transition" />
        </a>
        <a href="https://github.com/azavalny" target="_blank" rel="noopener noreferrer">
          <Github className="w-12 h-12 text-gray-900 hover:text-gray-700 transition" />
        </a>
        <a href="https://scholar.google.com/citations?user=jgnt_1UAAAAJ" target="_blank" rel="noopener noreferrer">
          <GraduationCap className="w-12 h-12 text-blue-500 hover:text-blue-700 transition" />
        </a>
        <a href="https://www.instagram.com/alex_zavalny/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-12 h-12 text-pink-500 hover:text-pink-700 transition" />
        </a>
      </div>

      <div>
        <br/>
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}
