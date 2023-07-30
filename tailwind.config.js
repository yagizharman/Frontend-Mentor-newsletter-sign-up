/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        darkslategrey: 'hsl(234, 29%, 20%)',
        charcoalgrey: 'hsl(235, 18%, 26%)',
        mygrey: 'hsl(231, 7%, 60%)',
        mywhite: 'hsl(0, 0%, 100%)',
        primary: 'hsl(4, 100%, 67%)',
      },
      
    },
  },
  plugins: [],
}
