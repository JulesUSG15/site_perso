import React from 'react'
import { personalInfo } from '../../data/personalInfo'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-copyright">
              &copy; {currentYear} <strong>{personalInfo.name}</strong>
            </p>
          </div>
          
          <div className="footer-center">
            <div className="footer-social">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                GitHub
              </a>
              <span className="footer-separator">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                LinkedIn
              </a>
              <span className="footer-separator">•</span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                aria-label="Email"
                className="footer-social-link"
              >
                Email
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-tech">
              React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

