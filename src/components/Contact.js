import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="container mx-auto px-8 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="w-full p-4 mb-4 border rounded-lg"
        ></textarea>
        <button className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
