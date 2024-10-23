

//import React, { useEffect } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import automated from '../images/automated.png';
import infra from '../images/infra.jpg';
import microservices from '../images/microservices.png';
const Projects = () => {
  const projectList = [
    {
      title: 'Automated CI/CD Pipeline',
      description: 'Built a Jenkins-based CI/CD pipeline for microservices.',
      tech: 'Jenkins, Docker, Kubernetes, Terraform',
      image: automated,
      link: '#',
    },
    {
      title: 'Infrastructure as Code with Terraform',
      description: 'Automated cloud infrastructure using Terraform for AWS.',
      tech: 'Terraform, AWS',
      image: infra,
      link: '#',
    },
    {
      title: 'Dockerized Microservices',
      description: 'Containerized and deployed microservices using Docker.',
      tech: 'Docker, Kubernetes',
      image: microservices,
      link: '#',
    },
    // Add more projects here
  ];

  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    gsap.from('.project-card', {
      opacity: 15,
      scale: 0.9,
      stagger: 0.9,  // Increased stagger for a better delay between cards
      duration: 0.9, // Slower animation duration
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    // <section id="projects" className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    //   <h2 className="text-center text-4xl font-bold mb-8 text-white">Projects</h2>
    //]   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
    //     {projectList.map((project, index) => (
    //       <div
    //         key={index}
    //         className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"

    //       >
    //         <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
    //         <p className="text-gray-700 mb-4">{project.description}</p>
    //         <p className="text-gray-500 text-sm mb-4">Tech: {project.tech}</p>
    //         <a
    //           href={project.link}
    //           className="text-blue-500 hover:underline"
    //         >
    //           View Project
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
     <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h2 className="text-center text-4xl font-bold mb-8 text-white">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 container mx-auto px-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center" ${
              isVisible ? 'opacity-100 translate-y-0 animate-fade-in' : 'opacity-0 translate-y-10'
            }`}
            style={{ width: '250px', transitionDelay: `${index * 100}ms` }} // Stagger the animation delay
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-auto mb-4" // Rounded image
              style={{ width: '100%', height: '150px', objectFit: 'cover' }} // Ensure the image fits well
            />
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
