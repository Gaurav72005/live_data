import React from 'react';

export default function MobileBottomBar({ onEnquireClick }) {
  return (
    <div className="mobile-bottom-bar">
      <a 
        href="tel:+919045667030"
        style={{
          flex: 1,
          minHeight: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          backgroundColor: '#FFFFFF',
          color: '#142B4A',
          border: '1.5px solid #142B4A',
          borderRadius: '8px',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.875rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#2457A7' }}>
          call
        </span>
        <span>Call Now</span>
      </a>

      <button
        onClick={onEnquireClick}
        style={{
          flex: 1.2,
          minHeight: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          backgroundColor: '#D9A441',
          color: '#142B4A',
          border: 'none',
          borderRadius: '8px',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.875rem',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(217, 164, 65, 0.4)'
        }}
      >
        <span>Enquire Now</span>
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          arrow_forward
        </span>
      </button>
    </div>
  );
}
