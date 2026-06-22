import { motion } from "framer-motion";

const Reveal = ({ children, y = 28, delay = 0, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
