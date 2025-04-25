import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-navy-950 dark:to-navy-900">
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-navy-300 dark:bg-navy-400 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-60 h-60 rounded-full bg-navy-200 dark:bg-navy-500 blur-3xl"></div>
        <div className="absolute top-[40%] right-[30%] w-20 h-20 rounded-full bg-navy-400 dark:bg-navy-300 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
            Hi, I'm <span className="text-navy-600 dark:text-navy-300">Hrachya</span>,<br />
            Front-End Developer
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I build beautiful, responsive, and user-friendly web applications that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects} 
              className="px-6 py-3 bg-navy-500 hover:bg-navy-600 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center"
            >
              View My Work <ArrowDown size={16} className="ml-2" />
            </button>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-navy-500 dark:border-navy-400 text-navy-500 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800 font-medium rounded-xl transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-navy-500 dark:hover:text-navy-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;