import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { personalInfo } from '../../data/personalInfo'
import './Header.css'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (hash: string) => {
    if (!hash) return
    
    // Si on n'est pas sur la page d'accueil, naviguer d'abord
    if (location.pathname !== '/') {
      navigate('/')
      // Attendre que la navigation soit terminée
      setTimeout(() => {
        const element = document.querySelector(hash)
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
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (hash) {
      scrollToSection(hash)
    } else {
      navigate(path)
    }
  }

  const isActive = (path: string, hash: string) => {
    if (path === '/' && location.pathname === '/') {
      // Vérifier si on est sur la bonne section
      if (hash) {
        const currentHash = window.location.hash
        return currentHash === hash
      }
      return !window.location.hash || window.location.hash === '#hero'
    }
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { path: '/', label: 'Accueil', hash: '#hero' },
    { path: '/', label: 'À propos', hash: '#about' },
    { path: '/portfolio', label: 'Portfolio', hash: '' },
    { path: '/', label: 'Contact', hash: '#contact' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span>{personalInfo.name}</span>
          </Link>

          <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path + link.hash}>
                  <a
                    href={link.path + link.hash}
                    className={`nav-link ${isActive(link.path, link.hash) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.path, link.hash)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

