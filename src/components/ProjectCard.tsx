
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
    if (title === "DHCP" || title === "LDAP" || title === "Deploiement Wifi") {
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

      {/* LDAP Report Dialog */}
      {title === "LDAP" && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Installation et configuration d'un annuaire LDAP
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <img 
                src={IMAGES.LDAP_REPORT_1} 
                alt="LDAP Report Page 1"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_2} 
                alt="LDAP Report Page 2"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_3} 
                alt="LDAP Report Page 3"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_4} 
                alt="LDAP Report Page 4"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_5} 
                alt="LDAP Report Page 5"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_6} 
                alt="LDAP Report Page 6"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_7} 
                alt="LDAP Report Page 7"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_8} 
                alt="LDAP Report Page 8"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_9} 
                alt="LDAP Report Page 9"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.LDAP_REPORT_10} 
                alt="LDAP Report Page 10"
                className="w-full rounded-md shadow-sm"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Deploiement Wifi Report Dialog */}
      {title === "Deploiement Wifi" && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Déploiement d'un WiFi public
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <img 
                src={IMAGES.WIFI_REPORT_1} 
                alt="Wifi Report Page 1"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_2} 
                alt="Wifi Report Page 2"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_3} 
                alt="Wifi Report Page 3"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_4} 
                alt="Wifi Report Page 4"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_5} 
                alt="Wifi Report Page 5"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_6} 
                alt="Wifi Report Page 6"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_7} 
                alt="Wifi Report Page 7"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_8} 
                alt="Wifi Report Page 8"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_9} 
                alt="Wifi Report Page 9"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_10} 
                alt="Wifi Report Page 10"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_11} 
                alt="Wifi Report Page 11"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_12} 
                alt="Wifi Report Page 12"
                className="w-full rounded-md shadow-sm"
              />
              <img 
                src={IMAGES.WIFI_REPORT_13} 
                alt="Wifi Report Page 13"
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
