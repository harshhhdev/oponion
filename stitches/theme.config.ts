import { createCss } from '@stitches/react'

export const { css, styled, global, getCssString, keyframes } = createCss({
  theme: {
    colors: {
      main: '#757575',
      primary: '#38424A',
      dark: '#2c343c',
      white: '#FFFEFE',
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    fonts: {
      main: 'Lexend Deca, sans-serif',
    },
  },
  media: {
    iPadPro: '(max-width: 1024px)',
    iPad: '(max-width: 768px)',
    iPhonePlus: '(max-width: 414px)',
    iPhone: '(max-width: 375px)',
    iPhoneSE: '(max-width: 320px)',
  },
})
