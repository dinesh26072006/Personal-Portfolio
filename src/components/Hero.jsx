import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Background from './Background';
// import img from '../assest/bgimage.jpg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white dark:text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
                Dinesh Prabakaran
              </span>
            </h1>

            <p className="text-xl text-white sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto ">
              Full-Stack Developer specializing in the MERN stack.
              I build exceptional digital experiences that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/projects">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
              </a>
              <a href="/resume.pdf" download>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="flex space-x-4 justify-center gap-9">
              {/* GitHub */}
              <a
                href="https://github.com/dinesh26072006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                >
                  <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.23v3.3c0 .32.21.7.82.58A12 12 0 0 0 12 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dinesh-prabakaran-491659306/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                >
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 
        0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 18.34H5.67V9h2.67v9.34zM7 
        7.67C6.11 7.67 5.4 6.96 5.4 6.07S6.11 4.47 7 4.47s1.6.71 1.6 1.6S7.89 
        7.67 7 7.67zM18.34 18.34h-2.67v-4.8c0-1.14-.02-2.61-1.6-2.61-1.6 
        0-1.84 1.25-1.84 2.54v4.87h-2.67V9h2.56v1.28h.04c.36-.68 1.26-1.4 
        2.6-1.4 2.78 0 3.29 1.83 3.29 4.21v5.25z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:dineshprabakaran2509@gmail.com"
                className="p-2 bg-red-500 rounded-full hover:bg-red-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M502.3 190.8L327.4 338.3 502.3 485.8c6.3-9.6 9.7-20.9 
        9.7-32.7V223.5c0-11.8-3.4-23.1-9.7-32.7zM480 96H32C14.3 96 0 
        110.3 0 128v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 
        32-32V128c0-17.7-14.3-32-32-32zm0 64L256 288 32 160v-32l224 
        128L480 128v32z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* <div className="h-auto mt-4">
            <button
              onClick={scrollToAbout}
              className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;