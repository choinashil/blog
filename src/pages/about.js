import React from 'react'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import SEO from 'components/seo'

const about = () => {
  return (
    <Layout>
      <SEO title='about' />
      <div css={
        css`
          margin-top: 32px;
          width: 100%;
        `
      }>
        <p>작고 단단한 코드를 작성하기 위해 노력합니다.</p>
      </div>
    </Layout>
  );
}

export default about
