import React, { useState } from 'react';
import { ExternalLink, Award, Database, Code, BarChart, Brain } from 'lucide-react';

export function Certifications() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const featuredCertifications = [
    {
      title: "SnowPro Core Certification",
      issuer: "Snowflake Inc.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3mYS3WqCB3g/company-logo_100_100/company-logo_100_100/0/1688575708630/snowflake_computing_logo?e=1747872000&v=beta&t=OJDrB4qngOQF-8UziH6qORSz21Dxh9UaNepUhpjvDFc",
      date: "Nov 2023",
      credentialId: "87588509",
      description: "Advanced proficiency in Snowflake's data cloud platform, including architecture, performance optimization, and security best practices.",
      skills: ["Cloud Computing", "Databases", "Snowflake"],
      credentialUrl: "#"
    },
    {
      title: "DBT Certified Developer",
      issuer: "dbt Labs",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGYxjMn8Ejunw/company-logo_100_100/company-logo_100_100/0/1630649588321/fishtown_analytics_logo?e=1747872000&v=beta&t=THhp9YRG-x6QOlDQOxd-pu2aY6Ah8yAzTze-hrfUFCQ",
      date: "Oct 2024",
      credentialId: "11982163",
      description: "Expert-level knowledge in building modular, maintainable data transformations and implementing analytics engineering best practices.",
      skills: ["Data Build Tool (DBT)", "SQL", "Analytics Engineering", "ETL"],
      credentialUrl: "#"
    },
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "IISE Manufacturing and Design Division",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQER0e_NtiH-WA/company-logo_100_100/company-logo_100_100/0/1631326014409?e=1747872000&v=beta&t=Dcx1VxkTiMrrjK6sueoZ8LwUy_77MAjYKWmyGRdhxAc",
      date: "Apr 2021",
      credentialId: "31513033",
      description: "Expertise in process improvement methodologies, statistical analysis, and project management for operational excellence.",
      skills: ["Process Improvement", "Statistical Analysis", "Project Management"],
      credentialUrl: "#"
    }
  ];

  const additionalCertifications = [
    {
      title: "Summit 2023: Fresh Snow",
      issuer: "Snowflake Inc.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3mYS3WqCB3g/company-logo_100_100/company-logo_100_100/0/1688575708630/snowflake_computing_logo?e=1747872000&v=beta&t=OJDrB4qngOQF-8UziH6qORSz21Dxh9UaNepUhpjvDFc",
      date: "Apr 2023",
      credentialId: "71711303",
      description: "Foundational knowledge of data transformation principles and dbt core concepts.",
      skills: ["Performance Tuning", "Snowpark Python"],
      credentialUrl: "#"
    },
    {
      title: "Pendo Essentials",
      issuer: "Pendo.io",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFutlgnPI0mzA/company-logo_100_100/company-logo_100_100/0/1739222187446/pendo_io_logo?e=1747872000&v=beta&t=F6puMG8wFF7-4Nh5GG-tfJDP1RzDQVKCBHSZijdEGSA",
      date: "Nov 2022",
      description: "Comprehensive understanding of Snowflake database architecture and operations.",
      skills: ["Snowflake", "Data Warehousing"],
      credentialUrl: "#"
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      date: "Nov 2022",
      description: "Advanced SQL querying and database management skills.",
      skills: ["SQL", "Database Management"],
      credentialUrl: "#"
    }
  ];

  const displayedCertifications = showAllCertifications 
    ? [...featuredCertifications, ...additionalCertifications]
    : featuredCertifications;

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-2">
            <div className="w-12 h-[2px] bg-accent"></div>
            <Award className="w-6 h-6 text-accent" />
            <div className="w-12 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements in data architecture and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertifications.map((cert, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-32 relative">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
              
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/5 text-xs rounded-full text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {cert.credentialId && (
                <div className="text-xs text-gray-500 mb-4">
                  Credential ID: {cert.credentialId}
                </div>
              )}
              
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-accent hover:text-primary transition-colors"
              >
                <span>Show Credential</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllCertifications(!showAllCertifications)}
            className="btn btn-outline inline-flex items-center space-x-2"
          >
            <span>{showAllCertifications ? 'Show Less' : 'View More Certifications'}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}