import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { css } from "@emotion/core"
import Nav from './nav'
import '../styles/index.scss'

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

  const [isNavHidden, toggleNav] = useState(true);

  return (
    <header css={
      css` 
        background-color: blue;
      `
    }>
      <div className='header__area-logo'>
        <Link to='/' className='link'>
          <button className='header__logo'>
            <img src='/img/tako.png' alt='로고 이미지' className='img' />
          </button>
          <div className='header__area-title'>
            <h1 className='header__title'>{data.site.siteMetadata.title}</h1>
          </div>
        </Link>
        <p className='header__author'>by {data.site.siteMetadata.author}</p>
      </div>

      <button className='header__menu' onClick={() => toggleNav(!isNavHidden)}>
        <img src='/img/tako.png' alt='메뉴' className='img' />
      </button>

      <div className='nav-desktop'>
        <Nav />
      </div>
    </header>
  );
}

export default Header
