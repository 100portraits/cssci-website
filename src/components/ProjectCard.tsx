import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  year?: string
  tags?: string[]
  link?: string
}

export default function ProjectCard({ title, description, image, year, tags = [], link }: ProjectCardProps) {
  const content = (
    <>
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {year && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-primary">{year}</span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Arrow indicator for links */}
        {link && (
          <div className="absolute bottom-6 right-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </>
  )

  if (link) {
    return (
      <Link 
        href={link}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
      >
        {content}
      </Link>
    )
  }

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {content}
    </div>
  )
}