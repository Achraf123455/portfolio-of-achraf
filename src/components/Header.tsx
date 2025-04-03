
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/constants/images';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const Header = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      {/* White line at the top of the page */}
      <div className="w-full h-2 bg-white"></div>
      
      <motion.header 
        className="w-full h-[90vh] flex flex-col justify-center items-center text-white relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background overlay with tech image */}
        <div className="absolute inset-0">
          <img 
            src={IMAGES.TECH_BACKGROUND}
            alt="Technology background with laptop and data visualizations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Button to open skills chart */}
        <div className="absolute top-4 right-4 z-20">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="font-medium">
                Voir tableau de compétence
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-4xl overflow-y-auto" side="right">
              <div className="flex flex-col gap-4 p-2">
                <h2 className="text-xl font-bold text-center">Tableau de compétence</h2>
                <div className="flex flex-col gap-4">
                  <img 
                    src={IMAGES.SKILLS_CHART_1} 
                    alt="Tableau de compétence 1" 
                    className="w-full rounded-lg shadow-md"
                  />
                  <img 
                    src={IMAGES.SKILLS_CHART_2} 
                    alt="Tableau de compétence 2" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cpath fill=%22%23ffffff10%22 d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22%3E%3C/path%3E%3C/svg%3E')] opacity-20"></div>
        
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
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
