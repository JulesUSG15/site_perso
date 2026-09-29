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
        {experience.description.map((item, index) => {
          const trimmedItem = item.trim()
          const isEmpty = trimmedItem === ''
          const prevItem = index > 0 ? experience.description[index - 1]?.trim() : ''
          // Un titre est une ligne qui ne commence pas par • et qui suit une ligne vide ou est la première ligne non vide après une ligne vide
          const isTitle = !isEmpty && 
                         !trimmedItem.startsWith('•') && 
                         (prevItem === '' || (index > 1 && experience.description[index - 2]?.trim() === ''))
          
          return (
            <li 
              key={index} 
              className={isEmpty ? 'empty-line' : isTitle ? 'section-title' : ''}
            >
              {isEmpty ? '\u00A0' : item}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default ExperienceCard

