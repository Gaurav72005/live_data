import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <aside 
      aria-label="Quick WhatsApp Contact" 
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50
      }}
    >
      <a 
        href="https://wa.me/919045667030?text=Hi%20LiveDATA,%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20batches."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LiveDATA on WhatsApp"
        className="glow-emerald"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          backgroundColor: '#1bbd85',
          color: '#00452e',
          fontWeight: 700,
          padding: '0.75rem 1.25rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5)',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#4edea3';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#1bbd85';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span 
          className="material-symbols-outlined" 
          style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
        <span style={{ fontWeight: 700 }}>Chat with Admissions</span>
      </a>
    </aside>
  );
}
