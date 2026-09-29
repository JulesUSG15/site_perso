import React, { useEffect, useRef } from 'react'
import { Skill } from '../../data/skills'
import './SkillBar.css'

interface SkillBarProps {
  skill: Skill
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            barRef.current.style.width = `${skill.level}%`
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current.parentElement!)
    }

    return () => observer.disconnect()
  }, [skill.level])

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <div
          ref={barRef}
          className="skill-bar"
          style={{ width: '0%' }}
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

export default SkillBar

