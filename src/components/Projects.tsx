import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter] = useState<string>('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(filter)
      );
  
  return (
    <section id="projects" className="py-24 bg-white dark:bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-navy-500 dark:bg-navy-400 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and showcase different skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;