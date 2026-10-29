import React from 'react';
import { TEACHING_METHODOLOGY } from '../data/coursesData';

export default function TeachingMethodology() {
  return (
    <section 
      id="methodology"
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
          <div className="badge-gold">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              model_training
            </span>
            <span>STRUCTURED PEDAGOGY</span>
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
            Our 4-Stage Teaching Methodology
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
            A disciplined, step-by-step academic framework designed to bridge the gap between basic classroom theory and high-performance competitive problem solving.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
        >
          {TEACHING_METHODOLOGY.map((item) => (
            <div
              key={item.step}
              className="academic-card"
              style={{
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                backgroundColor: '#FFFFFF',
                position: 'relative',
                borderTop: '3px solid #D9A441'
              }}
            >
              {/* Step Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#D9A441'
                  }}
                >
                  {item.step}
                </span>

                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#EBF2FC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2457A7'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                    {item.icon}
                  </span>
                </div>
              </div>

              <div>
                <h3 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: '#142B4A',
                    lineHeight: 1.35,
                    marginBottom: '0.25rem'
                  }}
                >
                  {item.title}
                </h3>
                <span 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#2457A7',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  {item.subtitle}
                </span>
              </div>

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

      </div>
    </section>
  );
}
