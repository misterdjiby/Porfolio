import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaHeart, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'
import './About.css'

// Import de ta photo (dans le même dossier)
import MOI from './MOI.PNG'

const About = () => {
  const softSkills = [
    { icon: <FaHeart />, title: 'Passion', desc: 'Amour du code et du design' },
    { icon: <FaUsers />, title: 'Collaboration', desc: 'Esprit d\'équipe fort' },
    { icon: <FaLightbulb />, title: 'Créativité', desc: 'Solutions innovantes' },
    { icon: <FaRocket />, title: 'Curiosité', desc: 'Apprentissage continu' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          À propos de moi
        </motion.h2>

        <div className="about-content">
          {/* === PHOTO === */}
          <motion.div
            className="about-image-wrapper"
            {...fadeInUp}
          >
            <div className="about-image-frame">
              <div className="about-image">
                <img
                  src={MOI}
                  alt="Djiby Ndiaye - Développeur Full-Stack & Designer UI/UX"
                  className="profile-photo"
                />
              </div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>

          {/* === TEXTE === */}
          <div className="about-text">
            <motion.div
              className="about-section"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3>Mon Histoire</h3>
              <p>
                Passionné par la technologie et le design depuis mon plus jeune âge, 
                j'ai découvert ma vocation en réalisant que la magie opère vraiment 
                quand code et esthétique se rencontrent. Ma formation en développement 
                full-stack et mes compétences en design UI/UX me permettent de créer 
                des expériences digitales complètes et mémorables.
              </p>
            </motion.div>

            <motion.div
              className="about-section"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h3>Ma Philosophie</h3>
              <p>
                Je crois fermement que chaque ligne de code compte autant que chaque 
                pixel. Mon approche allie rigueur technique et sensibilité artistique 
                pour transformer des concepts en réalité. Je place l'utilisateur au 
                centre de toutes mes décisions, car un produit réussi est avant tout 
                un produit qui résout un vrai problème avec élégance.
              </p>
            </motion.div>

            <motion.div
              className="double-competence"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3>Double Compétence</h3>
              <div className="competence-cards">
                <div className="competence-card">
                  <FaCode className="competence-icon" />
                  <h4>Développement</h4>
                  <p>
                    Architecture robuste, code propre et maintenable. 
                    Expertise frontend et backend pour des solutions complètes.
                  </p>
                </div>
                <div className="competence-card">
                  <FaPalette className="competence-icon" />
                  <h4>Design</h4>
                  <p>
                    Sens de l'esthétique, UX pensée, interfaces intuitives. 
                    Création de systèmes de design cohérents et évolutifs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="soft-skills"
              {...fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <h3>Soft Skills</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-item"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="soft-skill-icon">{skill.icon}</div>
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About