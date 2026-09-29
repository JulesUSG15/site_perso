import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/UI/Section'
import { personalInfo } from '../data/personalInfo'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Section
        id="contact"
        title="Contact"
        subtitle="Restons en contact"
        variant="secondary"
      >
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-intro">
            <h3>N'hésitez pas à me contacter !</h3>
            <p>
              Je suis toujours ouvert à discuter de nouveaux projets, opportunités
              de collaboration ou simplement pour échanger sur la tech et l'IA.
            </p>
          </div>

          <div className="contact-info-grid">
            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="contact-info-icon">✉️</div>
              <h4>Email</h4>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <a href={`mailto:${personalInfo.emailPersonal}`}>{personalInfo.emailPersonal}</a>
            </motion.div>

            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="contact-info-icon">📱</div>
              <h4>Téléphone</h4>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </motion.div>

            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="contact-info-icon">📍</div>
              <h4>Localisation</h4>
              <p>{personalInfo.location}</p>
            </motion.div>

            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="contact-info-icon">🔗</div>
              <h4>Réseaux sociaux</h4>
              <div className="contact-social-links">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Contact

