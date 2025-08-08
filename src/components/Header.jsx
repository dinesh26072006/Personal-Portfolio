import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  // Check if link is active based on current URL path
  const isActive = (path) => {
    // For root path, exact match
    if (path === '/') return location.pathname === '/';
    // For others, match path starts with that route
    return location.pathname.startsWith(path);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 ">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-500 dark:text-blue-400'
                        : 'text-white dark:text-white hover:text-blue-500 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
