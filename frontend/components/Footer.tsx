'use client';

import React from 'react';

const navLinks = ['Privacy', 'Terms', 'Docs', 'Status'];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: '#050508',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '28px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span
          className="font-display"
          style={{ fontSize: 22, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}
        >
          Meridian
        </span>
        <span
          style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}
        >
          © 2026 Meridian AI Inc.
        </span>
      </div>

      {/* Center nav */}
      <nav style={{ display: 'flex', gap: 32 }}>
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            id={`footer-link-${link.toLowerCase()}`}
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              transition: 'color 200ms',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Right */}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
        Built on Corsair · Powered by OpenAI
      </p>
    </footer>
  );
}
