
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <motion.header 
      className="w-full py-6 px-4 flex justify-center bg-gradient-to-r from-blue-600 to-blue-500 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Achraf ED-DAHMI
        </motion.h1>
        <motion.div 
          className="text-lg md:text-xl text-blue-100 mt-2 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          BTS SIO option SISR
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
