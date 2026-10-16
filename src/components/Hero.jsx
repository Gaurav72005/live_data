import React from 'react';

export default function Hero({ onExploreCourses, onBookDemo, onAdmissionsClick }) {
  return (
    <section 
      className="grid-pattern"
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(51, 65, 85, 0.3)'
      }}
    >
      {/* Ambient Blur Spheres */}
      <div 
        style={{
          position: 'absolute',
          top: '-8rem',
          left: '25%',
          width: '28rem',
          height: '28rem',
          backgroundColor: 'rgba(6, 182, 212, 0.12)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          right: '-6rem',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(37, 99, 235, 0.15)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            maxWidth: '64rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}
        >

          {/* Main Hero Headline */}
          <h1 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.65rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--color-on-surface)',
              maxWidth: '56rem',
              margin: '0 auto'
            }}
          >
            Master{' '}
            <span className="text-gradient-cyan-blue">
              AI, Data Science &amp; Python
            </span>{' '}
            with Real-World Projects
          </h1>

          {/* Subheadline */}
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
              lineHeight: 1.7,
              color: 'var(--color-on-surface-variant)',
              maxWidth: '48rem',
              margin: '0 auto'
            }}
          >
            Industry-aligned training with weekly tests, 1-on-1 mock interviews, and dedicated job placement support in Dehradun &amp; Online. Build production-grade agents and predictive intelligence models.
          </p>

          {/* Action CTA Cluster */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              paddingTop: '0.5rem'
            }}
          >
            <a 
              href="#courses"
              onClick={e => {
                e.preventDefault();
                onExploreCourses();
              }}
              className="btn-primary"
              style={{ padding: '0.875rem 2rem', fontSize: '0.9375rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                school
              </span>
              <span>Explore Courses</span>
            </a>

            <button 
              onClick={onBookDemo}
              className="btn-secondary"
              style={{ padding: '0.875rem 1.75rem', fontSize: '0.9375rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-tertiary)' }}>
                event_available
              </span>
              <span>Book Free Demo Session</span>
            </button>

            <a 
              href="#enquiry-section"
              onClick={e => {
                e.preventDefault();
                onAdmissionsClick();
              }}
              className="btn-outline-cyan"
              style={{ padding: '0.875rem 1.625rem', fontSize: '0.9375rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                chat
              </span>
              <span>Admissions Enquiry</span>
            </a>
          </div>

          {/* Trust Indicators Bento Strip */}
          <div 
            style={{
              marginTop: '1.5rem',
              paddingTop: '2rem',
              width: '100%',
              maxWidth: '44rem',
              borderTop: '1px solid rgba(51, 65, 85, 0.4)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              textAlign: 'center'
            }}
          >
            {/* Metric 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'var(--color-tertiary)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-on-surface)' }}>
                  4.9 / 5
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                Student Rating
              </p>
            </div>

            {/* Metric 2 */}
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.25rem',
                borderLeft: '1px solid rgba(51, 65, 85, 0.4)',
                borderRight: '1px solid rgba(51, 65, 85, 0.4)',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                500+
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                Alumni Placed
              </p>
            </div>

            {/* Metric 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
                40+
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                Industry Capstones
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
