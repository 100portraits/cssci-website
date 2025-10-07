import Image from 'next/image'
import Link from 'next/link'

interface PartnerCardProps {
  name: string
  description: string
  logo?: string
  website?: string
  category?: string
  slug?: string
}

export default function PartnerCard({ name, description, logo, website, category, slug }: PartnerCardProps) {
  const content = (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
      <div className="flex flex-col h-full">
        {/* Logo or placeholder */}
        <div className="h-36 mb-4 flex items-center">
          {logo ? (
            <div className="relative w-full h-full">
              <Image
                src={logo}
                alt={`${name} logo`}
                fill
                className="object-scale-down"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Category badge */}
        {category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-accent/20 text-primary text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* View partner link */}
        {slug && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="inline-flex items-center text-sm text-primary hover:text-secondary transition-colors font-medium">
              View partner details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  if (slug) {
    return (
      <Link href={`/partners/${slug}`} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}