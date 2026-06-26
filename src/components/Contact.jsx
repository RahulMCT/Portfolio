import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import MagneticButton from './MagneticButton';
import { personalInfo, emailJsConfig, getWhatsAppUrl } from '../data/portfolioData';
import { fadeIn, defaultTransition, viewportOnce } from '../utils/animations';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', title: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailJsConfigured =
    emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey;

  useEffect(() => {
    if (emailJsConfig.publicKey) {
      emailjs.init({ publicKey: emailJsConfig.publicKey });
    }
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const { name, email, title, message } = formState;

    if (!isEmailJsConfigured) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured. Please use WhatsApp or email directly.',
      });
      setIsSubmitting(false);
      return;
    }

    const emailTitle = [title, message].filter(Boolean).join(' — ') || `Portfolio Contact from ${name}`;

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name,
          title: emailTitle,
          email,
        },
        { publicKey: emailJsConfig.publicKey }
      );

      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormState({ name: '', email: '', title: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try WhatsApp or email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'rahulkumar', href: personalInfo.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'RahulMCT', href: personalInfo.github },
    { icon: FaGlobe, label: 'Portfolio', value: 'rahulmct.github.io/Portfolio', href: personalInfo.portfolioUrl },
  ];

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle title="Contact Me" subtitle="Let's Connect" />
        <motion.div
          className="contact__grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          transition={defaultTransition}
        >
          <div className="contact__info">
            <p className="contact__intro">
              I'm open to new opportunities in Java Full Stack development and HxGN EAM consulting.
              Feel free to reach out for collaborations, job inquiries, or project discussions.
            </p>
            <ul className="contact__list">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => (
                <motion.li
                  key={label}
                  className="contact__item glass-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ ...defaultTransition, delay: index * 0.08 }}
                >
                  <Icon className="contact__item-icon" aria-hidden="true" />
                  <div>
                    <span className="contact__item-label">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>

            <MagneticButton className="contact__whatsapp-wrap">
              <a
                href={getWhatsAppUrl()}
                className="btn btn--whatsapp btn--full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
              </a>
            </MagneticButton>
          </div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            aria-label="Contact form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <h3 className="contact__form-title">Send a Message</h3>
            <div className="contact__form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formState.title}
                onChange={handleChange}
                placeholder="Subject / title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
              />
            </div>
            <MagneticButton>
              <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </MagneticButton>
            {status.message && (
              <p className={`contact__status contact__status--${status.type}`} role="status">
                {status.message}
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
