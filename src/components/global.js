import React from 'react'
import { Global, css } from '@emotion/core'
import { color } from 'styles/variables'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html {
          font-family: 'D2Coding', sans-serif;
        }

        body {
          background-color: ${color.background};
          color: ${color.white};
          text-rendering: optimizelegibility;
        }

        body, header, footer, section, nav, aside, 
        h1, h2, h3, h4, h5, h6, p, ul, ol, li , button,
        pre, blockquote {
          margin: 0;
          padding: 0;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: 400;
        }

        a {
          text-decoration: none;
          color: ${color.white};
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
