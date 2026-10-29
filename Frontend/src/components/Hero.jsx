import React from 'react';

export default function Hero({ onExploreCourses, onFreeCounselling }) {
  return (
    <section 
      id="hero"
      className="hero-pattern"
      style={{
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Academic Copy & Action */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'left'
            }}
          >
            {/* Academic Credential Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(217, 164, 65, 0.15)',
                border: '1px solid rgba(217, 164, 65, 0.35)',
                color: '#D9A441',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                alignSelf: 'flex-start'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                verified
              </span>
              <span>PREMIER ACADEMIC &amp; COMPETITIVE EXAM INSTITUTE</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.15rem, 4.5vw, 3.4rem)',
                lineHeight: 1.18,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Prepare Today.{' '}
              <span style={{ color: '#D9A441' }}>
                Lead Tomorrow.
              </span>
            </h1>

            {/* Description */}
            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.85)',
                margin: 0,
                maxWidth: '36rem'
              }}
            >
              Expert guidance, structured preparation, and rigorous weekly mock tests engineered for competitive success. Master core computer science, artificial intelligence, and data analytics with seasoned faculty in Dehradun and live online.
            </p>

            {/* Action Buttons: 48-54px height, 8-10px radius */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}
            >
              <button 
                onClick={onExploreCourses}
                className="btn-gold"
                style={{ minHeight: '52px', padding: '0.8rem 2rem' }}
              >
                <span>Explore Courses</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  school
                </span>
              </button>

              <button 
                onClick={onFreeCounselling}
                className="btn-outline-white"
                style={{ minHeight: '52px', padding: '0.8rem 1.85rem' }}
              >
                <span>Free Counselling</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#D9A441' }}>
                  support_agent
                </span>
              </button>
            </div>

            {/* Academic Trust Markers */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                marginTop: '0.75rem'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#D9A441' }}>
                  500+
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  Verified Placements
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF' }}>
                  12+ Yrs
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  Avg. Faculty Exp.
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#D9A441' }}>
                  4.9 / 5
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  Student &amp; Parent Rating
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Educational Photography & Verified Facility Card */}
          <div style={{ position: 'relative' }}>
            
            {/* Framed Academic Photography */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(217, 164, 65, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#0E1F36'
              }}
            >
              <img 
                src="/images/lab-main.jpg" 
                alt="Students collaborating at LiveDATA Academic Center in Patel Nagar, Dehradun"
                style={{
                  width: '100%',
                  height: 'clamp(280px, 32vw, 420px)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Bottom Subtle Gradient */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(20, 43, 74, 0.1) 0%, rgba(14, 31, 54, 0.85) 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* In-Photo Information Banner */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(20, 43, 74, 0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(217, 164, 65, 0.3)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: '#FFFFFF' }}>
                    Patel Nagar Academic Campus
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                    75/6 Patel Nagar, Dehradun • Lab &amp; Classroom Facility
                  </span>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#D9A441',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    schedule
                  </span>
                  <span>Admissions Open</span>
                </div>
              </div>

            </div>

            {/* Overlaid Floating Achievement Tag */}
            <div 
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.6rem 1rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#16804A'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  check_circle
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '0.8125rem', fontWeight: 700, color: '#142B4A' }}>
                  Weekly Tests
                </span>
                <span style={{ fontSize: '0.6875rem', color: '#475569' }}>
                  100% Proctored Evaluation
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
