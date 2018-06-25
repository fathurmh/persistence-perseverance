import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import config from '../utils/siteConfig'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
  z-index: 100;
  position: fixed;
  box-shadow: 0 0 10px 1px ${props => props.theme.colors.base};
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
      text-transform: uppercase;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`
const activeLinkStyle = {
  color: 'white'
}

const Menu = (props) => {
  const { classes } = props;
  return <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              {config.siteTitle}
            </Link>
          </li>
          <li>
            <Link to="/profile/" activeStyle={activeLinkStyle}>
              Profile
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
}

export default Menu
