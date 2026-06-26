import { memo, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const SUFFIX = ' Kumar';
const SUFFIX_WIDTH = '5.35rem';

const charVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: -6,
    transition: {
      duration: 0.45,
      ease: [0.42, 0, 0.58, 1],
      delay: (SUFFIX.length - 1 - i) * 0.045,
    },
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.42, 0, 0.58, 1],
      delay: i * 0.055,
    },
  }),
};

const suffixWrapVariants = {
  collapsed: {
    width: 0,
    transition: { duration: 0.65, ease: [0.42, 0, 0.58, 1] },
  },
  expanded: {
    width: SUFFIX_WIDTH,
    transition: { duration: 0.65, ease: [0.42, 0, 0.58, 1] },
  },
};

function AnimatedLogo({ onClick, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const touchMedia = window.matchMedia('(pointer: coarse)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateTouch = () => setIsTouchDevice(touchMedia.matches);
    const updateMotion = () => setPrefersReducedMotion(motionMedia.matches);

    updateTouch();
    updateMotion();

    touchMedia.addEventListener('change', updateTouch);
    motionMedia.addEventListener('change', updateMotion);

    return () => {
      touchMedia.removeEventListener('change', updateTouch);
      motionMedia.removeEventListener('change', updateMotion);
    };
  }, []);

  const canAnimate = !isTouchDevice && !prefersReducedMotion;

  const handleExpand = useCallback(() => {
    if (canAnimate) setIsExpanded(true);
  }, [canAnimate]);

  const handleCollapse = useCallback(() => {
    if (canAnimate) setIsExpanded(false);
  }, [canAnimate]);

  const showSuffix = isExpanded && canAnimate;

  return (
    <a
      href="#home"
      className={`navbar__logo ${className}`.trim()}
      onClick={onClick}
      onMouseEnter={handleExpand}
      onMouseLeave={handleCollapse}
      onFocus={handleExpand}
      onBlur={handleCollapse}
      aria-label="Rahul Kumar — Go to home"
    >
      <span className="navbar__logo-base" aria-hidden="true">
        Rahul
      </span>

      {!isTouchDevice && (
        <motion.span
          className="navbar__logo-suffix-wrap"
          aria-hidden="true"
          initial={false}
          animate={showSuffix ? 'expanded' : 'collapsed'}
          variants={prefersReducedMotion ? undefined : suffixWrapVariants}
          style={prefersReducedMotion ? { width: showSuffix ? SUFFIX_WIDTH : 0 } : undefined}
        >
          <span className="navbar__logo-chars">
            {SUFFIX.split('').map((char, index) => (
              <motion.span
                key={`logo-char-${index}`}
                className="navbar__logo-char"
                custom={index}
                initial={false}
                animate={
                  prefersReducedMotion
                    ? { opacity: showSuffix ? 1 : 0, x: 0 }
                    : showSuffix
                      ? 'visible'
                      : 'hidden'
                }
                variants={charVariants}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.span>
      )}

      <span className="accent navbar__logo-dot" aria-hidden="true">
        .
      </span>
    </a>
  );
}

export default memo(AnimatedLogo);
