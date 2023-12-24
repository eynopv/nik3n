const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                antonio: ['Antonio']
            },
            colors: {
                pureBlack: '#000000',
                pureWhite: '#ffffff'
            },
            keyframes: {
                reveal: {
                    '0%': { opacity: 0, transform: 'translate(0, 100%)' },
                    '100%': { opacity: 1, transform: 'translate(0, 0)' }
                },
                fadein: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            },
            animation: {
                'fadein-500': 'fadein 0.7s ease-in-out 0.5s forwards',
                'reveal-500': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards',
                'reveal-600': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.6s forwards',
                'reveal-700': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.7s forwards',
                'reveal-800': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.8s forwards',
                'reveal-900': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.9s forwards',
                'reveal-1000': 'reveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 1.0s forwards'
            }
        }
    },
    plugins: []
};
