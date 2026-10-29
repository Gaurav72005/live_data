import React from 'react';
import { WHY_CHOOSE_US_PILLARS } from '../data/coursesData';

export default function WhyLiveDATA({ onCounsellingClick }) {
  return (
    <section 
      id="why-choose-us"
      className="section-py"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)'
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
          <div className="badge-gold">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              stars
            </span>
            <span>ACADEMIC FOUNDATION &amp; RIGOUR</span>
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
            Why Choose LiveDATA Institute
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
            Built on a culture of disciplined study, distinguished faculty mentorship, continuous diagnostic testing, and verifiable career outcomes.
          </p>
        </div>

        {/* 4 Pillars Grid: White cards with blue icons and gold accents */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {WHY_CHOOSE_US_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="academic-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderTop: '4px solid #142B4A',
                backgroundColor: '#FFFFFF'
              }}
            >
              {/* Pillar Number & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#EBF2FC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2457A7'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                    {pillar.icon}
                  </span>
                </div>

                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#D9A441'
                  }}
                >
                  {pillar.number}
                </span>
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#142B4A',
                  lineHeight: 1.35,
                  margin: 0
                }}
              >
                {pillar.title}
              </h3>

              {/* Stat Highlight */}
              <div 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#16804A',
                  backgroundColor: '#E8F5EE',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  alignSelf: 'flex-start'
                }}
              >
                ✓ {pillar.stat}
              </div>

              {/* Description */}
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  margin: 0
                }}
              >
                {pillar.description}
              </p>

            </div>
          ))}
        </div>

        {/* Academic Consultation Strip */}
        <div 
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.5rem',
            backgroundColor: '#F3F6FA',
            border: '1px solid var(--color-border)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#142B4A', marginBottom: '0.25rem' }}>
              Need Help Deciding Your Preparation Roadmap?
            </h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: '#475569', margin: 0 }}>
              Speak directly with our senior faculty for a personalized diagnostic roadmap consultation at Patel Nagar, Dehradun.
            </p>
          </div>

          <button 
            onClick={onCounsellingClick}
            className="btn-navy"
            style={{ minHeight: '48px', padding: '0.75rem 1.75rem' }}
          >
            <span>Book 1-on-1 Academic Session</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              calendar_month
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
