import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      icon: <FaBriefcase />,
      title: 'Développeur Full Stack',
      company: 'Freelance',
      period: '',
      description: 'Développement d\'interfaces utilisateur modernes et responsives. Collaboration étroite avec les designers pour transformer des maquettes en composants réutilisables.',
      achievements: [
        'Création d\'un design system réutilisable',
        'Réduction du temps de chargement de 60%',
        'Augmentation de l\'accessibilité (WCAG AA)'
      ]
    },
    {
      type: 'experience',
      icon: <FaBriefcase />,
      title: 'Développeur Junior',
      company: 'Freelance',
      period: '',
      description: 'Premier poste en développement web et mobile. Apprentissage des frameworks modernes et des bonnes pratiques de code.',
      achievements: [
        'Développement web et mobile',
        'Développement backend',
        'Développement frontend',
        'Développement mobile',
      ]
    }
  ]

  const education = [
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Licence Informatique',
      company: 'UNIVERS PROFESSIONEL (UNIPRO)',
      period: '2024 -2025',
      description: 'Formation générale en informatique avec spécialisation en développement.',
      achievements: []
    }
  ]

  const allItems = [...experiences, ...education]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Expérience & Formation
        </motion.h2>

        <div className="timeline">
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${item.type}`}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">{item.icon}</div>
                {index < allItems.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

