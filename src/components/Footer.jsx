import React from 'react';

export default function Footer({ onApplyClick }) {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-surface-lowest)',
        borderTop: '1px solid rgba(51, 65, 85, 0.35)'
      }}
    >
      <div 
        className="container"
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem'
        }}
      >
        {/* Brand & Mission */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--color-on-surface)'
              }}
            >
              Live<span style={{ color: 'var(--color-primary)' }}>DATA</span>
            </span>
          </div>

          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            The premier engineering laboratory in Dehradun &amp; Online for Agentic AI, Deep Learning, and Modern Data Science.
          </p>

          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-outline)', paddingTop: '0.5rem' }}>
            Govt. Registered Institution &amp; ISO Aligned Quality Standard.
          </div>
        </div>

        {/* Key Programs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-on-surface)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Key Programs
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <a href="#courses" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Agentic AI &amp; GenAI Track
              </a>
            </li>
            <li>
              <a href="#courses" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Data Science &amp; ML
              </a>
            </li>
            <li>
              <a href="#courses" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Python Development
              </a>
            </li>
            <li>
              <a href="#courses" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Data Visualization (BI)
              </a>
            </li>
          </ul>
        </div>

        {/* Institute Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-on-surface)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Institute &amp; Verification
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <a href="#contact" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Patel Nagar Campus Labs
              </a>
            </li>
            <li>
              <a href="#placements" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Student Placements
              </a>
            </li>
            <li>
              <a href="#contact" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Verify Certificate
              </a>
            </li>
            <li>
              <a href="#why-us" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Terms of Admission
              </a>
            </li>
            <li>
              <a href="#why-us" style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Admissions Office */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-on-surface)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Admissions Office
          </h5>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            75/6, LiveDATA, Patel Nagar, Dehradun, Uttarakhand
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-primary)', lineHeight: 1.8 }}>
            WhatsApp: +91 9045667030<br />
            Direct: +91 7906644799
          </div>
          <div style={{ paddingTop: '0.5rem' }}>
            <button
              onClick={onApplyClick}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--color-surface-container)',
                border: '1px solid rgba(76, 215, 246, 0.35)',
                color: 'var(--color-primary)',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = '#080e1d';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface-container)';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
            >
              Apply for Next Batch
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Sub-bar */}
      <div 
        style={{
          borderTop: '1px solid rgba(51, 65, 85, 0.2)',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          textAlign: 'center',
          color: 'var(--color-on-surface-variant)',
          fontSize: '0.8125rem'
        }}
      >
        <div className="container">
          © 2025 LiveDATA Institute. Patel Nagar, Dehradun &amp; Online Live. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
