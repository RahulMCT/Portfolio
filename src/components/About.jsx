import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import MagneticButton from './MagneticButton';
import { aboutContent, personalInfo } from '../data/portfolioData';
import { fadeLeft, fadeUp, staggerContainer, staggerItem, defaultTransition, viewportOnce } from '../utils/animations';

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-me-title">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Professional Summary" />
        <div className="about__grid">
          <motion.div
            className="about__image-col"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
            transition={defaultTransition}
          >
            <div className="glass-card about__image-card">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="about__image"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.15 }}
          >
            <h3 className="about__heading">
              I'm {personalInfo.name.split(' ')[0]} — a{' '}
              <span className="accent">{personalInfo.role}</span>
            </h3>
            <p className="about__text">{aboutContent.summary}</p>
            <p className="about__text">{aboutContent.objective}</p>

            <motion.div
              className="about__highlights"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {aboutContent.highlights.map(({ label, value }) => (
                <motion.div key={label} className="about__highlight glass-card" variants={staggerItem}>
                  <span className="about__highlight-label">{label}</span>
                  <span className="about__highlight-value">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            <MagneticButton>
              <a href={personalInfo.resumeUrl} className="btn btn--primary" download target="_blank" rel="noopener noreferrer">
                <FaDownload aria-hidden="true" /> Download CV
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
