import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-navy-950 py-12 border-t border-gray-200 dark:border-navy-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-navy-600 dark:text-white mb-2"></h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">
              Full-Stack Developer with a passion for creating beautiful and functional web applications. Let's connect and build something amazing together!
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://github.com/HrachyaJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-navy-500 dark:hover:text-navy-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/hrachya-jivaryan-744167326"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-navy-500 dark:hover:text-navy-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hrachjgshow@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-navy-500 dark:hover:text-navy-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} Hrachya Jivaryan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;