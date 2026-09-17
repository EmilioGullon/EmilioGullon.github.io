/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        page: {
          navy: '#0F172A',
        },
        card: {
          navy: '#1E293B',
          hover: '#1E2A3A',
        },
        border: {
          slate: '#334155',
        },
        accent: {
          cyan: '#2DD4BF',
          hover: '#0D9488',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
