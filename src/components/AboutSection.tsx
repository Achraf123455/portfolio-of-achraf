
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const AboutSection = () => {
  return (
    <motion.section 
      className="w-full py-12 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <User className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">À propos de moi</h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            Je m'appelle Achraf ED-DAHMI, étudiant en BTS Services Informatiques aux Organisations (SIO) avec une 
            spécialisation en SISR (Solutions d'Infrastructure, Systèmes et Réseaux). Bienvenue sur mon portfolio 
            où vous pourrez découvrir mes travaux pratiques, mon CV, ainsi que mes expériences professionnelles.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Passionné par les infrastructures réseaux et systèmes, je développe mes compétences techniques 
            à travers des projets concrets et des expériences professionnelles formatrices.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
