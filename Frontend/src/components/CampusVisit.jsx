import React from 'react';
import { CAMPUS_SCHEDULE } from '../data/coursesData';

export default function CampusVisit() {
  return (
    <section 
      id="contact"
      className="section-py"
      style={{
        backgroundColor: '#F3F6FA',
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
          <div className="badge-navy">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              location_on
            </span>
            <span>DEHRADUN CAMPUS &amp; ADMISSIONS</span>
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
            Visit Our Patel Nagar Campus
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
            We invite scholars and parents to visit our modern academic facility in Dehradun to experience the disciplined learning environment, inspect student live projects, and discuss preparation roadmaps with faculty.
          </p>
        </div>

        {/* 2-Column Grid: Location & Helplines vs Schedule Card */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Campus Address & Contact Helplines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Campus Photo Preview */}
            <div 
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                height: '220px',
                position: 'relative'
              }}
            >
              <img 
                src="/images/lab-main.jpg" 
                alt="LiveDATA Patel Nagar Dehradun Campus"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(20,43,74,0.85) 100%)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  left: '1rem',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                📍 75/6, Patel Nagar, Dehradun Academic Center
              </div>
            </div>

            {/* Address Box */}
            <div 
              className="academic-card"
              style={{
                padding: '1.5rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}
            >
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: '#EBF2FC',
                  color: '#2457A7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  pin_drop
                </span>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#142B4A', marginBottom: '0.25rem' }}>
                  Campus Address
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  75/6, LiveDATA, Patel Nagar, Dehradun, Uttarakhand - 248001
                </p>
                <span style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8125rem', color: '#16804A', fontWeight: 600 }}>
                  ✓ Central location with easy transit access &amp; student parking
                </span>
              </div>
            </div>

            {/* Helpline Numbers Box */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div 
                className="academic-card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(217, 164, 65, 0.15)',
                    color: '#926917',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                    call
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-body)', color: '#64748B', display: 'block' }}>
                    Primary Helpline
                  </span>
                  <a 
                    href="tel:+919045667030"
                    style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#142B4A', textDecoration: 'none' }}
                  >
                    +91 9045667030
                  </a>
                </div>
              </div>

              <div 
                className="academic-card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: '#EBF2FC',
                    color: '#2457A7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                    support_agent
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-body)', color: '#64748B', display: 'block' }}>
                    Admissions Desk
                  </span>
                  <a 
                    href="tel:+917906644799"
                    style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-heading)', fontWeight: 600, color: '#142B4A', textDecoration: 'none' }}
                  >
                    +91 7906644799
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Campus Operating Hours Card */}
          <div 
            className="academic-card"
            style={{
              padding: '2.25rem',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              borderTop: '4px solid #142B4A'
            }}
          >
            {/* Header */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #EDF2F7'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    backgroundColor: '#EBF2FC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2457A7'
                  }}
                >
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#142B4A', margin: 0 }}>
                    Academic Lab &amp; Office Hours
                  </h4>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#16804A', fontWeight: 600 }}>
                    ● Open for Campus Visits
                  </span>
                </div>
              </div>

              <span 
                style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  backgroundColor: '#F1F5F9',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#475569'
                }}
              >
                Mon - Sat
              </span>
            </div>

            {/* Schedule List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CAMPUS_SCHEDULE.map((item, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.9375rem',
                    padding: '0.5rem 0',
                    borderBottom: i !== CAMPUS_SCHEDULE.length - 1 ? '1px dashed #EDF2F7' : 'none'
                  }}
                >
                  <span style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                    {item.timeSlot}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      color: item.highlight ? '#D9A441' : '#142B4A'
                    }}
                  >
                    {item.timing}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid #EDF2F7' }}>
              <a 
                href="https://wa.me/919045667030?text=Hello%20LiveDATA%20Institute,%20I%20would%20like%20to%20schedule%20a%20campus%20counselling%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: '100%', minHeight: '50px' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  calendar_month
                </span>
                <span>Schedule a Campus Counselling Visit</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
