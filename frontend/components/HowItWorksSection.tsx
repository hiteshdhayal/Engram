'use client';

import React from 'react';

const sourceNodes = ['Gmail', 'Fireflies/Zoom', 'Notion/Drive', 'Slack'];
const outputNodes = ['Draft email', 'Block cal', 'Save note', 'Post update'];

const steps = [
  {
    num: '01',
    title: 'Ingest',
    body: 'Corsair connects your tools in one auth flow. Transcripts, emails, docs, and calendar events stream into Meridian continuously.',
  },
  {
    num: '02',
    title: 'Understand',
    body: 'Everything is chunked, embedded, and stored with metadata. Ask about a decision from 6 weeks ago — Meridian finds it in milliseconds.',
  },
  {
    num: '03',
    title: 'Act',
    body: 'The agent executes across every connected app simultaneously. No tab switching. No copy-pasting. One instruction, fully carried out.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.65) 50%, rgba(5,5,8,0.92) 100%), url(/mid-section.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '100px 5vw',
        position: 'relative',
      }}
    >
      {/* Eyebrow */}
      <p
        className="font-mono-custom reveal"
        style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 20 }}
      >
        THE SYSTEM
      </p>

      {/* Headline */}
      <h2
        className="font-display reveal"
        style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 300,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.15,
          marginBottom: 64,
        }}
      >
        Connected to everything.<br />
        Controlled by you.
      </h2>

      {/* Flow diagram */}
      <div
        className="reveal"
        style={{
          maxWidth: 760,
          margin: '0 auto 80px',
          position: 'relative',
          height: 320,
        }}
      >
        <svg
          viewBox="0 0 800 320"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <defs>
            <filter id="glow-dot" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background paths */}
          <path d="M 100,30 C 100,110 400,90 400,160" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 300,30 C 300,110 400,110 400,160" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 500,30 C 500,110 400,110 400,160" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 700,30 C 700,110 400,90 400,160" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />

          <path d="M 400,160 C 400,210 100,210 100,290" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 400,160 C 400,210 300,210 300,290" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 400,160 C 400,210 500,210 500,290" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 400,160 C 400,210 700,210 700,290" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Animated data particles flowing down to brain */}
          <circle r="4" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 100,30 C 100,110 400,90 400,160" />
          </circle>
          <circle r="4" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="3.0s" repeatCount="indefinite" path="M 300,30 C 300,110 400,110 400,160" />
          </circle>
          <circle r="4" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="2.7s" repeatCount="indefinite" path="M 500,30 C 500,110 400,110 400,160" />
          </circle>
          <circle r="4" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 700,30 C 700,110 400,90 400,160" />
          </circle>

          {/* Animated data particles flowing from brain to outputs */}
          <circle r="3.5" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 400,160 C 400,210 100,210 100,290" />
          </circle>
          <circle r="3.5" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M 400,160 C 400,210 300,210 300,290" />
          </circle>
          <circle r="3.5" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 400,160 C 400,210 500,210 500,290" />
          </circle>
          <circle r="3.5" fill="#f0d080" filter="url(#glow-dot)">
            <animateMotion dur="2.6s" repeatCount="indefinite" path="M 400,160 C 400,210 700,210 700,290" />
          </circle>
        </svg>

        {/* Source nodes row */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 0,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems: 'center',
            zIndex: 5,
          }}
        >
          {sourceNodes.map((node) => (
            <div
              key={node}
              style={{
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 999,
                fontSize: 12,
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(5, 5, 8, 0.85)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c', display: 'inline-block' }} />
              {node}
            </div>
          ))}
        </div>

        {/* Center node — Brain Image */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          <div
            id="meridian-brain-node"
            style={{
              width: 100,
              height: 100,
              border: '2px solid #c9a84c',
              borderRadius: '50%',
              background: 'rgba(5, 5, 8, 0.9)',
              boxShadow: '0 0 32px rgba(201,168,76,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              animation: 'glowPulse 3s ease-in-out infinite',
            }}
          >
            <img
              src="/brain-logo.png"
              alt="Meridian Brain"
              style={{
                width: '110%',
                height: '110%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Output nodes row */}
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems: 'center',
            zIndex: 5,
          }}
        >
          {outputNodes.map((node) => (
            <div
              key={node}
              style={{
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 999,
                fontSize: 12,
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(5, 5, 8, 0.85)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span style={{ fontSize: 11 }}>→</span> {node}
            </div>
          ))}
        </div>
      </div>

      {/* Three columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="reveal"
            style={{
              animationDelay: `${i * 80}ms`,
              position: 'relative',
              background: 'rgba(5, 5, 8, 0.45)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 16,
              padding: '32px 28px',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
              transition: 'transform 300ms, border-color 300ms, background 300ms',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201, 168, 76, 0.3)';
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(5, 5, 8, 0.65)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 255, 255, 0.06)';
              (e.currentTarget as HTMLDivElement).style.background = 'rgba(5, 5, 8, 0.45)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            <p
              className="font-display"
              style={{
                position: 'absolute',
                top: 12,
                right: 20,
                fontSize: 64,
                fontWeight: 300,
                color: 'rgba(201,168,76,0.12)',
                lineHeight: 1,
                margin: 0,
                pointerEvents: 'none',
              }}
            >
              {step.num}
            </p>
            <h3
              style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 12 }}
            >
              {step.title}
            </h3>
            <p
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
