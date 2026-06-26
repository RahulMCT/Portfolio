import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__social">
          {socialLinks.map(({ name, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="footer__social-link"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="footer__copy">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="footer__tagline">
          Built with React · Java Full Stack Developer Portfolio
        </p>
      </div>
    </footer>
  );
}
