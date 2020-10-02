import React from 'react'
import { css } from '@emotion/core'
import Global from 'components/global'
import Header from 'components/header'
import Footer from 'components/footer'

const Layout = ({ children }) => {
  return (
    <div css={
      css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `
    }>
      <Global />
      <Header />
      <section css={
        css`
          display: flex;
          flex: 1;
          width: 100%; 
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        `
      }>
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default Layout
