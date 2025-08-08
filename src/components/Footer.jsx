import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Dinesh Prabakaran
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Full-Stack Developer passionate about creating innovative solutions
                that make a difference in people's lives.
              </p>
              <p className="text-gray-400 text-sm">
                Always learning, always growing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg text-blue-400 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg text-blue-400 font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>Velammal Engineering College, Chennai</p>
                <br/>
                <a href="mailto:dineshprabakaran2509@gmail.com">
                  <p>dineshprabakaran2509@example.com</p>
                </a>
                <br />
                <a href="tel:6369627212">
                  <p>6369627212</p>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-400" fill="currentColor" />
              <span>© {currentYear} Dinesh Prabakaran. All rights reserved.</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;