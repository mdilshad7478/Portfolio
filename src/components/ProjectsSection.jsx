import { useState } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Blinkit 360° Business Intelligence',
      subtitle: 'QuickCommerce Analytics Platform',
      date: 'Apr 2025',
      technologies: ['Power BI', 'SQL', 'Data Modeling', 'Figma', 'ETL', 'DAX'],
      description: 'Developed an end-to-end business intelligence solution for Blinkit, a leading quick-commerce platform in India. The platform provides actionable insights across operations, inventory management, and customer behavior analytics, serving 500+ business users across the organization.',
      features: [
        'Reduced time-to-insight by 40% through optimized data models and automated refreshes',
        'Implemented dynamic filters enabling drill-down analysis by region, product category, and time period',
        'Integrated with ERP system to provide real-time inventory tracking and demand forecasting',
        'Designed executive dashboard with KPI scorecards for C-level monitoring',
        'Created anomaly detection system for unusual sales patterns'
      ],
      impact: "Enabled data-driven decision making that contributed to 15% improvement in inventory turnover and 12% reduction in out-of-stock scenarios.",
      gradient: "from-blue-600 to-blue-800",
      screenshots: [
        "/images/blinkit-dashboard-1.png",
        "/images/blinkit-dashboard-2.png"
      ],
      challenges: "The main challenge was integrating 8 different data sources with varying schemas and refresh cycles into a single coherent model while maintaining performance for 500+ concurrent users.",
      learnings: "This project taught me the importance of stakeholder alignment in BI projects - ensuring the visualizations matched exactly what different departments needed. I also learned advanced DAX optimization techniques to handle large datasets efficiently."
    },
    {
      title: 'Healthcare ER Analytics',
      subtitle: 'Patient Flow Optimization',
      date: 'Jun 2024',
      technologies: ['Power BI', 'MySQL', 'Process Mining', 'Python', 'Tableau'],
      description: 'Comprehensive analysis of emergency room operations for a 500-bed hospital to identify bottlenecks and improve patient throughput. The solution processed 2+ million patient records to uncover operational insights.',
      features: [
        'Identified 22% variation in triage times between shifts, leading to staffing adjustments',
        'Developed predictive model for patient admission likelihood (85% accuracy)',
        'Created physician scorecards tracking quality metrics and efficiency',
        'Implemented real-time bed tracking system reducing bed assignment time by 30%',
        'Built patient wait time forecasting model with 90% accuracy'
      ],
      impact: "Contributed to 18% reduction in average patient wait times and improved satisfaction scores from 3.2 to 4.1 (out of 5) within 6 months of implementation.",
      gradient: "from-green-600 to-teal-600",
      screenshots: [
        "/images/healthcare-dashboard-1.png",
        "/images/healthcare-dashboard-2.png"
      ],
      challenges: "Working with sensitive healthcare data required special privacy considerations. We had to implement strict data anonymization while still maintaining analytical value.",
      learnings: "I gained deep understanding of healthcare operations and learned how to balance data utility with privacy requirements. The project also improved my process mining skills significantly."
    },
    {
      title: 'Flight Fare Prediction Engine',
      subtitle: 'Machine Learning Solution',
      date: 'Dec 2023 - Mar 2024',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Power BI', 'Flask'],
      description: 'Machine learning model to predict flight prices with 92% accuracy, helping travelers identify optimal booking times. The system processed 5+ years of historical flight data across 50+ airlines.',
      features: [
        'Engineered features capturing temporal patterns, route popularity, and fuel price trends',
        'Compared multiple regression algorithms with XGBoost delivering best performance',
        'Deployed as interactive dashboard showing price trends and prediction confidence intervals',
        'Built API endpoint for integration with travel websites',
        'Implemented automated data pipeline fetching latest fare data daily'
      ],
      impact: "Model achieved 92% accuracy in test set, outperforming commercial alternatives by 7%. The prediction engine helped users save an average of 18% on flight bookings.",
      gradient: "from-purple-600 to-indigo-600",
      screenshots: [
        "/images/flight-prediction-1.png",
        "/images/flight-prediction-2.png"
      ],
      challenges: "The biggest challenge was handling the volatility of flight prices and accounting for numerous external factors like holidays, events, and fuel price fluctuations.",
      learnings: "This project significantly improved my feature engineering skills and taught me how to productionize machine learning models. I also learned about creating intuitive visualizations for complex predictive models."
    },
    {
      title: 'AtliQ Hardware Sales Analytics',
      subtitle: 'Retail Performance Dashboard',
      date: 'Mar 2024',
      technologies: ['Power BI', 'SQL', 'DAX', 'Data Warehousing', 'Azure Synapse'],
      description: 'Sales performance tracking system for AtliQ Hardware, a retail chain with 150+ locations across India. The solution consolidated data from 8 regional databases into a unified analytics platform.',
      features: [
        'Developed executive summary with YTD performance vs targets and regional breakdown',
        'Implemented anomaly detection to flag unusual sales patterns for investigation',
        'Created inventory optimization module reducing carrying costs by 12%',
        'Built salesperson performance tracking with commission calculations',
        'Designed mobile-friendly views for field managers'
      ],
      impact: "Adopted as standard reporting tool by executive team, projected to contribute to 7% revenue growth through better inventory management and sales targeting.",
      gradient: "from-amber-600 to-orange-600",
      screenshots: [
        "/images/retail-dashboard-1.png",
        "/images/retail-dashboard-2.png"
      ],
      challenges: "The data quality from different regions varied significantly, requiring extensive data cleansing and standardization. We also had to handle conflicting business rules across regions.",
      learnings: "I learned advanced data modeling techniques to handle disparate data sources and gained experience in retail-specific metrics and KPIs. The project also improved my skills in creating user-friendly interfaces for non-technical users."
    },
    {
      title: 'Customer Churn Prediction',
      subtitle: 'Telecom Analytics Solution',
      date: 'Jan 2024',
      technologies: ['Python', 'PySpark', 'Logistic Regression', 'Random Forest', 'Tableau'],
      description: 'Developed a predictive model identifying customers at risk of churn for a telecom provider with 10+ million subscribers. The solution analyzed customer behavior patterns and service usage to predict churn likelihood.',
      features: [
        'Achieved 89% accuracy in predicting churn 30 days in advance',
        'Identified top 5 factors contributing to customer churn',
        'Integrated with marketing automation system for targeted retention campaigns',
        'Created executive dashboard showing churn trends and prevention effectiveness',
        'Implemented monthly model retraining pipeline'
      ],
      impact: "Reduced monthly churn rate from 2.1% to 1.4% within 3 months, saving an estimated $4M annually in customer acquisition costs.",
      gradient: "from-red-600 to-pink-600",
      screenshots: [
        "/images/churn-dashboard-1.png",
        "/images/churn-dashboard-2.png"
      ],
      challenges: "The highly imbalanced dataset (only 2% churn cases) required special sampling techniques and careful metric selection to avoid misleading accuracy scores.",
      learnings: "This project deepened my understanding of handling imbalanced datasets and the importance of business-aligned evaluation metrics beyond just accuracy. I also learned how to effectively communicate model insights to business stakeholders."
    },
    {
      title: 'Supply Chain Optimization',
      subtitle: 'Inventory Management System',
      date: 'Nov 2023',
      technologies: ['Python', 'Linear Programming', 'Tableau', 'SQL', 'AWS Lambda'],
      description: 'Optimization system for a manufacturing company with 5 production facilities and 200+ suppliers. The solution balanced inventory costs with service level requirements across the supply chain network.',
      features: [
        'Reduced total inventory costs by 17% while maintaining 98% service level',
        'Implemented multi-echelon inventory optimization model',
        'Created supplier performance dashboard with lead time analytics',
        'Developed automated reorder point calculations',
        'Built scenario planning tool for demand fluctuations'
      ],
      impact: "The system reduced inventory carrying costs by $2.3M annually while improving on-time delivery from 89% to 96%.",
      gradient: "from-emerald-600 to-cyan-600",
      screenshots: [
        "/images/supplychain-dashboard-1.png",
        "/images/supplychain-dashboard-2.png"
      ],
      challenges: "The complex interdependencies between different inventory locations and varying lead times required sophisticated modeling approaches beyond standard EOQ formulas.",
      learnings: "I gained expertise in supply chain optimization techniques and learned how to balance competing business objectives through mathematical modeling. The project also improved my skills in building optimization tools for non-technical users."
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Selected Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my most impactful projects. Click on any project to view detailed Project, screenshots, and learnings.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">{project.date}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 2 && (
                      <li className="text-sm text-blue-600 dark:text-blue-400">+ {project.features.length - 2} more achievements</li>
                    )}
                  </ul>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <button 
                  onClick={() => openModal(project)}
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity" 
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            
            {/* Modal content */}
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className={`h-2 bg-gradient-to-r ${selectedProject.gradient}`}></div>
              
              <div className="bg-white dark:bg-gray-800 px-6 pt-6 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{selectedProject.subtitle}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{selectedProject.date}</p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Project Overview</h4>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features & Achievements</h4>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 flex">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedProject.impact && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Business Impact</h4>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject.impact}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Project Screenshots</h4>
                        <div className="space-y-4">
                          {selectedProject.screenshots.map((screenshot, i) => (
                            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                              <img 
                                src={screenshot} 
                                alt={`${selectedProject.title} screenshot ${i + 1}`}
                                className="w-full h-auto object-contain"
                              />
                              <div className="bg-gray-50 dark:bg-gray-700 px-3 py-2 text-center">
                                <p className="text-xs text-gray-500 dark:text-gray-400">Figure {i+1}: {selectedProject.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {selectedProject.challenges && (
                      <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Challenges Faced</h4>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject.challenges}</p>
                      </div>
                    )}
                    
                    {selectedProject.learnings && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Key Learnings</h4>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject.learnings}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;