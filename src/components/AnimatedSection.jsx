import { motion } from 'framer-motion';
import { fadeUp, defaultTransition, viewportOnce } from '../utils/animations';

export default function AnimatedSection({
  children,
  variant = fadeUp,
  className = '',
  delay = 0,
  as = 'div',
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variant}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}
