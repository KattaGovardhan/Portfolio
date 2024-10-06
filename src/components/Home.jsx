import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg ">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 "
        >
          GOVARDHAN KATTA
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl mb-6 text-neon-pink"
        >
          FULL STACK SOFTWARE DEVELOPER
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Developing intuitive web and software applications that combine clean code with innovative design to enhance user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn btn-primary">Hire Me</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
