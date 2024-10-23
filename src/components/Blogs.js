
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import dockerImage from '../images/docker.png'; // Adjust path if necessary
import cicdImage from '../images/cicd.jpg';     // Adjust path if necessary
import monitoringImage from '../images/monitoring.png';
const Blogs = () => {
  const blogList = [
    {
      title: 'Optimizing CI/CD Pipelines for Better Performance',
      snippet: 'A deep dive into strategies for improving CI/CD pipelines...',
      image : cicdImage,
      link: '#',
    },
    {
      title: 'Docker for Beginners: A Step-by-Step Guide',
      snippet: 'An introductory guide to Docker for beginners...',
      image: dockerImage,
      link: '#',
    },
    {
      title: 'Infrastructure as Code with Terraform',
      snippet: 'A guide to automating cloud infrastructure using Terraform...',
      image: monitoringImage,
      link: '#',
    },
    // Add more blogs here
  ];

  useEffect(() => {
    gsap.from('.blog-card', {
      opacity: 15,
      x: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '.blog-card',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    //     <section id="blogs" className="py-20 bg-gradient-to-r from-green-600 to-green-400">
    //    <h2 className="text-center text-4xl font-bold mb-8 text-white">Blogs</h2>
    //   <div className="flex flex-wrap justify-center gap-8 container mx-auto px-8">
    //   <div className="flex justify-center mt-8"></div>
    //     {blogList.map((blog, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center bg-white rounded-full shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
    //         style={{ width: '300px' }} 
    //         //className="bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
    //        // className="blog-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
    //       >
    //          <img
    //           src={blog.image}
    //           alt={blog.title}
    //           className="rounded-full w-16 h-16 mr-4" // Circular image
    //         />
    //         <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
    //         <p className="text-gray-700 mb-2">{blog.snippet}</p>
    //         <a href={blog.link} className="text-blue-500 hover:underline">
    //           Read More
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
     <section id="blogs" className="py-20 bg-gradient-to-r from-green-600 to-green-400">
      <h2 className="text-center text-4xl font-bold mb-8 text-white">Blogs</h2>
      <div className="container mx-auto px-8">
        {blogList.map((blog, index) => (
          <div
            key={index}
            className="flex items-center bg-white rounded-full shadow-lg p-4 mb-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-full w-16 h-16 mr-4" // Circular image
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
              <p className="text-gray-700 mb-2">{blog.description}</p>
              <a href={blog.link} className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
