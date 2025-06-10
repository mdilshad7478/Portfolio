import { Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Business Analyst',
      company: 'Interval, Calicut',
      period: 'Jul 2024 -- Present',
      technologies: ['Power BI', 'MySQL', 'Python', 'ETL', 'Data Modeling'],
      achievements: [
        'Designed and implemented optimized data pipelines, improving data accuracy by 30% and reducing processing time by 25%',
        'Developed interactive Power BI dashboards that provided real-time business insights, adopted by executive leadership for strategic decision-making',
        'Standardized data structures across multiple sources, enabling cross-functional analysis and reporting',
        'Collaborated with stakeholders to define KPIs and metrics that aligned with business objectives'
      ]
    },
    {
      title: 'Data Analytics Intern',
      company: 'National Sample Survey Office (NSSO), Srinagar',
      period: 'Jun 2023 -- Aug 2023',
      technologies: ['Statistical Analysis', 'Data Collection', 'Data Cleaning', 'Survey Methodology'],
      achievements: [
        'Contributed to the Periodic Labor Force Survey of India, a nationwide survey with over 100,000 respondents',
        'Performed data validation and cleaning procedures that improved dataset quality by 15%',
        'Assisted in statistical analysis of labor market trends, supporting policy recommendations',
        'Documented data collection processes and recommended improvements to field operations'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford Online',
      date: '2023',
      skills: ['Supervised Learning', 'Neural Networks', 'Model Evaluation']
    },
    {
      name: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft (Coursera)',
      date: '2023',
      skills: ['DAX', 'Data Modeling', 'Visualization Best Practices']
    },
    {
      name: 'Data Analytics with Python',
      issuer: 'NPTEL',
      date: '2022',
      skills: ['Pandas', 'NumPy', 'Exploratory Data Analysis']
    },
    {
      name: 'PwC Power BI Job Simulation',
      issuer: 'Forage',
      date: '2023',
      skills: ['Business Reporting', 'Dashboard Design', 'Client Requirements']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h4>
                      <p className="text-blue-700 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Award className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer} • {cert.date}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;