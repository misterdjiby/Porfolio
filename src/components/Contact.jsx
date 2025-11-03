import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaPaperPlane,
  FaPhone
} from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import './Contact.css'
import CV from './CV.pdf'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simuler l'envoi du formulaire
    // Dans un vrai projet, vous utiliseriez une API ou un service d'email
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const handleDownloadCV = () => {
    // Placeholder - remplacez par le chemin réel de votre CV
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Djiby-Ndiaye-CV.pdf'  // Nom du fichier téléchargé
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/misterdjiby',
      color: '#333'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:misterdjibyndiaye@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Téléphone',
      icon: <FaPhone />,
      url: 'tel:+221784255250',
      color: '#25D366' // Couleur verte comme WhatsApp
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Contactez-moi
        </motion.h2>

        <motion.p
          className="section-subtitle"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Une idée de projet ? Une question ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h3>Réseaux sociaux</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="cv-download-section">
              <h3>Télécharger mon CV</h3>
              <motion.button
                className="cv-download-btn"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload /> Télécharger le CV
              </motion.button>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Objet de votre message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Votre message..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  <FaPaperPlane /> Envoyer le message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

