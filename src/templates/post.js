import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "MMM D, Y")
        subject
      }
      html
      timeToRead
    }
  }
`

const Post = props => {
  const subjectSlug = props.data.markdownRemark.frontmatter.subject.toLowerCase().replace(/ /g, '-');

  return (
    <Layout>
      <div>
        <a href={`/${props.pageContext.sourceName}`}>
         <p>{props.pageContext.sourceName}</p>
        </a>
        <a href={`/${props.pageContext.sourceName}/${subjectSlug}`}>
          <p>{props.data.markdownRemark.frontmatter.subject}</p>
        </a>
      </div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <p>{props.data.markdownRemark.timeToRead} min read</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  );
}

export default Post
