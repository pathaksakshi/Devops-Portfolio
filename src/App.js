// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import NavigationBar from './components/NavigationBar';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Blogs from './components/Blogs';
// import Certifications from './components/Certifications';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <NavigationBar />
//       <AboutMe />
//       <Projects />
//       <Blogs />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons'; // Import the icons you need



const App = () => {
  return (
    <div className="min-h-screen linear-gradient(135deg, #e0e0e0, #a0a0a0) text-white">
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 flex justify-center space-x-8 z-50">
        <a href="#about" className="hover:text-blue-300 transition duration-300">About Me</a>
        <a href="#projects" className="hover:text-blue-300 transition duration-300">Projects</a>
        <a href="#blogs" className="hover:text-blue-300 transition duration-300">Blogs</a>
        <a href="#certifications" className="hover:text-blue-300 transition duration-300">Certifications</a>
        <a href="#contact" className="hover:text-blue-300 transition duration-300">Contact</a>
      
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
      </nav>

      <section id="about" className="pt-24 pb-20">
        <AboutMe />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="blogs" className="py-20">
        <Blogs />
      </section>

      <section id="certifications" className="py-20">
        <Certifications />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>
      
    </div>
    
  );
};

export default App;
