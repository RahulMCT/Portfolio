import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skillCategories } from '../data/portfolioData';
import { staggerContainer, staggerItem, viewportOnce } from '../utils/animations';

function SkillCard({ category }) {
  return (
    <motion.div className="skill-card glass-card" variants={staggerItem} whileHover={{ y: -6, scale: 1.02 }}>
      <h3 className="skill-card__title">{category.title}</h3>
      <ul className="skill-card__list">
        {category.skills.map(({ name, level }) => (
          <li key={name} className="skill-item">
            <div className="skill-item__header">
              <span>{name}</span>
              <span className="skill-item__level">{level}%</span>
            </div>
            <div
              className="skill-item__bar"
              role="progressbar"
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${name} proficiency`}
            >
              <motion.div
                className="skill-item__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={viewportOnce}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle title="Technical Skills" subtitle="Technologies & Tools I Work With" />
        <motion.div
          className="skills__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
