import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiAdobe,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiVercel
} from 'react-icons/si'
import { FaPalette, FaCode, FaServer, FaTools } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design',
      icon: <FaPalette />,
      skills: [
        { name: 'UI/UX Design', icon: <SiFigma />, level: 90 },
        { name: 'Figma', icon: <SiFigma />, level: 95 },
        { name: 'Adobe Creative Suite', icon: <SiAdobe />, level: 85 },
        { name: 'Design Systems', icon: <FaPalette />, level: 88 },
        { name: 'Prototypage', icon: <SiFigma />, level: 90 },
        { name: 'User Research', icon: <FaPalette />, level: 82 }
      ]
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact />, level: 95 },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 88 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
        { name: 'TypeScript', icon: <SiReact />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92 },
        { name: 'Responsive Design', icon: <FaCode />, level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
        { name: 'Express', icon: <SiExpress />, level: 88 },
        { name: 'Python', icon: <SiPython />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 87 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 },
        { name: 'REST API', icon: <FaServer />, level: 90 }
      ]
    },
    {
      title: 'DevOps & Outils',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <SiGit />, level: 93 },
        { name: 'Docker', icon: <SiDocker />, level: 80 },
        { name: 'AWS', icon: <SiAmazonaws />, level: 75 },
        { name: 'Vercel', icon: <SiVercel />, level: 90 },
        { name: 'CI/CD', icon: <FaTools />, level: 85 },
        { name: 'Testing', icon: <FaTools />, level: 88 }
      ]
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Compétences Détaillées
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              {...fadeInUp}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

