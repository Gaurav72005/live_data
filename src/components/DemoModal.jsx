import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('Artificial Intelligence (Agentic AI & Gen AI)');
  const [slot, setSlot] = useState('Weekend Masterclass (Saturday 11 AM)');

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 10) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const msg = 
`Hi LiveDATA, I want to book a Free Demo Session:
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Interested Track:* ${track}
*Preferred Demo Slot:* ${slot}`;

    window.open(`https://wa.me/919045667030?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(8, 14, 29, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-surface-card)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          borderRadius: '1rem',
          maxWidth: '36rem',
          width: '100%',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--color-on-surface-variant)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          aria-label="Close demo modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-tertiary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>event_available</span>
            <span>FREE 1-ON-1 DEMO SESSION</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
            Book Your Free Demo Class
          </h3>
          <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            Experience live coding labs and ask senior mentors your career roadmap questions.
          </p>
        </div>

        <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.25rem', fontWeight: 600 }}>
              Full Name *
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Aman Negi" 
              value={name} 
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--color-surface-lowest)',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                borderRadius: '0.5rem',
                padding: '0.65rem 0.875rem',
                color: '#ffffff',
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.25rem', fontWeight: 600 }}>
              Mobile Phone Number *
            </label>
            <input 
              type="tel" 
              required 
              maxLength={10} 
              pattern="[0-9]{10}" 
              placeholder="10-digit mobile" 
              value={phone} 
              onChange={e => setPhone(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--color-surface-lowest)',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                borderRadius: '0.5rem',
                padding: '0.65rem 0.875rem',
                color: '#ffffff',
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.25rem', fontWeight: 600 }}>
              Course of Interest
            </label>
            <select
              value={track}
              onChange={e => setTrack(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--color-surface-lowest)',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                borderRadius: '0.5rem',
                padding: '0.65rem 0.875rem',
                color: '#ffffff',
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            >
              <option value="Artificial Intelligence (Agentic AI & Gen AI)">Artificial Intelligence (Agentic AI &amp; Gen AI)</option>
              <option value="Machine Learning">Machine Learning (ML / Deep Learning)</option>
              <option value="Data Analytics">Data Analytics &amp; Business Intel</option>
              <option value="Python">Python Development</option>
              <option value="Data Visualization">Data Visualization</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-on-surface-variant)', marginBottom: '0.25rem', fontWeight: 600 }}>
              Preferred Slot
            </label>
            <select
              value={slot}
              onChange={e => setSlot(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--color-surface-lowest)',
                border: '1px solid rgba(51, 65, 85, 0.6)',
                borderRadius: '0.5rem',
                padding: '0.65rem 0.875rem',
                color: '#ffffff',
                fontSize: '0.9375rem',
                outline: 'none'
              }}
            >
              <option value="Weekend Masterclass (Saturday 11 AM)">Weekend Masterclass (Saturday 11 AM)</option>
              <option value="Evening Weekday Demo (Thursday 6 PM)">Evening Weekday Demo (Thursday 6 PM)</option>
              <option value="Campus Walkthrough & Personal Lab Demo">Campus Walkthrough &amp; Personal Lab Demo (Patel Nagar)</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-emerald glow-emerald"
            style={{ width: '100%', marginTop: '0.5rem', padding: '0.875rem' }}
          >
            <span>Confirm Demo Booking via WhatsApp →</span>
          </button>
        </form>
      </div>
    </div>
  );
}
