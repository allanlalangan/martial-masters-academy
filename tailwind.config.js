module.exports = {
  content: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        header: '13vh',
        main: '87vh',
      },
      colors: ({ colors }) => ({
        primary: colors.red,
      }),
    },
  },
  plugins: [],
};
