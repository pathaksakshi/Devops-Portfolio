import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Logo or Name */}
        <div className="text-lg font-bold">My Portfolio</div>
              
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-400">Certifications</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
              
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sakshi-rishipathak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/pathaksakshi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-400" />
          </a>
          {/* Hashnode */}
          <a href="https://sakshirishipathak.hashnode.dev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHashnode} className="text-2xl hover:text-blue-400" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
