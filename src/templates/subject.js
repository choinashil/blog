import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query ($subject: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          subject: {eq: $subject}, 
          draft: {eq: false}}
        }, 
        sort: {
          fields: frontmatter___date, 
          order: DESC
        }
    ) {
      edges {
        node {
          frontmatter {
            date(fromNow: true, locale: "ko")
            title
          }
          fields {
            slug
          }
        }
      }
    }  
  }
`

const Subject = props => {
  const subjectSlug = props.pageContext.subject.toLowerCase().replace(/ /g, '-');
  return (
    <Layout>
      <div>
        <a href={`/${props.pageContext.sourceName}`}>
          <p>{props.pageContext.sourceName}</p>
        </a>
        <a href={`/${props.pageContext.sourceName}/${subjectSlug}`}>
          <p>{props.pageContext.subject}</p>
        </a>
      </div>
      <ul>
      {
        props.data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <a href={`/post/${edge.node.fields.slug}`} key={index}>
              <li>
                <p>{edge.node.frontmatter.title}</p>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            </a>
          )
        })
      }
      </ul>
    </Layout>
  );
}

export default Subject
