
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/CVSection';
import InternshipSection from '@/components/InternshipSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <ScrollArea className="flex-grow">
        <main>
          <AboutSection />
          <CVSection />
          <InternshipSection />
          <ProjectsSection />
        </main>
      </ScrollArea>
      
      <Footer />
    </div>
  );
};

export default Index;
