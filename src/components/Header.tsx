import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-montserrat font-semibold tracking-tight hover:text-accent transition-colors">
            ES
          </a>
          <div className="space-x-8">
            <a href="#about" className="link">About</a>
            <a href="#work" className="link">Work</a>
            <a href="#contact" className="link">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}