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
        <p>안녕하세요 나시루 소개를 해볼까요</p>
        <span>나시루 인스타는 <a href='https://www.instagram.com/n.shx/?hl=ko' target='_blank' rel='noopener noreferrer'>요기</a></span>
      </div>
    </Layout>
  );
}

export default about
