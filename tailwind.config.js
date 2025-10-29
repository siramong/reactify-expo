/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'react-blue': '#61DAFB',
        'dark-bg': '#0D1117',
        'dark-card': '#161B22',
        'dark-border': '#30363D',
      },
    },
  },
  plugins: [],
}