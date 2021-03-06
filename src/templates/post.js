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
        description
        tags
        hiddenTags
      }
      html
    }
  }
`

const Post = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { title, date, tags, hiddenTags, description } = frontmatter;
  const slicedDescription = description && description.length > 120 ? `${description.slice(0, 120)}...` : description;

  return (
    <Layout>
      <SEO
        title={title}
        description={slicedDescription}
        keywords={`${tags.join(', ')}, ${hiddenTags.join(', ')}`}
        article
      />
      <article css={
        css`
          margin-top: 32px;
          width: 100%;
        `
      }>
        <div>
          <h2 css={
            css`
              font-size: 22px;
              margin-bottom: 8px;
              color: ${color.primary};
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
            margin-bottom: 60px;
            font-size: 16px;
            line-height: 26px;

            h3 {
              margin-top: 32px;
              margin-bottom: 8px;
              font-size: 20px;
              font-weight: 700;
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

            h3 > code, h4 > code, p > code, li > code {
              padding: 3px 6px;
              background-color: ${color.code}; 
              border-radius: 6px;
              color: ${color.white};
              font-size: 14px;            
            }

            // gatsby-remark-vscode
            .grvsc-container {
              margin: 16px 0;
            }

            .grvsc-code {
              display: flex;
              flex-direction: column;
            }

            .grvsc-line-diff-del:before {
              background-color: rgba(184, 33, 46, 0.2);  
            }

            .grvsc-line-diff-add:before {
              background-color: rgba(30, 168, 62, 0.2);
            }

            .dark-default-dark {
              background-color: ${color.footer};

              .grvsc-line-highlighted:before {
                background-color: rgba(255, 255, 255, 0.05);
              }

              .mtk4 {
                color: ${color.primary};
              }

              .mtk11 {
                color: #dbdb9f;
              }

              .mtk12 {
                color: #b2e2fc;
              }
            }
          `
        } />
        {!!tags.length && <Tags tags={tags} fontSize={16} />}
        <Utterances />
      </article>
    </Layout>
  );
}

export default Post
