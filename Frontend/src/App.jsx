import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseTracks from './components/CourseTracks';
import WhyLiveDATA from './components/WhyLiveDATA';
import FacultySection from './components/FacultySection';
import TeachingMethodology from './components/TeachingMethodology';
import StudyMaterials from './components/StudyMaterials';
import AlumniPlacements from './components/AlumniPlacements';
import FaqSection from './components/FaqSection';
import EnquirySection from './components/EnquirySection';
import CampusVisit from './components/CampusVisit';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SyllabusModal from './components/SyllabusModal';
import DemoModal from './components/DemoModal';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('Artificial Intelligence & Generative AI (Flagship)');
  const selectedMode = 'Offline (Patel Nagar Campus, Dehradun)';
  const [syllabusCourse, setSyllabusCourse] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Smooth scroll helpers
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
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

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', color: '#475569' }}>
      
      {/* 1. Header and Navigation (Navy #142B4A with Gold Enquire Button) */}
      <Navbar onEnquireClick={scrollToEnquiry} />

      {/* 2. Homepage Hero Section ("Prepare Today. Lead Tomorrow.") */}
      <Hero 
        onExploreCourses={scrollToCourses}
        onFreeCounselling={() => setIsDemoModalOpen(true)}
      />

      {/* 3. Competitive Exam Courses */}
      <CourseTracks 
        onSelectCourse={handleSelectCourse}
        onOpenSyllabus={(course) => setSyllabusCourse(course)}
      />

      {/* 4. Why Choose Us (Pillars of Excellence) */}
      <WhyLiveDATA onCounsellingClick={() => setIsDemoModalOpen(true)} />

      {/* 5. Faculty Profiles */}
      <FacultySection />

      {/* 6. Teaching Methodology (4-Stage Pedagogical Framework) */}
      <TeachingMethodology />

      {/* 7. Study Materials and Mock Tests */}
      <StudyMaterials onCounsellingClick={() => setIsDemoModalOpen(true)} />

      {/* 8. Verified Results and Student Testimonials */}
      <AlumniPlacements />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Admission Enquiry Form */}
      <EnquirySection 
        selectedCourse={selectedCourse}
        selectedMode={selectedMode}
      />

      {/* 11. Contact Information and Location */}
      <CampusVisit />

      {/* 12. Professional Footer */}
      <Footer onApplyClick={scrollToEnquiry} />

      {/* 13. Fixed Mobile Bottom Bar ("Call Now" & "Enquire Now") */}
      <MobileBottomBar onEnquireClick={scrollToEnquiry} />

      {/* 14. Sticky WhatsApp Contact for Desktop */}
      <FloatingWhatsApp />

      {/* 15. Modals */}
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
