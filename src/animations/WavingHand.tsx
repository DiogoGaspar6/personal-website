import { motion } from 'framer-motion';

export default function WavingHand() {
  return (
    <motion.div
      animate={{ rotate: [0, 10, -10, 10, -10, 0], x: [-2, 2, -2, 2, -2] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ display: 'inline-block' }}
    >
      👋🏼
    </motion.div>
  );
}