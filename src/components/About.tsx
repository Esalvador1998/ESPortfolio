import React from 'react';
import { User, Award, Calendar, ArrowRight, Zap } from 'lucide-react';

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
          <div className="space-y-8 animate-slide-up max-w-xl">
            <div className="prose prose-lg">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center space-x-2">
                    <span>Current Role</span>
                    <Zap className="w-5 h-5 text-accent" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the pioneering data hire at PetScreening, I help architect end-to-end data solutions that power business decisions and automate workflows, focusing on:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Building scalable data infrastructure and ETL pipelines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Developing analytics tools and interactive dashboards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span>Implementing data governance and security standards</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 grid gap-4">
                  <h4 className="text-xl font-semibold">Key Achievements</h4>
                  <div className="grid gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                      <p className="font-medium">Revenue Impact</p>
                      <p className="text-sm text-gray-600">Generated $6M+ through automated partner integrations and streamlined data workflows</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                      <p className="font-medium">Technical Leadership</p>
                      <p className="text-sm text-gray-600">Established data architecture standards and best practices as first internal data hire</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                      <p className="font-medium">Industry Recognition</p>
                      <p className="text-sm text-gray-600">Selected speaker at Snowflake Summit, presenting scalable data solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}