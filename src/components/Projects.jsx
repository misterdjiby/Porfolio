import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaFigma, 
  FaCode,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaPalette
} from 'react-icons/fa'
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiJavascript
} from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Application de localisation de bus - Projet en cours
  const project = {
    title: 'Application de Localisation de Bus en Temps Réel',
    context: 'Développement d\'une application mobile complète pour le suivi en temps réel des bus, la planification d\'itinéraires et l\'e-ticketing. Projet actuellement en phase de conception et développement.',
    objectives: [
      'Permettre la localisation en temps réel des bus sur une carte interactive',
      'Développer un système de suivi d\'itinéraire pour les usagers (en cours)',
      'Implémenter un système d\'e-ticketing sécurisé et intuitif (en cours)',
      'Créer une expérience utilisateur fluide et accessible'
    ],
    designProcess: {
      research: 'Analyse des besoins des usagers des transports en commun, étude de la concurrence et identification des fonctionnalités essentielles pour améliorer l\'expérience de transport.',
      wireframes: 'Création de wireframes pour les écrans principaux : carte de localisation, recherche d\'itinéraire, achat de tickets. Prototypage des flux utilisateurs critiques.',
      ui: 'Design moderne et épuré avec focus sur la lisibilité des informations de transport. Interface intuitive pour la navigation carte et l\'achat de tickets. Design mobile-first optimisé.'
    },
    development: {
      architecture: 'Architecture full-stack JavaScript (Full JS) avec Node.js/Express pour l\'API backend, intégration de services de géolocalisation en temps réel (WebSocket pour les mises à jour live) et application web responsive.',
      challenges: [
        'Gestion de la localisation GPS en temps réel avec mise à jour continue',
        'Synchronisation des données de localisation entre serveur et clients multiples',
        'Optimisation de la consommation batterie avec le suivi GPS actif',
        'Sécurité du système de paiement et gestion des tickets électroniques'
      ],
      solutions: [
        'Implémentation de WebSockets pour les mises à jour temps réel efficaces',
        'Utilisation de Redis pour le cache des positions de bus et optimisation des requêtes',
        'Optimisation du polling GPS avec gestion intelligente de la fréquence',
        'Intégration d\'un système de paiement sécurisé avec validation côté serveur'
      ]
    },
    results: {
      metrics: [
        { label: 'Fonctionnalités', value: 'Localisation bus', improvement: 'Disponible' },
        { label: 'Itinéraire', value: 'En développement', improvement: '' },
        { label: 'Temps de mise à jour', value: '< 5s', improvement: 'Temps réel' },
        { label: 'E-ticketing', value: 'En cours', improvement: '' }
      ]
    },
    technologies: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
      { name: 'Full Stack JS', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' }
    ],
    images: [
      '/Capture.PNG',
      '/Capture1.PNG'
    ],
    links: {
      demo: '#',
      code: '#'
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Projets
        </motion.h2>

        <motion.div
          className="project-card"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="project-header">
            <h3>{project.title}</h3>
            <div className="project-links">
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaExternalLinkAlt /> Demo
              </a>
              <a 
                href={project.links.code} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>

          <div className="project-tabs">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Contexte & Objectifs
            </button>
            <button
              className={`tab ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              Processus Design
            </button>
            <button
              className={`tab ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => setActiveTab('development')}
            >
              Développement
            </button>
            <button
              className={`tab ${activeTab === 'results' ? 'active' : ''}`}
              onClick={() => setActiveTab('results')}
            >
              Résultats
            </button>
            <button
              className={`tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Galerie
            </button>
          </div>

          <div className="project-content">
            {activeTab === 'overview' && (
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="content-section">
                  <h4>
                    <FaRocket /> Contexte
                  </h4>
                  <p>{project.context}</p>
                </div>
                <div className="content-section">
                  <h4>
                    <FaChartLine /> Objectifs
                  </h4>
                  <ul className="objectives-list">
                    {project.objectives.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'design' && (
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="design-process">
                  <div className="process-step">
                    <div className="step-icon">
                      <FaUsers />
                    </div>
                    <div className="step-content">
                      <h4>Recherche & Analyse</h4>
                      <p>{project.designProcess.research}</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-icon">
                      <FaFigma />
                    </div>
                    <div className="step-content">
                      <h4>Wireframes & Prototypes</h4>
                      <p>{project.designProcess.wireframes}</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-icon">
                      <FaPalette />
                    </div>
                    <div className="step-content">
                      <h4>Design UI Final</h4>
                      <p>{project.designProcess.ui}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'development' && (
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="content-section">
                  <h4>
                    <FaCode /> Architecture
                  </h4>
                  <p>{project.development.architecture}</p>
                </div>
                <div className="content-section">
                  <h4>Défis Techniques</h4>
                  <div className="challenges-solutions">
                    <div className="challenges">
                      <h5>Problèmes rencontrés :</h5>
                      <ul>
                        {project.development.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="solutions">
                      <h5>Solutions apportées :</h5>
                      <ul>
                        {project.development.solutions.map((solution, index) => (
                          <li key={index}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'results' && (
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="results-grid">
                  {project.results.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="metric-card"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                      {metric.improvement && (
                        <div className="metric-improvement">
                          {metric.improvement}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-gallery">
                  <h4 style={{ marginBottom: '30px', color: 'var(--text-primary)' }}>
                    Captures d'écran du projet
                  </h4>
                  <div className="gallery-grid">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="gallery-item"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={image} 
                          alt={`Capture ${index + 1} - Application de localisation de bus`}
                          className="gallery-image"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="project-technologies">
            <h4>Technologies utilisées</h4>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

