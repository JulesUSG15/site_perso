import React from 'react'
import { Experience } from '../../data/experience'
import Card from '../UI/Card'
import './ExperienceCard.css'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card className="experience-card">
      <div className="experience-header">
        <h4 className="experience-title">{experience.title}</h4>
        <span className="experience-company">{experience.company}</span>
      </div>
      <div className="experience-period">{experience.period}</div>
      {experience.location && (
        <div className="experience-location">📍 {experience.location}</div>
      )}
      <ul className="experience-description">
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}

export default ExperienceCard

