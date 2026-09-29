import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/UI/Section'
import EducationCard from '../components/Education/EducationCard'
import ExperienceCard from '../components/Experience/ExperienceCard'
import { personalInfo } from '../data/personalInfo'
import { skills } from '../data/skills'
import { education } from '../data/education'
import { experiences } from '../data/experience'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image">
              <img src="/assets/img/1740669150935.jpeg" alt={personalInfo.name} />
            </div>
            <div className="about-intro">
              <h1>{personalInfo.name}</h1>
              <h2>{personalInfo.title}</h2>
              <p>{personalInfo.longDescription}</p>
              <div className="about-info-grid">
                <div className="info-item">
                  <strong>Anniversaire :</strong>
                  <span>{personalInfo.birthday}</span>
                </div>
                <div className="info-item">
                  <strong>Site web :</strong>
                  <span>{personalInfo.website}</span>
                </div>
                <div className="info-item">
                  <strong>Téléphone :</strong>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="info-item">
                  <strong>Ville :</strong>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <strong>Âge :</strong>
                  <span>{personalInfo.age} ans</span>
                </div>
                <div className="info-item">
                  <strong>Diplôme :</strong>
                  <span>{personalInfo.degree}</span>
                </div>
                <div className="info-item">
                  <strong>Email :</strong>
                  <span>{personalInfo.emailPersonal}</span>
                </div>
                <div className="info-item">
                  <strong>Freelance :</strong>
                  <span>{personalInfo.freelance ? 'Disponible' : 'Non disponible'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Section id="skills" title="Stacks techniques" subtitle="Technologies et frameworks que je maîtrise">
        <div className="skills-container">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.name}</h3>
                {category.description && (
                  <p className="skill-category-description">{category.description}</p>
                )}
              </div>
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" title="CV" subtitle="Parcours">
        <div className="resume-content">
          <div className="resume-column">
            <h3 className="resume-section-title">Formation</h3>
            {education.map((edu, index) => (
              <motion.div
                key={edu.school + edu.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EducationCard education={edu} />
              </motion.div>
            ))}
            
            <h3 className="resume-section-title" style={{ marginTop: 'var(--spacing-3xl)' }}>Stage</h3>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ExperienceCard experience={{
                title: 'Développeur IA générative',
                company: 'Amexio Group Luxembourg',
                period: '2024',
                description: [
                  'Développement d\'une application RAG (Retrieval-Augmented Generation) en Python pour créer un chatbot intégré dans une GED (Gestion Électronique de Documents).',
                  'Mise en œuvre de techniques d\'IA générative, vectorisation de documents et orchestration de chaînes RAG complètes.'
                ],
                location: 'Luxembourg'
              }} />
            </motion.div>
          </div>
          <div className="resume-column">
            <h3 className="resume-section-title">Expérience Professionnelle</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExperienceCard experience={exp} />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About

