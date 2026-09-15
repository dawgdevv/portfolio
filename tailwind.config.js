/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Roboto", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "#63e",
        secondary: "#ff6347",
        'neo-yellow': '#FFDE00',
        'neo-green': '#00F0FF',
        'neo-blue': '#3355FF',
        'neo-pink': '#FF00FF',
        'neo-orange': '#FF5500',
        'neo-mint': '#00FF9D',
        // restrained neutral accents
        accent: "oklch(76% 0.095 62)",
        "accent-soft": "oklch(88% 0.045 62)",
        sage: "oklch(62% 0.06 155)",
        clay: "oklch(64% 0.11 32)",
        slate: "oklch(70% 0.05 235)",
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
