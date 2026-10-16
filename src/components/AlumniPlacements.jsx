import React from 'react';
import { TESTIMONIALS } from '../data/coursesData';

export default function AlumniPlacements() {
  return (
    <section 
      id="placements"
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
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: 'var(--color-tertiary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            <span>ALUMNI PLACEMENT SUCCESS</span>
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
            Trained at LiveDATA. Hired at Top Tech.
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6
            }}
          >
            Hear from graduates who transformed their careers from foundational coders to production data scientists and AI engineers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '64rem',
            margin: '0 auto'
          }}
        >
          {TESTIMONIALS.map((alum, index) => {
            const isCyan = index === 0;
            return (
              <div
                key={alum.id}
                className="glow-cyan-hover"
                style={{
                  backgroundColor: 'var(--color-surface-low)',
                  border: isCyan ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '0.75rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 30px -10px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* Alumnus Identity Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: isCyan ? '2px solid var(--color-primary)' : '2px solid var(--color-tertiary)',
                        overflow: 'hidden',
                        flexShrink: 0,
                        backgroundColor: 'var(--color-surface-high)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: isCyan ? 'var(--color-primary)' : 'var(--color-tertiary)'
                      }}
                    >
                      <img 
                        src={alum.image} 
                        alt={alum.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span>{alum.initials}</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h4 
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: 'var(--color-on-surface)'
                        }}
                      >
                        {alum.name}
                      </h4>
                      <p 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: isCyan ? 'var(--color-primary)' : 'var(--color-tertiary)',
                          fontWeight: 600
                        }}
                      >
                        {alum.role}
                      </p>
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: 'var(--color-tertiary)',
                          fontSize: '0.75rem',
                          marginTop: '0.15rem'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>
                          verified
                        </span>
                        <span>{alum.verified}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-on-surface-variant)',
                      fontStyle: 'italic',
                      lineHeight: 1.65,
                      margin: 0
                    }}
                  >
                    {alum.quote}
                  </blockquote>

                </div>

                {/* Footer Tag */}
                <div 
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(51, 65, 85, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem'
                  }}
                >
                  <span style={{ color: 'var(--color-on-surface-variant)' }}>
                    Track: {alum.track}
                  </span>
                  <span style={{ color: 'var(--color-tertiary)', fontWeight: 600 }}>
                    {alum.batch}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
