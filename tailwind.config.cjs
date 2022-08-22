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
                'page-layout-xl': '1fr minmax(60ch, 3fr) 1fr',
                'page-layout-lg': 'minmax(60ch, 3fr) 1fr',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '125ch',
                        a: null,
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
