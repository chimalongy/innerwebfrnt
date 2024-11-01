/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", // include JSX files instead of TSX
    "./node_modules/@shadcn/ui/**/*.{js,jsx}", // Adjust this to match where ShadCN components are
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
