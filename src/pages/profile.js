import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Body = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  line-height: 1;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    font-weight: 400;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 170px;
    height: 170px;
    border-radius: 50%;
  }
`

const Profile = ({ data }) => {
  const postNode = {
    title: `Profile - ${config.siteTitle}`,
  }

  return <div>
      <Helmet>
        <title>{`Profile - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="profile" customTitle />

      <Container>
        <PageTitle small></PageTitle>
        <Body>
          <img src="/logos/share.jpg" />
          Fathurahman Ma'ruf Hudoarma
          <br />
          <br />
          <a href="https://fathurmh.github.io/" target="_blank">
            fathurmh.github.io
          </a>
        </Body>
      </Container>
    </div>
}

export default Profile
