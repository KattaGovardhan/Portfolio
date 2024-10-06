import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const FloatingHireMe = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link to="contact" smooth={true} duration={500}>
        <button className="btn btn-primary shadow-lg">
          Hire Me
        </button>
      </Link>
    </motion.div>
  );
};

export default FloatingHireMe;
