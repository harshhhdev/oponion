import { styled } from '@css/theme.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LoadingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

export const Title = styled('h1', {
  fontSize: '$5',
  marginTop: 100,
})

export const OptionsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0',
})

export const OptionsBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$primary',
  color: '$white',
  width: '30vw',
  fontSize: '$3',
  padding: 20,
  margin: '5px 0',
  borderRadius: 7,
  transition: '0.1s linear',
  userSelect: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
    background: '$main',
  },
})
