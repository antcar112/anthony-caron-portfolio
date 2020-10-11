import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const NavListItem = styled.li`
  display: block;
  width: 100%;

  & button {
    border: none;
    background: none;
  }

  & a,
  & button {
    font-size: 1.1em;
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3vh;
    cursor: pointer;

    & div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 160px;

      & span {
        transition: ${({ theme }) => theme.hoverTransition};
      }

      & svg {
        transition: ${({ theme }) => theme.hoverTransition};
        font-size: 1.5em;
      }
    }

    &:hover div span,
    &:hover div svg {
      color: ${({ theme }) => theme.color.textSecondary};
    }

    &.nav_drawer_link--active div {
      color: ${({ theme }) => theme.color.text};

      &::before {
        content: '';
        height: 3px;
        background: ${({ theme }) => theme.color.primary};
        position: absolute;
        bottom: -7px;
        left: -12px;
        right: -12px;
      }
    }
  }
`

export const DrawerNavLink = ({ direction, email, href, icon, name, onClick, to }) => {
  const themeContext = useContext(ThemeContext)

  if (to) {
    return (
      <NavListItem>
        <AniLink
          activeClassName='nav_drawer_link--active'
          bg={themeContext.color.primary}
          cover
          direction={direction}
          duration={0.8}
          to={to}
        >
          <DrawLinkContent icon={icon} name={name} />
        </AniLink>
      </NavListItem>
    )
  }
  if (href && !email) {
    return (
      <NavListItem>
        <a href={href} rel='noopener noreferrer' target='_blank'>
          <DrawLinkContent icon={icon} name={name} />
        </a>
      </NavListItem>
    )
  }
  if (href && email) {
    return (
      <NavListItem>
        <a href={href}>
          <DrawLinkContent icon={icon} name={name} />
        </a>
      </NavListItem>
    )
  }

  return (
    <NavListItem>
      <button onClick={onClick} type='button'>
        <DrawLinkContent icon={icon} name={name} />
      </button>
    </NavListItem>
  )
}

const DrawLinkContent = ({ icon, name }) => (
  <div>
    <span>{name}</span>
    {icon}
  </div>
)
