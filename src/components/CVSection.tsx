
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export const CVSection = () => {
  return (
    <motion.section 
      className="w-full py-12 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <FileText className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Curriculum Vitae</h2>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center justify-center">
          <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl">
            Consultez mon CV pour découvrir mon parcours académique, mes compétences techniques 
            et mes certifications dans le domaine des infrastructures réseaux et systèmes.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg rounded-md shadow-md flex items-center"
              onClick={() => window.open("https://votre-lien-cv.pdf", "_blank")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Voir mon CV
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CVSection;
