
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/CVSection';
import InternshipSection from '@/components/InternshipSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <motion.div
          id="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <CVSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <InternshipSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
