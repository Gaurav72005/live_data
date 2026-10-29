import React from 'react';
import { FACULTY_PROFILES } from '../data/coursesData';

export default function FacultySection() {
  return (
    <section 
      id="faculty"
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
              person_outline
            </span>
            <span>LEARN FROM EXPERIENCED EDUCATORS</span>
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
            Distinguished Faculty &amp; Academic Mentors
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
            Our faculty brings together IIT/NIT credentials, published research, and extensive production systems experience to guide students with conceptual rigour.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {FACULTY_PROFILES.map((faculty) => (
            <div
              key={faculty.id}
              className="academic-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Photo Frame */}
              <div 
                style={{
                  height: '220px',
                  position: 'relative',
                  backgroundColor: '#142B4A',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(20,43,74,0.1) 0%, rgba(20,43,74,0.7) 100%)'
                  }}
                />
              </div>

              {/* Body */}
              <div 
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  flex: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#142B4A',
                      margin: 0
                    }}
                  >
                    {faculty.name}
                  </h3>

                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#2457A7'
                    }}
                  >
                    {faculty.role}
                  </span>

                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: '#64748B',
                      backgroundColor: '#F1F5F9',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      alignSelf: 'flex-start'
                    }}
                  >
                    {faculty.credentials}
                  </span>

                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      marginTop: '0.35rem'
                    }}
                  >
                    {faculty.bio}
                  </p>
                </div>

                {/* Subject Badges */}
                <div 
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #EDF2F7',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem'
                  }}
                >
                  {faculty.subjects.map((sub) => (
                    <span
                      key={sub}
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        color: '#142B4A',
                        backgroundColor: '#EBF2FC',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
