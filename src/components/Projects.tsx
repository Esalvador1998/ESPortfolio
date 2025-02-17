import React from 'react';
import { ExternalLink, Code, BarChart, Database, GitBranch, Server, Workflow } from 'lucide-react';

export function Projects() {
  return (
    <section id="work" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of data-driven solutions and interactive dashboards that showcase my expertise in creating intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <article className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-x-4">
                  <a href="#" className="btn btn-accent inline-flex items-center space-x-2">
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">PetScreening Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                A real-time analytics dashboard built with React and D3.js, providing insights into screening metrics and trends.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Code className="w-4 h-4" />
                  <span>React</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <BarChart className="w-4 h-4" />
                  <span>D3.js</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Database className="w-4 h-4" />
                  <span>Snowflake</span>
                </span>
              </div>
            </div>
          </article>

          {/* Project Card 2 */}
          <article className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                alt="Data Pipeline"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-x-4">
                  <a href="#" className="btn btn-accent inline-flex items-center space-x-2">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Data Pipeline Monitoring Tool</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                A comprehensive monitoring system for data pipelines, featuring real-time alerts and performance metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Code className="w-4 h-4" />
                  <span>Python</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Database className="w-4 h-4" />
                  <span>dbt</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <BarChart className="w-4 h-4" />
                  <span>Grafana</span>
                </span>
              </div>
            </div>
          </article>

          {/* Project Card 3 */}
          <article className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000"
                alt="Documentation Portal"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-x-4">
                  <a href="#" className="btn btn-accent inline-flex items-center space-x-2">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Interactive Documentation Portal</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                A modern documentation platform with interactive examples and API playground for internal tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Code className="w-4 h-4" />
                  <span>Next.js</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <GitBranch className="w-4 h-4" />
                  <span>MDX</span>
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                  <Server className="w-4 h-4" />
                  <span>Swagger</span>
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}