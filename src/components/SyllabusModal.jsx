import React from 'react';

export default function SyllabusModal({ course, onClose, onEnquire }) {
  if (!course) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(8, 14, 29, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          borderRadius: '1rem',
          maxWidth: '42rem',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
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
            color: 'var(--color-on-surface-variant)',
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '0.25rem'
          }}
          aria-label="Close syllabus modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Modal Header */}
        <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid rgba(51, 65, 85, 0.4)', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span 
              style={{
                padding: '0.2rem 0.5rem',
                borderRadius: '0.25rem',
                backgroundColor: 'rgba(6, 182, 212, 0.15)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 600
              }}
            >
              {course.badge}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-tertiary)' }}>
              {course.duration}
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-on-surface)' }}>
            {course.title}
          </h3>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
            {course.description}
          </p>
        </div>

        {/* Syllabus Weeks Breakdown */}
        <div style={{ padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)' }}>
            Curriculum Roadmap &amp; Milestones
          </h4>

          {course.syllabus && course.syllabus.map((item, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                gap: '1rem',
                backgroundColor: 'var(--color-surface-container)',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(51, 65, 85, 0.35)'
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  height: 'fit-content',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.week}
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--color-on-surface)', marginBottom: '0.25rem' }}>
                  {item.topic}
                </strong>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.5 }}>
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills in Modal */}
        <div style={{ paddingBottom: '1.5rem' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Technologies Covered:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {course.techStack.map(t => (
              <span key={t} style={{ backgroundColor: 'var(--color-surface-high)', color: 'var(--color-primary)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(51, 65, 85, 0.4)', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
          >
            Close
          </button>
          <button
            onClick={() => {
              onEnquire(course.enquiryValue);
              onClose();
            }}
            className="btn-primary"
            style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
          >
            Enquire for this Track →
          </button>
        </div>

      </div>
    </div>
  );
}
