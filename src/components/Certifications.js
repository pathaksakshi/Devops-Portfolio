//

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Certifications = () => {
  const certList = [
    { title: 'AWS Certified Solutions Architect', date: '2023' },
    { title: 'Docker Certified Associate', date: '2022' },
    { title: 'Certified Kubernetes Administrator', date: '2021' },
    // Add more certifications here
  ];

  useEffect(() => {
    gsap.from('.cert-card', {
      opacity: 15,
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cert-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
        {certList.map((cert, index) => (
          <div
            key={index}
            className="cert-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
            <p className="text-gray-500 text-sm mb-4">Date: {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
