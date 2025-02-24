import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Eduardo Salvador. All rights reserved. Thank you for showing an interest and scrolling all the way down here!
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="text-sm text-gray-600 hover:text-accent transition-colors">
              About
            </a>
            <a href="#work" className="text-sm text-gray-600 hover:text-accent transition-colors">
              Work
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}