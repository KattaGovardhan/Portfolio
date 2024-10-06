import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold neon-text">Govardhan Katta</p>
            <p className="text-sm text-gray-400">Full Stack Software Developer</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/KattaGovardhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/govardhan-katta/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-neon-blue transition-colors duration-300">
              Back to Top
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Govardhan Katta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
