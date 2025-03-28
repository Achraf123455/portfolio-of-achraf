
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="w-full h-[90vh] flex flex-col justify-center items-center text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-black/50">
        <img 
          src="/lovable-uploads/aaced353-03ad-43df-a824-e302bb91e7e4.png" 
          alt="Lycée Monge" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      <motion.div
        className="text-center px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Achraf ED-DAHMI
        </motion.h1>
        
        <motion.div 
          className="text-2xl md:text-3xl text-blue-100 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          BTS SIO option SISR
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={scrollToContent} 
            className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-all duration-300"
            aria-label="Défiler vers le bas"
          >
            <ArrowDown className="animate-bounce w-8 h-8" />
          </button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
