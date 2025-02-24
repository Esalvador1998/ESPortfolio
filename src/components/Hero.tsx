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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in leading-tight">
              Eduardo Salvador
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-accent mb-6 md:mb-8 animate-fade-in delay-100">
              Jr. Data Solutions Architect @PetScreening
              <span className="block text-lg sm:text-xl md:text-2xl mt-2 text-gray-600">Transforming Data into Business Value</span>
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 animate-slide-up">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                Specializing in scalable data architectures and analytics engineering that drive measurable business outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg text-gray-600">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 text-primary">
                    <span className="font-semibold">Impact</span>
                  </div>
                  <p className="pl-4 border-l-2 border-accent/20">
                    $6M+ revenue generated through data automation
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 text-primary">
                    <span className="font-semibold">Recognition</span>
                  </div>
                  <p className="pl-4 border-l-2 border-accent/20">
                    Featured Speaker at Snowflake Summit in San Francisco
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a 
                href="/resume.pdf" 
                download 
                className="btn bg-primary text-white hover:bg-accent group hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center justify-center space-x-2"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a 
                href="#work" 
                className="btn btn-outline group hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
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