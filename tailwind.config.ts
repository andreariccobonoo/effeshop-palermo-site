import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#141414',
        steel: '#24262a',
        ash: '#f4f5f7',
        brass: '#f2b431',
        amberline: '#ff9d2e'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,0.18)',
        glow: '0 18px 45px rgba(242,180,49,0.28)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
