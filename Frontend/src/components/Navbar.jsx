import React, { useState, useEffect } from 'react';

export default function Navbar({ onEnquireClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Courses', href: '#courses' },
    { name: 'Exam Categories', href: '#exam-categories' },
    { name: 'Results', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'About Us', href: '#why-choose-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#142B4A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 4px 20px rgba(14, 31, 54, 0.35)' : 'none',
        transition: 'all 0.25s ease'
      }}
    >
      <div 
        className="container" 
        style={{ 
          height: '76px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}
      >
        
        {/* Brand Logo & Name */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none',
            color: '#FFFFFF'
          }}
        >
          <div 
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '9px',
              backgroundColor: 'rgba(217, 164, 65, 0.15)',
              border: '1.5px solid #D9A441',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D9A441'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
              school
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.35rem', 
                fontWeight: 700, 
                letterSpacing: '-0.02em', 
                color: '#FFFFFF',
                lineHeight: 1.15
              }}
            >
              Live<span style={{ color: '#D9A441' }}>DATA</span>
            </span>
            <span 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.6875rem', 
                color: 'rgba(255, 255, 255, 0.75)', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              Institute of Excellence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '0.25rem 0.2rem'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D9A441'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          {/* Prominent Gold Enquire Now Button */}
          <button 
            onClick={onEnquireClick}
            className="btn-gold"
            style={{ 
              padding: '0.625rem 1.35rem',
              fontSize: '0.875rem',
              minHeight: '46px'
            }}
          >
            <span>Enquire Now</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: '#FFFFFF',
              padding: '0.45rem',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: '#0E1F36',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.25rem 0'
              }}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onEnquireClick();
            }}
            className="btn-gold"
            style={{ width: '100%', marginTop: '0.5rem', minHeight: '48px' }}
          >
            <span>Enquire Now</span>
          </button>
        </div>
      )}

      {/* Responsive helper style */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
