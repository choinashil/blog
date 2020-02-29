import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Path from '../components/path'

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
  return (
    <Layout>
      <section>
        <Path 
          category={props.pageContext.sourceName}
          subject={props.pageContext.subject}
        />
        <div className='content'>
          <ul className='postList__area'>
          {
            props.data.allMarkdownRemark.edges.map((edge, index) => {
              return (
                <li className='postList' key={index}>
                  <a href={`/post/${edge.node.fields.slug}`}>
                    <p className='postList__area-title'>
                      <span className='postList__title'>{edge.node.frontmatter.title}</span>
                      <span className='postList__date'>{edge.node.frontmatter.date}</span>
                    </p>
                  </a>
                </li>
              )
            })
          }
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Subject
