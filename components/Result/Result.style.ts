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
  textAlign: 'center',
})

export const ChartContainer = styled('div', {
  width: '100vw',
  margin: '50px 0',
})
