import { motion } from 'framer-motion';
import { fadeUp, viewportOnce, defaultTransition } from '../utils/animations';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="section-header"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={defaultTransition}
    >
      <h2 className="section-title" id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
}
