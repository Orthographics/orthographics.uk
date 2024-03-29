/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                orthopurple: '#6A4692',
            },
        },
        fontFamily: {
            display: ['Rubik', 'sans-serif'],
            body: ['Campaign', 'sans-serif'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
