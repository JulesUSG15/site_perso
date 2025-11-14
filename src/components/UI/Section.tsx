import React, { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  title?: string
  subtitle?: string
  variant?: 'default' | 'secondary' | 'accent'
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  title,
  subtitle,
  variant = 'default'
}) => {
  return (
    <section
      id={id}
      className={`section section-${variant} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section

