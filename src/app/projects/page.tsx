'use client'

import { useState, useEffect, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { client, urlFor } from '@/sanity/lib/client'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'



export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [selectedSemester, setSelectedSemester] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(PROJECTS_QUERY)
        setProjects(data || [])
      } catch (error) {
        console.error('Error fetching projects:', error)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const semesters = useMemo(() => {
    const uniqueSemesters = new Set<string>()
    projects.forEach(project => {
      if (project.semester) uniqueSemesters.add(project.semester)
    })
    return ['All', ...Array.from(uniqueSemesters)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (selectedSemester === 'All') return projects
    return projects.filter(project => project.semester === selectedSemester)
  }, [projects, selectedSemester])
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
              Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the innovative solutions our students have developed in collaboration 
              with partners to address real-world challenges.
            </p>
          </div>

          {/* Semester Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {semesters.map((semester) => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`px-6 py-2 rounded-full transition-all font-medium ${
                  selectedSemester === semester
                    ? 'bg-primary border text-primary-foreground'
                    : 'bg-white border border-primary text-gray-700 hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {semester}
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
                  description={project.previewDescription}
                  image={project.image ? urlFor(project.image).width(400).height(300).url() : undefined}
                  semester={project.semester}
                  tags={project.tags}
                  slug={project.slug?.current}
                  hasDetailPage={project.hasDetailPage}
                  connectedPartner={project.connectedPartner}
                />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}