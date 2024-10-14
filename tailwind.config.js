/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        facuFont: ["Covered By Your Grace", 'sans-serif'],
        manrope: ["Manrope", 'sans-serif'],
      },
      screens: {
        // Breakpoints predefinidos
        sm: "640px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "2560px",
        '1366': '1366px',
        '1920': '1920px',
        // Breakpoints personalizados
        tablet: "900px", // Dispositivos con un ancho de 900px o superior
        desktop: "1200px", // Dispositivos con un ancho de 1200px o superior
        // Breakpoints para dispositivos móviles modernos
        mobile: "360px", // Dispositivos móviles pequeños
        phablet: "480px", // Dispositivos móviles medianos
        phone: "580px", // Dispositivos móviles grandes
      }
    },
  },
  plugins: [],
}
