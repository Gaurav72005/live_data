import React from 'react';
import { VERIFIED_RESULTS } from '../data/coursesData';

export default function AlumniPlacements() {
  return (
    <section 
      id="results"
      className="section-py"
      style={{
        backgroundColor: '#FFFFFF',
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
          <div className="badge-green">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              verified
            </span>
            <span>VERIFIED ACADEMIC ACHIEVEMENTS</span>
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
            Real Preparation. Verified Outcomes.
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
            Authentic feedback from students who built conceptual mastery at our Patel Nagar campus and achieved competitive and technical placement milestones.
          </p>
        </div>

        {/* Testimonials Grid: White cards, subtle borders, soft shadows, deep green indicators */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {VERIFIED_RESULTS.map((alum) => (
            <div
              key={alum.id}
              className="academic-card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Header: Photo, Name & Green Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #E2E8F0',
                        flexShrink: 0
                      }}
                    >
                      <img 
                        src={alum.image} 
                        alt={alum.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div>
                      <h4 
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.125rem',
                          fontWeight: 700,
                          color: '#142B4A',
                          margin: 0
                        }}
                      >
                        {alum.name}
                      </h4>
                      <span style={{ fontSize: '0.8125rem', color: '#2457A7', fontWeight: 600 }}>
                        {alum.achievement}
                      </span>
                    </div>
                  </div>

                  {/* Deep Green Verified Achievement Badge */}
                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#16804A',
                      backgroundColor: '#E8F5EE',
                      border: '1px solid rgba(22, 128, 74, 0.25)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                      check
                    </span>
                    <span>{alum.packageOrScore}</span>
                  </span>
                </div>

                {/* Quote */}
                <blockquote 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: '#475569',
                    fontStyle: 'italic',
                    lineHeight: 1.65,
                    margin: 0
                  }}
                >
                  {alum.quote}
                </blockquote>

              </div>

              {/* Bottom Batch Details */}
              <div 
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid #EDF2F7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8125rem',
                  color: '#64748B'
                }}
              >
                <span>LiveDATA Scholar</span>
                <span style={{ fontWeight: 600, color: '#142B4A' }}>
                  {alum.batch}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
