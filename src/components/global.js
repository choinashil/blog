import React from 'react'
import { Global, css } from '@emotion/core'
import { color } from 'styles/variables'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          font-family: sans-serif;
        }

        body {
          background-color: ${color.background};
        }

        body, header, footer, section, nav, aside, 
        h1, h2, h3, h4, h5, h6, p, ul, ol, li , button,
        pre, blockquote {
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          color: #000;
        }

        button {
          border: 0;
          outline: 0;
          background: none;
          cursor: pointer;
        }

        ul {
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyle
