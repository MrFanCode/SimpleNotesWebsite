/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['Outfit', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Warm stone is the base neutral palette.
                // Teal is the accent - distinct, professional , calm.
            },
                  keyframes: {
        cardIn: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        overlayIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'card-in': 'cardIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'overlay-in': 'overlayIn 0.2s ease forwards',
        'modal-in': 'modalIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-once': 'spinOnce 0.6s ease forwards',
      },
        }
    },
    plugins: [],
}