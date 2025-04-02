
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Server, Users, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { IMAGES } from '@/constants/images';

export const InternshipSection = () => {
  return (
    <motion.section 
      className="w-full py-12 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Stage Professionnel</h2>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-700">BuyBackFR</h3>
            <p className="text-gray-600">Durée : 10 semaines</p>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Lors de mon stage chez BuyBackFR, j'ai eu l'opportunité de mettre en pratique mes connaissances 
            théoriques et de contribuer activement aux opérations informatiques de l'entreprise.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Missions principales :</h4>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Server className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-800">Mise en place d'un serveur DHCP</h5>
                <p className="text-gray-700">Configuration et déploiement d'un serveur DHCP pour gérer l'attribution automatique des adresses IP au sein du réseau de l'entreprise.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Users className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-medium text-gray-800">Support informatique</h5>
                <p className="text-gray-700">Assistance technique aux utilisateurs, résolution des problèmes matériels et logiciels, maintenance préventive des postes de travail.</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300"
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-lg rounded-lg flex items-center gap-2"
                onClick={() => window.open(IMAGES.INTERNSHIP_CERTIFICATE, "_blank")}
              >
                <FileText className="h-5 w-5" />
                Voir attestation de stage
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-blue-100">
            <p className="text-gray-700 italic">
              Ce stage m'a permis de développer mes compétences techniques et relationnelles dans un environnement professionnel, 
              tout en me confrontant à des problématiques réelles d'infrastructure réseau.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InternshipSection;
