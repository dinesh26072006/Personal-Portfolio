import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <ScrollToTop/>
      <Background />
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white bg-opacity-0 dark:bg-gray-900 bg-opacity-0 text-gray-900 dark:text-white">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
