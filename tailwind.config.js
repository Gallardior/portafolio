module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  mode:'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
		typography: {
			DEFAULT: {
			  css: {
				color: '#333',
				a: {
				  color: '#006868',
				  '&:hover': {
					color: '#002b4c',
				  },
				},
			  },
			  
			},
        }
	},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
