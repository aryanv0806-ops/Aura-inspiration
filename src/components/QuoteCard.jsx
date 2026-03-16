/**
 * Quote Card Component
 * Displays the quote with glassmorphism effect
 */

import React, { useState } from 'react';

export default function QuoteCard({ quote, onTilt, onTiltReset, isLoading }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (isLoading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const relX = e.clientX - centerX;
    const relY = e.clientY - centerY;

    const maxRotate = 15;
    const rotY = (relX / (rect.width / 2)) * maxRotate;
    const rotX = -(relY / (rect.height / 2)) * maxRotate;

    setRotateX(rotX);
    setRotateY(rotY);
    onTilt();
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    onTiltReset();
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '700px',
        padding: '60px 40px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 0 20px rgba(255, 255, 255, 0.1)
        `,
        animation: 'slideInCard 0.6s ease-out',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
          isLoading ? 1 : 1.02
        })`,
        transition: isLoading ? 'none' : 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
    >
      {/* Quote Text */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: 'fadeInText 0.6s ease-out 0.2s both',
        opacity: isLoading ? 0.5 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1.6,
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '0.5px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          "{quote.text}"
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          — {quote.author}
        </p>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}>
          <div style={{
            border: '3px solid rgba(255, 255, 255, 0.2)',
            borderTop: '3px solid #ffffff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }} />
        </div>
      )}
    </div>
  );
}
