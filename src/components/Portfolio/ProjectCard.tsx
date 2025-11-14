import React from 'react'
import { Link } from 'react-router-dom'
import { Project } from '../../data/projects'
import Card from '../UI/Card'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageUrl = project.images.length > 0 ? project.images[0] : '/assets/img/placeholder.png'
  const categoryLabels = {
    ai: 'IA',
    web: 'Web',
    app: 'App'
  }

  return (
    <Link to={`/portfolio/${project.id}`}>
      <Card hover className="project-card">
        <div className="project-image-wrapper">
          {imageUrl.endsWith('.mp4') || imageUrl.endsWith('.gif') ? (
            <img src={imageUrl} alt={project.title} className="project-image" />
          ) : (
            <img src={imageUrl} alt={project.title} className="project-image" />
          )}
          <div className="project-overlay">
            <span className="project-category">{categoryLabels[project.category]}</span>
          </div>
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-tag">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard

