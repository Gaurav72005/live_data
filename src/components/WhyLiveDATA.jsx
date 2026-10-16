import React from 'react';
import { WHY_US_PILLARS } from '../data/coursesData';

export default function WhyLiveDATA() {
  return (
    <section 
      id="why-us"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div 
          style={{
            maxWidth: '44rem',
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
              backgroundColor: 'rgba(0, 83, 219, 0.15)',
              border: '1px solid rgba(0, 83, 219, 0.35)',
              color: 'var(--color-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            <span>THE LIVEDATA ADVANTAGE</span>
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
            Engineered for Career Outcomes
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6
            }}
          >
            We strip away passive video watching in favor of aggressive hands-on problem solving, measurable weekly reviews, and hiring pipelines.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {WHY_US_PILLARS.map(pillar => (
            <div
              key={pillar.number}
              className="glow-cyan-hover"
              style={{
                padding: '1.75rem',
                backgroundColor: 'var(--color-surface-low)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div 
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--color-surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(51, 65, 85, 0.5)'
                }}
              >
                <span 
                  className="material-symbols-outlined" 
                  style={{ color: pillar.color, fontSize: '24px', fontVariationSettings: "'FILL' 1" }}
                >
                  {pillar.icon}
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                {pillar.title}
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.65,
                  flexGrow: 1
                }}
              >
                {pillar.description}
              </p>

              <div 
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: pillar.statColor,
                  fontWeight: 600,
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(51, 65, 85, 0.25)'
                }}
              >
                {pillar.stat}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
