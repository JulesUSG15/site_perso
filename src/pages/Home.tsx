import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '../components/UI/Section'
import Button from '../components/UI/Button'
import ProjectCard from '../components/Portfolio/ProjectCard'
import TeamCard from '../components/Team/TeamCard'
import ContactCard from '../components/Contact/ContactCard'
import { personalInfo } from '../data/personalInfo'
import { projects } from '../data/projects'
import { teamMembers } from '../data/team'
import './Home.css'

const Home: React.FC = () => {
  const location = useLocation()
  const featuredProjects = projects.slice(0, 6)
  const featuredTeam = teamMembers.slice(0, 4)

  useEffect(() => {
    // Scroll vers la section si hash présent dans l'URL
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [location])

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {personalInfo.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hero-subtitle"
              >
                <p className="hero-age">{personalInfo.age} ans</p>
                <h2 className="hero-title">{personalInfo.title}</h2>
                <p className="hero-school">{personalInfo.school}</p>
                <div className="hero-role">
                  <span>💼</span>
                  <span>Président d'Apogée Consult SAS</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hero-tech-stack"
              >
                <span className="tech-item">IA Générative</span>
                <span className="tech-item">RAG</span>
                <span className="tech-item">IA Prédictive</span>
                <span className="tech-item">Management</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="hero-actions"
              >
                <Button to="/about" variant="primary" size="lg">
                  En savoir plus
                </Button>
                <Button to="/portfolio" variant="outline" size="lg">
                  Voir mes projets
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="profile-image-wrapper">
                <img
                  src="/assets/img/1740669150935.jpeg"
                  alt={personalInfo.name}
                  className="profile-image"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="À propos" subtitle="Qui suis-je ?">
        <div className="about-content">
          <div className="about-text">
            <h3>{personalInfo.title}</h3>
            <p className="about-role">Président d'Apogée Consult SAS</p>
            <p>{personalInfo.longDescription}</p>
            <Button to="/about" variant="primary">
              Lire la suite
            </Button>
          </div>
          <div className="about-image">
            <img
              src="/assets/img/data-science.jpg"
              alt="Data Science"
            />
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section
        id="portfolio"
        title="Portfolio"
        subtitle="Mes projets"
        variant="secondary"
      >
        <div className="portfolio-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="portfolio-actions">
          <Button to="/portfolio" variant="primary" size="lg">
            Voir tous les projets
          </Button>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" title="Équipe" subtitle="Collaborateurs">
        <div className="team-grid">
          {featuredTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" subtitle="Restons en contact" variant="secondary">
        <div className="contact-grid">
          <ContactCard
            icon="🌐"
            title="Web"
            content={personalInfo.website}
          />
          <ContactCard
            icon="✉️"
            title="Email"
            content={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
          />
          <ContactCard
            icon="📍"
            title="Adresse"
            content={personalInfo.location}
          />
          <ContactCard
            icon="🔗"
            title="Réseaux sociaux"
            content="GitHub & LinkedIn"
            links={[
              { label: 'GitHub', url: personalInfo.github },
              { label: 'LinkedIn', url: personalInfo.linkedin }
            ]}
          />
        </div>
      </Section>
    </div>
  )
}

export default Home

