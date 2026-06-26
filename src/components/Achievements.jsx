import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/portfolioData';
import { staggerContainer, staggerItem, viewportOnce } from '../utils/animations';

function AchievementCard({ achievement }) {
  return (
    <motion.div className="achievement-card glass-card" variants={staggerItem} whileHover={{ y: -6, scale: 1.02 }}>
      <div className="achievement-card__icon" aria-hidden="true">
        <FaTrophy />
      </div>
      <h3 className="achievement-card__title">{achievement.title}</h3>
      <p className="achievement-card__desc">{achievement.description}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <SectionTitle title="Key Achievements" subtitle="Highlights & Milestones" />
        <motion.div
          className="achievements__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
