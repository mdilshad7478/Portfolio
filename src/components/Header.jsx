import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, GraduationCap, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-gray-700' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Mohammed Dilshad M
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-white/20 dark:border-gray-700">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    scrollToSection(id);
                  }}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-300/50'
                      : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-purple-500/20 hover:backdrop-blur-sm'
                  }`}
                >
                  <Icon size={16} className="flex-shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  <span className="text-sm font-medium">{label}</span>
                  {activeSection === id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;