import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client, urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = 60 // Revalidate every 60 seconds

// Query to get a single partner by slug
const PARTNER_DETAIL_QUERY = `*[_type == "partner" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  description,
  partnershipDescription,
  logo,
  website,
  category
}`

// Query to get all projects connected to this partner
const PARTNER_PROJECTS_QUERY = `*[_type == "project" && references($partnerId)] | order(order asc, _createdAt desc){
  _id,
  title,
  previewDescription,
  slug,
  hasDetailPage,
  image,
  year,
  category,
  tags,
  externalLink,
  order
}`

export async function generateStaticParams() {
  const partners = await client.fetch(`*[_type == "partner" && defined(slug.current)]{
    "slug": slug.current
  }`)

  return partners.map((partner: any) => ({
    slug: partner.slug,
  }))
}

interface PartnerPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params
  const partner = await client.fetch(PARTNER_DETAIL_QUERY, { slug })

  if (!partner) {
    notFound()
  }

  // Fetch projects connected to this partner
  const projects = await client.fetch(PARTNER_PROJECTS_QUERY, { partnerId: partner._id })

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
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/partners"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Partners
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            {/* Logo */}
            {partner.logo && (
              <div className="mb-8 flex justify-center">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white shadow-md p-4">
                  <Image
                    src={urlFor(partner.logo).width(200).height(200).url()}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Partner Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {partner.name}
            </h1>

            {/* Category */}
            {partner.category && (
              <div className="inline-flex items-center mb-6">
                <span className="px-4 py-2 bg-muted text-primary text-sm font-medium rounded-full">
                  {partner.category}
                </span>
              </div>
            )}

            {/* Website Link */}
            {partner.website && (
              <div className="mb-8">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                >
                  Visit Website
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partnership Description */}
      {partner.partnershipDescription && (
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <PortableText
                value={partner.partnershipDescription}
                components={portableTextComponents}
              />
            </div>
          </div>
        </section>
      )}

      {/* Connected Projects */}
      {projects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Projects with {partner.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.previewDescription}
                  image={project.image ? urlFor(project.image).width(400).height(300).url() : undefined}
                  semester={project.semester}
                  tags={project.tags}
                  slug={project.slug?.current}
                  hasDetailPage={project.hasDetailPage}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}