import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'
import ImageCarousel from '@/components/ImageCarousel'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/client'
import {
  HOMEPAGE_QUERY,
  FEATURED_PROJECTS_QUERY,
  FEATURED_TESTIMONIALS_QUERY
} from '@/sanity/lib/queries'

export const revalidate = 60 // Revalidate every 60 seconds

// Fetch data with error handling
async function getHomepageData() {
  try {
    const [homepage, projects, testimonials] = await Promise.all([
      client.fetch(HOMEPAGE_QUERY),
      client.fetch(FEATURED_PROJECTS_QUERY),
      client.fetch(FEATURED_TESTIMONIALS_QUERY)
    ])
    return { homepage, projects, testimonials }
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return { homepage: null, projects: [], testimonials: [] }
  }
}

export default async function Home() {
  const { homepage, projects, testimonials } = await getHomepageData()

  const heroSubtitle = homepage?.heroSubtitle
  const heroDescription = homepage?.heroDescription
  const carouselImages = homepage?.carouselImages?.map((item: any) => ({
    image: item.image ? urlFor(item.image).width(1200).height(600).url() : '',
    alt: item.alt,
    caption: item.caption
  })) || []

  return (
    <div className="relative">
      {/* Hero Section with gradient background */}
      <section className="relative min-h-[90vh] flex lg:items-center overflow-hidden bg-gradient-to-br from-white via-muted/20 to-white">
        {/* Modern gradient mesh overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(143,166,116,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,228,50,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,66,64,0.05),transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10 px-8 mx-auto  lg:px-8 lg:py-20 lg:mt-0 mt-20">
          <div className="">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-2 leading-tight">
              <span className="underline underline-offset-4 lg:underline-offset-8">C</span>omputational{' '}
              <span className="underline underline-offset-4 lg:underline-offset-8">S</span>ocial{' '}
              <span className="underline underline-offset-4 lg:underline-offset-8">Sci</span>ence
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              {heroSubtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 text-center font-medium text-lg"
              >
                Explore Program
              </Link>
              <Link
                href="/become-partner"
                className="px-8 py-4 bg-white text-primary rounded-full border-2 border-primary hover:bg-muted transition-all text-center font-medium text-lg"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* What makes CSSci different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What makes <span className="text-primary"><span className="underline underline-offset-4">CSS</span>ci</span> different?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Students work directly with industry and academic partners in a 
                project-based learning environment to co-create computational 
                solutions in addressing societal challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Challenge-Based Learning</h3>
                    <p className="text-gray-600">Work on real projects with real impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Partnerships</h3>
                    <p className="text-gray-600">Direct collaboration with leading organizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interdisciplinary Approach</h3>
                    <p className="text-gray-600">Combine social science with cutting-edge technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">4</div>
                    <div className="text-sm text-gray-600">Major Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">20+</div>
                    <div className="text-sm text-gray-600">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">3</div>
                    <div className="text-sm text-gray-600">Years Program</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Hands-on Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcased Student Projects */}
      {projects.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Showcased Student Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how our students are making real impact through computational solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project: any) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.previewDescription}
                  image={project.image ? urlFor(project.image).width(400).height(300).url() : undefined}
                  year={project.year}
                  tags={project.tags}
                  slug={project.slug?.current}
                  connectedPartner={project.connectedPartner}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold"
              >
                View all projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Partnerships CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Why Become a Partner?</h3>
              <p className="text-white/80 mb-6">
                What's in it for you? Connections, visibility, and access to upcoming talent 
                ready to tackle your organization's challenges.
              </p>
              <Link
                href="/become-partner"
                className="inline-flex items-center text-accent hover:text-white transition-colors font-semibold"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Our Partners</h3>
              <p className="text-white/80 mb-6">
                Meet some of the innovative organizations we've been working with to create 
                meaningful impact.
              </p>
              <Link
                href="/partners"
                className="inline-flex items-center text-accent hover:text-white transition-colors font-semibold"
              >
                View partners
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What People Say
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our students, partners, and faculty
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any) => (
                <TestimonialCard
                  key={testimonial._id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  organization={testimonial.organization}
                  image={testimonial.image ? urlFor(testimonial.image).width(100).height(100).url() : undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}