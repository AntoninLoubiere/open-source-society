/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#9736E0',
                    DEFAULT: '#751aba',
                },
                'primary-variant': {
                    50: '#F7EDFD',
                    DEFAULT: '#bfa0d2',
                },
                secondary: {
                    DEFAULT: '#61baae',
                },
                'secondary-variant': {
                    DEFAULT: '#201925',
                },
            },
            gridTemplateColumns: {
                'page-layout': '1fr calc(65ch + 1rem) 1fr',
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: null,
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
