import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import { color } from 'styles/variables'

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false }, tags: { in: [$tag] }}}, 
      sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

const Tag = props => {
  return (
    <Layout>
      <div css={
        css`
          margin-top: 32px;
          width: 100%;
        `
      }>
        <h2 css={
          css`
            font-size: 20px;
            color: ${color.primary};
          `
        }>#{props.pageContext.tag} ({props.data.allMarkdownRemark.totalCount})</h2>
        <ul css={
          css`
            display: flex;       
            flex-direction: column;
            margin-top: 32px;
          `
        }>
          {props.data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index} css={
                css`
                  & + & {
                    margin-top: 20px;
                  }
                `
              }>
                <a href={`/posts/${edge.node.fields.slug}`} css={
                  css`
                    display: block;
                  `
                }>
                  <p css={
                    css`
                      display: flex;
                      align-items: flex-end;
                    `
                  }>
                    <span css={
                      css`
                        font-size: 16px;
                        color: ${color.white};   
                      `
                    }>{edge.node.frontmatter.title}</span>
                    <span css={
                      css`
                        margin-left: 6px;
                        font-size: 14px;
                        color: ${color.dark};
                      `
                    }>{edge.node.frontmatter.date}</span>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Tag
