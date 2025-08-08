import React from 'react';
import { Database, Server, Smartphone, Globe } from 'lucide-react';
import Background from './Background';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Redux', level: 85 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 75 },
        { name: 'JWT Auth', level: 85 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Redis', level: 75 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 78 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      title: 'Mobile & Tools',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 82 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 98 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 ">
      {/* <Background/> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="bold text-3xl sm:text-6xl font-50 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 bg-clip-text text-transparent">
              Technical Skills
            </h2><br></br>
            <p className="text-lg text-[20px] text-white dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-xl mr-4">
                    <category.icon size={24} />
                  </div>
                  <h3 className="bold text-3xl sm:text-3xl font-50 text-black">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-blue-600 hover:text-black dark:text-gray-300">
                          {skill.name}
                        </span>
                        {/* <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span> */}
                      </div>
                      {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;