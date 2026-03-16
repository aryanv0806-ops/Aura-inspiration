/**
 * Header Component
 * Shows the app title and tagline
 */

import React from 'react';

export default function Header() {
  return (
    <div style={{
      position: 'fixed',
      top: 20,
      left: 20,
      zIndex: 10,
      animation: 'slideInDown 0.6s ease-out',
    }}>
      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '36px',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '2px',
        margin: 0,
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      }}>
        ✨ AURA
      </h1>
      <p style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.7)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        margin: '5px 0 0 0',
      }}>
        Colorful Inspiration
      </p>
    </div>
  );
}
