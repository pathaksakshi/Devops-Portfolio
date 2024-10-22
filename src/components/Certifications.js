import React from 'react';

const Certifications = () => {
  const certList = [
    { title: 'AWS Certified Solutions Architect', date: '2023' },
    { title: 'Docker Certified Associate', date: '2022' },
    // Add more certifications here
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
        {certList.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
            <p className="text-gray-500 text-sm mb-4">Date: {cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
