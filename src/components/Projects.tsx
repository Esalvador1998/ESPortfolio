import React, { useState } from 'react';
import { ExternalLink, Code, BarChart, Database, GitBranch, Server, Workflow } from 'lucide-react';

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: "PetScreening Analytics Dashboard",
      description: "A real-time analytics dashboard built with React and D3.js, providing insights into screening metrics and trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "D3.js", "Snowflake"],
      icons: [<Code className="w-4 h-4" />, <BarChart className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "Data Pipeline Monitoring Tool",
      description: "A comprehensive monitoring system for data pipelines, featuring real-time alerts and performance metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "dbt", "Grafana"],
      icons: [<Code className="w-4 h-4" />, <Database className="w-4 h-4" />, <BarChart className="w-4 h-4" />]
    },
    {
      title: "Interactive Documentation Portal",
      description: "A modern documentation platform with interactive examples and API playground for internal tools.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Next.js", "MDX", "Swagger"],
      icons: [<Code className="w-4 h-4" />, <GitBranch className="w-4 h-4" />, <Server className="w-4 h-4" />]
    }
  ];

  const additionalProjects = [
    {
      title: "ETL Performance Optimizer",
      description: "Automated tool for analyzing and optimizing ETL job performance in data warehouses.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "Apache Airflow", "PostgreSQL"],
      icons: [<Code className="w-4 h-4" />, <Workflow className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "Data Quality Dashboard",
      description: "Real-time monitoring system for data quality metrics and anomaly detection.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "TypeScript", "dbt"],
      icons: [<Code className="w-4 h-4" />, <BarChart className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "API Integration Platform",
      description: "Centralized platform for managing and monitoring third-party API integrations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Node.js", "Express", "Redis"],
      icons: [<Server className="w-4 h-4" />, <Code className="w-4 h-4" />, <Database className="w-4 h-4" />]
    }
  ];

  const allProjects = [...featuredProjects, ...additionalProjects];
  const displayedProjects = showAllProjects ? allProjects : featuredProjects;

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
          {displayedProjects.map((project, index) => (
            <article key={index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-flex items-center space-x-1">
                      {project.icons[techIndex]}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="btn btn-outline inline-flex items-center space-x-2"
          >
            <span>{showAllProjects ? 'Show Less' : 'View All Projects'}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}