import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Tags from 'components/tags'
import Utterances from 'components/utterances'
import { color } from 'styles/variables'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD") 
        subject
        description
        tags
      }
      html
    }
  }
`

const Post = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { title, date, tags, description } = frontmatter;
  const slicedDescription = description.length > 120 ? `${description.slice(0, 120)}...` : description;

  return (
    <Layout>
      <SEO
        title={title}
        description={`${slicedDescription} 🐙`}
        keywords={tags.join(', ')}
        article
      />
      <article css={
        css`
          margin-top: 32px;
          padding-bottom: 60px;
          width: 100%;
        `
      }>
        <div>
          <h2 css={
            css`
              font-size: 22px;
              margin-bottom: 8px;
            `
          }>{title}</h2>
          <p css={
            css`
              margin-top: 14px;
              color: ${color.dark};
            `
          }>{date}</p>

        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} css={
          css`
            margin-top: 48px;
            margin-bottom: 40px;
            font-size: 16px;
            line-height: 26px;

            h3 {
              margin-top: 32px;
              margin-bottom: 8px;
              font-size: 20px;
            }

            h4 {
              margin-top: 8px;
              margin-bottom: 6px;
              font-size: 18px;
            }

            p {
              & + p {
                margin-top: 2px;
              }
            }

            ul {
              margin-top: 2px;  
              padding-left: 8px;
            }

            li {
              position: relative;
              padding-left: 12px;

              &:before {
                position: absolute;
                top: 10px;
                left: 0;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: ${color.white};
                content: '';
              }

              & + li {
                margin-top: 2px;
              }
            }

            a {
              color: ${color.primary};

              &:hover {
                border-bottom: 1px solid ${color.primary};
              }
            }

            p > code, li > code {
              padding: 1px 6px;
              background-color: ${color.code}; 
              color: ${color.white};
              font-size: 14px;            
            }
          `
        } />
        <Tags tags={tags} fontSize={16} />
        <Utterances />
      </article>
    </Layout>
  );
}

export default Post
