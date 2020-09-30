import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import { color } from 'styles/variables';

const Index = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}, sort: {fields: frontmatter___date, order: DESC}) {          
      edges {
        node {
          frontmatter {
            date(locale: "ko", formatString: "YYYY.MM.DD")
            title
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <SEO title='문어개발일기' />
      <div css={
        css`
          margin-top: 20px;
          padding: 0 16px;
          width: 100%;
        `
      }>
        <ul>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index} css={
                css`
                  padding-top: 32px;

                  & + & { 
                    margin-top: 32px;
                    border-top: 1px solid #444;
                  }
                `
              }>
                <a href={`/posts/${edge.node.fields.slug}`} css={
                  css`
                    display: block;
                  `
                }>
                  <div css={
                    css`
                      display: inline-block;
                      position: relative;
                      color: ${color.white};
                      cursor: pointer;
                    `
                  }>
                    <h3 css={
                      css`
                        font-size: 18px;
                      `
                    }>{edge.node.frontmatter.title}</h3>
                    <p css={
                      css`
                        font-size: 14px;
                      `
                    }>{edge.node.frontmatter.description}</p>
                    <span css={
                      css`
                        font-size: 12px;
                      `
                    }>{edge.node.frontmatter.date}</span>
                    <p>
                      {edge.node.frontmatter.tags.map((tag, index) => {
                        return (
                          <span key={index} css={
                            css`
                              & + & {
                                margin-left: 8px;
                              }
                            `
                          }>#{tag}</span>
                        );
                      })}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Index
