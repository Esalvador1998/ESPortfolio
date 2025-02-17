import React from 'react';
import { 
  Database, 
  Code, 
  BarChart, 
  GitBranch, 
  Server, 
  Workflow, 
  Brain, 
  LineChart 
} from 'lucide-react';

export function Skills() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Core competencies and technologies I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Data Engineering */}
          <div className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="w-5 h-5 text-accent transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold">Data Engineering</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-accent/70" />
                <span>Snowflake</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-accent/70" />
                <span>dbt</span>
              </li>
              <li className="flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-accent/70" />
                <span>Apache Airflow</span>
              </li>
              <li className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-accent/70" />
                <span>SQL</span>
              </li>
            </ul>
          </div>

          {/* Development */}
          <div className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-5 h-5 text-accent transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold">Development</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-accent/70" />
                <span>Python</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-accent/70" />
                <span>JavaScript/TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-accent/70" />
                <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-accent/70" />
                <span>Node.js</span>
              </li>
            </ul>
          </div>

          {/* Data Analysis */}
          <div className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
            <div className="flex items-center space-x-3 mb-4">
              <LineChart className="w-5 h-5 text-accent transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold">Data Analysis</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-accent/70" />
                <span>Pandas</span>
              </li>
              <li className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-accent/70" />
                <span>NumPy</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-accent/70" />
                <span>Jupyter</span>
              </li>
              <li className="flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-accent/70" />
                <span>Power BI</span>
              </li>
            </ul>
          </div>

          {/* Tools & Practices */}
          <div className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
            <div className="flex items-center space-x-3 mb-4">
              <Workflow className="w-5 h-5 text-accent transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold">Tools & Practices</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-accent/70" />
                <span>Git/GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-accent/70" />
                <span>CI/CD</span>
              </li>
              <li className="flex items-center space-x-2">
                <Server className="w-4 h-4 text-accent/70" />
                <span>Docker</span>
              </li>
              <li className="flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-accent/70" />
                <span>Agile/Scrum</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}