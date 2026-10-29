import React, { useState } from 'react';
import { FAQS } from '../data/coursesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section 
      id="faqs"
      className="section-py"
      style={{
        backgroundColor: '#F3F6FA',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        
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
          <div className="badge-navy">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              help_outline
            </span>
            <span>CLARITY FOR STUDENTS &amp; PARENTS</span>
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
            Frequently Asked Questions
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              color: '#475569',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            Have questions regarding batch schedules, offline classroom facilities, mock testing, or counselling? Find key details below.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: isOpen ? '1.5px solid #2457A7' : '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 6px 20px rgba(20, 43, 74, 0.08)' : 'var(--shadow-card)'
                }}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: isOpen ? '#142B4A' : '#1E293B',
                      lineHeight: 1.4
                    }}
                  >
                    {faq.question}
                  </span>

                  <span 
                    className="material-symbols-outlined" 
                    style={{
                      color: isOpen ? '#D9A441' : '#2457A7',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  >
                    expand_more
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#475569',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
