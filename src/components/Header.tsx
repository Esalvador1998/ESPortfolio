import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-montserrat font-semibold tracking-tight hover:text-accent transition-colors">
            ES
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="link">About</a>
            <a href="#work" className="link">Work</a>
            <a href="#contact" className="link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg py-4 px-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="link block py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#work" 
                className="link block py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#contact" 
                className="link block py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}