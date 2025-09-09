import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import TestimonialCard from '@/components/TestimonialCard'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/client'
import { 
  HOMEPAGE_QUERY, 
  FEATURED_PROJECTS_QUERY, 
  FEATURED_TESTIMONIALS_QUERY 
} from '@/sanity/lib/queries'
import type { Homepage, Project, Testimonial } from '@/sanity/lib/types'

// This is an example of how to fetch data from Sanity CMS
// Rename this to page.tsx when you have Sanity set up

export default async function HomePage() {
  // Fetch all data in parallel
  const [homepage, projects, testimonials] = await Promise.all([
    sanityFetch<Homepage>(HOMEPAGE_QUERY),
    sanityFetch<Project[]>(FEATURED_PROJECTS_QUERY),
    sanityFetch<Testimonial[]>(FEATURED_TESTIMONIALS_QUERY)
  ])

  // Fallback to default content if CMS is not configured
  const content = homepage || {
    heroTitle: 'Computational Social Science',
    heroSubtitle: 'University of Amsterdam (BSc)',
    heroDescription: 'Where innovation meets impact. Join a groundbreaking program that combines social science theories with advanced computational techniques to solve real-world challenges.',
    heroCTA1Text: 'Explore Program',
    heroCTA1Link: '/about',
    heroCTA2Text: 'Become a Partner',
    heroCTA2Link: '/become-partner',
    differenceTitle: 'What makes CSSci different?',
    differenceDescription: 'Students work directly with industry and academic partners in a project-based learning environment to co-create computational solutions in addressing societal challenges.',
    differencePoints: [
      { title: 'Challenge-Based Learning', description: 'Work on real projects with real impact' },
      { title: 'Industry Partnerships', description: 'Direct collaboration with leading organizations' },
      { title: 'Interdisciplinary Approach', description: 'Combine social science with cutting-edge technology' }
    ],
    stats: [
      { number: '4', label: 'Major Projects', color: 'primary' as const },
      { number: '20+', label: 'Industry Partners', color: 'secondary' as const },
      { number: '3', label: 'Years Program', color: 'accent' as const },
      { number: '100%', label: 'Hands-on Learning', color: 'primary' as const }
    ],
    projectsSectionTitle: 'Showcased Student Projects',
    projectsSectionDescription: 'See how our students are making real impact through computational solutions',
    partnershipCTA1Title: 'Why Become a Partner?',
    partnershipCTA1Description: "What's in it for you? Connections, visibility, and access to upcoming talent ready to tackle your organization's challenges.",
    partnershipCTA2Title: 'Our Partners',
    partnershipCTA2Description: "Meet some of the innovative organizations we've been working with to create meaningful impact.",
    testimonialsSectionTitle: 'What People Say',
    testimonialsSectionDescription: 'Hear from our students, partners, and faculty'
  }

  return (
    <div className="relative">
      {/* Hero Section with gradient background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-muted/20 to-white">
        {/* Modern gradient mesh overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(143,166,116,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,228,50,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,66,64,0.05),transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 leading-tight">
              {content.heroTitle.split(' ')[0]}
              <span className="block text-secondary">{content.heroTitle.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              {content.heroSubtitle}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={content.heroCTA1Link}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 text-center font-medium text-lg"
              >
                {content.heroCTA1Text}
              </Link>
              <Link
                href={content.heroCTA2Link}
                className="px-8 py-4 bg-white text-primary rounded-full border-2 border-primary hover:bg-muted transition-all text-center font-medium text-lg"
              >
                {content.heroCTA2Text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What makes CSSci different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {content.differenceTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {content.differenceDescription}
              </p>
              <div className="space-y-4">
                {content.differencePoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {content.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-4xl font-bold text-${stat.color}`}>{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcased Student Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.projectsSectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.projectsSectionDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects?.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.description}
                  image={project.image ? urlFor(project.image).width(400).height(300).url() : undefined}
                  year={project.year}
                  tags={project.tags}
                  link={`/projects/${project.slug.current}`}
                />
              ))
            ) : (
              // Fallback projects if CMS has no data
              <>
                <ProjectCard
                  title="Climate Impact Analysis"
                  description="Using machine learning to predict and visualize climate change effects on urban environments"
                  year="Year 1"
                  tags={["Machine Learning", "Climate", "Data Viz"]}
                  link="/projects/climate-analysis"
                />
                <ProjectCard
                  title="Digital Inclusion Platform"
                  description="Creating accessible technology solutions for underserved communities in Amsterdam"
                  year="Year 2"
                  tags={["Web Dev", "Accessibility", "Social Impact"]}
                  link="/projects/digital-inclusion"
                />
                <ProjectCard
                  title="Policy Impact Simulator"
                  description="Developing computational models to simulate and predict policy outcomes"
                  year="Year 3"
                  tags={["Simulation", "Policy", "Analytics"]}
                  link="/projects/policy-simulator"
                />
              </>
            )}
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

      {/* Partnerships CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <h3 className="text-2xl font-bold mb-4">{content.partnershipCTA1Title}</h3>
              <p className="text-white/80 mb-6">
                {content.partnershipCTA1Description}
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
              <h3 className="text-2xl font-bold mb-4">{content.partnershipCTA2Title}</h3>
              <p className="text-white/80 mb-6">
                {content.partnershipCTA2Description}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.testimonialsSectionTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {content.testimonialsSectionDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials?.length > 0 ? (
              testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial._id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  organization={testimonial.organization}
                  image={testimonial.image ? urlFor(testimonial.image).width(100).height(100).url() : undefined}
                />
              ))
            ) : (
              // Fallback testimonials if CMS has no data
              <>
                <TestimonialCard
                  quote="CSSci has transformed how I think about solving social problems. The combination of theory and hands-on practice is incredible."
                  name="Sarah Chen"
                  role="Year 3 Student"
                />
                <TestimonialCard
                  quote="Working with CSSci students brought fresh perspectives and innovative solutions to our organization's challenges."
                  name="Dr. Marcus Weber"
                  role="Partner"
                  organization="Tech for Good NL"
                />
                <TestimonialCard
                  quote="This program bridges the gap between academia and industry in a way I've never seen before. Our students are truly making an impact."
                  name="Prof. Elena Rodriguez"
                  role="Program Director"
                  organization="UvA"
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}