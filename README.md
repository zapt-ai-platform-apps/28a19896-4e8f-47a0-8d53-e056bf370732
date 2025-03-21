# Tarot

A mystical Tarot application that combines the ancient wisdom of Tarot with astrological insights, powered by AI.

## Features

- Interactive Tarot card readings
- AI-powered interpretations that blend Tarot and Astrology
- Beautiful, mystical user interface
- Personalized readings based on your questions

## Technologies Used

- React with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- OpenAI for AI-powered readings
- Vercel for deployment

## Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

A `.env` file is required with the following variables:

- `VITE_PUBLIC_APP_ID` - App identifier
- `VITE_PUBLIC_APP_ENV` - Application environment (development/production)
- `VITE_PUBLIC_SENTRY_DSN` - Sentry DSN for error tracking
- `VITE_PUBLIC_UMAMI_WEBSITE_ID` - Umami analytics ID
- `OPENAI_API_KEY` - OpenAI API key for AI-powered readings