import React from 'react'
import { Education } from '../../data/education'
import Card from '../UI/Card'
import './EducationCard.css'

interface EducationCardProps {
  education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Card className="education-card">
      <div className="education-header">
        <h4 className="education-degree">{education.degree}</h4>
        <span className="education-school">{education.school}</span>
      </div>
      <div className="education-period">{education.period}</div>
      {education.location && (
        <div className="education-location">📍 {education.location}</div>
      )}
      <ul className="education-description">
        {education.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}

export default EducationCard

