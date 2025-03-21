import React, { useState } from 'react';
import { motion } from 'framer-motion';

const commonQuestions = [
  "What energies are surrounding me right now?",
  "What do I need to know about my career?",
  "How can I improve my relationships?",
  "What's blocking my spiritual growth?",
  "What should I focus on in the coming month?"
];

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question || "What energies are surrounding me right now?");
  };
  
  const selectSuggestion = (suggestion) => {
    setQuestion(suggestion);
    setShowSuggestions(false);
  };
  
  return (
    <motion.div 
      className="max-w-md mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="question" className="block mb-2 text-lg text-accent-gold font-display">
            Focus on your question:
          </label>
          
          <input
            type="text"
            id="question"
            className="input-field w-full box-border"
            placeholder="What would you like to know?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          
          {showSuggestions && (
            <motion.div 
              className="mt-2 bg-mystical-light bg-opacity-70 rounded-md overflow-hidden shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 text-sm text-accent-gold">
                Common questions:
              </div>
              <ul>
                {commonQuestions.map((q, i) => (
                  <li 
                    key={i}
                    className="px-4 py-2 hover:bg-mystical-purple cursor-pointer transition-colors"
                    onClick={() => selectSuggestion(q)}
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full cursor-pointer"
        >
          Begin Reading
        </button>
      </form>
    </motion.div>
  );
};

export default QuestionForm;