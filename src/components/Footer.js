import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import Container from '../components/Container'

const Wrapper = styled.footer`
  margin-bottom: 0px;
  color: #0f0f0f;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (min-width: 767px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
  text-align: center;
  position: relative;
  a {
    color: #525252;
    &:visited {
      color: #525252;
    }
    &:hover {
      color: #11abb0;
    }
    &:focus {
      color: #11abb0;
    }
  }
`

const Social = styled.div`
  margin: 18px 0 30px 0;
  padding: 0;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 767px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 767px) {
      margin-left: 14px;
    }
    @media screen and (min-width: 767px) {
      margin-left: 18px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 42px;
    }
    &:first-child {
      margin-left: 0;
    }
    a[href^='mailto:'] {
      color: #525252;
      &:visited {
        color: #525252;
      }
      &:hover {
        color: #11abb0;
      }
      &:focus {
        color: #11abb0;
      }
    }
  }
`

const Copyright = styled.div`
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 24px;
    &:before {
      padding-left: 10px;
      padding-right: 10px;
      color: #095153;
    }
  }
  a {
    text-decoration: none;
  }
  strong {
    font-weight: 700;
  }
`

const Footer = () => (
  <Container>
    <Wrapper>
      <Social>
        <li>
          <a href="https://www.facebook.com/fathurmh" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/fathurmh" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fathurmh" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fathurmh" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/fathurmh" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:fathurmh@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </Social>
      <Copyright>
        Built with{' '}
        <a href="https://www.gatsbyjs.org" target="_blank">
          <strong>Gatsby</strong>
        </a>{' '}
        by{' '}
        <a href="https://fathurmh.github.io" target="_blank">
          <strong>Fathurahman Ma'ruf Hudoarma</strong>
        </a>
        <br />
        <li>&copy; Copyright 2018</li>
      </Copyright>
    </Wrapper>
  </Container>
)

export default Footer
