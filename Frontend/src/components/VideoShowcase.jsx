import React, { useState, useEffect, useRef } from 'react';
import { VIDEO_REELS } from '../data/coursesData';

export default function VideoShowcase({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAutoplay, setIsPlayingAutoplay] = useState(true);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const timerRef = useRef(null);

  const categories = ['All', 'Agentic AI', 'Campus Tour', 'Mock Interview', 'Machine Learning', 'Analytics & BI'];

  const filteredReels = activeCategory === 'All'
    ? VIDEO_REELS
    : VIDEO_REELS.filter(reel => reel.category === activeCategory);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  // Autoplay sliding timer
  useEffect(() => {
    if (!isPlayingAutoplay || activeVideoModal !== null || filteredReels.length <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredReels.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlayingAutoplay, activeVideoModal, filteredReels.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredReels.length) % filteredReels.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredReels.length);
  };

  const activeReel = filteredReels[currentIndex] || filteredReels[0];

  return (
    <section 
      id="student-reels"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid rgba(51, 65, 85, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78, 222, 163, 0.07) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        
        {/* Section Header */}
        <div 
          style={{
            maxWidth: '52rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.875rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              smart_display
            </span>
            <span>CAMPUS &amp; CAPSTONE REELS</span>
          </div>

          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--color-on-surface)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2
            }}
          >
            Watch Our Students Build{' '}
            <span className="text-gradient-cyan-blue">Production AI in Action</span>
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.65,
              maxWidth: '44rem'
            }}
          >
            Explore real student capstone demos, Patel Nagar campus walkthroughs, 1-on-1 mock interview screens, and verified placement reactions.
          </p>

          {/* Category Filter Pills */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginTop: '0.75rem'
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                style={{
                  padding: '0.4rem 1.1rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid rgba(51, 65, 85, 0.5)',
                  backgroundColor: activeCategory === cat ? 'rgba(6, 182, 212, 0.18)' : 'var(--color-surface-low)',
                  color: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Sliding Video Card Showcase */}
        {activeReel && (
          <div 
            style={{
              maxWidth: '68rem',
              margin: '0 auto',
              backgroundColor: 'var(--color-surface-low)',
              border: '1px solid rgba(51, 65, 85, 0.5)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setIsPlayingAutoplay(false)}
            onMouseLeave={() => setIsPlayingAutoplay(true)}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                minHeight: '440px'
              }}
            >
              {/* Left Column: Interactive Video Preview Frame */}
              <div 
                style={{
                  position: 'relative',
                  minHeight: '340px',
                  backgroundColor: '#050914',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveVideoModal(activeReel)}
              >
                {/* Poster / Video Thumbnail */}
                <img 
                  src={activeReel.poster} 
                  alt={activeReel.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85)',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Dark Vignette Gradient */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(8,14,29,0.3) 0%, rgba(8,14,29,0.85) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Badge Top Left */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    border: `1px solid ${activeReel.badgeColor}66`,
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    backdropFilter: 'blur(8px)',
                    zIndex: 2
                  }}
                >
                  <span 
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: activeReel.badgeColor,
                      boxShadow: `0 0 8px ${activeReel.badgeColor}`
                    }}
                  />
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: activeReel.badgeColor,
                      letterSpacing: '0.04em'
                    }}
                  >
                    {activeReel.badge}
                  </span>
                </div>

                {/* Duration Tag Top Right */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '0.375rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    zIndex: 2
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
                  <span>{activeReel.duration}</span>
                </div>

                {/* Glowing Center Play Button */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <div 
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(6, 182, 212, 0.9)',
                      color: '#080e1d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 35px rgba(6, 182, 212, 0.75)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.backgroundColor = 'rgba(6, 182, 212, 0.9)';
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '36px', marginLeft: '3px' }}>
                      play_arrow
                    </span>
                  </div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    CLICK TO PLAY DEMO
                  </span>
                </div>

                {/* Bottom Overlay Info on Thumbnail */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '18px' }}>
                      verified
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>
                      {activeReel.student}
                    </span>
                  </div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--color-primary)',
                      backgroundColor: 'rgba(6, 182, 212, 0.15)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem'
                    }}
                  >
                    {activeReel.batch}
                  </span>
                </div>
              </div>

              {/* Right Column: Video Description & Meta */}
              <div 
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  {/* Category & Placement Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-on-surface-variant)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {activeReel.subtitle}
                    </span>
                    <span 
                      style={{
                        padding: '0.25rem 0.625rem',
                        borderRadius: '0.25rem',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--color-tertiary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600
                      }}
                    >
                      {activeReel.placement}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--color-on-surface)',
                      lineHeight: 1.3
                    }}
                  >
                    {activeReel.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: 1.65
                    }}
                  >
                    {activeReel.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div>
                    <span 
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--color-on-surface-variant)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.5rem'
                      }}
                    >
                      Technologies Covered
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {activeReel.techStack.map(tech => (
                        <span 
                          key={tech}
                          style={{
                            padding: '0.25rem 0.6rem',
                            borderRadius: '0.25rem',
                            backgroundColor: 'var(--color-surface-container)',
                            border: '1px solid rgba(51, 65, 85, 0.6)',
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Controls & CTA */}
                <div 
                  style={{
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(51, 65, 85, 0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    
                    {/* Action button */}
                    <button
                      onClick={() => setActiveVideoModal(activeReel)}
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        play_circle
                      </span>
                      <span>Watch Full Capstone</span>
                    </button>

                    {/* Book Demo Button */}
                    <button
                      onClick={onOpenDemo}
                      className="btn-secondary"
                      style={{ padding: '0.75rem 1.25rem', fontSize: '0.875rem' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-tertiary)' }}>
                        school
                      </span>
                      <span>Join Live Demo</span>
                    </button>

                  </div>

                  {/* Sliding Slider Navigation Controls */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.5rem'
                    }}
                  >
                    {/* Counter & Autoplay status */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                        Reel {currentIndex + 1} of {filteredReels.length}
                      </span>
                      <button
                        onClick={() => setIsPlayingAutoplay(!isPlayingAutoplay)}
                        title={isPlayingAutoplay ? 'Pause Auto-slide' : 'Resume Auto-slide'}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isPlayingAutoplay ? 'var(--color-tertiary)' : 'var(--color-on-surface-variant)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.2rem'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          {isPlayingAutoplay ? 'pause_circle' : 'play_circle'}
                        </span>
                      </button>
                    </div>

                    {/* Next / Prev Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={handlePrev}
                        aria-label="Previous Reel"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '0.375rem',
                          backgroundColor: 'var(--color-surface-container)',
                          border: '1px solid rgba(51, 65, 85, 0.6)',
                          color: 'var(--color-on-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                      </button>

                      <button
                        onClick={handleNext}
                        aria-label="Next Reel"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '0.375rem',
                          backgroundColor: 'var(--color-surface-container)',
                          border: '1px solid rgba(51, 65, 85, 0.6)',
                          color: 'var(--color-on-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.6)'}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Slide Track Dots & Thumbnails Strip */}
            <div 
              style={{
                backgroundColor: 'var(--color-surface-lowest)',
                borderTop: '1px solid rgba(51, 65, 85, 0.4)',
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                overflowX: 'auto'
              }}
            >
              {filteredReels.map((reel, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={reel.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0.85rem',
                      borderRadius: '0.5rem',
                      backgroundColor: isActive ? 'var(--color-surface-container)' : 'transparent',
                      border: isActive ? '1px solid var(--color-primary)' : '1px solid rgba(51, 65, 85, 0.3)',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <img 
                      src={reel.poster} 
                      alt="" 
                      style={{
                        width: '32px',
                        height: '24px',
                        borderRadius: '0.25rem',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: isActive ? 'var(--color-on-surface)' : 'inherit' }}>
                        {reel.title.length > 28 ? reel.title.substring(0, 28) + '...' : reel.title}
                      </span>
                      <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-subtle)' }}>
                        {reel.category} • {reel.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        )}

      </div>

      {/* Video Modal Player (Theater Mode) */}
      {activeVideoModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(5, 9, 20, 0.92)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '56rem',
              backgroundColor: 'var(--color-surface-card)',
              borderRadius: '1rem',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              boxShadow: '0 25px 70px -10px rgba(0, 0, 0, 0.9)',
              overflow: 'hidden'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(51, 65, 85, 0.4)',
                backgroundColor: 'var(--color-surface-container)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
                  play_circle
                </span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-on-surface)' }}>
                    {activeVideoModal.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-on-surface-variant)' }}>
                    Presenter: {activeVideoModal.student} • {activeVideoModal.batch}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-on-surface-variant)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.25rem'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>close</span>
              </button>
            </div>

            {/* Video Iframe Container (16:9 Aspect Ratio) */}
            <div 
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                backgroundColor: '#000000'
              }}
            >
              <iframe 
                src={`${activeVideoModal.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideoModal.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>

            {/* Modal Bottom Details */}
            <div 
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--color-surface-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--color-tertiary)', fontWeight: 600 }}>
                  {activeVideoModal.placement}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
                  Technologies: {activeVideoModal.techStack.join(', ')}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setActiveVideoModal(null);
                    if (onOpenDemo) onOpenDemo();
                  }}
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.8125rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>event_available</span>
                  <span>Book Free Demo Session</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
