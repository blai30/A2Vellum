const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  // NODE_ENV set to 'production' to purge.
  // Don't purge during development for PostCSS faster reloads.
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
    './src/index.html',
  ],
  important: true,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.rose,
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        pink: {
          css: {
            a: {
              '&:hover': {
                color: theme('colors.pink.400'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700'),
            },
            hr: {
              borderColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800'),
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
            'a code': {
              color: theme('colors.gray.100'),
            },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: [
        'dark',
      ],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};