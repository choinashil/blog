import React from 'react'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import SEO from 'components/seo'

const NotFound = () => {
  return (
    <Layout>
      <SEO
        title='Not Found'
        description='페이지를 찾을 수 없습니다! 🐙💦'
      />
      <div css={
        css`
          margin-top: 32px;
          width: 100%;
        `
      }>
        <p>페이지를 찾을 수 없습니다! 🐙💦</p>
      </div>
    </Layout>
  );
}

export default NotFound
