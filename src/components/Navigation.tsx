'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">

            <span className="font-bold text-2xl text-primary"><span className='underline underline-offset-4'>CSS</span>ci</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/partners" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Partners
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Projects
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Resources
            </Link>
            <Link 
              href="/become-partner" 
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 font-medium"
            >
              Become a Partner
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Partners
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Resources
              </Link>
              <Link 
                href="/become-partner" 
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all inline-block text-center font-medium"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}