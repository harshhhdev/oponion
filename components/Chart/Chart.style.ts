import { styled } from '@css/theme.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '50px 0',
})

export const Input = styled('input', {
  color: '$white',
  fontSize: '$5',
  background: 'none',
  outline: 'none',
  border: 'none',
  marginBottom: 50,
})

export const ChartContainer = styled('div', {
  width: '100vw',
  margin: '50px 0',
})

export const OptionsBox = styled('div', {
  background: 'none',
  margin: '10px 0',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 30,
})

export const OptionsName = styled('input', {
  background: '$primary',
  padding: 20,
  color: '$white',
  fontSize: '$3',
  outline: 'none',
  border: 'none',
  borderRadius: 5,
  marginRight: 20,
})

export const CreateOption = styled('div', {
  color: '#757575',
  display: 'flex',
  justifyContent: 'center',
  transition: '0.1s linear',
  transform: 'scale(1.5)',
  '&:hover': {
    transform: 'scale(1.6)',
    color: '$white',
    cursor: 'pointer',
  },
})

export const ViewOption = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  color: '$main',
  transition: '0.1s linear',
  fontSize: '$3',
  margin: '10px 0',
  userSelect: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: '$white',
  },
  '&:hover svg': {
    color: '#FF5555',
  },
  svg: {
    marginLeft: 10,
  },
})

export const CreatePollButton = styled('button', {
  background: '$primary',
  color: '$white',
  outline: 'none',
  border: 'none',
  padding: 20,
  fontSize: '$3',
  transition: '0.15s linear',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
})
