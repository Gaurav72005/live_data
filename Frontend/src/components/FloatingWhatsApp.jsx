import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <aside 
      aria-label="Quick WhatsApp Contact" 
      className="desktop-whatsapp"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50
      }}
    >
      <a 
        href="https://wa.me/919045667030?text=Hi%20LiveDATA%20Institute,%20I%20would%20like%20to%20know%20more%20about%20your%20academic%20courses%20and%20batches."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LiveDATA Admissions on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#16804A',
          color: '#FFFFFF',
          fontWeight: 600,
          padding: '0.75rem 1.25rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(22, 128, 74, 0.35)',
          transition: 'all 0.2s ease',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.875rem'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#13673C';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#16804A';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span 
          className="material-symbols-outlined" 
          style={{ fontSize: '20px' }}
        >
          chat
        </span>
        <span>Chat with Admissions</span>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .desktop-whatsapp {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
