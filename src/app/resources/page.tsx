import { client } from '@/sanity/lib/client'
import { RESOURCES_QUERY } from '@/sanity/lib/queries'


async function getResourcesData() {
  try {
    const resources = await client.fetch(RESOURCES_QUERY)
    return resources || []
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}

export default async function ResourcesPage() {
  const resources = await getResourcesData()
  
  const quickLinks = resources.filter((r: any) => r.category === 'quick-link')
  const academicResources = resources.filter((r: any) => r.category === 'academic')
  const technicalResources = resources.filter((r: any) => r.category === 'technical')
  const careerResources = resources.filter((r: any) => r.category === 'career')
  const articleResources = resources.filter((r: any) => r.category === 'article')
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(143,166,116,0.1),transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Student Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in the CSSci program
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Academic Resources */}
            <div className="bg-muted/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Resources</h3>
              <ul className="space-y-3 text-gray-600">
                {academicResources.slice(0, 4).map((resource: any) => (
                  <li key={resource._id || resource.title} className="flex items-start">
                    <span className="mr-2">•</span>
                    <a 
                      href={resource.url || '#'}
                      target={resource.url?.startsWith('http') ? '_blank' : undefined}
                      rel={resource.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-primary transition-colors"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Tools */}
            <div className="bg-muted/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Tools</h3>
              <ul className="space-y-3 text-gray-600">
                {technicalResources.slice(0, 4).map((resource: any) => (
                  <li key={resource._id || resource.title} className="flex items-start">
                    <span className="mr-2">•</span>
                    <a 
                      href={resource.url || '#'}
                      target={resource.url?.startsWith('http') ? '_blank' : undefined}
                      rel={resource.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-primary transition-colors"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Support */}
            <div className="bg-muted/20 rounded-2xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
              <ul className="space-y-3 text-gray-600">
                {careerResources.slice(0, 4).map((resource: any) => (
                  <li key={resource._id || resource.title} className="flex items-start">
                    <span className="mr-2">•</span>
                    <a 
                      href={resource.url || '#'}
                      target={resource.url?.startsWith('http') ? '_blank' : undefined}
                      rel={resource.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-primary transition-colors"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Links
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.slice(0, 4).map((resource: any) => (
              <a 
                key={resource._id || resource.title}
                href={resource.url || '#'} 
                target={resource.url?.startsWith('http') ? '_blank' : undefined}
                rel={resource.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you succeed
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-primary font-semibold mb-2">Academic Support</div>
              <p className="text-gray-600 text-sm">academic.cssci@uva.nl</p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">Technical Support</div>
              <p className="text-gray-600 text-sm">tech.cssci@uva.nl</p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">Student Affairs</div>
              <p className="text-gray-600 text-sm">student.cssci@uva.nl</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}