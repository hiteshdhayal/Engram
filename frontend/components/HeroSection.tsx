'use client';

import React from 'react';
import GravitationalLens from './GravitationalLens';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'url("/hero-bg.png") center center / cover no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(5, 5, 8, 0.35) 0%, rgba(5, 5, 8, 0.55) 40%, rgba(5, 5, 8, 0.75) 70%, rgba(5, 5, 8, 0.90) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Background radial */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 800,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="font-mono-custom reveal"
          style={{
            fontSize: 11,
            letterSpacing: '0.3em',
            color: '#c9a84c',
            marginBottom: 48,
            textTransform: 'uppercase',
          }}
        >
          ENGRAM · AI INFRASTRUCTURE
        </p>

        {/* Gravitational lens animation replaced by background image */}
        {/* 
        <div className="reveal" style={{ animationDelay: '100ms' }}>
          <GravitationalLens scale={1} />
        </div> 
        */}

        {/* Headline */}
        <h1
          className="font-mono-custom reveal"
          style={{
            fontSize: 'clamp(56px, 9vw, 110px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            marginTop: 40,
            color: 'rgba(255,255,255,0.92)',
            animationDelay: '200ms',
          }}
        >
          THE <span style={{
            textDecorationLine: 'underline',
            textDecorationColor: '#c9a84c',
            textDecorationThickness: '4px',
            textUnderlineOffset: '8px',
            filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.8))',
          }}>BRAIN</span> YOUR<br />
          COMPANY NEVER HAD.
        </h1>

        {/* Subheadline */}
        <p
          className="reveal"
          style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 460,
            textAlign: 'center',
            lineHeight: 1.7,
            marginTop: 24,
            animationDelay: '300ms',
          }}
        >
          Every meeting, email, and document — understood, connected, and acted on.
          Automating work, one click at a time.
        </p>

        {/* CTA Row */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 40,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animationDelay: '400ms',
          }}
        >
          <button
            id="hero-cta-early-access"
            style={{
              borderRadius: 999,
              border: '1px solid #c9a84c',
              color: '#c9a84c',
              background: 'transparent',
              padding: '12px 32px',
              fontSize: 15,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = '#c9a84c';
              (e.target as HTMLButtonElement).style.color = '#050508';
              (e.target as HTMLButtonElement).style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = 'transparent';
              (e.target as HTMLButtonElement).style.color = '#c9a84c';
              (e.target as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            Request early access
          </button>

          <button
            id="hero-cta-watch"
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.5)',
              fontSize: 15,
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'color 200ms ease',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.color = 'rgba(255,255,255,0.9)';
              const span = btn.querySelector('.arrow') as HTMLElement;
              if (span) span.style.animation = 'arrowBounce 1.5s ease-in-out infinite';
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.color = 'rgba(255,255,255,0.5)';
              const span = btn.querySelector('.arrow') as HTMLElement;
              if (span) span.style.animation = 'none';
            }}
          >
            Watch it work{' '}
            <span className="arrow" style={{ display: 'inline-block' }}>↓</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 64,
            gap: 8,
            animationDelay: '500ms',
          }}
        >
          <div
            className="animate-scroll-line"
            style={{
              width: 1,
              height: 56,
              background: 'linear-gradient(to bottom, transparent, #c9a84c, transparent)',
              opacity: 0.4,
            }}
          />
          <span
            className="font-mono-custom"
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}
