import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  organization?: string
  image?: string
}

export default function TestimonialCard({ quote, name, role, organization, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      {/* Quote mark */}
      <div className="mb-4">
        <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote text */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-secondary to-primary">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">
            {role}
            {organization && <span> • {organization}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}