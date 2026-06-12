'use client';

import React from 'react';

const stats = [
  { value: '4.2hrs', label: 'saved per person, per week' },
  { value: '60+', label: 'integrations via Corsair' },
  { value: '< 2s', label: 'average task execution time' },
  { value: '0', label: 'new tools to learn' },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      style={{
        background: '#060d12',
        padding: '60px 5vw',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 1100,
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
      >
        {stats.map((stat, i) => (
          <React.Fragment key={stat.value}>
            <div
              className="reveal"
              style={{
                flex: '1 1 200px',
                textAlign: 'center',
                padding: '24px 32px',
                animationDelay: `${i * 80}ms`,
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  fontWeight: 300,
                  color: '#f0d080',
                  marginBottom: 8,
                  filter: 'drop-shadow(0 0 12px rgba(240,208,128,0.4))',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {stat.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div
                style={{
                  width: 1,
                  height: 48,
                  background: 'rgba(255,255,255,0.07)',
                  flexShrink: 0,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
