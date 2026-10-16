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

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(8, 14, 29, 0.92)' : 'rgba(8, 14, 29, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.4)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.6)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--color-surface-high)',
              border: '1px solid rgba(76, 215, 246, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.25)',
              transition: 'transform 0.2s ease'
            }}
          >
            <span 
              className="material-symbols-outlined" 
              style={{ color: 'var(--color-primary)', fontVariationSettings: "'FILL' 1", fontSize: '22px' }}
            >
              terminal
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.45rem', 
                fontWeight: 800, 
                letterSpacing: '-0.02em', 
                color: 'var(--color-on-surface)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                lineHeight: 1.1
              }}
            >
              Live<span style={{ color: 'var(--color-primary)' }}>DATA</span>
              <span 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  display: 'inline-block',
                  marginLeft: '2px',
                  boxShadow: '0 0 10px var(--color-primary)'
                }}
                className="pulse-indicator"
              />
            </span>
            <span 
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '11px', 
                color: 'var(--color-primary)', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              Tech Institute
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem'
          }}
          className="desktop-nav"
        >
          <a 
            href="#courses" 
            style={{ 
              color: 'var(--color-primary)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 600, 
              fontSize: '0.9375rem',
              textDecoration: 'none',
              borderBottom: '2px solid var(--color-primary)',
              paddingBottom: '2px'
            }}
          >
            Courses
          </a>
          <a 
            href="#modes" 
            style={{ 
              color: 'var(--color-on-surface-variant)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 500, 
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
          >
            Learning Modes
          </a>
          <a 
            href="#why-us" 
            style={{ 
              color: 'var(--color-on-surface-variant)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 500, 
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
          >
            Why LiveDATA
          </a>
          <a 
            href="#placements" 
            style={{ 
              color: 'var(--color-on-surface-variant)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 500, 
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
          >
            Placements
          </a>
          <a 
            href="#contact" 
            style={{ 
              color: 'var(--color-on-surface-variant)', 
              fontFamily: 'var(--font-body)', 
              fontWeight: 500, 
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
          >
            Contact
          </a>
        </nav>

        {/* Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          

          {/* Enquire Now CTA Button */}
          <button 
            onClick={onEnquireClick}
            className="btn-primary"
            style={{ 
              padding: '0.625rem 1.25rem', 
              fontSize: '0.875rem' 
            }}
          >
            <span>Enquire Now</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(51, 65, 85, 0.6)',
              borderRadius: '0.375rem',
              color: 'var(--color-on-surface)',
              padding: '0.4rem',
              cursor: 'pointer'
            }}
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
            backgroundColor: 'var(--color-surface-lowest)',
            borderBottom: '1px solid var(--color-outline-variant)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}
          >
            Courses
          </a>
          <a 
            href="#modes" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 500 }}
          >
            Learning Modes
          </a>
          <a 
            href="#why-us" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 500 }}
          >
            Why LiveDATA
          </a>
          <a 
            href="#placements" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 500 }}
          >
            Placements
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 500 }}
          >
            Contact
          </a>

        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
