import React from 'react';
import { Database, Code, BarChart, Shield, Cloud, Brain, Workflow, PenTool as Tool, Zap, Share2, LineChart, Lock, Boxes, GitBranch, Cog, Repeat, Server, Webhook, Mail, CreditCard, FileJson, BarChart as ChartBar, Activity, Eye, ShieldCheck, FolderGit, Bot } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Data Engineering & Architecture",
      icon: <Database className="w-5 h-5 text-accent" />,
      skills: [
        { name: "Snowflake", icon: <Boxes className="w-4 h-4" />, desc: "Performance tuning, Data Sharing" },
        { name: "dbt", icon: <GitBranch className="w-4 h-4" />, desc: "Modeling, Exposures" },
        { name: "Airbyte", icon: <Cog className="w-4 h-4" />, desc: "Data Ingestion" },
        { name: "Hightouch", icon: <Repeat className="w-4 h-4" />, desc: "Reverse ETL" },
        { name: "SQL", icon: <Database className="w-4 h-4" />, desc: "Advanced Query Optimization" },
        { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, desc: "Performance tuning" }
      ]
    },
    {
      title: "Development & APIs",
      icon: <Code className="w-5 h-5 text-accent" />,
      skills: [
        { name: "Python", icon: <Code className="w-4 h-4" />, desc: "API Development" },
        { name: "JavaScript/TypeScript", icon: <Code className="w-4 h-4" />, desc: "Web Development" },
        { name: "React & Node.js", icon: <Server className="w-4 h-4" />, desc: "Full Stack" },
        { name: "GraphQL", icon: <Webhook className="w-4 h-4" />, desc: "API Integration" },
        { name: "SendGrid", icon: <Mail className="w-4 h-4" />, desc: "Email APIs" },
        { name: "Stripe", icon: <CreditCard className="w-4 h-4" />, desc: "Payments" },
        { name: "Postman & Swagger", icon: <FileJson className="w-4 h-4" />, desc: "API Testing" }
      ]
    },
    {
      title: "Data Analytics & Visualization",
      icon: <LineChart className="w-5 h-5 text-accent" />,
      skills: [
        { name: "Power BI & Tableau", icon: <ChartBar className="w-4 h-4" />, desc: "Data Storytelling" },
        { name: "Amplitude", icon: <Activity className="w-4 h-4" />, desc: "Product Analytics" },
        { name: "Pendo & Chameleon", icon: <Eye className="w-4 h-4" />, desc: "User Analytics" },
        { name: "Monte Carlo", icon: <Activity className="w-4 h-4" />, desc: "Data Observability" }
      ]
    },
    {
      title: "Security & Data Governance",
      icon: <Lock className="w-5 h-5 text-accent" />,
      skills: [
        { name: "Snowflake RBAC", icon: <ShieldCheck className="w-4 h-4" />, desc: "Access Control" },
        { name: "Metadata Management", icon: <Database className="w-4 h-4" />, desc: "Data Catalog" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5 text-accent" />,
      skills: [
        { name: "AWS", icon: <Cloud className="w-4 h-4" />, desc: "S3, Storage" },
        { name: "Supabase", icon: <Database className="w-4 h-4" />, desc: "Backend as a Service" },
        { name: "CI/CD", icon: <Repeat className="w-4 h-4" />, desc: "Automated Deployments" },
        { name: "Git/GitHub", icon: <FolderGit className="w-4 h-4" />, desc: "Version Control" }
      ]
    },
    {
      title: "LLM & AI Applications",
      icon: <Brain className="w-5 h-5 text-accent" />,
      skills: [
        { name: "LangChain", icon: <Bot className="w-4 h-4" />, desc: "LLM Applications" },
        { name: "Vector Databases", icon: <Database className="w-4 h-4" />, desc: "AI Data Storage" }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-2">
            <div className="w-12 h-[2px] bg-accent"></div>
            <Zap className="w-6 h-6 text-accent" />
            <div className="w-12 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across data engineering, development, and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start space-x-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                  >
                    <div className="mt-1 text-accent">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="font-medium">{skill.name}</span>
                      {skill.desc && (
                        <span className="text-gray-500 text-xs block">
                          {skill.desc}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}