import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import { color } from 'styles/variables';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site { 
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer css={
      css`
        margin-top: 60px;
        padding: 20px;
        background-color: ${color.footer};
        border-top: 1px solid ${color.border};
      `
    }>
      <p css={
        css`
          text-align: center;
          color: ${color.white};
          font-size: 14px;
        `
      }>Copyright ⓒ 2020 {data.site.siteMetadata.title}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer
