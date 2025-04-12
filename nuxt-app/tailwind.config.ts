import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#6366F1',
        dark: '#1E293B',
        light: '#F8FAFC',
      },
      backgroundColor: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#6366F1',
        dark: '#1E293B',
        light: '#F8FAFC',
      },
      borderColor: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#6366F1',
        dark: '#1E293B',
        light: '#F8FAFC',
      },
      ringColor: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#6366F1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
