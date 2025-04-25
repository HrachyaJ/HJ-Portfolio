import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const technologies = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Tailwind', level: 90 },
    { name: 'Node.js', level: 70 },
    { name: 'SQL', level: 65 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
          <div className="w-24 h-1 bg-navy-500 dark:bg-navy-400 rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            I'm a young frontend developer passionate about building modern, user-friendly websites.
              
            I specialize in HTML, CSS, JS, TypeScript, React.js, Node.js, SQL, Tailwind to create fast, responsive, and clean-looking sites that help people stand out online. Whether it’s for your personal brand, business, or portfolio — I’ll make sure your site feels professional and looks amazing on any device.

            Currently based in Armenia, working with clients worldwide.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Education & Experience
            </h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white dark:bg-navy-800 p-4 rounded-xl shadow-sm">
                <h4 className="font-medium text-navy-600 dark:text-navy-300">Freelance Developer</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Self-employed | 2024 - Present</p>
              </div>
              <div className="bg-white dark:bg-navy-800 p-4 rounded-xl shadow-sm">
                <h4 className="font-medium text-navy-600 dark:text-navy-300">Web Developer</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Agency | 2024 - Present</p>
              </div>
              {/* <div className="bg-white dark:bg-navy-800 p-4 rounded-xl shadow-sm">
                <h4 className="font-medium text-navy-600 dark:text-navy-300">B.S. in Computer Science</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Tech University | 2014 - 2018</p>
              </div> */}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-navy-500 hover:bg-navy-600 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg"
            >
              Download CV <Download size={16} className="ml-2" />
            </a>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-navy-700 rounded-full h-2.5">
                    <div 
                      className="bg-navy-500 dark:bg-navy-400 h-2.5 rounded-full" 
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management', 'Adaptability', 'Time Management'].map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-white dark:bg-navy-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm border border-gray-100 dark:border-navy-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;