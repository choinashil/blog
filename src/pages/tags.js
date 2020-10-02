import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { color } from 'styles/variables'

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}, sort: {order: DESC, fields: frontmatter___date}) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
          nodes {
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='tags' description='태그 목록입니다 🐙' />
      <div css={
        css`
          width: 100%;
        `
      }>
        <ul css={
          css`
            display: flex;
            flex-wrap: wrap;
            margin-top: -8px;
            margin-left: -8px;
            padding-top: 32px;
          `
        }>
          {data.allMarkdownRemark.group.map((tag, index) => {
            return (
              <li key={index} css={
                css`
                  margin-top: 8px;
                  margin-left: 8px;
                  font-size: 16px;
                `
              }>
                <a href={`/tags/${tag.fieldValue}`} css={
                  css`
                    display: block;
                  `
                }>
                  <span css={
                    css`
                      position: relative;
                      color: ${color.white};
                      cursor: pointer;
                    `
                  }>#{tag.fieldValue}({tag.totalCount})
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Tags
