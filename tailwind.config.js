/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4B2FA3',
          dark:    '#1E0A4E',
        },
        blue:       '#1E6FD9',
        purple:     '#7A4FD6',
        green:      '#35C56A',
        background: '#F4F6F8',
        error:      '#EF4444',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
