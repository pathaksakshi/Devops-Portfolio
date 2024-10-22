import React from 'react';

const Blogs = () => {
  const blogList = [
    {
      title: 'Optimizing CI/CD Pipelines for Better Performance',
      snippet: 'A deep dive into strategies for improving CI/CD pipelines...',
      link: '#',
    },
    // Add more blogs here
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">Blogs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-8">
        {blogList.map((blog, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
            <p className="text-gray-700 mb-4">{blog.snippet}</p>
            <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
