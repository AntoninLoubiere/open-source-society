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
                secondary: {
                    DEFAULT: '#00add3',
                },
                accent: {
                    DEFAULT: '#ff356e',
                },
            },
        },
    },
    plugins: [],
};
