// //

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const Certifications = () => {
//   const certList = [
//     { title: 'AWS Certified Solutions Architect', date: '2023' },
//     { title: 'Docker Certified Associate', date: '2022' },
//     { title: 'Certified Kubernetes Administrator', date: '2021' },
//     // Add more certifications here
//   ];

//   useEffect(() => {
//     gsap.from('.cert-card', {
//       opacity: 15,
//       y: 100,
//       stagger: 0.2,
//       duration: 1,
//       ease: 'power3.out',
//       scrollTrigger: {
//         trigger: '.cert-card',
//         start: 'top 80%',
//         toggleActions: 'play none none none',
//       },
//     });
//   }, []);

//   return (
//     <section id="certifications" >
//       <h2 className="text-center text-4xl font-bold mb-8">Certifications</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
//         {certList.map((cert, index) => (
//           <div
//             key={index}
//             className="cert-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//           >
//             <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
//             <p className="text-gray-500 text-sm mb-4">Date: {cert.date}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    date: "June 2023",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    institution: "Linux Foundation",
    date: "March 2023",
  },
  {
    title: "Docker Certified Associate",
    institution: "Docker",
    date: "November 2022",
  },
  {
    title: "Jenkins Engineer Certification",
    institution: "CloudBees",
    date: "July 2022",
  },
];

const Certifications = () => {
  useEffect(() => {
    gsap.from('.roadmap-item', { opacity: 15, duration: 1.5, y: 50, stagger: 0.3 });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-20 mt-12 text-black">Certifications Roadmap</h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

        {/* Roadmap Items */}
        {certifications.map((cert, index) => (
          <div key={index} className={`roadmap-item mb-12 flex justify-between text-black items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-4/12 text-left px-4">
              <h3 className="text-2xl font-semibold text-black">{cert.title}</h3>
              <p className="text-sm text-black">{cert.institution}</p>
              <p className="text-sm text-gray-400 text-black">{cert.date}</p>
            </div>

            <div className="w-2/12 flex justify-center items-center">
              {/* Circle for Milestone */}
              <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-black"></div>
            </div>

            <div className="w-4/12 px-4">
              {/* Empty space for alternating design */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
