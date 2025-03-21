import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { tarotCards } from '../data/cards';

const Deck = ({ onSelectCards }) => {
  const [shuffling, setShuffling] = useState(false);
  const [cards, setCards] = useState([...tarotCards]);
  
  const shuffleCards = () => {
    setShuffling(true);
    
    // Animate shuffle
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setShuffling(false);
    }, 800);
  };
  
  const drawCards = (count = 3) => {
    // Draw random cards from the deck
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffled.slice(0, count);
    
    // Call the callback with selected cards
    onSelectCards(selectedCards);
  };
  
  return (
    <div className="mb-12 flex flex-col items-center">
      <motion.div 
        className="relative w-[180px] h-[300px] mb-8"
        animate={{
          rotateZ: shuffling ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Stack of cards in the deck */}
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="absolute card-back rounded-lg shadow-lg"
            style={{
              width: '160px',
              height: '280px',
              top: `${index * 1}px`,
              left: `${index * 1}px`,
              zIndex: 5 - index,
            }}
          ></div>
        ))}
        
        {/* Top card */}
        <Card />
      </motion.div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="btn-secondary cursor-pointer text-lg py-3 px-8" 
          onClick={shuffleCards}
          disabled={shuffling}
        >
          Shuffle Deck
        </button>
        
        <button 
          className="btn-primary cursor-pointer text-lg py-3 px-8" 
          onClick={() => drawCards(3)}
          disabled={shuffling}
        >
          Draw Cards
        </button>
      </div>
    </div>
  );
};

export default Deck;