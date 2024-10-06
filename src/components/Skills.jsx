import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const skillCategories = {
  Programming: ['Python','Java','Javascript'],
  Frontend: ['HTML', 'CSS', 'React', 'Vue', ],
  Backend: ['Node.js', 'Express', 'Python',],
  Database: ['MongoDB', 'MySQL']
};

const SkillCard = ({ skill }) => (
  <motion.div
    className="bg-dark-bg p-4 rounded-lg neon-box flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={`/icons/${skill.toLowerCase()}.png`} alt={skill} className="w-16 h-16 mb-2" />
    <h3 className="text-sm font-semibold ">{skill}</h3>
  </motion.div>
);

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Programming');

  return (
    <div className="min-h-screen flex flex-col justify-center bg-dark-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Skills</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 ">Categories</h3>
            <ul className="space-y-2">
              {Object.keys(skillCategories).map((category) => (
                <li key={category}>
                  <button
                    className={`w-full text-left py-2 px-4 rounded-md transition-colors duration-300 ${
                      selectedCategory === category ? 'bg-neon-blue text-dark-bg' : 'text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h3 className="text-xl font-semibold mb-4 ">{selectedCategory} Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillCategories[selectedCategory].map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
