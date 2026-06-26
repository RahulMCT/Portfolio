import { motion } from 'framer-motion';
import {
  FaCogs,
  FaGavel,
  FaProjectDiagram,
  FaPlug,
  FaLink,
  FaDatabase,
  FaHeadset,
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { enterpriseExperience } from '../data/portfolioData';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../utils/animations';

const iconMap = {
  customizations: FaCogs,
  rules: FaGavel,
  workflows: FaProjectDiagram,
  api: FaPlug,
  integration: FaLink,
  sql: FaDatabase,
  support: FaHeadset,
};

function CapabilityCard({ capability }) {
  const Icon = iconMap[capability.icon] || FaCogs;

  return (
    <motion.div className="capability-card glass-card" variants={staggerItem} whileHover={{ y: -6, scale: 1.03 }}>
      <div className="capability-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="capability-card__title">{capability.title}</h3>
      <p className="capability-card__desc">{capability.description}</p>
    </motion.div>
  );
}

export default function Enterprise() {
  return (
    <section className="section enterprise" id="enterprise" aria-labelledby="enterprise-title">
      <div className="container">
        <SectionTitle title={enterpriseExperience.title} subtitle={enterpriseExperience.subtitle} />

        <motion.div
          className="enterprise__clients"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="enterprise__clients-label">International Clients</p>
          <motion.div
            className="enterprise__clients-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {enterpriseExperience.clients.map((client) => (
              <motion.span key={client} className="client-badge" variants={staggerItem}>
                {client}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="enterprise__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {enterpriseExperience.capabilities.map((cap) => (
            <CapabilityCard key={cap.title} capability={cap} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
