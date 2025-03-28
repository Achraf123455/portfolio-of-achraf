
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

export const CVSection = () => {
  return (
    <motion.section 
      className="w-full py-10 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md shadow-md flex items-center gap-3"
            onClick={() => window.open("https://votre-lien-cv.pdf", "_blank")}
          >
            <FileText className="h-6 w-6" />
            Voir mon CV
            <ExternalLink className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CVSection;
