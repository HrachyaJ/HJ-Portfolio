import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all fields.'
      });
      return;
    }
    
    // For demo purposes, we'll just show a success message
    // In a real application, you would send the form data to a server
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-navy-500 dark:bg-navy-400 rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
              Want to work together? Let's talk.
              
              Whether you already have an idea or need help getting started, I'm ready to help you build something clean, modern, and fully responsive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {formStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                formStatus.success ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-navy-600 bg-white dark:bg-navy-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-navy-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-navy-500 hover:bg-navy-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg mr-4">
                  <Mail className="text-navy-500 dark:text-navy-300" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-navy-500 dark:text-navy-300 hover:underline">
                    hrachjgshow@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-50 dark:bg-navy-700 p-3 rounded-lg mr-4">
                  <Send className="text-navy-500 dark:text-navy-300" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Telegram</h4>
                  <a href="https://www.t.me/@hrachya_j" target='_blank' className="text-navy-500 dark:text-navy-300 hover:underline">
                    @hrachya_j
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Social Profiles
            </h3>
            
            <div className="flex space-x-4 mb-8">
            <a 
                href="https://linkedin.com/in/hrachya-jivaryan-744167326" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-50 dark:bg-navy-700 p-4 rounded-lg text-navy-500 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/HrachyaJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-50 dark:bg-navy-700 p-4 rounded-lg text-navy-500 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-600 transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </div>
            
            <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-md">
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                Open to Opportunities
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I'm always looking for new challenges and opportunities to grow. If you have a project in mind or just want to chat, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;