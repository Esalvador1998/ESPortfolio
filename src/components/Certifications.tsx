import React from 'react';
import { Database, Code, BarChart } from 'lucide-react';

export function Certifications() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications and achievements in data architecture and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Snow Pro Core Certificate */}
            <div className="group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Snow Pro Core Certificate</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Advanced proficiency in Snowflake's data cloud platform, including architecture and optimization.
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-accent font-medium">Issued by Snowflake Inc.</span>
                    <span className="text-gray-500">Obtained Dec 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DBT Developer Certificate */}
            <div className="group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">DBT Developer Certificate</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Expertise in building modular, maintainable data transformations using dbt.
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-accent font-medium">Issued by dbt Labs</span>
                    <span className="text-gray-500">Obtained Nov 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Visualization Specialist */}
            <div className="group bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <BarChart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Data Visualization Specialist</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Advanced certification in creating impactful data visualizations and dashboards.
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-accent font-medium">Issued by DataCamp</span>
                    <span className="text-gray-500">Obtained Oct 2023</span>
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