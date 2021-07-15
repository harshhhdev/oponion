import React from 'react'
import * as Icons from 'react-feather'
import { copyToClipboard as copy } from 'copy-lite'

import { styled, keyframes } from '@css/theme.config'

const TooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-40px)',
  },
})

const ShareWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
})

const LinksWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 20,
})

const ShareLink = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  color: '$main',
  margin: '0 10px',
  '&:hover': {
    color: '$white',
    cursor: 'pointer',
    p: {
      opacity: 1,
    },
  },
  '.animate': {
    animation: `${TooltipAnimation} 0.5s linear`,
  },
})

const Tooltip = styled('p', {
  color: '$white',
  fontFamily: '$primary',
  position: 'absolute',
  opacity: 0,
  transform: 'translateY(30px)',
})

const AnimatedTooltip = styled('span', {
  color: '$white',
  fontFamily: '$primary',
  position: 'absolute',
  opacity: 0,
})

const Share: React.FC<{ title: string; id: string; results: boolean }> = ({
  title,
  id,
  results,
}) => {
  const TooltipRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    TooltipRef.current!.addEventListener('animationend', () => {
      TooltipRef.current!.classList.remove('animate')
    })
  }, [])

  return (
    <ShareWrapper>
      <LinksWrapper>
        <ShareLink
          href={`https://twitter.com/share?text=${
            results ? 'Results for ' : 'Vote on '
          }"${title}" - &url=https://oponion.vercel.app/${
            results ? 'result/' : ''
          }${id}/`}
          target="_blank"
        >
          <Tooltip>Share</Tooltip>
          <Icons.Twitter />
        </ShareLink>
        <ShareLink
          href={`https://facebook.com/sharer/sharer.php?u=https://oponion.vercel.app/${
            results ? 'result/' : ''
          }${id}/`}
          target="_blank"
        >
          <Tooltip>Share</Tooltip>
          <Icons.Facebook />
        </ShareLink>
        <ShareLink
          onClick={() => {
            copy(window.location.href.toString())
            TooltipRef.current!.classList.add('animate')
          }}
        >
          <Tooltip>Copy</Tooltip>
          <AnimatedTooltip ref={TooltipRef}>Copied</AnimatedTooltip>
          <Icons.Paperclip />
        </ShareLink>
        <ShareLink href="/">
          <Tooltip>New</Tooltip>
          <Icons.PieChart />
        </ShareLink>
      </LinksWrapper>
    </ShareWrapper>
  )
}

export default Share
