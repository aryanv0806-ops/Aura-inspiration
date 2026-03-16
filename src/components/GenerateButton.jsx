/**
 * Generate Button Component
 * Button with glow effects
 */

import React from 'react';

export default function GenerateButton({ onClick, isLoading }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        margin: '40px auto 0',
        padding: '14px 40px',
        border: '2px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '50px',
        background: 'rgba(255, 255, 255, 0.15)',
        color: '#ffffff',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        outline: 'none',
        overflow: 'hidden',
        animation: 'fadeInButton 0.6s ease-out 0.4s both',
        boxShadow: isHovered
          ? `
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 60px rgba(255, 255, 255, 0.2)
            `
          : '0 0 20px rgba(255, 255, 255, 0)',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
        background: isHovered ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
        opacity: isLoading ? 0.6 : 1,
      }}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>
        {isLoading ? '✨ Loading...' : '🎨 Generate Vibe'}
      </span>

      {/* Shimmer Effect */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            animation: 'shimmer 0.6s ease-in-out',
            pointerEvents: 'none',
          }}
        />
      )}
    </button>
  );
}
