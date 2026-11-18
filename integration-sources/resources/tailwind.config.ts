import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tapas-bg': '#EAF6FF',
        'tapas-soft': '#F0F8FF',
        'tapas-sky': '#E6F4FF',
        'tapas-pastel': '#DFF1FF',
        'tapas-border': '#D6ECFF',
        'tapas-text': '#1F3A5F',
        'tapas-muted': '#4A6283',
        'tapas-accent': '#0B78C8',
        'tapas-accent-hover': '#0961a1',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Lora', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        tapasFadePulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-pulse': 'tapasFadePulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
