import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';
import { zoomIn, viewportOnce, defaultTransition } from '../utils/animations';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={zoomIn}
      transition={{ ...defaultTransition, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {project.image && (
        <div className="project-card__image-wrap">
          <img src={project.image} alt={project.title} className="project-card__image" loading="lazy" />
          <div className="project-card__image-overlay" aria-hidden="true" />
        </div>
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__section">
          <h4>Features</h4>
          <ul>
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__section">
          <h4>Responsibilities</h4>
          <ul>
            {project.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {project.github && (
          <a href={project.github} className="project-card__link" target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> View on GitHub <FaExternalLinkAlt aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle title="Featured Projects" subtitle="Enterprise & Full Stack Work" />
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
