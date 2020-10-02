import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { css } from "@emotion/core"
import styled from "@emotion/styled"
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
          font-size: 26px;
          font-weight: 700;
          font-family: 'UhBeeBEOJJI';
          color: ${color.white};

          &:hover span:nth-child(2) {
            margin-left: 2px;
          }
        `}>
          <span css={
            css`
              margin-right: 4px;
            `
          }>문어지지말고</span>
          <span css={
            css`
              display: inline-block;
              margin-left: -64px;
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
            <CategoryLink to='/about' activeStyle={{ borderBottom: `1px solid ${color.white}` }}>about</CategoryLink>
          </Category>
        </ul>
      </nav>
    </header>
  );
}

export default Header
