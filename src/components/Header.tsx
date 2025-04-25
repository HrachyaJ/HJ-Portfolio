import React, { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-navy-950 shadow-md py-3' 
          : 'bg-transparent py-5'
      } ${darkMode ? 'dark' : ''}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-navy-600 dark:text-white">
          Hrachya Jivaryan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => scrollToSection('home')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Contact
          </a>
          {/* <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
        </nav>

        <div className="flex items-center md:hidden">
          {/* <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors mr-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 dark:text-white hover:text-navy-500 dark:hover:text-navy-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-navy-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 shadow-lg' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            onClick={() => scrollToSection('home')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 dark:text-gray-300 hover:text-navy-500 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;