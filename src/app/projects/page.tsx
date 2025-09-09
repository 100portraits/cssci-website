'use client'

import { useState, useEffect, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { client, urlFor } from '@/sanity/lib/client'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'


const fallbackProjects = [
  {
    title: 'Urban Heat Island Mapping',
    description: 'Using satellite data and machine learning to identify and predict heat islands in Amsterdam, helping city planners develop cooling strategies.',
    year: 'Year 1',
    tags: ['Climate', 'Machine Learning', 'Urban Planning'],
    category: 'Climate Change'
  },
  {
    title: 'Digital Literacy Portal',
    description: 'An accessible web platform designed to help elderly citizens navigate digital government services with step-by-step guides and support.',
    year: 'Year 2',
    tags: ['Accessibility', 'Web Development', 'UX Design'],
    category: 'Digital Inclusion'
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'Analyzing public sentiment on policy changes using NLP techniques to help policymakers understand citizen concerns.',
    year: 'Year 3',
    tags: ['NLP', 'Policy', 'Data Analysis'],
    category: 'Social Innovation'
  },
  {
    title: 'Sustainable Transport Optimizer',
    description: 'An algorithm that optimizes public transport routes based on real-time demand and environmental impact metrics.',
    year: 'Capstone',
    tags: ['Optimization', 'Sustainability', 'Transport'],
    category: 'Climate Change'
  },
  {
    title: 'Community Health Dashboard',
    description: 'Interactive visualization tool for public health data, enabling communities to track and respond to health trends.',
    year: 'Year 2',
    tags: ['Data Viz', 'Public Health', 'Dashboard'],
    category: 'Digital Innovation'
  },
  {
    title: 'Fair Housing Algorithm',
    description: 'Developing bias-free algorithms for social housing allocation, ensuring equitable distribution of resources.',
    year: 'Year 3',
    tags: ['Ethics', 'Algorithms', 'Social Justice'],
    category: 'Social Innovation'
  }
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(PROJECTS_QUERY)
        setProjects(data.length > 0 ? data : fallbackProjects)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects(fallbackProjects)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    projects.forEach(project => {
      if (project.category) uniqueCategories.add(project.category)
    })
    return ['All', ...Array.from(uniqueCategories)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    return projects.filter(project => project.category === selectedCategory)
  }, [projects, selectedCategory])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent/5 via-white to-secondary/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,228,50,0.1),transparent_60%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Student Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the innovative solutions our students have developed in collaboration 
              with partners to address real-world challenges.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all font-medium ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="text-center text-gray-600">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: any) => (
                <ProjectCard
                  key={project._id || project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image ? urlFor(project.image).width(400).height(300).url() : undefined}
                  year={project.year}
                  tags={project.tags}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Partner Organizations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Students Engaged</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-white/80">Solutions Implemented</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}