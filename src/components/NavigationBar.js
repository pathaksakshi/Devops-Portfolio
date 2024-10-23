// src/components/NavigationBar.js
import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">SAKSHI RISHIPATHAK</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-gray-300 hover:text-white">About Me</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          </li>
          <li>
            <a href="#blogs" className="text-gray-300 hover:text-white">Blogs</a>
          </li>
          <li>
            <a href="#certifications" className="text-gray-300 hover:text-white">Certifications</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
