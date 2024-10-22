import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Automated CI/CD Pipeline',
      description: 'Built a Jenkins-based CI/CD pipeline for microservices.',
      tech: 'Jenkins, Docker, Kubernetes, Terraform',
      link: '#',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-gray-500 text-sm mb-4">Tech: {project.tech}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
