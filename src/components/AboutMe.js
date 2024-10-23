// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const AboutMe = () => {
//   useEffect(() => {
//     gsap.from('.about-text', { opacity: 15, duration: 1.5, y: 50 });
//   }, []);

//   return (
//     // <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-teal-500">
//     //   <h1 className="text-5xl font-bold text-black about-text">Hello, I'm Sakshi Rishipathak</h1>
//     //   <p className="text-lg text-black mt-4 about-text">
//     //     DevOps Engineer | SDET </p>
//     //   <a href="#projects" className="mt-8 py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-100 about-text">Explore My Work</a>
//     // </section>
    
//     <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
//       <h2 className="text-center text-4xl font-bold mb-8 text-Black">Hello, I'm Sakshi Rishipathak</h2>
//       <p className="text-center text-lg text-black">DevOps Engineer | SDET</p>
//       <div className="flex justify-center mt-8">
//         <a href="#projects" className="mt-8 py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-100 about-text">Explore My Work</a>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AboutMe = () => {
  useEffect(() => {
    gsap.from('.about-text', { opacity: 15, duration: 1.5, y: 50, stagger: 0.2 });
    gsap.from('.about-button', { opacity: 15, duration: 1.5, y: 20, delay: 1 });
  }, []);

  return (
    <section id="about" className="flex flex-col items-center v-screen justify-center py-20 from-blue-600 to-blue-400 mt-20 mb-20">
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-4 text-black about-text">
        Hello, I'm Sakshi Rishipathak
      </h2>
      <p className="text-center text-lg sm:text-xl text-white mb-6 about-text">
        DevOps Engineer | SDET
      </p>
      <p className="text-center text-lg sm:text-xl text-black mb-10 about-text">
        I'm an experienced Software Development Engineer in Test (SDET) deeply passionate about DevOps practices. My focus lies in ensuring software quality through rigorous testing and automation. I leverage my background in software engineering to integrate DevOps principles, aiming to optimize efficiency and enhance collaboration across teams. I'm dedicated to continuous improvement and excited to contribute to advancing DevOps methodologies.

      </p>
      <div className="flex justify-center">
        <a 
          href="#projects" 
          className="mt-4 py-2 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-200 transform hover:scale-105 about-button"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
