'use client';

import React, { useState } from 'react';
import GravitationalLens from './GravitationalLens';

const toolCallStyle: React.CSSProperties = {
  fontFamily: 'JetBrains Mono, monospace',
  fontSize: 11,
  background: 'rgba(255,255,255,0.04)',
  borderLeft: '2px solid #c9a84c',
  borderRadius: '0 6px 6px 0',
  padding: '8px 10px',
  margin: '6px 0',
  color: 'rgba(255,255,255,0.6)',
  lineHeight: 1.4,
};

const outputCards = [
  {
    id: 'email-draft',
    icon: (
      <span style={{ fontSize: 12, fontWeight: 700, color: '#ea4335' }}>G</span>
    ),
    label: 'Draft created',
    time: 'just now',
    title: 'Re: Q2 roadmap follow-ups',
    preview:
      'Hi Sarah, following up on the action items from Monday\'s call — wanted to confirm...',
    actions: [
      { label: 'Open draft', variant: 'gold' },
      { label: 'Discard', variant: 'dim' },
    ],
  },
  {
    id: 'calendar-event',
    icon: (
      <span style={{ fontSize: 12, fontWeight: 700, color: '#4285f4' }}>📅</span>
    ),
    label: 'Event created',
    time: 'just now',
    title: 'Deep Work — No meetings',
    subtitle: 'Tomorrow, 2:00 PM – 4:00 PM',
    badge: '2 conflicts auto-declined',
    badgeColor: '#e05252',
    live: true,
  },
  {
    id: 'notion-saved',
    icon: (
      <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>N</span>
    ),
    label: 'Saved to Notion',
    time: 'just now',
    title: 'Weekly meeting summary — W23 2026',
    tags: ['zoom', 'action-items', 'q2'],
  },
];

export default function AgentDemoSection() {
  const [inputVal, setInputVal] = useState('');

  return (
    <section
      id="agent-demo"
      style={{
        background: '#050508',
        padding: '50px 5vw 40px 5vw',
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: 'center', width: '100%', marginBottom: 32 }}>
        <p
          className="font-mono-custom reveal"
          style={{ fontSize: 11, letterSpacing: '0.3em', color: '#c9a84c', marginBottom: 12 }}
        >
          LIVE · AGENT
        </p>
        <h2
          className="font-display reveal"
          style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 300, color: 'rgba(255,255,255,0.92)', lineHeight: 1.1 }}
        >
          One instruction in.<br />
          A dozen actions out.
        </h2>
      </div>

      {/* Split panel — no reveal so columns always render */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px 1fr',
          gap: 32,
          maxWidth: 1280,
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        {/* Left — Agent chat */}
        <div
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span className="font-mono-custom" style={{ fontSize: 12, color: '#c9a84c', fontWeight: 400 }}>
              Agent
            </span>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 6px #4ade80',
                display: 'inline-block',
                animation: 'pulseDot 2s ease-in-out infinite',
              }}
            />
          </div>

          {/* Conversation */}
          {/* User message 1 */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 14,
                padding: '8px 12px',
                maxWidth: '85%',
                fontSize: 13,
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.4,
              }}
            >
              Summarize last week's Zoom calls and draft follow-up emails for any open action items.
            </div>
          </div>

          {/* Agent response 1 */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 600,
                color: '#050508',
                flexShrink: 0,
              }}
            >
              E
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6, lineHeight: 1.4 }}>
                Running across 4 meetings from Mon–Fri...
              </p>
              <div style={toolCallStyle}>
                {'>'} fireflies.db.transcripts.search {'{'} last_7_days: true {'}'}<br />
                {'>'} gmail.api.drafts.create × 3<br />
                {'>'} googlecalendar.db.events.list {'{'} this_week: true {'}'}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>
                Done. 3 draft emails created. 2 follow-ups flagged. Opening drafts now →
              </p>
            </div>
          </div>



          {/* Input bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 999,
              padding: '8px 14px',
              gap: 8,
              marginTop: 4,
            }}
          >
            <input
              id="agent-task-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Give Engram AI a task..."
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                color: 'rgba(255,255,255,0.7)',
              }}
            />
            <button
              id="agent-send-btn"
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: '#c9a84c',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#f0d080';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#c9a84c';
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Center — Gravitational Lens */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 380,
        }}>
          <GravitationalLens scale={1.0} />
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <p className="font-mono-custom" style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.25em', marginBottom: 4, fontWeight: 500 }}>
              ENGRAM
            </p>
            <p className="font-mono-custom" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.25em' }}>
              · THINKING
            </p>
          </div>
        </div>

        {/* Right — Output cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {outputCards.map((card) => (
            <div
              key={card.id}
              id={`output-card-${card.id}`}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                padding: '12px 18px',
                transition: 'border-color 250ms, background 250ms',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.35)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.025)';
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.icon}
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', flex: 1 }}>
                  {card.label}
                </span>
                {card.live && (
                  <span style={{ fontSize: 10, color: '#4ade80', marginRight: 6 }}>● Live</span>
                )}
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{card.time}</span>
              </div>

              {/* Title */}
              <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>
                {card.title}
              </p>

              {/* Subtitle / preview */}
              {card.preview && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4, marginBottom: 8, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {card.preview}
                </p>
              )}
              {card.subtitle && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>
                  {card.subtitle}
                </p>
              )}

              {/* Badge */}
              {card.badge && (
                <div style={{ marginBottom: 6 }}>
                  <span
                    style={{
                      fontSize: 10,
                      padding: '2px 8px',
                      borderRadius: 999,
                      background: 'rgba(224,82,82,0.15)',
                      color: card.badgeColor,
                      border: `1px solid ${card.badgeColor}40`,
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
              )}

              {/* Tags */}
              {card.tags && (
                <div style={{ display: 'flex', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-custom"
                      style={{
                        fontSize: 10,
                        padding: '2px 8px',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              {card.actions && (
                <div style={{ display: 'flex', gap: 6 }}>
                  {card.actions.map((action) => (
                    <button
                      key={action.label}
                      style={{
                        fontSize: 11,
                        padding: '4px 10px',
                        borderRadius: 999,
                        border: action.variant === 'gold' ? '1px solid #c9a84c' : 'none',
                        background: 'none',
                        color: action.variant === 'gold' ? '#c9a84c' : 'rgba(255,255,255,0.4)',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 200ms',
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
