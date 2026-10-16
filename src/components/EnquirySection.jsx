import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function EnquirySection({ selectedCourse, selectedMode, onFormSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: selectedCourse || 'Artificial Intelligence (Agentic AI & Gen AI)',
    mode: selectedMode || 'Offline (Dehradun Campus)',
    query: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Sync prop changes into form
  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (selectedMode) {
      setFormData(prev => ({ ...prev, mode: selectedMode }));
    }
  }, [selectedMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please provide your full name');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please enter a valid 10-digit mobile phone number');
      return;
    }

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Construct formatted WhatsApp message
    const formattedMessage = 
`Hi LiveDATA, I would like to enquire about a course:
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim() || 'Not specified'}
*Course:* ${formData.course}
*Mode:* ${formData.mode}
*Query:* ${formData.query.trim() || 'I would like to get syllabus details and batch timing.'}`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919045667030?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    if (onFormSubmitted) {
      onFormSubmitted(formData);
    }
  };

  return (
    <section 
      id="enquiry-section"
      className="grid-pattern"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface-lowest)',
        borderTop: '1px solid rgba(51, 65, 85, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-6rem',
          left: '20%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: '5%',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Value Pitch & Guarantees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.875rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                alignSelf: 'flex-start'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                how_to_reg
              </span>
              <span>DIRECT ADMISSIONS DESK</span>
            </div>

            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--color-on-surface)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15
              }}
            >
              Ready to Launch Your AI &amp; Data Career?
            </h2>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.65
              }}
            >
              Get in touch directly with our Patel Nagar senior faculty and admissions counselors. We'll evaluate your tech goals, arrange a live code walkthrough, and schedule your free demo class.
            </p>

            {/* Value Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-tertiary)',
                    flexShrink: 0
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-on-surface)' }}>
                  100% Guaranteed 1-on-1 career counseling with senior mentor
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-on-surface)' }}>
                  Detailed syllabus breakdown &amp; portfolio project roadmaps
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(0, 83, 219, 0.15)',
                    border: '1px solid rgba(0, 83, 219, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-secondary)',
                    flexShrink: 0
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <span style={{ fontSize: '0.9375rem', color: 'var(--color-on-surface)' }}>
                  Flexible batch options: Offline Lab or Live Interactive Cloud
                </span>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div 
              style={{
                marginTop: '1.25rem',
                padding: '1.25rem',
                borderRadius: '0.75rem',
                backgroundColor: 'var(--color-surface-container)',
                border: '1px solid rgba(51, 65, 85, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600
                }}
              >
                Prefer Direct Call or WhatsApp?
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                <a 
                  href="https://wa.me/919045667030" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.35rem', 
                    color: 'var(--color-tertiary)', 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.875rem', 
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>
                    chat
                  </span>
                  <span>+91 9045667030</span>
                </a>

                <span style={{ color: 'var(--color-outline-variant)' }}>|</span>

                <a 
                  href="tel:+917906644799"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.35rem', 
                    color: 'var(--color-primary)', 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.875rem', 
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    call
                  </span>
                  <span>+91 7906644799</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Student Enquiry Form Card */}
          <div id="enquiry-form">
            <div 
              className="glow-cyan"
              style={{
                backgroundColor: 'rgba(21, 27, 43, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
                borderRadius: '1rem',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: '0 20px 40px -15px rgba(2, 6, 23, 0.8)',
                position: 'relative'
              }}
            >
              {/* Header Badge */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(51, 65, 85, 0.3)',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'block'
                    }}
                  >
                    Direct Admissions Desk
                  </span>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-on-surface)'
                    }}
                  >
                    Request Callback &amp; Free Demo
                  </h3>
                </div>

                <span 
                  style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '0.25rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Next Batch Soon
                </span>
              </div>

              {submitted ? (
                <div 
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '2px solid var(--color-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-tertiary)'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                      check_circle
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    Enquiry Prepared for WhatsApp!
                  </h4>
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem', maxWidth: '24rem', lineHeight: 1.6 }}>
                    WhatsApp was opened in a new tab. If it didn't open automatically, you can click below:
                  </p>
                  
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                    }}
                    className="btn-secondary"
                    style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  {error && (
                    <div 
                      style={{
                        padding: '0.5rem 0.75rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.4)',
                        borderRadius: '0.375rem',
                        color: '#fca5a5',
                        fontSize: '0.8125rem'
                      }}
                    >
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label 
                      htmlFor="studentName"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-on-surface-variant)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Full Name <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <input 
                      id="studentName"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Aman Negi"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-surface-lowest)',
                        border: '1px solid rgba(51, 65, 85, 0.6)',
                        borderRadius: '0.5rem',
                        padding: '0.65rem 0.875rem',
                        color: 'var(--color-on-surface)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label 
                        htmlFor="studentPhone"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--color-on-surface-variant)',
                          marginBottom: '0.35rem'
                        }}
                      >
                        Phone Number <span style={{ color: 'var(--color-error)' }}>*</span>
                      </label>
                      <input 
                        id="studentPhone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        placeholder="10-digit Mobile"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--color-surface-lowest)',
                          border: '1px solid rgba(51, 65, 85, 0.6)',
                          borderRadius: '0.5rem',
                          padding: '0.65rem 0.875rem',
                          color: 'var(--color-on-surface)',
                          fontSize: '0.9375rem',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="studentEmail"
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--color-on-surface-variant)',
                          marginBottom: '0.35rem'
                        }}
                      >
                        Email Address
                      </label>
                      <input 
                        id="studentEmail"
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          backgroundColor: 'var(--color-surface-lowest)',
                          border: '1px solid rgba(51, 65, 85, 0.6)',
                          borderRadius: '0.5rem',
                          padding: '0.65rem 0.875rem',
                          color: 'var(--color-on-surface)',
                          fontSize: '0.9375rem',
                          fontFamily: 'var(--font-body)',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                      />
                    </div>
                  </div>

                  {/* Course Track Select */}
                  <div>
                    <label 
                      htmlFor="courseTrack"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-on-surface-variant)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Interested Course Track <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <select 
                      id="courseTrack"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-surface-lowest)',
                        border: '1px solid rgba(51, 65, 85, 0.6)',
                        borderRadius: '0.5rem',
                        padding: '0.65rem 0.875rem',
                        color: 'var(--color-on-surface)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Artificial Intelligence (Agentic AI & Gen AI)">Artificial Intelligence (Agentic AI &amp; Gen AI)</option>
                      <option value="Machine Learning">Machine Learning (ML / Deep Learning)</option>
                      <option value="Data Analytics">Data Analytics &amp; Business Intel</option>
                      <option value="Python">Python Development (Core + Advanced)</option>
                      <option value="Data Visualization">Data Visualization (PowerBI / Tableau)</option>
                      <option value="General / Multiple Courses">General / Custom AI Track</option>
                    </select>
                  </div>

                  {/* Preferred Learning Mode Radio Choices */}
                  <div>
                    <label 
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-on-surface-variant)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Preferred Learning Mode <span style={{ color: 'var(--color-error)' }}>*</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                      <label 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.65rem 0.75rem',
                          backgroundColor: 'var(--color-surface-lowest)',
                          border: formData.mode === 'Offline (Dehradun Campus)' ? '1px solid var(--color-primary)' : '1px solid rgba(51, 65, 85, 0.5)',
                          borderRadius: '0.5rem',
                          cursor: 'pointer'
                        }}
                      >
                        <input 
                          type="radio"
                          name="mode"
                          value="Offline (Dehradun Campus)"
                          checked={formData.mode === 'Offline (Dehradun Campus)'}
                          onChange={handleChange}
                          style={{ accentColor: 'var(--color-primary)' }}
                        />
                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface)' }}>Offline Dehradun Campus</span>
                      </label>

                      <label 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.65rem 0.75rem',
                          backgroundColor: 'var(--color-surface-lowest)',
                          border: formData.mode === 'Online (Live Interactive)' ? '1px solid var(--color-primary)' : '1px solid rgba(51, 65, 85, 0.5)',
                          borderRadius: '0.5rem',
                          cursor: 'pointer'
                        }}
                      >
                        <input 
                          type="radio"
                          name="mode"
                          value="Online (Live Interactive)"
                          checked={formData.mode === 'Online (Live Interactive)'}
                          onChange={handleChange}
                          style={{ accentColor: 'var(--color-primary)' }}
                        />
                        <span style={{ fontSize: '0.8125rem', color: 'var(--color-on-surface)' }}>Online Live</span>
                      </label>
                    </div>
                  </div>

                  {/* Questions / Background Textarea */}
                  <div>
                    <label 
                      htmlFor="studentQuery"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-on-surface-variant)',
                        marginBottom: '0.35rem'
                      }}
                    >
                      Questions or Background
                    </label>
                    <textarea 
                      id="studentQuery"
                      name="query"
                      rows={2}
                      placeholder="Tell us about your educational background or current role..."
                      value={formData.query}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'var(--color-surface-lowest)',
                        border: '1px solid rgba(51, 65, 85, 0.6)',
                        borderRadius: '0.5rem',
                        padding: '0.65rem 0.875rem',
                        color: 'var(--color-on-surface)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="btn-emerald glow-emerald"
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                    <span>Send Enquiry via WhatsApp →</span>
                  </button>

                  <div 
                    style={{
                      marginTop: '0.5rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(51, 65, 85, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--color-on-surface-variant)'
                    }}
                  >
                    <span>🔒 100% Privacy. No Spam.</span>
                    <span>Fast reply within 15 mins</span>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
