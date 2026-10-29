import React, { useState } from 'react';
import { COMPETITIVE_COURSES } from '../data/coursesData';

export default function CourseTracks({ onSelectCourse, onOpenSyllabus }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Advanced Engineering',
    'Data Engineering',
    'Foundational CS',
    'Business & Analytics',
    'Exam Preparation'
  ];

  const filteredCourses = activeCategory === 'All'
    ? COMPETITIVE_COURSES
    : COMPETITIVE_COURSES.filter(c => c.examCategory === activeCategory);

  return (
    <section 
      id="courses"
      className="section-py"
      style={{
        backgroundColor: '#F3F6FA',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div 
          id="exam-categories"
          style={{
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div className="badge-navy">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              category
            </span>
            <span>EXAM CATEGORIES &amp; ACADEMIC TRACKS</span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)',
              fontWeight: 700,
              color: '#142B4A',
              margin: 0
            }}
          >
            Structured Academic Courses
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              color: '#475569',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            Meticulously planned curricula with first-principles theory, daily practice sets, proctored testing, and individual faculty mentorship.
          </p>

          {/* Category Filter Pills */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginTop: '0.75rem'
            }}
          >
            {categories.map(cat => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isSelected ? '1.5px solid #142B4A' : '1.5px solid #CBD5E1',
                    backgroundColor: isSelected ? '#142B4A' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#475569',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(20, 43, 74, 0.15)' : 'none'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid: White backgrounds, subtle shadows, navy headings, blue icons, gold accents */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className="academic-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Card Top Strip: Category & Gold Accent Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#2457A7',
                      backgroundColor: '#EBF2FC',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px'
                    }}
                  >
                    {course.examCategory}
                  </span>

                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#D9A441',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                      schedule
                    </span>
                    <span>{course.duration}</span>
                  </span>
                </div>

                {/* Course Title: Navy Heading */}
                <h3 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#142B4A',
                    lineHeight: 1.35,
                    margin: 0
                  }}
                >
                  {course.title}
                </h3>

                {/* Description: Slate Grey */}
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {course.description}
                </p>

                {/* Curriculum Highlights with Blue Icons */}
                <div 
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #EDF2F7',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#142B4A',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Key Modules &amp; Coverage:
                  </span>
                  {course.curriculumHighlights.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span className="material-symbols-outlined" style={{ color: '#2457A7', fontSize: '18px', marginTop: '2px', flexShrink: 0 }}>
                        check_circle
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Batch & Mode Strip */}
                <div 
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#475569'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: '#2457A7', fontSize: '18px' }}>
                    apartment
                  </span>
                  <span>{course.mode}</span>
                </div>

              </div>

              {/* Action Buttons: Gold Enquire, Outline Syllabus */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #EDF2F7'
                }}
              >
                <button
                  onClick={() => onSelectCourse(course.enquiryValue)}
                  className="btn-gold"
                  style={{
                    flex: 1,
                    minHeight: '48px',
                    padding: '0.65rem 1rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <span>Enquire Course</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => onOpenSyllabus(course)}
                  style={{
                    minHeight: '48px',
                    padding: '0.65rem 1rem',
                    borderRadius: '9px',
                    border: '1.5px solid #CBD5E1',
                    backgroundColor: '#FFFFFF',
                    color: '#142B4A',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#142B4A';
                    e.currentTarget.style.color = '#2457A7';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.color = '#142B4A';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#2457A7' }}>
                    menu_book
                  </span>
                  <span>Syllabus</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
