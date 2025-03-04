import { heroui } from '@heroui/theme'
import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Jura", "sans-serif"]
            },
            backgroundImage: {
                test: "url('https://plus.unsplash.com/premium_photo-1681400232080-d344759e6609?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D')"
            },
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                dark: "rgb(var(--dark) / <alpha-value>)",
                textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
                textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
            },
            screens: {
                "mobile": "425px"
            }
        },
    },
    plugins: [heroui()],
} satisfies Config

