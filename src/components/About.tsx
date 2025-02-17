import React from 'react';
import { User, Award, Calendar } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-2">
            <div className="w-12 h-[2px] bg-accent"></div>
            <User className="w-6 h-6 text-accent" />
            <div className="w-12 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image Column */}
          <div className="relative animate-fade-in md:justify-self-end">
            <div className="aspect-square w-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
              <img 
                src="https://ca.slack-edge.com/T92EG40PM-U03PXPT437C-97b5a5f9d73c-512"
                alt="Eduardo Salvador"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <Award className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6 animate-slide-up max-w-xl">
            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed mb-6">
                As a Junior Data Solutions Architect at PetScreening, I bridge the gap between complex data systems and user-friendly solutions. My approach combines technical expertise with a keen eye for design, ensuring that data tools are not just powerful, but also intuitive and accessible.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 group">
                  <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-base">Snow Pro Core Certified Professional, demonstrating expertise in Snowflake's data cloud platform</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-base">DBT Developer Certified, specializing in modern data transformation workflows</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-base">Featured speaker at Snowflake Conference in San Francisco, presenting on efficient data architecture patterns</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                I'm passionate about creating clean, efficient solutions that make data accessible and actionable. Whether it's building interactive dashboards or optimizing data workflows, I believe in combining technical excellence with user-centered design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}