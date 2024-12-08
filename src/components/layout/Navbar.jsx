// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Principles', 'Initiatives', 'Events', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-red-800 text-white z-50 shadow-xl font-bold">
      <div className="container-padding">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl uppercase tracking-widest">
            CPE
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-red-600 rounded"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-3 py-2 hover:bg-red-600 rounded transition-colors uppercase"
              >
                {item}
              </button>
            ))}
            <a
              href="https://workersjournal.vercel.app//"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 hover:bg-red-600 rounded transition-colors uppercase"
            >
              Journal
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-red-800 pb-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full px-4 py-2 hover:bg-red-600 text-left uppercase"
              >
                {item}
              </button>
            ))}
            <a
              href="https://workersjournal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 hover:bg-red-600 text-left uppercase"
            >
              Journal
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
