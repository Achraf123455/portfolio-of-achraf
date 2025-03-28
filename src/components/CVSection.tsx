
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

export const CVSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-xl rounded-lg flex items-center gap-4"
            onClick={() => window.open("https://votre-lien-cv.pdf", "_blank")}
          >
            <FileText className="h-7 w-7" />
            Voir mon CV
            <ExternalLink className="h-5 w-5 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
