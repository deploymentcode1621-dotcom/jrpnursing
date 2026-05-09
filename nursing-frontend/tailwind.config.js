/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f9f4',
          100: '#dcf1e5',
          200: '#bbe3cd',
          300: '#8acead',
          400: '#54b287',
          500: '#2e9468',
          600: '#1e7852',
          700: '#186043',
          800: '#154d37',
          900: '#12402e',
          950: '#09261c',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(0,0,0,0.07)',
        'card-hover': '0 8px 30px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
