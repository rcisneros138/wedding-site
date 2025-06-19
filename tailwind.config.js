/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#C7ACBE', // Light mauve/pink from Figma design
        'wedding-brown': '#8C3112', // Brown/rust color from Figma design
        'wedding-green': '#526754', // Muted green from Figma design
        'wedding-black': '#1E1E1E', // Almost black from Figma design
      },
      fontFamily: {
        'display': ['var(--font-playfair-display)', 'serif'],
        'body': ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'scalloped-shape': "url('/images/scalloped-shape.svg')",
      },
    },
  },
  plugins: [],
}
