/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                orthopurple: '#6A4692',
            },
        },
        fontFamily: {
            display: ['Rubik'],
            body: ['Campaign'],
        },
    },
    plugins: [],
}
