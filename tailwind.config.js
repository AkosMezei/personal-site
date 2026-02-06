/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      animation: {
        'blink-blinker': 'blink-animation 1s infinite',
      },
      keyframes: {
        'blink-animation': {
          '0%, 100%': { opacity: '1' },
          '40%, 60%': { opacity: '0' },
        }
      },
      colors: {
        viteStart: '#4dc1ff',
        viteMiddle: '#ffd028',
        viteEnd: '#b142fe',
        react: '#58c4dc',
        typescript: '#3178c6',
        tailwind: '#00bcff',
        framerMotion: '#faef2c',
        mongoDB: '#00ed64',
        docker: '#1d63ed',
        digitalOcean: '#0069ff',
        dotNetStart: '#7215e9',
        dotNetEnd: '#4730de',
        javascript: '#f7df1e',
        python: '#3776ab',
        fastAPI: '#009688',
        postgres: '#4169e1',
        plotly: '#3f4f75',
        matlab: '#e67e22',
        geminiStart: '#4285f4', // Google Blue
        geminiEnd: '#9b72cb',   // Purple
        playwright: '#2EAD33',
        umbraco: '#283a97',
        swcStart:'#a26f60',
        swcEnd:'#f8ea46',
        sendGrid: '#f22f46',

        lightDivBackground: '#adf5dc',
        lightDivHoverBackground: '#D4A373',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
          foreground: 'var(--destructive-foreground) / <alpha-value>'
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)'
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
  important: true,
}

