import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseTracks from './components/CourseTracks';
import WhyLiveDATA from './components/WhyLiveDATA';
import LearningModes from './components/LearningModes';
import AlumniPlacements from './components/AlumniPlacements';
import EnquirySection from './components/EnquirySection';
import CampusVisit from './components/CampusVisit';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SyllabusModal from './components/SyllabusModal';
import DemoModal from './components/DemoModal';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('Artificial Intelligence (Agentic AI & Gen AI)');
  const [selectedMode, setSelectedMode] = useState('Offline (Dehradun Campus)');
  const [syllabusCourse, setSyllabusCourse] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section') || document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourse = (courseValue) => {
    setSelectedCourse(courseValue);
    scrollToEnquiry();
  };

  const handleSelectMode = (modeValue) => {
    setSelectedMode(modeValue);
    scrollToEnquiry();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-canvas)', color: 'var(--color-on-surface)' }}>
      
      {/* 1. Shared Navigation Header */}
      <Navbar onEnquireClick={scrollToEnquiry} />

      {/* 2. Hero Section */}
      <Hero 
        onExploreCourses={scrollToCourses}
        onBookDemo={() => setIsDemoModalOpen(true)}
        onAdmissionsClick={scrollToEnquiry}
      />

      {/* 3. Industry-Ready Course Tracks (Bento Grid) */}
      <CourseTracks 
        onSelectCourse={handleSelectCourse}
        onOpenSyllabus={(course) => setSyllabusCourse(course)}
      />

      {/* 4. Why LiveDATA Advantage (4 Pillars) */}
      <WhyLiveDATA />

      {/* 5. Flexible Learning Modes (Campus vs Online) */}
      <LearningModes onSelectMode={handleSelectMode} />

      {/* 6. Alumni Placement Success & Reviews */}
      <AlumniPlacements />

      {/* 7. Direct Admissions Desk & Enquiry Form */}
      <EnquirySection 
        selectedCourse={selectedCourse}
        selectedMode={selectedMode}
      />

      {/* 8. Campus Experience & Schedule */}
      <CampusVisit />

      {/* 9. Complete Footer */}
      <Footer onApplyClick={scrollToEnquiry} />

      {/* 10. Sticky Pinned WhatsApp Contact Widget */}
      <FloatingWhatsApp />

      {/* 11. Interactive Modals */}
      <SyllabusModal 
        course={syllabusCourse}
        onClose={() => setSyllabusCourse(null)}
        onEnquire={handleSelectCourse}
      />

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

    </div>
  );
}
