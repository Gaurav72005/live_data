import React, { useState } from 'react';
import { COURSES } from '../data/coursesData';

export default function CourseTracks({ onSelectCourse, onOpenSyllabus }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & GenAI', 'Machine Learning', 'Analytics', 'Programming'];

  const filteredCourses = activeFilter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeFilter || (activeFilter === 'AI & GenAI' && c.category === 'AI & GenAI'));

  return (
    <section 
      id="courses"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface-lowest)',
        borderTop: '1px solid rgba(51, 65, 85, 0.3)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div 
          style={{
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.875rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            <span>CURRICULUM ARCHITECTURE</span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-on-surface)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2
            }}
          >
            Industry-Ready Course Tracks
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6
            }}
          >
            Engineered around modern enterprise tech stacks with weekly milestones, live debugging labs, and verified portfolio projects.
          </p>

          {/* Filter Pills */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginTop: '1rem'
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeFilter === cat ? '1px solid var(--color-primary)' : '1px solid rgba(51, 65, 85, 0.5)',
                  backgroundColor: activeFilter === cat ? 'rgba(6, 182, 212, 0.15)' : 'var(--color-surface-low)',
                  color: activeFilter === cat ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Course Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCourses.map(course => {
            const isFlagship = course.badgeType === 'flagship';
            
            return (
              <div
                key={course.id}
                className="glow-cyan-hover"
                style={{
                  backgroundColor: 'var(--color-surface-low)',
                  borderRadius: '0.75rem',
                  border: isFlagship ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(51, 65, 85, 0.45)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isFlagship ? '0 0 30px rgba(6, 182, 212, 0.1)' : 'none',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  {/* Card Header Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span 
                      style={{
                        padding: '0.25rem 0.625rem',
                        borderRadius: '0.25rem',
                        backgroundColor: isFlagship ? 'rgba(6, 182, 212, 0.15)' : 'var(--color-surface-high)',
                        color: isFlagship ? 'var(--color-primary)' : course.badgeType === 'emerald' ? 'var(--color-tertiary)' : 'var(--color-secondary)',
                        border: isFlagship ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(51, 65, 85, 0.6)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {isFlagship && (
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                          neurology
                        </span>
                      )}
                      {course.badge}
                    </span>

                  </div>

                  {/* Course Title */}
                  <h3 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 600,
                      color: 'var(--color-on-surface)',
                      lineHeight: 1.3
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: 1.6
                    }}
                  >
                    {course.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div style={{ paddingTop: '0.5rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--color-on-surface-variant)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Core Tech Stack
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {course.techStack.map(tech => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            backgroundColor: 'var(--color-surface-container)',
                            fontSize: '0.75rem',
                            color: isFlagship ? 'var(--color-primary)' : 'var(--color-on-surface)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div 
                  style={{
                    paddingTop: '1.25rem',
                    marginTop: '1.5rem',
                    borderTop: '1px solid rgba(51, 65, 85, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span 
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-tertiary)',
                        boxShadow: '0 0 6px var(--color-tertiary)'
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)' }}>
                      Campus &amp; Online
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course.enquiryValue)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0.25rem',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--color-primary-fixed)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>Enquire for Course</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      arrow_forward
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
