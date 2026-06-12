'use client';

import React, { useEffect, useState } from 'react';

interface GravitationalLensProps {
  scale?: number;
}

export default function GravitationalLens({ scale = 1 }: GravitationalLensProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerSize = 320 * scale;

  // Nodes on the radar rings
  const nodes = [
    { cx: 160, cy: 60, r: 2, delay: '0s', dur: '10s' },
    { cx: 230, cy: 90, r: 3, delay: '-2s', dur: '15s' },
    { cx: 270, cy: 160, r: 2.5, delay: '-4s', dur: '20s' },
    { cx: 230, cy: 230, r: 2, delay: '-6s', dur: '15s' },
    { cx: 160, cy: 260, r: 3.5, delay: '-1s', dur: '12s' },
    { cx: 90, cy: 230, r: 2, delay: '-3s', dur: '18s' },
    { cx: 50, cy: 160, r: 3, delay: '-5s', dur: '14s' },
    { cx: 90, cy: 90, r: 2.5, delay: '-7s', dur: '16s' },
  ];

  return (
    <div
      style={{ width: containerSize, height: containerSize, position: 'relative', margin: '0 auto' }}
    >
      <svg
        viewBox="0 0 320 320"
        width={containerSize}
        height={containerSize}
        style={{ overflow: 'visible' }}
        suppressHydrationWarning
      >
        <defs>
          <radialGradient id={`goldenCore-${scale}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="30%" stopColor="#eab308" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#a16207" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#050508" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id={`coreGlow-${scale}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ca8a04" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#050508" stopOpacity="0" />
          </radialGradient>

          {/* Radar Sweep Gradient */}
          <linearGradient id={`sweepGrad-${scale}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.15" />
          </linearGradient>

          <filter id={`glow-${scale}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle
          cx="160"
          cy="160"
          r="120"
          fill={`url(#coreGlow-${scale})`}
          style={{ animation: 'glowPulse 4s ease-in-out infinite' }}
        />

        {/* Radar Sweep Cone */}
        <g style={{ transformOrigin: '160px 160px', animation: 'rotateOrbit 8s linear infinite' }}>
          <path
            d="M 160 160 L 160 40 A 120 120 0 0 1 260 90 Z"
            fill={`url(#sweepGrad-${scale})`}
          />
        </g>

        {/* Concentric Rings */}
        <circle cx="160" cy="160" r="40" fill="none" stroke="#ca8a04" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 4" />
        <circle cx="160" cy="160" r="80" fill="none" stroke="#ca8a04" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 6" />
        <circle cx="160" cy="160" r="120" fill="none" stroke="#ca8a04" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 8" />

        {/* Radial Dashed Lines */}
        <g stroke="#ca8a04" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="4 4">
          <line x1="160" y1="40" x2="160" y2="280" />
          <line x1="40" y1="160" x2="280" y2="160" />
          <line x1="75" y1="75" x2="245" y2="245" />
          <line x1="75" y1="245" x2="245" y2="75" />
        </g>

        {/* Rotating Outer Ring with Nodes */}
        <g style={{ transformOrigin: '160px 160px', animation: 'rotateOrbitReverse 60s linear infinite' }}>
          {mounted && nodes.map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="#fef08a"
              filter={`url(#glow-${scale})`}
              style={{
                animation: `glowPulse ${node.dur} ease-in-out ${node.delay} infinite`,
              }}
            />
          ))}
        </g>

        {/* Golden Central Core */}
        <circle
          cx="160"
          cy="160"
          r="24"
          fill={`url(#goldenCore-${scale})`}
        />
        
        {/* Core Inner Highlight */}
        <circle
          cx="156"
          cy="156"
          r="8"
          fill="#ffffff"
          opacity="0.3"
          filter={`url(#glow-${scale})`}
        />

        {/* Core Ring Boundary */}
        <circle
          cx="160"
          cy="160"
          r="24"
          fill="none"
          stroke="#fef08a"
          strokeWidth="1"
          strokeOpacity="0.8"
        />
      </svg>
    </div>
  );
}
