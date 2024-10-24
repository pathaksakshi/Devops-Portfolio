// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black-800 text-black py-4 text-center">
//       <p>© 2024 Sakshi Rishipathak</p>
//       <div className="mt-4">
//         <a href="#" className="text-white mx-2">GitHub</a>
//         <a href="#" className="text-white mx-2">LinkedIn</a>
//         <a href="#" className="text-white mx-2">DockerHub</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Copyright Section */}
        <div className="text-sm">
          © {new Date().getFullYear()} Sakshi Rishipathak. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sakshi-rishipathak" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/pathaksakshi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://sakshirishipathak.hashnode.dev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHashnode} className="text-2xl text-white hover:text-blue-400 transition duration-300" />
          </a>
        </div>
        
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-4 text-xs">
        Built with React | Designed by Sakshi Rishipathak
      </div>
    </footer>
  );
};

export default Footer;
