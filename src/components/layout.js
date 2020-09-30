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
        max-width: 1000px;
        min-height: 100vh;
        margin: 0 auto;
      `
    }>
      <Global />
      <Header />
      <section css={
        css`
          display: flex;
          flex: 1;
        `
      }>
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default Layout
