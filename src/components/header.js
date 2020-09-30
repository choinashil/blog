import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { css } from "@emotion/core"
import styled from "@emotion/styled"
// import Nav from './nav'
import '../styles/index.scss'
import { color } from 'styles/variables';

const Category = styled.li`
  & + & {
    margin-left: 12px;
  }

`

const CategoryLink = styled(props => <Link {...props} />)`
  font-size: 18px;
  color: ${color.white};
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
  }
  `)

  return (
    <header css={css`
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid red;
        padding: 0 16px 16px;
      `}
    >
      <Link to='/' css={css`
          display: flex;
          align-items: center;
          padding: 16px 0;
        `}>
        <button css={css`
          font-size: 0;
        `}>
          <img src='/img/tako.png' alt='로고 이미지' css={css`
            display: inline-block;
            vertical-align: top;
            width: 40px;
          `} />
        </button>
        <h1 css={css`
          margin-left: 4px;
          font-size: 24px;
          font-family: 'UhBeeBEOJJI';
          color: ${color.white};
        `}>{data.site.siteMetadata.title}</h1>
      </Link>

      <nav>
        <ul css={
          css`
            display: flex;
          `
        }>
          <Category><CategoryLink to='/'>posts</CategoryLink></Category>
          <Category><CategoryLink to='/tags'>tags</CategoryLink></Category>
          <Category><CategoryLink to='/me'>about</CategoryLink></Category>
        </ul>
      </nav>

      {/* <button className='header__menu' onClick={() => toggleNav(!isNavHidden)}>
        <img src='/img/tako.png' alt='메뉴' className='img' />
      </button> */}

      {/* <div className='nav-desktop'>
        <Nav />
      </div> */}
    </header>
  );
}

export default Header
