export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mystical: {
                    dark: '#0e0b14',
                    purple: '#161228',
                    light: '#312b4f',
                },
                accent: {
                    gold: '#d4af37',
                    purple: '#7b4397',
                    blue: '#311b92',
                },
            },
            fontFamily: {
                serif: ['Cormorant', 'serif'],
                display: ['Cinzel', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
                    '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
                }
            },
            backgroundImage: {
                'cosmic-pattern': "url('/cosmic-bg.png')",
            }
        },
    },
    plugins: [],
};