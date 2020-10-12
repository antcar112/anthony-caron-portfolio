import { Button } from '@src/ui/components'
import { media } from '@src/utils'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 50px;
  background: ${({ theme }) => theme.color.bg};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  transition: ${({ theme }) => theme.hoverTransition};
`

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.heading};
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
  font-size: 5.5em;
  margin-bottom: 0px;

  & span {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: 700;
  }

  ${media.down.md} {
    font-size: 4.5em;
  }
  ${media.down.sm} {
    font-size: 4em;
  }
  ${media.down.xs} {
    font-size: 3em;
  }
`

const HeroText = styled.span`
  font-size: 1.8em;
  display: block;
  margin-bottom: 80px;

  ${media.down.md} {
    font-size: 1.4em;
  }
  ${media.down.sm} {
    font-size: 1.2em;
  }
  ${media.down.xs} {
    font-size: 1.1em;
  }
`

const HeroContainer = styled.div`
  opacity: ${({ mounted }) => (mounted ? 1 : 0)};
  transform: translateY(${({ mounted }) => (mounted ? '0' : '50px')});
  transition: opacity 600ms ease-in 300ms, transform 800ms ease-in-out 300ms;
`

const scrollDown = () => {
  document.getElementById('scroll-target').scrollIntoView({
    behavior: 'smooth',
  })
}

export const WorkHero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
    }
  }, [mounted, setMounted])

  return (
    <StyledHero>
      <HeroContainer mounted={mounted}>
        <HeroTitle>
          Hi, I'm <span>Anthony</span>
        </HeroTitle>
        <HeroText>I’m a software developer and designer from Vancouver, BC</HeroText>
        <Button handleClick={scrollDown}>See my work</Button>
      </HeroContainer>
    </StyledHero>
  )
}
