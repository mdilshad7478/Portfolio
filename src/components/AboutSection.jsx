import { BarChart3, Database, Brain, Code } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: 'Data Analysis',
      items: ['SQL (MySQL, PostgreSQL)', 'Python (Pandas, NumPy)', 'Statistical Analysis', 'ETL Processes'],
      icon: BarChart3
    },
    
    {//tyui

      category: 'Business Intelligence',
      items: ['Power BI', 'Tableau', 'Dashboard Development', 'KPI Tracking'],
      icon: Database
    },
    {
      category: 'Machine Learning',
      items: ['Predictive Modeling', 'Regression Analysis', 'Feature Engineering', 'Scikit-learn'],
      icon: Brain
    },
    {
      category: 'Tools & Platforms',
      items: ['Microsoft Excel', 'Google Sheets', 'Lucidchart', 'Figma', 'Git'],
      icon: Code
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">Professional Profile</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-l-4 border-blue-600 pl-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Results-driven Business Intelligence Analyst with expertise in transforming raw data into strategic insights.
              With a strong foundation in statistics and hands-on experience in data analytics, I specialize in creating
              data-driven solutions that enhance decision-making and operational efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines technical expertise with business acumen, enabling me to bridge the gap between data
              and business strategy. I have successfully delivered analytics solutions across healthcare, e-commerce,
              and retail sectors, consistently driving measurable improvements.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Visualization', 'Business Analytics', 'Predictive Modeling',
                  'Data Pipeline Optimization', 'Dashboard Development', 'Statistical Analysis',
                  'Requirements Gathering', 'Stakeholder Management'
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {skills.map(({ category, items, icon: Icon }) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium shadow-xs border border-gray-200 dark:border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;