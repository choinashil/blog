import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import Tags from 'components/tags'
import SEO from 'components/seo'
import { color } from 'styles/variables'

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
      <SEO />
      <div css={
        css`
          width: 100%;
        `
      }>
        <ul>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            const { slug } = edge.node.fields;
            const { title, description, date, tags } = edge.node.frontmatter;

            return (
              <li key={index} css={
                css`
                  padding-top: 32px;

                  & + & { 
                    margin-top: 32px;
                    border-top: 1px solid ${color.border};
                  }
                `
              }>
                <div css={
                  css`
                      cursor: pointer;
                    `
                }>
                  <a href={`/posts/${slug}`} css={
                    css`
                      display: block;
                    `
                  }>
                    <h3 css={
                      css`
                        font-size: 20px;
                        color: ${color.primary};
                      `
                    }>{title}</h3>
                    {description && <p css={
                      css`
                        margin-top: 8px;
                        font-size: 16px;
                        color: ${color.white};
                      `
                    }>{description}</p>}
                    <p css={
                      css`
                        margin-top: 14px;
                        font-size: 14px;
                        color: ${color.dark};
                      `
                    }>{date}</p>
                  </a>
                  {!!tags.length && <Tags tags={tags} />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Index
