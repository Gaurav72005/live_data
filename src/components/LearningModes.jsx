import React from 'react';

export default function LearningModes({ onSelectMode }) {
  return (
    <section 
      id="modes"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface-lowest)',
        borderTop: '1px solid rgba(51, 65, 85, 0.3)',
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
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            <span>FLEXIBILITY WITHOUT COMPROMISE</span>
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
            Two Modes. One Rigorous Standard.
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.6
            }}
          >
            Whether you learn best side-by-side in our high-tech Dehradun labs or from anywhere via live cloud classes.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {/* Offline Mode Card */}
          <div 
            style={{
              backgroundColor: 'var(--color-surface-low)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              borderRadius: '1rem',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Background ambient blur */}
            <div 
              style={{
                position: 'absolute',
                top: '-3rem',
                right: '-3rem',
                width: '12rem',
                height: '12rem',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    location_on
                  </span>
                  OFFLINE IN-PERSON
                </span>

                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-tertiary)',
                    fontWeight: 600
                  }}
                >
                  Limited 20 Seats/Cohort
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-on-surface)'
                }}
              >
                Dehradun Campus Lab
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.6
                }}
              >
                Full immersion in our dedicated Patel Nagar workstation lab. Direct desk-side guidance, peer hackathons, and high-speed multi-screen developer desks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '20px', marginTop: '2px' }}>
                    home_pin
                  </span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-on-surface)' }}>
                      Campus Address:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)' }}>
                      75/6, LiveDATA, Patel Nagar, Dehradun, Uttarakhand
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '20px', marginTop: '2px' }}>
                    devices
                  </span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-on-surface)' }}>
                      Lab Hardware:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)' }}>
                      High-GPU workstation access for deep learning and agent simulations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid rgba(51, 65, 85, 0.3)' }}>
              <button
                onClick={() => onSelectMode('Offline (Dehradun Campus)')}
                className="btn-secondary"
                style={{
                  width: '100%',
                  borderColor: 'rgba(6, 182, 212, 0.35)',
                  color: 'var(--color-primary)'
                }}
              >
                <span>Reserve Offline Campus Seat</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  east
                </span>
              </button>
            </div>
          </div>

          {/* Online Mode Card */}
          <div 
            style={{
              backgroundColor: 'var(--color-surface-low)',
              border: '1px solid rgba(51, 65, 85, 0.45)',
              borderRadius: '1rem',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Background ambient blur */}
            <div 
              style={{
                position: 'absolute',
                top: '-3rem',
                right: '-3rem',
                width: '12rem',
                height: '12rem',
                backgroundColor: 'rgba(0, 83, 219, 0.12)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(0, 83, 219, 0.15)',
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    wifi
                  </span>
                  ONLINE LIVE HYBRID
                </span>

                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-primary)',
                    fontWeight: 600
                  }}
                >
                  All-India Access
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-on-surface)'
                }}
              >
                Online Live Interactive
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.6
                }}
              >
                Interactive live cohort video sessions led by senior instructors with real-time audio Q&amp;A, remote pair-programming, and recorded archives.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '20px', marginTop: '2px' }}>
                    cloud_sync
                  </span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-on-surface)' }}>
                      Cloud Labs:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)' }}>
                      Browser-based hosted Jupyter &amp; Docker runtime environments
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '20px', marginTop: '2px' }}>
                    forum
                  </span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-on-surface)' }}>
                      Live Doubt Resolution:
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)' }}>
                      Dedicated Slack channel &amp; instant evening screen sharing sessions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '1.5rem', marginTop: '1.5rem', borderTop: '1px solid rgba(51, 65, 85, 0.3)' }}>
              <button
                onClick={() => onSelectMode('Online (Live Interactive)')}
                className="btn-secondary"
                style={{
                  width: '100%',
                  borderColor: 'rgba(0, 83, 219, 0.35)',
                  color: 'var(--color-secondary)'
                }}
              >
                <span>Join Online Live Batch</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  east
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
