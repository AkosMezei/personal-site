/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        lightDivBackground: '#CCD5AE',
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
      }
    },
  },
  plugins: [],
}

