import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slideDown 1s ease-out forwards',
        'slide-down-delay-1': 'slideDown 1s ease-out forwards 0.5s',
        'slide-down-delay-2': 'slideDown 1s ease-out forwards 0.7s',
        'slide-down-delay-3': 'slideDown 1s ease-out forwards 1s',
        'slide-left': 'slideLeft 1s ease-in forwards',
        'slide-right': 'slideRight 1s ease-in forwards',
        'slide-up': 'slideUp 1s ease-in forwards',
      },
    },
  },
  plugins: [],
};

export default config;
