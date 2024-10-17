/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('@/img/hero.png')",
        trackOrderImg: "url('@/img/orderHeroImg.png')",
        faqImg: "url('@/img/faqImg.png')",
        signupImg: "url('@/img/bg-signup.png')",
      },
      colors: {
        primary: "rgba(230, 180, 29, 1)",
        secondary: "rgba(39, 20, 26, 1)",
      },
    },
  },
  plugins: [],
};
