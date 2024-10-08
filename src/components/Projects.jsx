import { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const projects = [
  {
    id: 1,
    title: 'Skin Cancer Detection using Machine Learning',
    description: 'Leveraging machine learning to detect skin cancer from images, improving diagnosis accuracy and facilitating early treatment.',
    image: 'https://via.placeholder.com/300x200.png?text=E-commerce+Platform',
    category: 'App',
    techStack: ['Python'],
    demoLink: 'https://example.com/ecommerce-demo',
    codeLink: 'https://github.com/KattaGovardhan/Skin-Cancer-Detection-using-Deep-Learning',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Showcasing my projects and expertise, blending creativity, technical skills, and passion for delivering outstanding work.',
    image: 'https://via.placeholder.com/300x200.png?text=Personal+Portfolio',
    category: 'Web',
    techStack: ['React', 'JavaScript', 'TailwindCSS'],
    demoLink: 'https://govardhankatta-portfolio.vercel.app/',
    codeLink: 'https://github.com/KattaGovardhan/Portfolio.git',
  }
];

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-dark-bg rounded-lg overflow-hidden shadow-lg neon-box"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
        >
          Learn More
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-dark-bg p-6 rounded-lg max-w-lg w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-neon-pink">Tech Stack:</h3>
                <ul className="list-disc list-inside">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Code
                </a>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
  }).isRequired,
};



const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-dark-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Projects</h2>
        <div className="flex justify-center mb-8">
          {['All', 'Web', 'App'].map((category) => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? 'bg-neon-blue text-dark-bg' : 'bg-dark-bg text-neon-blue'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
