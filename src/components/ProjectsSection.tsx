
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Folder, Server, Network, Database, Cloud } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "DNS",
      description: "Configuration et déploiement d'un serveur DNS (Domain Name System) pour résoudre les noms de domaine en adresses IP et inversement.",
      reportLink: "#",
      icon: <Network className="h-6 w-6" />
    },
    {
      title: "DHCP",
      description: "Mise en place d'un serveur DHCP (Dynamic Host Configuration Protocol) pour l'attribution automatique des adresses IP aux appareils du réseau.",
      reportLink: "#",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "FOG",
      description: "Implémentation de FOG (Free Open Ghost) pour le déploiement et la gestion d'images système sur plusieurs postes de travail.",
      reportLink: "#",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Active Directory",
      description: "Configuration et administration d'un service d'annuaire Active Directory pour la gestion centralisée des utilisateurs et ressources réseau.",
      reportLink: "#",
      icon: <Folder className="h-6 w-6" />
    },
    {
      title: "Nextcloud",
      description: "Déploiement d'une solution Nextcloud pour le stockage et le partage sécurisé de fichiers au sein d'une organisation.",
      reportLink: "#",
      icon: <Cloud className="h-6 w-6" />
    }
  ];

  return (
    <motion.section 
      className="w-full py-12 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Folder className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Travaux Pratiques</h2>
        </div>
        
        <p className="text-lg text-gray-700 mb-8">
          Découvrez ci-dessous les différents travaux pratiques que j'ai réalisés dans le cadre de ma formation en BTS SIO option SISR.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              reportLink={project.reportLink}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
