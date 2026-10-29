import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('Artificial Intelligence & Generative AI (Flagship)');
  const [slot, setSlot] = useState('Saturday Proctored Class (11:00 AM)');

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 10) return;

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const msg = 
`Hi LiveDATA Institute, I would like to book a Free Academic Counselling & Demo Class:
*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Interested Course:* ${track}
*Preferred Demo Slot:* ${slot}`;

    window.open(`https://wa.me/919045667030?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(20, 43, 74, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #CBD5E1',
          borderRadius: '12px',
          maxWidth: '38rem',
          width: '100%',
          padding: '2.25rem',
          boxShadow: '0 25px 60px rgba(20, 43, 74, 0.3)',
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
            color: '#64748B',
            cursor: 'pointer',
            padding: '0.25rem',
            borderRadius: '6px'
          }}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="badge-navy" style={{ marginBottom: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>event_available</span>
            <span>FREE ACADEMIC COUNSELLING</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 700, color: '#142B4A', margin: 0 }}>
            Book Your Free Counselling &amp; Demo
          </h3>
          <p style={{ color: '#475569', fontSize: '0.9375rem', marginTop: '0.35rem', lineHeight: 1.5, margin: '0.35rem 0 0 0' }}>
            Meet our senior faculty, evaluate past test papers, and discuss your preparation roadmap at our Patel Nagar campus or live online.
          </p>
        </div>

        <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="form-group">
            <label className="form-label">
              Full Name *
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Aman Negi" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Mobile Phone / WhatsApp Number *
            </label>
            <input 
              type="tel" 
              required 
              maxLength={10} 
              pattern="[0-9]{10}" 
              placeholder="10-digit mobile number" 
              value={phone} 
              onChange={e => setPhone(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Course / Specialization of Interest
            </label>
            <select
              value={track}
              onChange={e => setTrack(e.target.value)}
              className="form-input"
            >
              <option value="Artificial Intelligence & Generative AI (Flagship)">
                Artificial Intelligence &amp; Generative AI (Flagship)
              </option>
              <option value="Core Machine Learning & Predictive Modeling">
                Core Machine Learning &amp; Predictive Modeling
              </option>
              <option value="Python Programming & Data Structures">
                Python Programming &amp; Data Structures
              </option>
              <option value="Data Analytics, Advanced SQL & Business Intelligence">
                Data Analytics, Advanced SQL &amp; Business Intelligence
              </option>
              <option value="Applied Statistics & Mathematical Foundations">
                Applied Statistics &amp; Mathematical Foundations
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Preferred Session Slot
            </label>
            <select
              value={slot}
              onChange={e => setSlot(e.target.value)}
              className="form-input"
            >
              <option value="Saturday Proctored Class (11:00 AM)">
                Saturday Proctored Class (11:00 AM)
              </option>
              <option value="Evening Weekday Demo (Thursday 6:00 PM)">
                Evening Weekday Demo (Thursday 6:00 PM)
              </option>
              <option value="Personal In-Campus Counselling (Patel Nagar)">
                Personal In-Campus Counselling (Patel Nagar Campus)
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-gold"
            style={{ width: '100%', minHeight: '52px', marginTop: '0.5rem', fontSize: '1rem' }}
          >
            <span>Confirm Booking via WhatsApp →</span>
          </button>
        </form>
      </div>
    </div>
  );
}
