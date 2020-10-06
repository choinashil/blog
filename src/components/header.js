import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { color } from 'styles/variables';

const Category = styled.li`
  & + & {
    margin-left: 12px;
  }
`

const CategoryLink = styled(props => <Link {...props} />)`
  font-size: 18px;
  color: ${color.white};

  &:hover {
    border-bottom: 1px solid ${color.white};
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    file(relativePath: {eq: "tako.png"}) {
      childImageSharp {
        fixed(width: 40) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
  `)

  return (
    <header css={css`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 0 16px 16px;
        width: 100%;
        height: 95px;
        max-width: 1000px; 
        box-sizing: border-box;
      `}
    >
      <Link to='/' css={css`
          display: flex;
          align-items: center;
          padding: 16px 0;
        `}>
        <Img fixed={data.file.childImageSharp.fixed} />
        <h1 css={css`
          margin-left: 4px;
          font-size: 26px;
          font-weight: 700;
          font-family: 'UhBeeBEOJJI';
          color: ${color.white};

          @media (hover:hover), (-ms-high-contrast:none) {
            &:hover span:nth-of-type(2) {
              margin-left: 2px;
            }
          }
        `}>
          <span css={css`
              margin-right: 4px;
              width: 94px;
            `
          }>문어지지말고</span>
          <span css={css`
              display: inline-block;
              margin-left: -40%;
              background-color: ${color.background};
              transition: all .2s;
            `
          }>개발일기</span>
        </h1>
      </Link>

      <nav>
        <ul css={
          css`
            display: flex;
          `
        }>
          <Category>
            <CategoryLink to='/' activeStyle={{ borderBottom: `1px solid ${color.white}` }}>posts</CategoryLink>
          </Category>
          <Category>
            <CategoryLink to='/tags' activeStyle={{ borderBottom: `1px solid ${color.white}` }}>tags</CategoryLink>
          </Category>
          <Category>
            {/* TODO: 추후 GA로 통일 https://blog.gyus.me/2019/gatsby-google-analytics/ */}
            <a id='til' href='https://www.notion.so/45ac5afb2c184559b3e2ba81854f420c?v=045a5d0f1cd54e709e25aca9f64d7b86' target='_blank' rel='noopener noreferrer' css={css`
              &:hover {
                border-bottom: 1px solid ${color.white};
              }
            `}
            >TIL</a>
          </Category>
          <Category>
            <CategoryLink to='/about' activeStyle={{ borderBottom: `1px solid ${color.white}` }}>about</CategoryLink>
          </Category>
        </ul>
      </nav>
    </header>
  );
}

export default Header
