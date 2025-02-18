import React, { useState } from 'react';
import { ExternalLink, Award, CheckCircle2, Calendar } from 'lucide-react';

export function Certifications() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const featuredCertifications = [
    {
      title: "SnowPro Core Certification",
      issuer: "Snowflake Inc.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3mYS3WqCB3g/company-logo_100_100/company-logo_100_100/0/1688575708630/snowflake_computing_logo?e=1747872000&v=beta&t=OJDrB4qngOQF-8UziH6qORSz21Dxh9UaNepUhpjvDFc",
      date: "Nov 2023",
      credentialId: "87588509",
      highlights: [
        "Advanced data warehouse architecture",
        "Performance optimization",
        "Security and governance",
        "Data sharing implementation"
      ],
      skills: ["Cloud Data Platforms", "Data Architecture", "Performance Tuning"],
      credentialUrl: "https://achieve.snowflake.com/2415bdbc-b2be-4132-8052-00983c8980ad#acc.dtYh2L5W"
    },
    {
      title: "DBT Certified Developer",
      issuer: "dbt Labs",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGYxjMn8Ejunw/company-logo_100_100/company-logo_100_100/0/1630649588321/fishtown_analytics_logo?e=1747872000&v=beta&t=THhp9YRG-x6QOlDQOxd-pu2aY6Ah8yAzTze-hrfUFCQ",
      date: "Oct 2024",
      credentialId: "118982163",
      highlights: [
        "Analytics engineering best practices",
        "Data modeling expertise",
        "SQL transformation workflows",
        "Version control integration"
      ],
      skills: ["dbt Core", "Data Modeling", "Version Control", "CI/CD"],
      credentialUrl: "https://credentials.getdbt.com/0d8db9ea-4dbc-4af2-9698-7de2b484733b#acc.B10JVDow"
    },
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "IISE Manufacturing and Design Division",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQER0e_NtiH-WA/company-logo_100_100/company-logo_100_100/0/1631326014409?e=1747872000&v=beta&t=Dcx1VxkTiMrrjK6sueoZ8LwUy_77MAjYKWmyGRdhxAc",
      date: "Apr 2021",
      credentialId: "31815830",
      highlights: [
        "Process optimization methodologies",
        "Statistical analysis",
        "Project management",
        "Quality improvement"
      ],
      skills: ["Process Optimization", "Statistical Analysis", "Project Management"],
      credentialUrl: "#"
    }
  ];

  const additionalCertifications = [
    {
      title: "Summit 2023: Fresh Snow",
      issuer: "Snowflake Inc.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQF3mYS3WqCB3g/company-logo_100_100/company-logo_100_100/0/1688575708630/snowflake_computing_logo?e=1747872000&v=beta&t=OJDrB4qngOQF-8UziH6qORSz21Dxh9UaNepUhpjvDFc",
      date: "Apr 2023",
      // credentialId: "71711303",
      highlights: [
        "Snowpark Python development",
        "Performance optimization",
        "Data pipeline design"
      ],
      skills: ["Snowpark", "Python", "Data Engineering"],
      credentialUrl: "https://achieve.snowflake.com/2415bdbc-b2be-4132-8052-00983c8980ad#acc.pGW42yIs"
    },
    {
      title: "Pendo Essentials",
      issuer: "Pendo.io",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFutlgnPI0mzA/company-logo_100_100/company-logo_100_100/0/1739222187446/pendo_io_logo?e=1747872000&v=beta&t=F6puMG8wFF7-4Nh5GG-tfJDP1RzDQVKCBHSZijdEGSA",
      date: "Nov 2022",
      highlights: [
        "Product analytics",
        "User behavior tracking",
        "Feature adoption analysis"
      ],
      skills: ["Product Analytics", "User Behavior Analysis"],
      credentialUrl: "https://www.credly.com/badges/15c7c8c5-749e-4b60-827f-7cad0f5032df?source=linked_in_profile"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in data architecture, engineering, and process optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertifications.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-gray-100">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {cert.highlights && (
                <div className="mb-4 space-y-2">
                  {cert.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/5 text-xs rounded-full text-accent font-medium"
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
                className="inline-flex items-center text-sm text-accent hover:text-primary transition-colors group"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {additionalCertifications.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="btn btn-outline inline-flex items-center space-x-2"
            >
              <span>{showAllCertifications ? 'Show Less' : 'View More Certifications'}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}