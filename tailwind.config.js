/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '7xl': '4.5rem',     // 72px
        '9xl': '6rem',       // 96px
        '11xl': '7.5rem',    // 120px
        '13xl': '9rem',      // 144px
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} 