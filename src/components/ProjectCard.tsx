import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  year?: string
  tags?: string[]
  link?: string
  connectedPartner?: {
    name: string
    category?: string
  }
}



export default function ProjectCard({ title, description, image, year, tags = [], link, connectedPartner }: ProjectCardProps) {
  console.log('ProjectCard component loaded', connectedPartner);
  
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
      <div className="p-6 flex flex-col h-full">
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

        {/* Connected Partner */}
        {connectedPartner && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Partner:</span>
              <span className="text-primary font-medium">{connectedPartner.name}</span>
              {connectedPartner.category && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {connectedPartner.category}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Project link */}
        {link && (
          <div className="flex justify-start mt-auto pt-4">
            <Link
              href={link}
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 transition-colors px-4 py-2 rounded-lg font-medium"
            >
              See the project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </>
  )

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      {content}
    </div>
  )
}