import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData';
import { timelineReveal, viewportOnce, defaultTransition } from '../utils/animations';

function TimelineItem({ item, index }) {
  return (
    <motion.div
      className="timeline-item"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={timelineReveal}
      transition={{ ...defaultTransition, delay: index * 0.15 }}
    >
      <div className="timeline-item__marker" aria-hidden="true" />
      <motion.div
        className="timeline-item__content glass-card"
        whileHover={{ scale: 1.01, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)' }}
      >
        <div className="timeline-item__header">
          <div>
            <h3 className="timeline-item__role">{item.role}</h3>
            <p className="timeline-item__company">{item.company}</p>
          </div>
          <div className="timeline-item__meta">
            <span className="timeline-item__period">{item.period}</span>
            <span className="timeline-item__location">{item.location}</span>
          </div>
        </div>
        <ul className="timeline-item__list">
          {item.responsibilities.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
        <div className="timeline-item__tags">
          {item.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle title="Experience" subtitle="Professional Journey" />
        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
