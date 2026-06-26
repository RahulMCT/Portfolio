import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData';
import { slideUp, viewportOnce, defaultTransition } from '../utils/animations';

function EducationCard({ item, index }) {
  return (
    <motion.div
      className="education-card glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={slideUp}
      transition={{ ...defaultTransition, delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="education-card__icon" aria-hidden="true">
        <FaGraduationCap />
      </div>
      <div className="education-card__content">
        <h3 className="education-card__degree">{item.degree} — {item.field}</h3>
        <p className="education-card__institution">{item.institution}</p>
        <p className="education-card__meta">{item.location} · {item.period}</p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle title="Education" subtitle="Academic Background" />
        <div className="education__grid">
          {education.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
