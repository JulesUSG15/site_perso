import React from 'react'
import Card from '../UI/Card'
import './ContactCard.css'

interface ContactCardProps {
  icon: string
  title: string
  content: string
  href?: string
  links?: Array<{ label: string; url: string }>
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  content,
  href,
  links
}) => {
  return (
    <Card className="contact-card">
      <div className="contact-icon">{icon}</div>
      <h3 className="contact-title">{title}</h3>
      {links ? (
        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : href ? (
        <a href={href} className="contact-content">
          {content}
        </a>
      ) : (
        <p className="contact-content">{content}</p>
      )}
    </Card>
  )
}

export default ContactCard

