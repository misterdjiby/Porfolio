import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaSearch, 
  FaLightbulb, 
  FaPalette, 
  FaCode, 
  FaRocket 
} from 'react-icons/fa'
import './WorkProcess.css'

const WorkProcess = () => {
  const steps = [
    {
      number: '01',
      icon: <FaSearch />,
      title: 'Recherche & Analyse',
      description: 'Analyse approfondie du brief, étude de la concurrence, interviews utilisateurs et définition des objectifs.',
      tools: 'User Research, Analytics, Surveys'
    },
    {
      number: '02',
      icon: <FaLightbulb />,
      title: 'Stratégie & Idéation',
      description: 'Brainstorming, définition de la stratégie produit, création de user personas et scénarios d\'utilisation.',
      tools: 'Figma, Miro, User Stories'
    },
    {
      number: '03',
      icon: <FaPalette />,
      title: 'Design & Prototypage',
      description: 'Wireframes, maquettes haute fidélité, design system, prototypes interactifs et tests utilisateurs.',
      tools: 'Figma, Adobe XD, Protopie'
    },
    {
      number: '04',
      icon: <FaCode />,
      title: 'Développement',
      description: 'Architecture technique, développement frontend/backend, intégrations, tests et optimisation des performances.',
      tools: 'React, Node.js, Git, Testing'
    },
    {
      number: '05',
      icon: <FaRocket />,
      title: 'Lancement & Itération',
      description: 'Déploiement, monitoring, collecte de feedback, analyse des métriques et itérations continues.',
      tools: 'Vercel, AWS, Analytics, Hotjar'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="work-process" className="work-process">
      <div className="work-process-container">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Mon Processus de Travail
        </motion.h2>

        <motion.p
          className="section-subtitle"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Une méthodologie structurée en 5 étapes pour transformer vos idées en produits digitaux réussis
        </motion.p>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step-card"
              {...fadeInUp}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon-wrapper">
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-tools">
                <span className="tools-label">Outils :</span>
                <span className="tools-list">{step.tools}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="methodology"
          {...fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h3>Ma Méthodologie</h3>
          <div className="methodology-content">
            <div className="methodology-item">
              <h4>Approche Agile</h4>
              <p>
                Itérations rapides et feedback continu pour garantir que le produit
                évolue selon les besoins réels des utilisateurs.
              </p>
            </div>
            <div className="methodology-item">
              <h4>User-Centered Design</h4>
              <p>
                L'utilisateur est au centre de toutes les décisions. Chaque choix
                de design et développement est justifié par la valeur apportée.
              </p>
            </div>
            <div className="methodology-item">
              <h4>Code Quality First</h4>
              <p>
                Code propre, maintenable et testé. Architecture évolutive pour
                faciliter les futures améliorations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProcess

