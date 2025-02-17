import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="parallax min-h-screen flex items-center pt-16">
      <div className="parallax-bg">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-8 border-gray-900 transform -rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-8 border-gray-900 transform rotate-12"></div>
        </div>
      </div>
      <div className="hero-content w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Eduardo Salvador
            </h1>
            <p className="text-2xl md:text-3xl text-accent mb-6 animate-fade-in delay-100">
              Junior Data Solutions Architect
              <span className="block text-xl md:text-2xl mt-1">at PetScreening</span>
            </p>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed animate-slide-up opacity-90">
              Passionate about transforming complex data challenges into elegant solutions. 
              Specializing in building intuitive websites, interactive dashboards, and 
              powerful data tools that drive business success.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up">
              <a 
                href="/resume.pdf" 
                download 
                className="btn bg-primary text-white hover:bg-accent group hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a 
                href="#work" 
                className="btn btn-outline group hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a 
                href="#about" 
                className="btn btn-outline group hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  );
}