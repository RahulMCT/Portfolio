import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripple, setRipple] = useState(null);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback(
    (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    },
    [cursorX, cursorY, ringX, ringY]
  );

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const isSmall = window.innerWidth < 768;
    if (isCoarse || isSmall) {
      setIsTouchDevice(true);
      return undefined;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseDown = (e) => {
      setIsClicking(true);
      setRipple({ x: e.clientX, y: e.clientY, id: Date.now() });
      setTimeout(() => setRipple(null), 600);
    };
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .btn, input, textarea, select, label, [role="button"]');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? 'cursor-dot--hover' : ''} ${isClicking ? 'cursor-dot--click' : ''}`}
        style={{ x: cursorX, y: cursorY }}
        aria-hidden="true"
      />
      <motion.div
        className={`cursor-ring ${isHovering ? 'cursor-ring--hover' : ''} ${isClicking ? 'cursor-ring--click' : ''}`}
        style={{ x: ringX, y: ringY }}
        aria-hidden="true"
      />
      {ripple && (
        <motion.span
          key={ripple.id}
          className="cursor-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
