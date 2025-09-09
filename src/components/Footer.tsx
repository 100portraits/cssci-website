import Link from 'next/link'

export default function Footer() {
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
              Computational Social Science at the University of Amsterdam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Program</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About <span className="underline underline-offset-4">CSS</span>ci</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Student Resources</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-semibold mb-4">Partnership</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/partners" className="hover:text-white transition-colors">Current Partners</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/become-partner" className="hover:text-white transition-colors">Become a Partner</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>University of Amsterdam</li>
              <li>Valckenierstraat 65-67</li>
              <li>1018 XE Amsterdam</li>
              <li className="pt-2">
                <a href="mailto:placeholder" className="hover:text-white transition-colors">
                  placeholder@uva.nl
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