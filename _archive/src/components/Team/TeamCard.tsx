import React from 'react'
import { TeamMember } from '../../data/team'
import Card from '../UI/Card'
import './TeamCard.css'

interface TeamCardProps {
  member: TeamMember
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="team-card">
      <div className="team-card-header">
        <h4 className="team-name">{member.name}</h4>
        <span className="team-role">{member.role}</span>
      </div>
      <p className="team-description">{member.description}</p>
      <div className="team-projects">
        <strong>Projets :</strong>
        <div className="project-tags">
          {member.projects.map((project) => (
            <span key={project} className="project-tag">
              {project}
            </span>
          ))}
        </div>
      </div>
      <div className="team-links">
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Site web de ${member.name}`}
          >
            🌐
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${member.name}`}
          >
            💻
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
          >
            💼
          </a>
        )}
      </div>
    </Card>
  )
}

export default TeamCard

