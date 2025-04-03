
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, BarChart2 } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IMAGES } from '@/constants/images';

export const CVSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6">
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
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-8 text-xl rounded-lg flex items-center gap-4"
              >
                <BarChart2 className="h-7 w-7" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
