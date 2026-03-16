/**
 * Main App Component
 * Orchestrates all sub-components and state management
 */

import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import QuoteCard from './components/QuoteCard';
import GenerateButton from './components/GenerateButton';
import Header from './components/Header';
import Stats from './components/Stats';
import { getRandomQuote } from './data/quoteData';
import './styles/App.css';

export default function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [isLoading, setIsLoading] = useState(false);
  const [isTilted, setIsTilted] = useState(false);

  /**
   * Generate a new quote with smooth transition
   */
  const generateNewQuote = async () => {
    setIsLoading(true);
    
    // Simulate async operation for smooth UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setQuote(getRandomQuote());
    setIsLoading(false);
  };

  /**
   * Handle keyboard shortcuts
   */
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (!isLoading) {
          generateNewQuote();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLoading]);

  /**
   * Keyboard shortcuts info
   */
  useEffect(() => {
    console.log('%c🌟 AURA App Started', 'font-size: 18px; color: #667eea; font-weight: bold;');
    console.log('%cVersion: 1.0.0 | Built with React', 'color: #667eea; font-size: 14px;');
    console.log('%c📌 Shortcuts: [SPACEBAR] or [ENTER] for new quote', 'color: #f093fb; font-size: 12px;');
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflow: 'hidden',
    }}>
      {/* Background with gradient */}
      <Background bgGradient={quote.bgGradient} />

      {/* Header */}
      <Header />

      {/* Stats */}
      <Stats quote={quote} />

      {/* Main Content */}
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Quote Card */}
          <QuoteCard
            quote={quote}
            isLoading={isLoading}
            onTilt={() => setIsTilted(true)}
            onTiltReset={() => setIsTilted(false)}
          />

          {/* Generate Button */}
          <GenerateButton
            onClick={generateNewQuote}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}
