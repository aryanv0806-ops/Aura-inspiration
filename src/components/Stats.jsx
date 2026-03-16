/**
 * Stats Component
 * Shows quote metadata
 */

import React from 'react';

export default function Stats({ quote }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: 10,
      animation: 'slideInUp 0.6s ease-out',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        padding: '15px 25px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.6)',
          letterSpacing: '0.5px',
          margin: 0,
          textTransform: 'uppercase',
        }}>
          {quote.source}
        </p>
      </div>
    </div>
  );
}
