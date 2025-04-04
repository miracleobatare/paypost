// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include all the files where Tailwind classes are used
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-animate')
    ],
}

export default config;
