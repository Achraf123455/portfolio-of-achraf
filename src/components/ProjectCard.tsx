
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { IMAGES } from '@/constants/images';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const handleReportButtonClick = () => {
    if (title === "DHCP") {
      setIsDialogOpen(true);
    } else {
      window.open(reportLink, "_blank");
    }
  };

  return (
    <>
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
                onClick={handleReportButtonClick}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Voir compte rendu
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* DHCP Report Dialog */}
      {title === "DHCP" && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Mise en place d'un serveur DHCP
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <img 
                src={IMAGES.DHCP_REPORT_1} 
                alt="DHCP Report Page 1"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.DHCP_REPORT_2} 
                alt="DHCP Report Page 2"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.DHCP_REPORT_3} 
                alt="DHCP Report Page 3"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.DHCP_REPORT_4} 
                alt="DHCP Report Page 4"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.DHCP_REPORT_5} 
                alt="DHCP Report Page 5"
                className="w-full rounded-md shadow-sm"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProjectCard;
