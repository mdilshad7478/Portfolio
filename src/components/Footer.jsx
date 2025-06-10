import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities and collaborations. Whether you have a project to discuss or just want to connect, feel free to reach out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-900/30 rounded-full flex items-center justify-center">
              <Mail className="text-blue-400" size={24} />
            </div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-gray-400 text-sm mb-4">mdilshad7478@gmail.com</p>
            <a
              href="mailto:mdilshad7478@gmail.com"
              className="inline-block mt-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
            >
              Send Message
            </a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-900/30 rounded-full flex items-center justify-center">
              <Phone className="text-blue-400" size={24} />
            </div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-gray-400 text-sm mb-4">+91 9562277478</p>
            <a
              href="tel:+919562277478"
              className="inline-block mt-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
            >
              Call Now
            </a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 bg-blue-900/30 rounded-full flex items-center justify-center">
              <MapPin className="text-blue-400" size={24} />
            </div>
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-gray-400 text-sm mb-4">Malappuram, Kerala, India</p>
            <a
              href="https://www.google.com/maps/place/Malappuram,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all"
            >
              View Map
            </a>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/mohammed-dilshad-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors hover:-translate-y-1 transform"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/mdilshad7478"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors hover:-translate-y-1 transform"
          >
            <Github size={18} />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mohammed Dilshad M. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;