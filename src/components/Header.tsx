
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Header = () => {
  return (
    <motion.header 
      className="w-full py-8 px-4 flex justify-center bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Achraf ED-DAHMI
          </h1>
          <div className="text-xl md:text-2xl text-blue-100">
            BTS SIO option SISR
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
