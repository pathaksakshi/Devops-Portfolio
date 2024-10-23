// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" >
//       <h2 className="text-center text-4xl font-bold mb-8">Get in Touch</h2>
//       <form className="container mx-auto px-8 max-w-md">
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full p-4 mb-4 border rounded-lg"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-4 mb-4 border rounded-lg"
//         />
//         <textarea
//           placeholder="Message"
//           className="w-full p-4 mb-4 border rounded-lg"
//         ></textarea>
//         <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
// import React from 'react';

// const ContactMe = () => {
//   return (
//     <section id="contact" className="py-20">
//       <h2 className="text-center text-4xl font-bold mb-8 text-black">Contact Me</h2>
//       <form className="max-w-xl mx-auto">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
//           <input
//             type="text"
//             id="name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black" // Ensuring text is black
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black" // Ensuring text is black
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
//           <textarea
//             id="message"
//             rows="5"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black" // Ensuring text is black
//             placeholder="Enter your message"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactMe;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  useEffect(() => {
    // Animating the form when the user scrolls to the section
    gsap.from('.contact-form-item', {
      scrollTrigger: {
        trigger: '.contact-form-item',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 15,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section id="contact" className="py-20">
      <h2 className="text-center text-4xl font-bold mb-8 text-black">Contact Me</h2>
      <form className="max-w-xl mx-auto">
        <div className="contact-form-item mb-6">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black"
            placeholder="Enter your name"
          />
        </div>
        <div className="contact-form-item mb-6">
          <label htmlFor="email" className="block text-lg font-medium mb-2 text-black">Email: </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black"
            placeholder="Enter your email"
          />
        </div>
        <div className="contact-form-item mb-6">
          <label htmlFor="message" className="block text-lg font-medium mb-2 text-black">Message: </label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-black"
            placeholder="Enter your message"
          ></textarea>
        </div>
       <div className="flex justify-center" >
          <button
            type="submit"
            className="mt-6 py-2 px-6 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-200 transform hover:scale-105 about-button"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;