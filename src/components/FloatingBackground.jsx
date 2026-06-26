import { motion } from 'framer-motion';

const blobs = [
  { size: 300, x: '10%', y: '20%', delay: 0, duration: 20 },
  { size: 250, x: '75%', y: '15%', delay: 2, duration: 18 },
  { size: 200, x: '60%', y: '70%', delay: 4, duration: 22 },
  { size: 180, x: '20%', y: '80%', delay: 1, duration: 19 },
  { size: 220, x: '85%', y: '55%', delay: 3, duration: 21 },
];

export default function FloatingBackground() {
  return (
    <div className="floating-bg" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="floating-bg__blob"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
