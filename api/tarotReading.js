import OpenAI from 'openai';
import * as Sentry from '@sentry/node';

// Initialize Sentry
Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Tarot reading request received:', JSON.stringify(req.body));
    
    const { cards, question } = req.body;
    
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      return res.status(400).json({ error: 'Cards are required' });
    }
    
    // Format cards for prompt
    const formattedCards = cards.map((card, index) => {
      return `Card ${index + 1}: ${card.name}
      - Element: ${card.element}
      - Upright meaning: ${card.upright}
      - Reversed meaning: ${card.reversed}`;
    }).join('\n\n');
    
    // Create system prompt
    const systemPrompt = `You are a gifted tarot reader and astrologer who provides insightful, mystical readings. 
    Analyze the drawn tarot cards in relation to the querent's question. 
    Consider the card positions, meanings, and how they interact with each other.
    Incorporate astrological elements into your interpretation.
    Your reading should be deep, thoughtful, and provide genuine guidance.
    Structure your response in these sections: 
    1. Overall interpretation 
    2. Astrological influences
    3. Advice
    
    Keep your response thoughtful but concise (about 300-400 words total).`;
    
    // User prompt with cards and question
    const userPrompt = `The querent has asked: "${question || "What energies are surrounding me right now?"}"
    
    These are the tarot cards that have been drawn:
    
    ${formattedCards}
    
    Please provide a reading based on these cards, incorporating astrological influences.`;
    
    console.log('Sending request to OpenAI...');
    
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 800
    });
    
    const responseText = completion.choices[0].message.content;
    console.log('OpenAI response received');
    
    // Parse sections from the response
    let sections = {
      interpretation: "",
      astrological: "",
      advice: ""
    };
    
    // Simple parsing logic - this could be improved
    if (responseText.includes("Astrological") && responseText.includes("Advice")) {
      const parts = responseText.split(/Astrological|Advice/);
      sections.interpretation = parts[0].trim();
      sections.astrological = parts[1].trim();
      sections.advice = parts[2].trim();
    } else {
      // Fallback if the expected format isn't followed
      sections.interpretation = responseText;
    }
    
    return res.status(200).json(sections);
    
  } catch (error) {
    console.error('Error generating tarot reading:', error);
    Sentry.captureException(error);
    
    return res.status(500).json({ 
      error: 'Failed to generate reading',
      message: error.message 
    });
  }
}