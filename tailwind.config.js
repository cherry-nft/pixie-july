/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const { violet, blackA, mauve } = require('@radix-ui/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...violet,
        ...blackA,
        ...mauve,
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'background-shine': {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' }
        }
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'background-shine': 'background-shine 2s linear infinite'
      },
    },
  },
  plugins: []
};
