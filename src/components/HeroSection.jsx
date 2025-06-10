import { Mail, Phone, Linkedin, Github, MapPin, Download, ArrowDown, Sparkles, Code, Database, BarChart3 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const skillIcons = [
    { icon: <Code className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />, label: "Development" },
    { icon: <Database className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />, label: "Data Analysis" },
    { icon: <BarChart3 className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />, label: "Visualization" }
  ];

  // Responsive adjustments
  const isMobile = windowWidth < 640;
  const isSmallMobile = windowWidth < 400;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 px-4 sm:px-6"
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/30" />
      
      {/* Dynamic Mesh Background - Reduced on mobile */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 dark:opacity-10 dark:sm:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 sm:from-blue-600/10 via-transparent to-purple-600/5 sm:to-purple-600/10" />
        {!isMobile && (
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
            }}
          />
        )}
      </div>

      {/* Floating Elements - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0, -25, 0],
            y: [0, 25, 40, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.05, 1, 0.95, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className={`absolute top-1/4 left-1/4 ${
            isSmallMobile ? 'w-16 h-16' : 
            isMobile ? 'w-20 h-20' : 
            'w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64'
          } rounded-full bg-gradient-to-br from-blue-400/15 to-indigo-600/15 blur-xl sm:blur-3xl`}
        />
        
        <motion.div 
          animate={{ 
            x: [0, -40, 0, 30, 0],
            y: [0, -20, -40, -10, 0],
            rotate: [0, -120, -240, -360],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: -5
          }}
          className={`absolute bottom-1/3 right-1/4 ${
            isSmallMobile ? 'w-20 h-20' : 
            isMobile ? 'w-24 h-24' : 
            'w-32 h-32 sm:w-56 sm:h-56 lg:w-72 lg:h-72'
          } rounded-full bg-gradient-to-br from-purple-400/15 to-blue-600/15 blur-xl sm:blur-3xl`}
        />

        {/* Floating Particles - Fewer on mobile */}
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            className={`absolute ${
              isSmallMobile ? 'w-1 h-1' : 'w-1.5 h-1.5 sm:w-2 sm:h-2'
            } rounded-full ${
              i % 3 === 0 ? 'bg-blue-400/40' : 
              i % 3 === 1 ? 'bg-indigo-400/40' : 'bg-purple-400/40'
            } shadow-sm`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="w-full max-w-7xl mx-auto relative z-10 px-2 sm:px-4"
        style={{ y }}
      >
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-10">
            <div className="relative inline-block">
              {/* Profile Picture with Enhanced Effects */}
              <motion.div 
                className={`relative ${
                  isSmallMobile ? 'w-20 h-20' : 
                  isMobile ? 'w-24 h-24' : 
                  'w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48'
                } mx-auto mb-4 sm:mb-6`}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-blue-500/20 sm:border-2 sm:border-blue-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Pulse Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-blue-400/30 sm:border-blue-400/50"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
    <motion.div 
  className="w-full h-full rounded-full overflow-hidden shadow-inner"
  whileHover={{ 
    scale: 1.03,
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.2, ease: "easeOut" }
  }}
>
  <img 
    src={`${process.env.PUBLIC_URL}/1.jpg`}
    alt="Mohammed Dilshad M" 
    className="w-full h-full object-cover object-center"
  />
</motion.div>



                
                {/* Status Indicator */}
                <motion.div 
                  className={`absolute bottom-1 right-1 ${
                    isSmallMobile ? 'w-2 h-2' : 'w-2.5 h-2.5 sm:w-3 sm:h-3'
                  } bg-green-400 rounded-full border border-white shadow-sm sm:shadow-lg`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating Skill Icons - Hidden on very small screens */}
              {!isSmallMobile && (
                <div className="hidden xs:block">
                  {skillIcons.map((skill, index) => (
                    <motion.div
                      key={index}
                      className={`absolute text-blue-600 dark:text-blue-400 ${
                        index === 0 ? `top-${isMobile ? '4' : '6'} left-${isMobile ? '2' : '4'}` :
                        index === 1 ? 'top-1/2 -translate-y-1/2 -right-2 xs:-right-4' :
                        `bottom-${isMobile ? '4' : '6'} left-${isMobile ? '2' : '4'}`
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5 + 2,
                        ease: "easeInOut"
                      }}
                    >
                      <div className={`bg-white/80 sm:bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm ${
                        isMobile ? 'p-1.5' : 'p-2 sm:p-2.5'
                      } rounded-full shadow-md sm:shadow-lg border border-gray-200/50 dark:border-gray-700/50`}>
                        {skill.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Name with Enhanced Animation */}
          <motion.div variants={itemVariants} className="mb-3 sm:mb-6 px-2 sm:px-4">
            <motion.h1 
              className={`font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight tracking-tight break-words ${
                isSmallMobile ? 'text-xl' : 
                isMobile ? 'text-2xl' : 
                'text-3xl sm:text-4xl lg:text-5xl'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {"Mohammed Dilshad M".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.03,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="inline-block hover:scale-110 hover:text-blue-600 transition-all duration-200"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Enhanced Animated Title */}
          <motion.div 
            variants={itemVariants} 
            className={`mb-4 sm:mb-8 ${
              isSmallMobile ? 'min-h-[1.5rem]' : 'min-h-[2rem] sm:min-h-[2.5rem]'
            } flex items-center justify-center px-2 sm:px-4`}
          >
            <div className="relative">
              <Sparkles className={`absolute ${
                isSmallMobile ? '-top-1 -left-1 w-2 h-2' : '-top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4'
              } text-yellow-400 animate-pulse`} />
              <TypeAnimation
                sequence={[
                  'Business Intelligence Analyst',
                  2000,
                  'Data Scientist', 
                  2000,
                  'Data Visualization Expert',
                  2000,
                  'SQL & Python Developer',
                  2000,
                  'Analytics Consultant',
                  2000
                ]}
                wrapper="span"
                speed={60}
                deletionSpeed={80}
                repeat={Infinity}
                className={`font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-center ${
                  isSmallMobile ? 'text-xs' : 
                  isMobile ? 'text-sm' : 
                  'text-base sm:text-lg md:text-xl'
                }`}
                cursor={true}
              />
              <Sparkles className={`absolute ${
                isSmallMobile ? '-bottom-1 -right-1 w-2 h-2' : '-bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4'
              } text-blue-400 animate-pulse`} style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-10 px-2 sm:px-6">
            <p className={`text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-light ${
              isSmallMobile ? 'text-xs' : 
              isMobile ? 'text-sm' : 
              'text-base sm:text-lg'
            }`}>
              Transforming complex data into{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">actionable insights</span>
              {' '}to drive business growth and operational efficiency through{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">advanced analytics</span>
              {' '}and visualization.
            </p>
          </motion.div>

          {/* Enhanced Divider */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center mb-6 sm:mb-10"
          >
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{ width: isSmallMobile ? '3rem' : isMobile ? '4rem' : '6rem sm:w-8rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.div 
              className={`${
                isSmallMobile ? 'mx-1 w-1.5 h-1.5' : 'mx-2 sm:mx-3 w-2 h-2'
              } bg-blue-500 rounded-full`}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{ width: isSmallMobile ? '3rem' : isMobile ? '4rem' : '6rem sm:w-8rem' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.div>

          {/* Enhanced Contact Cards */}
          <motion.div 
            variants={itemVariants}
            className={`grid ${
              isSmallMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-3 sm:gap-4'
            } mb-6 sm:mb-10 max-w-6xl mx-auto px-2`}
          >
            {[
              { icon: <Phone className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "+91 9562277478", href: "tel:+919562277478", color: "from-green-500 to-emerald-600" },
              { icon: <Mail className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "mdilshad7478@gmail.com", href: "mailto:mdilshad7478@gmail.com", color: "from-red-500 to-pink-600" },
              { icon: <MapPin className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "Malappuram, Kerala", href: null, color: "from-blue-500 to-indigo-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: isSmallMobile ? 0 : -2, scale: isSmallMobile ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.href ? (
                  <a href={item.href} className="group block">
                    <div className={`relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl ${
                      isSmallMobile ? 'p-2' : 'p-3 sm:p-4'
                    } shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className={`relative flex items-center ${
                        isSmallMobile ? 'space-x-1' : 'space-x-2 sm:space-x-3'
                      }`}>
                        <div className={`p-1.5 sm:p-2 rounded-lg ${
                          isSmallMobile ? 'p-1' : 'p-1.5 sm:p-2'
                        } bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`${
                            isSmallMobile ? 'text-xs' : 'text-sm sm:text-base'
                          } font-medium text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl ${
                    isSmallMobile ? 'p-2' : 'p-3 sm:p-4'
                  } shadow-md transition-all duration-300`}>
                    <div className={`flex items-center ${
                      isSmallMobile ? 'space-x-1' : 'space-x-2 sm:space-x-3'
                    }`}>
                      <div className={`p-1.5 sm:p-2 rounded-lg ${
                        isSmallMobile ? 'p-1' : 'p-1.5 sm:p-2'
                      } bg-gradient-to-br ${item.color} text-white shadow-md flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`${
                          isSmallMobile ? 'text-xs' : 'text-sm sm:text-base'
                        } font-medium text-gray-900 dark:text-white truncate`}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className={`flex ${
              isSmallMobile ? 'flex-col gap-2' : 'flex-row gap-3 sm:gap-4'
            } justify-center max-w-4xl mx-auto mb-8 sm:mb-12 px-2`}
          >
            {[
              { icon: <Linkedin className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "LinkedIn", shortText: "LI", color: "from-blue-600 to-blue-700", href: "https://www.linkedin.com/in/mohammed-dilshad-m/" },
              { icon: <Github className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "GitHub", shortText: "GH", color: "from-gray-800 to-gray-900", href: "https://github.com/mdilshad7478" },
              { icon: <Download className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />, text: "Resume", shortText: "CV", color: "from-indigo-600 to-purple-700", href: "/Mohammed Dilshad M -- Resume.pdf", download: true }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex-1 ${isSmallMobile ? '' : 'min-w-[100px] sm:min-w-[120px]'}`}
                whileHover={{ scale: isSmallMobile ? 1 : 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href={item.href}
                  target={!item.download ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  download={item.download ? "Mohammed_Dilshad_Resume.pdf" : null}
                  className={`group relative bg-gradient-to-r ${item.color} text-white ${
                    isSmallMobile ? 'px-3 py-2 text-xs' : 'px-4 sm:px-6 py-3 text-sm sm:text-base'
                  } rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSmallMobile ? 'space-x-1' : 'space-x-2 sm:space-x-3'
                  } shadow-md hover:shadow-lg overflow-hidden w-full`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className={`relative flex items-center ${
                    isSmallMobile ? 'space-x-1' : 'space-x-2'
                  }`}>
                    <motion.div
                      animate={{ rotate: item.download ? [0, 360] : 0 }}
                      transition={{ duration: 2, repeat: item.download ? Infinity : 0 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className={isSmallMobile ? 'text-xs' : ''}>{isSmallMobile ? item.shortText : item.text}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-gray-400 dark:text-gray-500"
          >
            <p className={`${isSmallMobile ? 'text-xs' : 'text-sm'} mb-2 sm:mb-3 font-medium`}>Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`p-1.5 rounded-full border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer ${
                isSmallMobile ? 'p-1' : ''
              }`}
            >
              <ArrowDown className={`${isSmallMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;