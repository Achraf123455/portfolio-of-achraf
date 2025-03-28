
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 bg-gray-900 text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Achraf ED-DAHMI</h3>
            <p className="text-gray-400 mt-1">BTS SIO option SISR</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="mailto:votre-email@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Achraf ED-DAHMI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
