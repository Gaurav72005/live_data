import React from 'react';
import { CAMPUS_SCHEDULE } from '../data/coursesData';

export default function CampusVisit() {
  return (
    <section 
      id="contact"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: 'var(--color-surface-low)',
        borderTop: '1px solid rgba(51, 65, 85, 0.4)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Campus Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                alignSelf: 'flex-start'
              }}
            >
              <span>VISIT OUR LAB</span>
            </div>

            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 700,
                color: 'var(--color-on-surface)',
                lineHeight: 1.2
              }}
            >
              Experience the Patel Nagar Campus
            </h2>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.65
              }}
            >
              Drop by our Dehradun facility for a free career roadmap discussion, code evaluation session, and to inspect student live projects before taking admission.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
              {/* Campus Address Box */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--color-surface-container)',
                  border: '1px solid rgba(51, 65, 85, 0.4)'
                }}
              >
                <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '24px', marginTop: '2px' }}>
                  pin_drop
                </span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-on-surface)', marginBottom: '0.25rem' }}>
                    Campus Location
                  </strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
                    75/6, LiveDATA, Patel Nagar, Dehradun, Uttarakhand - 248001
                  </p>
                </div>
              </div>

              {/* Helplines Box */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div 
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-surface-container)',
                    border: '1px solid rgba(51, 65, 85, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '24px' }}>
                    call
                  </span>
                  <div>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)', display: 'block' }}>
                      Primary Helpline
                    </span>
                    <a 
                      href="tel:+919045667030"
                      style={{ fontSize: '0.875rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-on-surface)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
                    >
                      +91 9045667030
                    </a>
                  </div>
                </div>

                <div 
                  style={{
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'var(--color-surface-container)',
                    border: '1px solid rgba(51, 65, 85, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '24px' }}>
                    support_agent
                  </span>
                  <div>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)', display: 'block' }}>
                      Admissions Desk
                    </span>
                    <a 
                      href="tel:+917906644799"
                      style={{ fontSize: '0.875rem', fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-on-surface)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-secondary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
                    >
                      +91 7906644799
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Campus Operating Hours Card */}
          <div>
            <div 
              style={{
                backgroundColor: 'var(--color-surface-container)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
                borderRadius: '0.75rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(51, 65, 85, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(6, 182, 212, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)'
                    }}
                  >
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-on-surface)' }}>
                      Campus Operating Hours
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-tertiary)' }}>
                      Open for Visits Today
                    </span>
                  </div>
                </div>

                <span 
                  style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '0.25rem',
                    backgroundColor: 'var(--color-surface-high)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-on-surface-variant)'
                  }}
                >
                  Mon - Sat
                </span>
              </div>

              {/* Schedule list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CAMPUS_SCHEDULE.map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span style={{ color: 'var(--color-on-surface-variant)' }}>
                      {item.timeSlot}
                    </span>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: item.highlight ? 'var(--color-tertiary)' : 'var(--color-on-surface)'
                      }}
                    >
                      {item.timing}
                    </span>
                  </div>
                ))}
              </div>

              {/* Walkthrough Button */}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(51, 65, 85, 0.3)' }}>
                <a 
                  href="https://wa.me/919045667030?text=Hi%20LiveDATA,%20I%20would%20like%20to%20visit%20the%20Patel%20Nagar%20campus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    calendar_month
                  </span>
                  <span>Schedule a Campus Walkthrough</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
