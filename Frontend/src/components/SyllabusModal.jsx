import React from 'react';

export default function SyllabusModal({ course, onClose, onEnquire }) {
  if (!course) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(20, 43, 74, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #CBD5E1',
          borderRadius: '12px',
          maxWidth: '44rem',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem',
          boxShadow: '0 25px 60px rgba(20, 43, 74, 0.3)',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: '#64748B',
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '6px'
          }}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Modal Header */}
        <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #EDF2F7', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span 
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                backgroundColor: '#EBF2FC',
                color: '#2457A7',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              {course.examCategory}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#D9A441', fontWeight: 600 }}>
              {course.duration}
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: '#142B4A', margin: 0 }}>
            {course.title}
          </h3>
          <p style={{ color: '#475569', fontSize: '0.9375rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
            {course.description}
          </p>
        </div>

        {/* Curriculum Highlights */}
        <div style={{ padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#142B4A', margin: 0 }}>
            Curriculum Roadmap &amp; Topic Modules
          </h4>

          {course.curriculumHighlights && course.curriculumHighlights.map((topic, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                backgroundColor: '#F8FAFC',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                border: '1px solid #EDF2F7'
              }}
            >
              <span className="material-symbols-outlined" style={{ color: '#2457A7', fontSize: '20px', marginTop: '1px', flexShrink: 0 }}>
                check_circle
              </span>
              <span style={{ fontSize: '0.875rem', color: '#1E293B', lineHeight: 1.5 }}>
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Key Features Badges */}
        <div style={{ paddingBottom: '1.5rem' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Course Amenities:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {course.features && course.features.map(f => (
              <span key={f} style={{ backgroundColor: '#E8F5EE', color: '#16804A', padding: '0.3rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
                ✓ {f}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #EDF2F7', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            className="btn-outline-navy"
            style={{ minHeight: '46px', padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
          >
            Close
          </button>
          <button
            onClick={() => {
              onEnquire(course.enquiryValue);
              onClose();
            }}
            className="btn-gold"
            style={{ minHeight: '46px', padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
          >
            <span>Enquire for this Course</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
