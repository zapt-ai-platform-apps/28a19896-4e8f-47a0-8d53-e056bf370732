import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const ReadingInterpretation = ({ reading, loading }) => {
  if (loading) {
    return (
      <div className="mt-8 bg-mystical-light bg-opacity-20 p-6 rounded-lg max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-t-transparent border-accent-gold rounded-full animate-spin mr-3"></div>
          <p>The stars are aligning to reveal your reading...</p>
        </div>
      </div>
    );
  }
  
  if (!reading) return null;
  
  return (
    <motion.div 
      className="mt-8 bg-mystical-light bg-opacity-20 p-6 rounded-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-display gold-text mb-4 text-center">Your Tarot Reading</h2>
      
      <div className="prose prose-invert max-w-none">
        <div className="space-y-4">
          {reading.interpretation.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-200">{paragraph}</p>
          ))}
        </div>
        
        {reading.astrological && (
          <div className="mt-6">
            <h3 className="text-xl font-display gold-text mb-2">Astrological Influence</h3>
            <div className="space-y-4">
              {reading.astrological.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-200">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
        
        {reading.advice && (
          <div className="mt-6">
            <h3 className="text-xl font-display gold-text mb-2">Advice</h3>
            <div className="space-y-4">
              {reading.advice.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-200">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Reading = ({ selectedCards, question, onReset }) => {
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [reading, setReading] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleFlipCard = (index) => {
    if (!flippedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };
  
  useEffect(() => {
    // When all cards are flipped, generate a reading
    if (flippedIndices.length === selectedCards.length && selectedCards.length > 0) {
      generateReading();
    }
  }, [flippedIndices]);
  
  const generateReading = async () => {
    setLoading(true);
    
    try {
      // Format data for the AI service
      const cardData = selectedCards.map(card => ({
        name: card.name,
        upright: card.upright,
        reversed: card.reversed,
        element: card.element,
      }));
      
      const response = await fetch('/api/tarotReading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cards: cardData,
          question: question || "What energies are surrounding me right now?",
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate reading');
      }
      
      const data = await response.json();
      setReading(data);
    } catch (error) {
      console.error('Error generating reading:', error);
      // Provide fallback reading
      setReading({
        interpretation: "The cards suggest you're at a crossroads. Take time to reflect on your path before making decisions. Trust your intuition.",
        astrological: "Current planetary alignments indicate a period of introspection. Mercury's position suggests communication will be key.",
        advice: "Focus on self-care and listen to your inner voice. Journal your thoughts to gain clarity."
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="px-4 py-8">
      <div className="spread-area mb-8">
        {selectedCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card 
              card={card}
              isFlipped={flippedIndices.includes(index)}
              onClick={() => handleFlipCard(index)}
              position={index}
            />
          </motion.div>
        ))}
      </div>
      
      {flippedIndices.length < selectedCards.length && (
        <p className="text-center mb-8 text-accent-gold italic">
          Click on each card to reveal your reading
        </p>
      )}
      
      <ReadingInterpretation reading={reading} loading={loading} />
      
      {reading && (
        <div className="mt-8 text-center">
          <button 
            className="btn-secondary cursor-pointer"
            onClick={onReset}
          >
            New Reading
          </button>
        </div>
      )}
    </div>
  );
};

export default Reading;