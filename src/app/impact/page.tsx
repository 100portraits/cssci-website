import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { IMPACT_PAGE_QUERY } from '@/sanity/lib/queries'
import PortableTextContent from '@/components/PortableTextContent'

export const revalidate = 60 // Revalidate every 60 seconds

async function getImpactData() {
  try {
    const data = await client.fetch(IMPACT_PAGE_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching impact page:', error)
    return null
  }
}

// Icon mapping for impact cards
const iconMap: { [key: string]: JSX.Element } = {
  chart: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  users: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  lightning: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  target: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
}

export default async function ImpactPage() {
  const impactData = await getImpactData()

  const pageTitle = impactData?.title || 'Real Impact: Measurable Change Through CSSci'
  const content = impactData?.content || []
  const impactCards = impactData?.impactCards || []
  const ctaText = impactData?.ctaText || 'Ready to create meaningful impact together?'

  return (
    <div className="min-h-screen">
      {/* Hero Section - Horizontally mirrored from about page */}
      <section className="relative py-20 bg-gradient-to-bl from-white via-primary/5 to-secondary/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(18,66,64,0.1),transparent_60%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Card first on left side */}
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-secondary/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/DSC_1006.jpg"
                    alt="CSSci impact and collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center">
                    <div className="text-center p-8">
                      <div className="text-4xl md:text-6xl font-bold text-white mb-4"><span className="underline underline-offset-4">CSS</span>ci</div>
                      <p className="text-white/90">Creating Tangible Change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content on right side */}
            <div className="order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {pageTitle.split(':')[0]}:
                <span className="block text-primary mt-2">{pageTitle.split(':')[1] || 'Measurable Change Through CSSci'}</span>
              </h1>

              <PortableTextContent value={content} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Measurable Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {impactCards.length > 0 ? (
              impactCards.map((card: any, index: number) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-${card.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`text-${card.color}`}>
                      {iconMap[card.icon] || iconMap.chart}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </div>
              ))
            ) : (
              // Default cards if no content is available
              <>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {iconMap.chart}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Results</h3>
                  <p className="text-gray-600">
                    Quantifiable outcomes that demonstrate real-world change
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-secondary">
                      {iconMap.users}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Impact</h3>
                  <p className="text-gray-600">
                    Positive changes affecting real communities and organizations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent">
                      {iconMap.globe}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Solutions that scale beyond local boundaries
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-bl from-muted/30 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <p className="text-lg text-gray-600 mb-6">
              {ctaText}
            </p>
            <Link
              href="/become-partner"
              className="inline-flex items-center justify-center text-primary font-semibold text-xl hover:text-secondary transition-colors"
            >
              Join us in creating impact
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}