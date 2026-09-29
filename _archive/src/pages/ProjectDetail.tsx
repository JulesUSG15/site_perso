import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '../components/UI/Section'
import Button from '../components/UI/Button'
import { projects } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="project-not-found">
        <Section title="Projet non trouvé">
          <p>Le projet que vous recherchez n'existe pas.</p>
          <Button to="/portfolio" variant="primary">
            Retour au portfolio
          </Button>
        </Section>
      </div>
    )
  }

  const categoryLabels = {
    ai: 'Intelligence Artificielle',
    web: 'Développement Web',
    app: 'Application'
  }

  return (
    <div className="project-detail-page">
      <Section variant="secondary">
        <div className="project-detail-header">
          <Link to="/portfolio" className="back-link">
            ← Retour au portfolio
          </Link>
          <div className="project-header-content">
            <div>
              <span className="project-category-badge">
                {categoryLabels[project.category]}
              </span>
              <h1>{project.title}</h1>
              <p className="project-meta">
                {project.year} • {project.technologies.join(', ')}
              </p>
            </div>
            <div className="project-actions">
              {project.github && (
                <Button href={project.github} variant="outline">
                  Voir sur GitHub
                </Button>
              )}
              {project.link && (
                <Button href={project.link} variant="primary">
                  Voir le projet
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="project-detail-content">
          <div className="project-description-section">
            <h2>Description</h2>
            <p className="project-description">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="project-technologies-section">
            <h2>Technologies utilisées</h2>
            <div className="technologies-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.images.length > 0 || project.videos) && (
            <div className="project-media-section">
              <h2>Galerie</h2>
              <div className="project-media-grid">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="media-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                  </motion.div>
                ))}
                {project.videos?.map((video, index) => (
                  <motion.div
                    key={`video-${index}`}
                    className="media-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (project.images.length + index) * 0.1 }}
                  >
                    <video controls muted loop>
                      <source src={video} type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default ProjectDetail

