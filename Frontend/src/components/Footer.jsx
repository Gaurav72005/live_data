import React from 'react';

export default function Footer({ onApplyClick }) {
  return (
    <footer 
      style={{
        backgroundColor: '#142B4A',
        color: '#FFFFFF',
        borderTop: '3px solid #D9A441',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container">
        
        {/* Top 4-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(217, 164, 65, 0.2)',
                  border: '1.5px solid #D9A441',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D9A441'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                  school
                </span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Live<span style={{ color: '#D9A441' }}>DATA</span>
                </span>
                <span style={{ display: 'block', fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Institute of Excellence
                </span>
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.65, margin: 0 }}>
              Empowering students through disciplined academic preparation, conceptual depth, proctored mock testing, and personalized faculty mentorship in Dehradun and Online.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.5rem' }}>
              <span style={{ fontSize: '0.8125rem', color: '#D9A441', fontWeight: 600 }}>
                Prepare Today. Lead Tomorrow.
              </span>
            </div>
          </div>

          {/* Column 2: Academic Programs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              Academic Programs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'Artificial Intelligence & GenAI',
                'Core Machine Learning',
                'Python Programming & Algorithms',
                'Data Analytics & Advanced SQL',
                'Applied Statistics & Math',
                'Complete Career Diploma Track'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#courses" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      fontSize: '0.875rem', 
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D9A441'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { name: 'About Institute', href: '#why-choose-us' },
                { name: 'Exam Categories', href: '#exam-categories' },
                { name: 'Teaching Methodology', href: '#methodology' },
                { name: 'Study Materials & Tests', href: '#study-materials' },
                { name: 'Verified Results', href: '#results' },
                { name: 'Faculty Profiles', href: '#faculty' },
                { name: 'Frequently Asked Questions', href: '#faqs' },
                { name: 'Admissions Desk', href: '#enquiry-section' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      fontSize: '0.875rem', 
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D9A441'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              Patel Nagar Campus
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
              75/6, LiveDATA, Patel Nagar, Dehradun, Uttarakhand - 248001
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div>Helpline: <strong style={{ color: '#FFFFFF' }}>+91 9045667030</strong></div>
              <div>Desk: <strong style={{ color: '#FFFFFF' }}>+91 7906644799</strong></div>
            </div>

            <button
              onClick={onApplyClick}
              className="btn-gold"
              style={{ marginTop: '0.5rem', minHeight: '46px', padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
            >
              <span>Enquire for Admission</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accreditation */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'rgba(255, 255, 255, 0.65)'
          }}
        >
          <div>
            © 2026 LiveDATA Institute of Excellence. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Patel Nagar, Dehradun</span>
            <span>•</span>
            <span>Online &amp; Classroom Batches</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
