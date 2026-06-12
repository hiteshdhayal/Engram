'use client';

import React, { useState, useEffect, useRef } from 'react';

const incomingItems = [
  { dot: '#22c55e', icon: 'G', iconBg: '#ea4335', desc: 'Email from Sarah Chen', time: 'just now' },
  { dot: '#a855f7', icon: 'Z', iconBg: '#2563eb', desc: 'Meeting ended: Q2 Planning', time: '2s ago' },
  { dot: '#3b82f6', icon: 'N', iconBg: '#000000', desc: 'Doc updated: Roadmap v3', time: '5s ago' },
  { dot: '#eab308', icon: 'S', iconBg: '#4a154b', desc: '#general: 3 new messages', time: '8s ago' },
  { dot: '#22c55e', icon: 'G', iconBg: '#ea4335', desc: 'Thread: Re: Partnership proposal', time: '12s ago' },
  { dot: '#3b82f6', icon: 'GD', iconBg: '#1a73e8', desc: 'File shared: Q2 Numbers.xlsx', time: '15s ago' },
  { dot: '#a855f7', icon: 'F', iconBg: '#7c3aed', desc: 'Transcript ready: Design sync', time: '18s ago' },
];

const pipelineSteps = ['Chunking', 'Embedding', 'Storing', 'Tagged'];

const contextCards = [
  { tag: 'MEETING', tagBg: '#ede9fe', tagColor: '#7c3aed', title: 'Q2 Planning — decisions logged', sub: '4 action items · 2 owners' },
  { tag: 'EMAIL', tagBg: '#dbeafe', tagColor: '#1d4ed8', title: 'Partnership proposal thread', sub: '12 emails · 3 participants' },
  { tag: 'DOC', tagBg: '#dcfce7', tagColor: '#15803d', title: 'Roadmap v3 — full context', sub: '2,340 tokens indexed' },
];

const TYPEWRITER_TEXT = [
  { type: 'normal', text: 'Based on the Q2 Planning transcript (yesterday, 2pm):' },
  { type: 'quote', text: 'Ship mobile app by July 15 · Sarah owns design · Budget approved: ₹12L' },
  { type: 'normal', text: 'Want me to send the recap email to attendees?' },
];

export default function BrainActivityBox() {
  const [feedItems, setFeedItems] = useState(incomingItems.slice(0, 5));
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [vectorCount, setVectorCount] = useState(2847);
  const [typewriterText, setTypewriterText] = useState('');
  const feedIndex = useRef(0);

  // Feed animation
  useEffect(() => {
    const interval = setInterval(() => {
      feedIndex.current = (feedIndex.current + 1) % incomingItems.length;
      setFeedItems((prev) => {
        const newItem = incomingItems[feedIndex.current];
        return [newItem, ...prev.slice(0, 5)];
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Pipeline animation
  useEffect(() => {
    let step = 0;
    let completed: number[] = [];
    let progress = 0;

    const tick = () => {
      progress += 5;
      setStepProgress(progress);
      if (progress >= 100) {
        completed = [...completed, step];
        setCompletedSteps([...completed]);
        progress = 0;
        step = (step + 1) % pipelineSteps.length;
        if (step === 0) {
          completed = [];
          setCompletedSteps([]);
          setVectorCount((v) => v + 1);
        }
        setCurrentStep(step);
      }
    };

    const interval = setInterval(tick, 60);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const mounted = { current: true };
    let fullText = '';
    let charIndex = 0;
    const allText = TYPEWRITER_TEXT.map(t => t.text).join(' ');
    let timerId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!mounted.current) return;
      if (charIndex < allText.length) {
        fullText += allText[charIndex];
        setTypewriterText(fullText);
        charIndex++;
        timerId = setTimeout(type, 30);
      } else {
        timerId = setTimeout(() => {
          if (!mounted.current) return;
          setTypewriterText('');
          charIndex = 0;
          fullText = '';
          type();
        }, 8000);
      }
    };

    timerId = setTimeout(type, 1000);
    return () => {
      mounted.current = false;
      clearTimeout(timerId);
    };
  }, []);

  return (
    <section
      id="brain-activity"
      style={{
        background: '#050508',
        padding: '80px 5vw 120px',
        position: 'relative',
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p
          className="font-mono-custom reveal"
          style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}
        >
          LIVE BRAIN ACTIVITY
        </p>
        <h2
          className="font-display reveal"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: 'rgba(255,255,255,0.92)', lineHeight: 1.15 }}
        >
          Every input, processed in real-time.
        </h2>
      </div>
      <div
        style={{
          maxWidth: 880,
          margin: '0 auto',
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          overflow: 'visible',
          position: 'relative',
        }}
      >
        {/* macOS window chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 16px',
            borderBottom: '1px solid #f3f4f6',
            background: '#fafafa',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: 6, position: 'absolute', left: 16 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6b7280' }}>
            Meridian · Brain Activity
          </span>
        </div>

        {/* Three column body */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '30% 40% 30%',
            minHeight: 380,
          }}
        >
          {/* Left — Incoming */}
          <div
            style={{
              borderRight: '1px solid #f3f4f6',
              padding: '16px 14px',
              overflow: 'hidden',
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>
              INCOMING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden' }}>
              {feedItems.map((item, i) => (
                <div
                  key={`${item.desc}-${i}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 0',
                    borderBottom: '1px solid #f3f4f6',
                    animation: i === 0 ? 'slideDown 400ms ease-out' : 'none',
                    opacity: 1 - i * 0.12,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: item.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 9,
                      color: '#fff',
                      fontWeight: 700,
                      flexShrink: 0,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.desc}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', flexShrink: 0 }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle — Processing */}
          <div
            style={{
              borderRight: '1px solid #f3f4f6',
              padding: '16px 20px',
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>
              PROCESSING
            </p>

            {pipelineSteps.map((step, i) => {
              const isCompleted = completedSteps.includes(i);
              const isActive = currentStep === i && !isCompleted;
              const isDone = isCompleted;

              return (
                <div
                  key={step}
                  style={{
                    marginBottom: 16,
                    padding: '8px 10px',
                    borderRadius: 6,
                    background: isActive ? 'rgba(201,168,76,0.04)' : 'transparent',
                    boxShadow: isActive ? '0 0 0 1px rgba(201,168,76,0.15)' : 'none',
                    transition: 'all 300ms',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 13,
                        fontWeight: 600,
                        color: isDone ? '#6b7280' : isActive ? '#111827' : '#9ca3af',
                      }}
                    >
                      {step}
                    </span>
                    {isDone && (
                      <span style={{ fontSize: 12, color: '#16a34a' }}>✓</span>
                    )}
                    {step === 'Tagged' && isDone && (
                      <span
                        style={{
                          background: '#dcfce7',
                          color: '#16a34a',
                          fontSize: 11,
                          padding: '2px 10px',
                          borderRadius: 999,
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        ✓ Complete
                      </span>
                    )}
                  </div>
                  {step !== 'Tagged' && (
                    <>
                      <div className="progress-bar">
                        <div
                          style={{
                            height: '100%',
                            background: '#c9a84c',
                            borderRadius: 999,
                            width: isDone ? '100%' : isActive ? `${stepProgress}%` : '0%',
                            transition: 'width 60ms linear',
                          }}
                        />
                      </div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280', marginTop: 4 }}>
                        {step === 'Chunking' && 'Split into 847 tokens'}
                        {step === 'Embedding' && 'text-embedding-3-small · 1536 dims'}
                        {step === 'Storing' && 'pgvector · cosine index'}
                      </p>
                    </>
                  )}
                </div>
              );
            })}

            {/* Vector counter */}
            <div style={{ marginTop: 20, borderTop: '1px solid #f3f4f6', paddingTop: 16 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280', marginBottom: 4 }}>
                Vectors stored today
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 28, fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                {vectorCount.toLocaleString()}
              </p>
              <div style={{ display: 'flex', gap: 20 }}>
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280' }}>Avg embed time</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', marginLeft: 6, fontWeight: 600 }}>94ms</span>
                </div>
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280' }}>DB size</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', marginLeft: 6, fontWeight: 600 }}>1.2GB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Context Ready */}
          <div style={{ padding: '16px 14px', overflow: 'hidden' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', letterSpacing: '0.1em', marginBottom: 12, textTransform: 'uppercase' }}>
              CONTEXT READY
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {contextCards.map((card, i) => (
                <div
                  key={card.title}
                  style={{
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    padding: 10,
                    animation: 'slideDown 400ms ease-out',
                  }}
                >
                  <div style={{ marginBottom: 6 }}>
                    <span
                      style={{
                        background: card.tagBg,
                        color: card.tagColor,
                        fontSize: 10,
                        padding: '2px 8px',
                        borderRadius: 999,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#111827', marginBottom: 4 }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280', marginBottom: 6 }}>
                    {card.sub}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#16a34a' }}>
                    ● Queryable
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #f3f4f6',
            background: '#fafafa',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
                display: 'inline-block',
                animation: 'pulseDot 2s ease-in-out infinite',
              }}
            />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#374151' }}>Live</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#9ca3af' }}>
              Connected: Gmail · Zoom · Notion · Slack · Drive · Fireflies
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#9ca3af' }}>
              Powered by Corsair
            </span>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                color: '#6b7280',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
              }}
            >
              C
            </div>
          </div>
        </div>

        {/* Floating agent chat bubble */}
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            right: -20,
            width: 300,
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          {/* Status strip */}
          <div
            style={{
              background: '#f9fafb',
              borderBottom: '1px solid #f3f4f6',
              padding: '6px 12px',
            }}
          >
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#6b7280' }}>
              ● Context loaded · Gmail, Zoom, Notion, Slack, Drive
            </span>
          </div>

          <div style={{ padding: 14 }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                M
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: '#111827' }}>
                Meridian
              </span>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 4px #22c55e',
                  display: 'inline-block',
                }}
              />
            </div>

            {/* User message */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
              <div
                style={{
                  background: '#f3f4f6',
                  borderRadius: '16px 16px 4px 16px',
                  padding: '8px 12px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13,
                  color: '#111827',
                  maxWidth: '85%',
                }}
              >
                What did we decide in yesterday's planning meeting?
              </div>
            </div>

            {/* Agent response */}
            <div style={{ marginBottom: 10 }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#374151', lineHeight: 1.6, marginBottom: 8 }}>
                {typewriterText.substring(0, TYPEWRITER_TEXT[0].text.length)}
              </p>
              {typewriterText.length > TYPEWRITER_TEXT[0].text.length && (
                <div
                  style={{
                    borderLeft: '3px solid #c9a84c',
                    paddingLeft: 10,
                    marginLeft: 4,
                    marginBottom: 8,
                  }}
                >
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#6b7280', fontStyle: 'italic', lineHeight: 1.5 }}>
                    {typewriterText.substring(TYPEWRITER_TEXT[0].text.length + 1, TYPEWRITER_TEXT[0].text.length + 1 + TYPEWRITER_TEXT[1].text.length)}
                  </p>
                </div>
              )}
              {typewriterText.length > TYPEWRITER_TEXT[0].text.length + TYPEWRITER_TEXT[1].text.length + 1 && (
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
                  {typewriterText.substring(TYPEWRITER_TEXT[0].text.length + TYPEWRITER_TEXT[1].text.length + 2)}
                </p>
              )}
            </div>

            {/* Action pills */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <button
                style={{
                  background: '#c9a84c',
                  color: '#050508',
                  border: 'none',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                }}
              >
                Yes, send it
              </button>
              <button
                style={{
                  background: 'none',
                  border: '1px solid #e5e7eb',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: 12,
                  color: '#374151',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                }}
              >
                Edit first
              </button>
            </div>

            {/* Model label */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', textAlign: 'right' }}>
              Claude Sonnet 4.6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
