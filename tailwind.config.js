/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Japanese game style color palette
        'jp-primary': {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Main primary (indigo)
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        'jp-secondary': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef', // Magenta
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'jp-accent': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'jp-success': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'jp-dark': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'jp-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'jp-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'jp-header': 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
      },
      boxShadow: {
        'jp-card': '0 8px 32px rgba(102, 126, 234, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
        'jp-button': '0 4px 16px rgba(99, 102, 241, 0.3)',
        'jp-input': '0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'jp-glow': '0 0 20px rgba(99, 102, 241, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      fontFamily: {
        'jp': ['"Noto Sans JP"', '"Noto Sans CJK TC"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}