'use client';

import React, { useState } from 'react';
import GravitationalLens from './GravitationalLens';

export default function ClosingCTASection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to join waitlist.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(5,5,8,0.6), rgba(5,5,8,0.3)), url("/footer-bg.png") center bottom / cover no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Small lens removed to feature background image */}
      {/* 
      <div className="reveal">
        <GravitationalLens scale={0.6} />
      </div>
      */}

      {/* Headline */}
      <h2
        className="font-display reveal"
        style={{
          fontSize: 'clamp(42px, 6vw, 72px)',
          fontWeight: 300,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.1,
          marginTop: 32,
          marginBottom: 20,
          animationDelay: '100ms',
        }}
      >
        Your company's brain<br />
        is waiting.
      </h2>

      {/* Subtext */}
      <p
        className="reveal"
        style={{
          fontSize: 17,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: 440,
          textAlign: 'center',
          lineHeight: 1.7,
          marginBottom: 40,
          animationDelay: '200ms',
        }}
      >
        We're onboarding teams of 5–50 first.
        Join the early access list.
      </p>

      {/* Email form */}
      {!submitted ? (
        <form
          id="waitlist-form"
          onSubmit={handleSubmit}
          className="reveal"
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animationDelay: '300ms',
          }}
        >
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@company.com"
            required
            style={{
              width: 320,
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 999,
              padding: '14px 24px',
              color: 'rgba(255,255,255,0.9)',
              outline: 'none',
              transition: 'border-color 200ms',
            }}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = '#c9a84c';
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.07)';
            }}
          />
          <button
            id="waitlist-submit"
            type="submit"
            disabled={loading}
            style={{
              background: loading ? 'rgba(201,168,76,0.5)' : '#c9a84c',
              color: '#050508',
              border: 'none',
              borderRadius: 999,
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 200ms ease, transform 200ms ease',
            }}
            onMouseEnter={(e) => {
              if (loading) return;
              (e.currentTarget as HTMLButtonElement).style.background = '#f0d080';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              if (loading) return;
              (e.currentTarget as HTMLButtonElement).style.background = '#c9a84c';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            {loading ? 'Joining...' : 'Join the waitlist'}
          </button>
        </form>
      ) : (
        <div
          className="animate-fadeUp"
          style={{
            padding: '20px 36px',
            border: '1px solid rgba(76,175,130,0.4)',
            borderRadius: 999,
            background: 'rgba(76,175,130,0.08)',
            color: '#4caf82',
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
          }}
        >
          ✓ You're on the list. We'll be in touch.
        </div>
      )}

      {errorMsg && (
        <p style={{ color: '#e05252', fontSize: 14, marginTop: 16, fontFamily: 'Inter, sans-serif' }}>
          {errorMsg}
        </p>
      )}

      {/* Fine print */}
      <p
        className="reveal"
        style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
          marginTop: 16,
          fontFamily: 'Inter, sans-serif',
          animationDelay: '400ms',
        }}
      >
        No pitch decks. No spam. Just early access.
      </p>
    </section>
  );
}
