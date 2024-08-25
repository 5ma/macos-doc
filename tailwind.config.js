const pxToRem = (px, defaultFontSize = 16) => {
  return `${px / defaultFontSize}rem`
}

module.exports = {
  mode: 'jit',
  content: ["./src/*.html", "./src/*.{js,jsx,ts,tsx,vue}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    spacing: Object.fromEntries(Array.from({ length: 300 }, (_, i) => [`${i}`, pxToRem(i)])),
    fontSize: Object.fromEntries(Array.from({ length: 200 }, (_, i) => [`${i}`, pxToRem(i)])),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};