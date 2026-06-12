'use client';

import React from 'react';

const cards = [
  {
    id: 'email',
    tag: 'EMAIL',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
        <path d="M17 9l2 2-2 2" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Inbox triage, automated',
    body: 'Every email scored by urgency and intent. Replies drafted. Noise filtered. Never miss what matters.',
  },
  {
    id: 'meetings',
    tag: 'MEETINGS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Meeting → action, instantly',
    body: 'Zoom ends. Meridian reads the transcript, writes the recap, drafts follow-ups, and logs decisions. Before you close the tab.',
  },
  {
    id: 'research',
    tag: 'RESEARCH',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8a3 3 0 0 1 0 6" strokeDasharray="2 1" />
        <circle cx="11" cy="11" r="1" fill="#c9a84c" />
      </svg>
    ),
    title: 'On-demand research briefings',
    body: 'Ask a question. Meridian searches, reads, synthesizes, and saves a clean briefing to Notion.',
  },
  {
    id: 'scheduling',
    tag: 'SCHEDULING',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
    title: 'Scheduling without the back-and-forth',
    body: 'Paste a thread. Get three time slots that work for everyone, with a draft invite ready to send.',
  },
  {
    id: 'memory',
    tag: 'MEMORY',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04" />
      </svg>
    ),
    title: 'Company memory that compounds',
    body: 'Decisions, context, and people — stored as embeddings, retrieved by meaning. The longer you use Meridian, the smarter it gets.',
  },
  {
    id: 'agent',
    tag: 'AGENT',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: 'One chat, every tool',
    body: 'Type a command. Meridian executes across Gmail, Calendar, Slack, and Drive simultaneously. No integrations to manage.',
  },
];

export default function FeatureCardsSection() {
  return (
    <section
      id="features"
      style={{
        background: '#050508',
        padding: '100px 5vw',
      }}
    >
      {/* Headline */}
      <h2
        className="font-display reveal"
        style={{
          fontSize: 'clamp(36px, 4.5vw, 52px)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.1,
          marginBottom: 64,
          maxWidth: 600,
          textAlign: 'center',
          margin: '0 auto 64px auto',
        }}
      >
        Everything your team<br />
        does manually, automated.
      </h2>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            id={`feature-card-${card.id}`}
            className="reveal"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: 28,
              transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              animationDelay: `${i * 80}ms`,
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(201,168,76,0.35)';
              el.style.background = 'rgba(201,168,76,0.06)';
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(201,168,76,0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = 'rgba(255,255,255,0.08)';
              el.style.background = 'rgba(255,255,255,0.03)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)';
            }}
          >
            {/* Top row: icon + tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              {card.icon}
              <span
                className="font-mono-custom"
                style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}
              >
                {card.tag}
              </span>
            </div>
            {/* Title */}
            <h3
              style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginTop: 16, marginBottom: 8 }}
            >
              {card.title}
            </h3>
            {/* Body */}
            <p
              style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
