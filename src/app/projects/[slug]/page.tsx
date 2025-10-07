import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client, urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export const revalidate = 60 // Revalidate every 60 seconds


// Query to get a single project by slug
const PROJECT_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  subtitle,
  previewDescription,
  slug,
  image,
  year,
  semester,
  category,
  tags,
  studentNames,
  externalLink,
  connectedPartner->{
    name,
    category,
    website,
    slug
  },
  detailImage1,
  detailParagraph1,
  detailImage2,
  detailParagraph2
}`

export async function generateStaticParams() {
  const projects = await client.fetch(`*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`)

  return projects.map((project: any) => ({
    slug: project.slug,
  }))
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await client.fetch(PROJECT_DETAIL_QUERY, { slug })

  if (!project) {
    notFound()
  }

  const portableTextComponents = {
    types: {},
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary underline"
        >
          {children}
        </a>
      ),
    },
    block: {
      normal: ({ children }: any) => (
        <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h4>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            {/* Subtitle */}
            {project.subtitle && (
              <p className="text-xl text-gray-600 mb-6">
                {project.subtitle}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
              {project.studentNames && project.studentNames.length > 0 && (
                <div>
                  <span className="font-medium">Students:</span>{' '}
                  <span>{project.studentNames.join(', ')}</span>
                </div>
              )}

              {project.semester && (
                <div>
                  <span className="font-medium">Semester:</span>{' '}
                  <span>{project.semester}</span>
                </div>
              )}

              {project.year && (
                <div>
                  <span className="font-medium">Year:</span>{' '}
                  <span>{project.year}</span>
                </div>
              )}
            </div>

            {/* Connected Partner */}
            {project.connectedPartner && (
              <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg mb-8">
                <span className="font-medium text-gray-700">Partner:</span>
                {project.connectedPartner.slug?.current ? (
                  <Link
                    href={`/partners/${project.connectedPartner.slug.current}`}
                    className="text-primary hover:text-secondary font-medium underline"
                  >
                    {project.connectedPartner.name}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{project.connectedPartner.name}</span>
                )}
                {project.connectedPartner.category && (
                  <span className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full border">
                    {project.connectedPartner.category}
                  </span>
                )}
              </div>
            )}

            {/* Themes/Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <span className="text-sm font-medium text-gray-700 mr-2">Themes:</span>
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-primary text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* External Link */}
            {project.externalLink && (
              <div className="mb-8">
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  View Live Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Main Project Image */}
          {project.image && (
            <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={urlFor(project.image).width(1200).url()}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* First Image */}
          {project.detailImage1 && (
            <div className="relative w-full rounded-xl overflow-hidden mb-8 shadow-md">
              <Image
                src={urlFor(project.detailImage1).width(1000).url()}
                alt="Project detail image 1"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* First Paragraph */}
          {project.detailParagraph1 && (
            <div className="prose prose-lg max-w-none mb-12">
              <PortableText
                value={project.detailParagraph1}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Second Image */}
          {project.detailImage2 && (
            <div className="relative w-full rounded-xl overflow-hidden mb-8 shadow-md">
              <Image
                src={urlFor(project.detailImage2).width(1000).url()}
                alt="Project detail image 2"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Second Paragraph */}
          {project.detailParagraph2 && (
            <div className="prose prose-lg max-w-none">
              <PortableText
                value={project.detailParagraph2}
                components={portableTextComponents}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}