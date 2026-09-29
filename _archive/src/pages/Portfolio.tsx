import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/UI/Section'
import ProjectCard from '../components/Portfolio/ProjectCard'
import { projects } from '../data/projects'
import './Portfolio.css'

type Filter = 'all' | 'ai' | 'web' | 'app'

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const filters: Array<{ label: string; value: Filter }> = [
    { label: 'Tous', value: 'all' },
    { label: 'IA', value: 'ai' },
    { label: 'Web', value: 'web' },
    { label: 'App', value: 'app' }
  ]

  return (
    <div className="portfolio-page">
      <Section
        id="portfolio"
        title="Portfolio"
        subtitle="Mes projets"
        variant="secondary"
      >
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}
      </Section>
    </div>
  )
}

export default Portfolio

