import PartnerCard from '@/components/PartnerCard'

// This will be replaced with CMS data
const partners = [
  {
    name: 'Amsterdam Municipality',
    description: 'Working together on urban challenges and digital transformation initiatives for citizen services.',
    category: 'Government',
    website: 'https://www.amsterdam.nl'
  },
  {
    name: 'Tech for Good NL',
    description: 'Collaborating on projects that leverage technology for social impact and community development.',
    category: 'Non-Profit',
    website: 'https://techforgood.nl'
  },
  {
    name: 'Deloitte Digital',
    description: 'Partnering on digital innovation projects and providing mentorship for student initiatives.',
    category: 'Consulting',
    website: 'https://www.deloitte.com'
  },
  {
    name: 'Rabobank',
    description: 'Exploring financial inclusion and sustainable banking solutions through student research.',
    category: 'Finance',
    website: 'https://www.rabobank.com'
  },
  {
    name: 'Philips Research',
    description: 'Joint projects on health technology and data-driven healthcare solutions.',
    category: 'Technology',
    website: 'https://www.philips.com'
  },
  {
    name: 'World Wildlife Fund',
    description: 'Addressing climate change and environmental challenges through computational approaches.',
    category: 'Environmental',
    website: 'https://www.wwf.nl'
  }
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(18,66,64,0.1),transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations across industries to create 
              meaningful impact through computational social science.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Amsterdam Smart City Initiative</h3>
              </div>
              <p className="text-gray-600">
                Students developed a predictive model for bicycle traffic flow, helping the city 
                optimize infrastructure planning. The solution is now being piloted in three districts.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Digital Inclusion Platform</h3>
              </div>
              <p className="text-gray-600">
                In partnership with Tech for Good NL, students created an accessible platform that 
                has helped over 500 elderly citizens navigate digital government services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Partner Network</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a community driving innovation at the intersection of 
            technology and social science.
          </p>
          <a
            href="/become-partner"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-105 font-medium text-lg"
          >
            Become a Partner
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}