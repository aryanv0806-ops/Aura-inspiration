/**
 * Background Component
 * Displays colorful gradient background
 */

import React from 'react';

export default function Background({ bgGradient }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: bgGradient,
        zIndex: -2,
        animation: 'fadeInBg 0.8s ease-in-out',
      }}
    >
      {/* Animated Particles for Extra Vibrancy */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
        zIndex: 1,
      }} />
    </div>
  );
}
