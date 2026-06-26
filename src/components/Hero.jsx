import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import MagneticButton from './MagneticButton';
import { fadeUp, fadeRight, defaultTransition } from '../utils/animations';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingRoles);

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role-label">I'm a </span>
            <span className="hero__typed" aria-live="polite">
              {typedText}
              <span className="hero__cursor" aria-hidden="true">|</span>
            </span>
          </motion.p>
          <motion.p
            className="hero__location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.location} · {personalInfo.experience} Experience
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <MagneticButton>
              <a href={personalInfo.resumeUrl} className="btn btn--primary" download target="_blank" rel="noopener noreferrer">
                <FaDownload aria-hidden="true" /> Download Resume
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn btn--secondary">
                <FaEnvelope aria-hidden="true" /> Contact Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={personalInfo.github} className="btn btn--ghost" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={personalInfo.linkedin} className="btn btn--ghost" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ ...defaultTransition, delay: 0.5 }}
        >
          <div className="hero__image-ring" aria-hidden="true" />
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} - ${personalInfo.title}`}
            className="hero__image"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
