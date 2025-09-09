import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl">CSSci</span>
            </div>
            <p className="text-white/70 text-sm">
              Computational Social Science at the University of Amsterdam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Program</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About CSSci</Link></li>
              <li><Link href="/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
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
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>University of Amsterdam</li>
              <li>Science Park 904</li>
              <li>1098 XH Amsterdam</li>
              <li className="pt-2">
                <a href="mailto:info@cssci.uva.nl" className="hover:text-white transition-colors">
                  info@cssci.uva.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} CSSci Program, University of Amsterdam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}