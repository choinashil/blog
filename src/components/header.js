import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
  
  return (
    <header>
      <div class="Header">
        <div class="Header__logo">
          <img src="/img/tako.png" />
        </div>
        <div class="Header__title">
          <Link to='/'>
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
        </div>
        <p class="Header__author">by {data.site.siteMetadata.author}</p>
      </div>

      <nav>
        <ul>
          <div>
            <li>
              <Link to='/me'>me</Link>
            </li>
            <li>
              <Link to='/note'>note</Link>
            </li>
            <li>
              <Link to='/programming'>programming</Link>
            </li>
            <li>
              <Link to='/activity'>activity</Link>
            </li>
            <li>
              <a href='https://www.notion.so/45ac5afb2c184559b3e2ba81854f420c?v=045a5d0f1cd54e709e25aca9f64d7b86' target='_blank' rel='noopener noreferrer'>devlog</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
    );
  }
  
  export default Header
  