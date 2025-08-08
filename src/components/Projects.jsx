import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with MERN stack, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full-Stack',
      icon: Globe,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      category: 'Web App',
      icon: Zap,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Chart.js', 'REST API', 'JWT'],
      category: 'Dashboard',
      icon: Database,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Food Delivery App',
      description: 'A mobile-first food delivery application with real-time tracking, payment integration, and restaurant management system.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
      category: 'Mobile App',
      icon: Smartphone,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, progress tracking, quiz system, and video streaming capabilities.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Video.js'],
      category: 'Educational',
      icon: Globe,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'A property listing platform with advanced search filters, virtual tours, and integrated mapping functionality.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Express', 'PostgreSQL', 'Maps API', 'AWS'],
      category: 'Platform',
      icon: Database,
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Full-Stack', 'Web App', 'Mobile App', 'Dashboard', 'Platform', 'Educational'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="bold text-3xl sm:text-6xl font-50 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <br></br>
            <p className="text-lg text-white dark:text-gray-300">
              A selection of projects that showcase my skills and experience
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg mr-3">
                      <project.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-blue-700 hover:text-black dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;