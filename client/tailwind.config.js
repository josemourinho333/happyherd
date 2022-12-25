/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", {
        mytheme: {
          "primary": "#1DB954",
          "secondary": "#df0c8b",
          "accent": "#0d72ea",
          "neutral": "#191414",
          "base-100": "#fff",
          "info": "#70CEE1",
          "success": "#10b981",
          "warning": "#fde047",
          "error": "#e11d48",
        },
      },
    ],
  },
}
