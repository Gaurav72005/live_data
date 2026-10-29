import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function EnquirySection({ selectedCourse, selectedMode }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: selectedCourse || 'Artificial Intelligence & Generative AI (Flagship)',
    mode: selectedMode || 'Offline (Patel Nagar Campus, Dehradun)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <section 
      id="enquiry-section"
      className="section-py"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div className="badge-gold">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              app_registration
            </span>
            <span>DIRECT ADMISSIONS DESK</span>
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
            Admission &amp; Academic Counselling Enquiry
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              color: '#475569',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '42rem'
            }}
          >
            Fill out the form below to receive detailed course prospectuses, fee structures, batch schedules, or to book a free 1-on-1 counseling session at Patel Nagar, Dehradun.
          </p>
        </div>

        {/* Enquiry Form Card: Pure white background, subtle border, soft shadow */}
        <div 
          className="academic-card"
          style={{
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: '12px'
          }}
        >
          {submitted ? (
            <div 
              style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5EE',
                  color: '#16804A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                  check_circle
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#142B4A',
                  margin: 0
                }}
              >
                Enquiry Successfully Registered
              </h3>

              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#475569',
                  maxWidth: '32rem',
                  margin: 0
                }}
              >
                Thank you for your interest, <strong>{formData.name}</strong>. Our academic admissions coordinator will get in touch with you shortly on <strong>{formData.phone}</strong>.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="btn-navy"
                style={{ marginTop: '1rem', minHeight: '48px', padding: '0.65rem 1.5rem' }}
              >
                <span>Submit Another Enquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">
                    Full Name <span style={{ color: '#E11D48' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label">
                    Phone / WhatsApp Number <span style={{ color: '#E11D48' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* Email Address */}
                <div className="form-group">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. aman.sharma@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Preferred Learning Mode */}
                <div className="form-group">
                  <label className="form-label">
                    Preferred Mode <span style={{ color: '#E11D48' }}>*</span>
                  </label>
                  <select
                    value={formData.mode}
                    onChange={e => setFormData({ ...formData, mode: e.target.value })}
                    className="form-input"
                  >
                    <option value="Offline (Patel Nagar Campus, Dehradun)">
                      Offline Classroom (Patel Nagar, Dehradun)
                    </option>
                    <option value="Live Interactive Online Cohort">
                      Live Interactive Online Cohort
                    </option>
                    <option value="Weekend Working Professional Batch">
                      Weekend Working Professional Batch
                    </option>
                  </select>
                </div>
              </div>

              {/* Course Track */}
              <div className="form-group">
                <label className="form-label">
                  Academic Course / Track of Interest <span style={{ color: '#E11D48' }}>*</span>
                </label>
                <select
                  value={formData.course}
                  onChange={e => setFormData({ ...formData, course: e.target.value })}
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
                  <option value="Comprehensive Data Science Career Diploma">
                    Comprehensive Data Science Career Diploma (Full Track)
                  </option>
                </select>
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label className="form-label">
                  Academic Background / Questions for Counsellor (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your current qualification (B.Tech, BCA, Working, etc.) or specific questions..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="form-input"
                  style={{ minHeight: '80px', resize: 'vertical' }}
                />
              </div>

              {/* Submit CTA */}
              <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{
                    width: '100%',
                    minHeight: '52px',
                    fontSize: '1rem',
                    boxShadow: 'var(--shadow-gold)'
                  }}
                >
                  {isSubmitting ? (
                    <span>Registering Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Admission Enquiry</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        send
                      </span>
                    </>
                  )}
                </button>

                <p 
                  style={{
                    fontSize: '0.8125rem',
                    color: '#64748B',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  🔒 We respect your privacy. Your information is strictly used for admissions counseling.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
