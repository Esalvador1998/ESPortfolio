import React, { useState } from 'react';
import { ExternalLink, Code, BarChart, Database, GitBranch, Server, Workflow } from 'lucide-react';

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      title: "FinanceFlow",
      description: "A mobile web app for personal finance with investment forecasting and real-time Plaid integration.",
      image: "/personalfinanceapp.png",
      liveUrl: "https://financeflow-demo.netlify.app",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      icons: [<Code className="w-4 h-4" />, <BarChart className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "ForecastArc",
      description: "A future‑worth and mortgage calculator that explores what‑if scenarios for smarter financial planning.",
      image: "/forecastarc.png",
      liveUrl: "https://forecastarc-demo.netlify.app",
      technologies: ["React", "TypeScript", "Supabase"],
      icons: [<Code className="w-4 h-4" />, <Database className="w-4 h-4" />, <BarChart className="w-4 h-4" />]
    },
    {
      title: "Aurora Effect",
      description: "A Three.js interactive experience that simulates dynamic aurora colors with mouse and touch control.",
      image: "/interactive1.png",
      liveUrl: "https://aurora-effect-demo.netlify.app",
      technologies: ["Three.js", "JavaScript", "CSS"],
      icons: [<Code className="w-4 h-4" />, <GitBranch className="w-4 h-4" />, <Server className="w-4 h-4" />]
    }
  ];

  const additionalProjects = [
    {
      title: "ScaleTap",
      description: "A fast, interactive game that teaches the four core business metrics—LTV, funnel, cost, and conversion—to sharpen strategic thinking.",
      image: "/educationalpillars.png",
      liveUrl: "https://scaletap-game.netlify.app",
      technologies: ["React", "Vite", "Game Mechanics"],
      icons: [<Code className="w-4 h-4" />, <Workflow className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "Predicting Euro 2024 with Snowflake ML",
      description: "Real-time monitoring system for data quality metrics and anomaly detection.",
      image: "/mlproject.png",
      liveUrl: "https://euro2024-prediction.netlify.app",
      technologies: ["Snowflake ML", "Snowpark", "Python"],
      icons: [<Code className="w-4 h-4" />, <BarChart className="w-4 h-4" />, <Database className="w-4 h-4" />]
    },
    {
      title: "GitHub Portfolio",
      description: "A central hub showcasing my other projects and code contributions.",
      image: "/github.png",
      liveUrl: "https://github.com/Esalvador1998",
      technologies: ["Git"],
      icons: [<Server className="w-4 h-4" />, <Code className="w-4 h-4" />, <Database className="w-4 h-4" />]
    }
  ];

  const allProjects = [...featuredProjects, ...additionalProjects];
  const displayedProjects = showAllProjects ? allProjects : featuredProjects;

  return (
    <section id="work" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Projects</h2>
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
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent inline-flex items-center space-x-2"
                      onClick={(e) => e.stopPropagation()}
                    >
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