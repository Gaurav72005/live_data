import React from 'react';
import { STUDY_MATERIALS_FEATURES } from '../data/coursesData';

export default function StudyMaterials({ onCounsellingClick }) {
  return (
    <section 
      id="study-materials"
      className="section-py"
      style={{
        backgroundColor: '#F3F6FA',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        
        {/* Header */}
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
          <div className="badge-navy">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              library_books
            </span>
            <span>EXAM RESOURCES &amp; BENCHMARKING</span>
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
            Study Materials &amp; Mock Test Series
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
            Comprehensive, exam-oriented study packages paired with All-India benchmarked mock tests to simulate real assessment pressure and track rank velocity.
          </p>
        </div>

        {/* 4 Feature Boxes */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {STUDY_MATERIALS_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="academic-card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderTop: '3px solid #2457A7'
              }}
            >
              <div 
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: '#EBF2FC',
                  color: '#2457A7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  {item.icon}
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1875rem',
                  fontWeight: 700,
                  color: '#142B4A',
                  lineHeight: 1.35,
                  margin: 0
                }}
              >
                {item.title}
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  margin: 0
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Material Download Strip */}
        <div 
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#142B4A',
            borderRadius: '10px',
            padding: '2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(20, 43, 74, 0.2)'
          }}
        >
          <div style={{ maxWidth: '38rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#D9A441',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              FREE ACADEMIC RESOURCE KIT
            </span>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>
              Download Sample Study Module &amp; Mock Test Blueprint
            </h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
              Inspect our comprehensive chapter notes, solved formula sheets, and past question evaluations before enrolling.
            </p>
          </div>

          <button 
            onClick={onCounsellingClick}
            className="btn-gold"
            style={{ minHeight: '50px', padding: '0.8rem 1.85rem' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              download
            </span>
            <span>Request Sample Kit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
