const HEIGHT_HEADER = '2.5rem'; /* Update src/lib/config.ts too */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}', './src/lib/tags/tag-colors-class.txt'],
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
                'page-layout-xl': '1fr minmax(60ch, 4fr) 1fr',
                'page-layout-lg': 'minmax(60ch, 4fr) 1fr',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '125ch',
                        a: null,
                    },
                },
            },
            spacing: {
                'header-bar': HEIGHT_HEADER,
            },
            minHeight: {
                'full-content': `calc(100vh - ${HEIGHT_HEADER})`,
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
