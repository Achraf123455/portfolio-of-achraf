
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  reportLink: string;
  icon: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  reportLink,
  icon
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-700 mb-5">{description}</p>
        
        <div className="flex justify-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open(reportLink, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Voir compte rendu
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
