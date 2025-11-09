/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        trino: {
          pink: '#dd00a1',
          cyan: '#1EDCFF',
          gold: '#F8B600',
          'dark-blue': '#000033',
          'dark-bg': '#252830',
        },
      },
    },
  },
};
