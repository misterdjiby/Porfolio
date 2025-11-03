import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiChevronDown } from 'react-icons/hi'
import './Header.css'
import CV from './CV.pdf'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    // Placeholder - vous pouvez ajouter le lien vers votre CV
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Djiby-Ndiaye-CV.pdf'  // Nom du fichier téléchargé
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-logo">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.span>
          </div>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>À propos</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projets</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Compétences</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Expérience</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Salut, je suis
            </motion.p>
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">DJIBY NDIAYE</span>
            </motion.h1>
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Développeur Full-Stack & Designer UI/UX
            </motion.h2>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Je transforme des idées créatives en expériences numériques exceptionnelles.
              Alliant code robuste et design intuitif pour créer des produits qui marquent les esprits.
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <HiDownload /> Télécharger mon CV
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="floating-shapes">
              <motion.div
                className="shape shape-1"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="shape shape-2"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="shape shape-3"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <HiChevronDown />
        </motion.div>
      </section>
    </>
  )
}

export default Header

