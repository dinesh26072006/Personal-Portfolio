import React from 'react';
import { Code, Coffee, Heart, Users } from 'lucide-react';
import img from '../assest/DINESH PRABAKARAN.webp'

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: Users, label: 'Team Collaborations', value: '15+' },
  ];

  return (
    <>
      <section id="about" className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="bold text-3xl sm:text-6xl font-50 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <br></br>
              <p className="text-lg text-white dark:text-gray-300">
                Passionate developer with a love for creating innovative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <img src={img} alt="profile photo" />
                    {/* <span className="text-lg">Profile Photo</span> */}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl sm:text-3xl  text-blue-400 mb-6 leading-relaxed text-justify">
                  Full-Stack Developer & Problem Solver...
                </h3>
                <p className="text-white dark:text-gray-300 w-[560px] mb-6 leading-relaxed text-justify">
                  I’m a passionate Full Stack Developer with a strong foundation in building dynamic, user-focused web applications from the ground up. I specialize in crafting responsive front-end interfaces using React, Next.js, and modern JavaScript frameworks, while developing robust back-end services with Node.js, Express, and secure database integrations like MongoDB and MySQL .
                </p>
                <p className="text-white dark:text-gray-300 w-[560px] mb-6 leading-relaxed text-justify">
                  I enjoy bridging the gap between design and functionality, ensuring that every project is not only visually engaging but also efficient, scalable, and maintainable. With experience across the entire development lifecycle—from planning and UI/UX design to deployment and optimization—I thrive on turning ideas into fully functional, high-quality digital products. My goal is to keep learning, stay ahead of industry trends, and deliver solutions that make a real impact .
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center gap-24">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-[300px]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-xl mb-4">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[20px] text-gray-900 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;