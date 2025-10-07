import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { FOOTER_QUERY } from '@/sanity/lib/queries'

async function getFooterData() {
  try {
    const data = await client.fetch(FOOTER_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return null
  }
}

export default async function Footer() {
  const footerData = await getFooterData()

  const brandText = footerData?.brandText || 'Computational Social Science at the University of Amsterdam'
  const contactEmail = footerData?.contactEmail || 'placeholder@uva.nl'
  const addressLine1 = footerData?.addressLine1 || 'University of Amsterdam'
  const addressLine2 = footerData?.addressLine2 || 'Valckenierstraat 65-67'
  const addressLine3 = footerData?.addressLine3 || '1018 XE Amsterdam'
  const programLinks = footerData?.programLinks || [{ label: 'About CSSci', url: '/about' }]
  const partnershipLinks = footerData?.partnershipLinks || [
    { label: 'Current Partners', url: '/partners' },
    { label: 'Projects', url: '/projects' },
    { label: 'Become a Partner', url: '/become-partner' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">

              <span className="font-bold text-2xl"><span className='underline underline-offset-4'>CSS</span>ci</span>
            </div>
            <p className="text-white/70 text-sm">
              {brandText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Program</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              {programLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-4">Partnership</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              {partnershipLinks.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>{addressLine1}</li>
              <li>{addressLine2}</li>
              <li>{addressLine3}</li>
              <li className="pt-2">
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="underline underline-offset-4">CSS</span>ci Program, University of Amsterdam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}