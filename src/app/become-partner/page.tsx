'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { FAQS_QUERY } from '@/sanity/lib/queries'

interface TimelinePhase {
  title: string
  items: string[]
  color: string
}

interface Semester {
  id: number
  name: string
  challenge: string
  topic: string
  length: string
  months: string[]
  phases: TimelinePhase[]
}

const semesters: Semester[] = [
  {
    id: 1,
    name: 'Semester 1',
    challenge: 'INFOGRAPHIC',
    topic: 'CLIMATE CHANGE',
    length: '8 WEEKS',
    months: ['June → August', 'September', 'October', 'November'],
    phases: [
      {
        title: 'ONBOARDING & CHALLENGE DEVELOPMENT',
        color: 'bg-primary',
        items: [
          'Connecting with our team',
          'Developing a challenge for student projects',
          'Revising the challenge in collaboration with academic liaison',
          'Upload the challenge to Masterchallenge.com'
        ]
      },
      {
        title: 'PROJECT BEGINS',
        color: 'bg-secondary',
        items: [
          'Project kickoff on campus in the first week of September including a project pitch',
          'Matching process with teams',
          'Project group assignments',
          'Connected with lecturer',
          'First meeting with students virtually or on campus'
        ]
      },
      {
        title: 'PROJECT DEVELOPMENT',
        color: 'bg-accent',
        items: [
          'Bi-weekly check-ins with the project team',
          'Students conduct stakeholder interviews'
        ]
      },
      {
        title: 'FINAL STAGE',
        color: 'bg-primary',
        items: [
          'Project handover event "Infographic party" on campus'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Semester 2',
    challenge: 'DIGITAL INTERVENTION',
    topic: 'DIGITAL INCLUSION',
    length: '12 WEEKS',
    months: ['December', 'January', 'February → April'],
    phases: [
      {
        title: 'PREPARATION',
        color: 'bg-primary',
        items: [
          'Challenge refinement based on learnings',
          'Student team formation'
        ]
      },
      {
        title: 'DEVELOPMENT',
        color: 'bg-secondary',
        items: [
          'Prototype development',
          'User testing sessions',
          'Iterative improvements'
        ]
      },
      {
        title: 'DELIVERY',
        color: 'bg-accent',
        items: [
          'Final presentation',
          'Prototype handover'
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Semester 3',
    challenge: 'RESEARCH PROJECT',
    topic: 'SOCIAL INNOVATION',
    length: '10 WEEKS',
    months: ['April', 'May', 'June'],
    phases: [
      {
        title: 'RESEARCH DESIGN',
        color: 'bg-primary',
        items: [
          'Research question formulation',
          'Methodology development'
        ]
      },
      {
        title: 'DATA COLLECTION',
        color: 'bg-secondary',
        items: [
          'Field research',
          'Data gathering and analysis'
        ]
      },
      {
        title: 'REPORTING',
        color: 'bg-accent',
        items: [
          'Research report',
          'Policy recommendations'
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Semester 6 - Capstone',
    challenge: 'COMPREHENSIVE SOLUTION',
    topic: 'PARTNER\'S CHOICE',
    length: '16 WEEKS',
    months: ['February', 'March', 'April', 'May', 'June'],
    phases: [
      {
        title: 'PROJECT SCOPING',
        color: 'bg-primary',
        items: [
          'In-depth challenge analysis',
          'Project planning and timeline'
        ]
      },
      {
        title: 'IMPLEMENTATION',
        color: 'bg-secondary',
        items: [
          'Solution development',
          'Regular partner consultations',
          'Mid-project review'
        ]
      },
      {
        title: 'FINALIZATION',
        color: 'bg-accent',
        items: [
          'Solution refinement',
          'Documentation preparation'
        ]
      },
      {
        title: 'HANDOVER',
        color: 'bg-primary',
        items: [
          'Final presentation',
          'Implementation roadmap',
          'Knowledge transfer session'
        ]
      }
    ]
  }
]


export default function BecomePartnerPage() {
  const [selectedSemester, setSelectedSemester] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [faqs, setFaqs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await client.fetch(FAQS_QUERY)
        setFaqs(data || [])
      } catch (error) {
        console.error('Error fetching FAQs:', error)
        setFaqs([])
      } finally {
        setLoading(false)
      }
    }
    fetchFaqs()
  }, [])

  const currentSemester = semesters.find(s => s.id === selectedSemester) || semesters[0]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,228,50,0.1),transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
            Become a Partner
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Partner with <span className="underline underline-offset-4">CSS</span>ci?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Access to innovative solutions for your challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Fresh perspectives from emerging talent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Contribute to education and social impact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Build your talent pipeline</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner Benefits and Project Types
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Throughout the three-year programme, partners have the opportunity to engage with 
                students across various project types, each designed to address different aspects 
                of organisational and societal challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our students bring a unique combination of social science insight and technical 
                capability, delivering comprehensive solutions that include digital interventions, 
                data analysis, and strategic recommendations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 font-medium text-lg"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Getting Involved: A Simple Process
            </h2>
            <p className="text-lg text-gray-600">
              Becoming a <span className="underline underline-offset-4">CSS</span>ci partner is a straightforward process designed to create meaningful 
              collaboration while respecting partners' time constraints. The total time commitment 
              is manageable, requiring only 16-18 hours spread across 18 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Challenge</h3>
              <p className="text-sm text-gray-600">Propose a challenge aligned with our core themes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Refine Together</h3>
              <p className="text-sm text-gray-600">Work with our team to shape the project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Meet Students</h3>
              <p className="text-sm text-gray-600">Kickoff event and team matching</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receive Solutions</h3>
              <p className="text-sm text-gray-600">Get innovative solutions and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Timeline of Project-Related Events
            </h2>
            <p className="text-lg text-gray-600">
              Take a look at events and outputs by semester
            </p>
          </div>

          {/* Semester Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {semesters.map((semester) => (
              <button
                key={semester.id}
                onClick={() => setSelectedSemester(semester.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedSemester === semester.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {semester.name}
              </button>
            ))}
          </div>

          {/* Timeline Display */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Timeline Header */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                CHALLENGE: {currentSemester.challenge}
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-green-800 rounded-full text-sm font-medium">
                TOPIC: {currentSemester.topic}
              </span>
              <span className="px-4 py-2 bg-accent/10 text-yellow-800 rounded-full text-sm font-medium">
                LENGTH: {currentSemester.length}
              </span>
            </div>

            {/* Months */}
            <div className="flex justify-between mb-8 text-sm text-gray-600 font-medium">
              {currentSemester.months.map((month, index) => (
                <span key={index}>{month}</span>
              ))}
            </div>

            {/* Timeline Phases */}
            <div className="space-y-6">
              {currentSemester.phases.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="relative">
                  <div className={`absolute left-0 top-0 w-1 h-full ${phase.color} rounded-full`}></div>
                  <div className="pl-8">
                    <h3 className="font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {loading ? (
              <div className="text-center text-gray-600">Loading FAQs...</div>
            ) : (
              faqs.map((faq: any, index: number) => (
              <div key={index} className="bg-muted/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in shaping the next generation of computational social scientists 
            while addressing your organization's challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-105 font-medium text-lg"
          >
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}