import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AboutMe = () => {
  useEffect(() => {
    gsap.from('.about-text', { opacity: 0, duration: 1.5, y: 50 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-teal-500">
      <h1 className="text-5xl font-bold text-black about-text">Hello, I'm Sakshi Rishipathak</h1>
      <p className="text-lg text-black mt-4 about-text">
        DevOps Engineer | SDET | Automation Enthusiast
      </p>
      <a href="#projects" className="mt-8 py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg hover:bg-blue-100 about-text">Explore My Work</a>
    </section>
  );
};

export default AboutMe;
