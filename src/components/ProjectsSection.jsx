import { useState } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Blinkit 360° Business Intelligence',
      subtitle: 'QuickCommerce Analytics Platform',
      date: 'Apr 2025',
      technologies: ['Power BI', 'MySQL(Workbench)', 'Data Modeling', 'Figma', 'ETL', 'DAX','ODBC'],
      description: 'Built a comprehensive business intelligence dashboard for a fast-paced quick-commerce environment inspired by Blinkit. The project simulates real-world data challenges across multiple domains, providing interactive insights into operations, sales, inventory, customer behavior, and marketing performance.',
      features: [
        'Designed with Power BI, supported by MySQL backend and Figma for UI reference',
        'Implemented dynamic filters enabling drill-down analysis by region, product category, time period, customer segment etc',
        'Designed KPI cards for inventory, marketing, and customer metrics, enabling quick insights for stakeholders',
        'Reduced simulated time-to-insight by ~40% by optimizing data model structure and using auto-refresh pipelines',
        'Integrated inventory and order data to simulate a 12% potential reduction in stockouts',
        'Built the dashboard with capability to integrate ERP data for real-time inventory tracking and demand forecasting'


      ],
      impact: [
        'This project demonstrated how a well-designed dashboard can simulate real-world operational improvements. It showcased a potential 15% improvement in inventory turnover and a 12% reduction in stockouts through real-time visibility and restocking insights. The marketing analytics provided clarity on campaign effectiveness, while customer segmentation helped simulate retention strategies. By consolidating key metrics across inventory, customer behavior, and marketing, the dashboard enabled stakeholders to make faster, data-driven decisions.'
      ],
      gradient: "from-blue-600 to-blue-800",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Home.png`,
        `${process.env.PUBLIC_URL}/images/Overview.png`,
        `${process.env.PUBLIC_URL}/images/Sale Overview.png`,
        `${process.env.PUBLIC_URL}/images/Customer.png`,
        `${process.env.PUBLIC_URL}/images/Inventory.png`,
        `${process.env.PUBLIC_URL}/images/Feedback.png`,
        `${process.env.PUBLIC_URL}/images/Marketing.png`
      ],
      challenges: "The primary challenge was integrating multiple datasets with varying schemas and refresh patterns into a unified data model while maintaining dashboard performance. Designing efficient data relationships and optimizing DAX for interactivity required careful planning. Ensuring a smooth user experience across multiple report pages without real stakeholder feedback added complexity to the design process.",
      learnings: "This project enhanced my ability to build scalable BI dashboards aligned with business goals. I learned to structure efficient data models, design stakeholder-focused visuals, and apply Power BI performance tuning. It also strengthened my understanding of cross-functional KPIs and introduced me to advanced DAX techniques for handling large datasets smoothly."
    },
    {
      title: 'Healthcare ER Analytics',
      subtitle: 'Patient Flow Optimization',
      date: 'Jun 2024',
      technologies: ['Power BI', 'MySQL', 'DAX', 'Python', 'ETL','Data Modelling'],
      description: 'Developed an interactive Power BI dashboard to analyze emergency room (ER) operations and improve patient flow and resource allocation. The solution explored trends in patient wait times, satisfaction scores, referral patterns, and visit demographics to uncover operational inefficiencies and enhance care delivery.',
      features: [
        'Analyzed average wait times across different appointment types and time periods to identify bottlenecks',
        'Investigated patient satisfaction trends by demographic segments to support quality improvement',
        'Tracked monthly and yearly ER visits to uncover demand trends and inform staffing decisions',
        'Explored referral vs. walk-in behavior to optimize departmental workflows',
        'Created visual breakdowns of visits by age, race, and weektype to support inclusive care strategies',
        'Identified gaps in feedback collection through “Service Not Rated” patterns'
      ],
      impact: "The insights provided by the dashboard could support hospital administrators in improving operational efficiency, reducing patient wait times, and enhancing overall patient experience. The project demonstrates how real-time analytics can optimize emergency department performance through data-driven decisions.",
      gradient: "from-green-600 to-teal-600",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Patients ER Visit Dashboard.png`
      ],
      challenges: "The dataset contained missing values and inconsistent entries that required extensive data cleaning and validation. Creating a cohesive model with multiple categorical variables and time-based metrics also posed challenges in dashboard design and performance optimization.",
      learnings: "This project deepened my understanding of healthcare analytics and operational KPIs in emergency services. I improved my skills in designing meaningful visuals for non-technical users and applied DAX to generate time-based insights. It also taught me how data visualization can directly support service quality improvements."
    },
    {
      title: 'MSc Project: Flight Fare Prediction and Analysis',
      subtitle: 'Machine Learning-Powered Travel Pricing Insights',
      date: 'Dec 2023 - Mar 2024',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Power BI', 'Flask'],
      description: 'Developed a machine learning model to predict flight fares based on historical data and visualized insights through an interactive Power BI dashboard. The project enables users to explore pricing patterns, identify the best times to book, and understand key drivers influencing flight prices.',
      features: [
        'Performed end-to-end data preprocessing including cleaning, encoding, and feature engineering on flight data',
        'Trained and compared multiple regression models (Random Forest, XGBoost, Ridge, Lasso etc) to predict airfare',
        'Built a user-friendly Power BI dashboard with dynamic filters to display trends by airline, class, stops, and travel time',
        'Identified optimal booking periods, cheapest and fastest airlines, and pricing variation by class and stopovers',
        'Implemented automated data pipeline fetching latest fare data daily'
      ],
      impact: "The solution enhances decision-making for travelers by simplifying complex airfare data. It empowers users to reduce costs by understanding price trends and booking strategically. The dashboard also demonstrates how machine learning can improve transparency and planning in the travel sector.",
      gradient: "from-purple-600 to-indigo-600",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Screenshot 2024-04-04 041740.png`,
        `${process.env.PUBLIC_URL}/images/Screenshot 2024-04-04 034527.png`
      ],
      challenges: "Managing high variability in pricing due to external factors like holidays, seasons, and stopovers was a major challenge. Also, ensuring consistency across multiple categorical features required careful data wrangling and preprocessing.",
      learnings: "This project improved my skills in supervised learning, model evaluation, and visual storytelling. I gained experience in comparing ML models and learned how to transform complex predictive insights into a clear, user-focused dashboard experience."
    },
    {
      title: 'AtliQ Hardware Sales Analytics',
      subtitle: 'Retail Sales & Performance Dashboard',
      date: 'Mar 2024',
      technologies: ['Power BI', 'MySQL' , 'SQL ETL' , 'Power Query' , 'DAX', 'Data Modeling'],
      description: 'Designed and developed a comprehensive Power BI dashboard to analyze AtliQ Hardware’s sales across multiple regions in India. The project involved building a clean, integrated data model by extracting, transforming, and loading (ETL) sales data from MySQL databases, enabling better visibility into sales trends, regional performance, and product-level insights.',
      features: [
        'Built clean, integrated star schema data model from multiple raw datasets using SQL and Power Query',
        'Converted USD currency data to INR for accurate financial analysis reflecting India-only operations',
        'Developed interactive Power BI reports with drill-downs for regional, product, and time-based sales analysis',
        'Enabled real-time insights into quarterly growth, regional performance gaps, and inventory trends'
      ],
      impact: "The dashboard replaced manual, verbal reporting and Excel-based analyses, providing the sales management team with accurate, timely insights to make data-driven decisions. The solution is expected to contribute to at least 7% revenue growth by uncovering hidden sales issues and optimizing inventory and regional sales strategies.",
      gradient: "from-amber-600 to-orange-600",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Sales Insights Dashboard.png`
      ],
      challenges: "Handled messy data with duplicates, inconsistent currency formats, and null values requiring thorough cleansing and normalization. Integrated disparate regional datasets with varying quality and business rules into a cohesive analytics model. Ensured the dashboard performed efficiently despite complex joins and large volumes of data.",
      learnings: "Gained hands-on experience in ETL process, complex SQL querying, and designing star schema data models for retail analytics. Improved skills in transforming raw data into actionable sales insights and delivering user-friendly BI solutions tailored for non-technical stakeholders."
    },
    {
      title: 'PwC Power BI Job Simulation',
      subtitle: 'Virtual Internship – Business Intelligence Use Cases',
      date: 'May 2024',
      technologies: ['Power BI' , 'Power Query' , 'DAX' , 'Data Cleaning' , 'Data Modelling'],
      description: 'Completed a structured, scenario-based Power BI virtual internship by PwC Switzerland through Forage. The simulation focused on building dashboards for different departments including Call Center Operations, Customer Retention, and Diversity & Inclusion, demonstrating how BI tools can drive operational and strategic decisions.',
      features: [
        'Task 1 : Call Center Analytics: Built KPIs for call volume, agent performance, answer speed, and customer satisfaction',
        'Task 2 : Customer Retention: Created churn risk dashboard based on customer demographics and behavioral patterns',
        'Task 3 : Diversity & Inclusion: Developed HR dashboard showcasing gender balance, promotions, and hiring diversity',
        'Applied Power Query for data cleaning and DAX for KPI generation across three different business domains',
        'Delivered stakeholder-ready reports aligning with real-world executive expectations'
      ],
      impact: "Demonstrated how data visualization can support strategic decision-making in customer operations and human resources. The dashboards highlighted process inefficiencies, helped in identifying churn risks, and provided transparency in diversity metrics.",
      gradient: "from-red-600 to-pink-600",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 152737.png`,
       `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 153748.png`,
       `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 153821.png`,
       `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 153850.png`,
       `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 153912.png`,
       `${process.env.PUBLIC_URL}/images/Screenshot 2025-06-21 153948.png`
      ],
      challenges: "Each dataset had unique formatting issues requiring domain-specific cleaning. Balancing visual clarity while serving different departments (support, retention, HR) required adaptive dashboard design.",
      learnings: "This project improved my ability to translate business questions into data-driven dashboards. I also learned to design visuals tailored to different stakeholders—agents, managers, and executives—while applying cross-domain BI principles."
    },
    {
      title: 'Accenture Data Analytics and Visualization',
      subtitle: 'Content Strategy Insights for Social Media Client',
      date: 'May 2024',
      technologies: ['Python', 'Linear Programming', 'Tableau', 'SQL', 'AWS Lambda'],
      description: 'Simulated the role of a Data Analyst at Accenture to help a social media client understand user engagement and content performance. Worked with multiple datasets to identify top-performing content categories and usage trends, and delivered findings through a compelling PowerPoint presentation and dashboard.',
      features: [
        'Cleaned and modeled 3 datasets (Reactions, Content, Reaction Types) to build a unified analysis table',
        'Identified the top 5 content categories based on reaction scores using Excel formulas like VLOOKUP, SUMIF, and PivotTables',
        'Created interactive visualizations in Power BI to display content trends and peak engagement periods',
        'Highlighted the month with the most user activity and explored content engagement by type and volume',
        'Designed and delivered a professional PowerPoint presentation summarizing findings for internal stakeholders and the client'
      ],
      impact: "The project uncovered actionable insights that would allow the social media client to refine its content strategy, improve engagement rates, and prioritize high-performing content categories in preparation for IPO positioning.",
      gradient: "from-emerald-600 to-cyan-600",
      screenshots: [
        `${process.env.PUBLIC_URL}/images/Accenture Dashboard.png`
      ],
      challenges: "Merging and cleaning inconsistent datasets across multiple sources while maintaining data integrity was a key challenge. Aligning content categories across tables and ensuring accurate aggregation required careful formula design and validation.",
      learnings: "This simulation sharpened my skills in Excel-based data modeling, Power BI dashboard creation, and presentation storytelling. I also improved my ability to communicate technical insights to non-technical stakeholders through compelling visuals and summaries."
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
            Here are some of my most impactful projects. Click on any project to view details, screenshots, and key learnings.
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