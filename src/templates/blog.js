import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query ($category: String!) {
    allMarkdownRemark(
      filter: {fields: {category: {eq: $category}}, 
      frontmatter: {
        draft: {eq: false}}}, 
        sort: {fields: frontmatter___date, order: DESC}
    ){            
      edges {
        node {
          frontmatter {
            subject
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

const Blog = props => {
  const contentList = [];
  const order = {};
  let index = 0;
  
  props.data.allMarkdownRemark.edges.forEach(edge => {
    const { subject, title, date } = edge.node.frontmatter;
    const { slug } = edge.node.fields;
    
    if(!order[subject]) {
      order[subject] = { index };
      contentList.push({
        subject,
        content: [] 
      });
      index++;
    }
    const { content } = contentList[order[subject].index];
    if(content.length < 3) {
      content.push({ title, date, slug }); 
    }
  });

  return (
    <Layout>
      {/* <h1>{location.state.subject}</h1> */}
      
      {contentList.map(contentInfo => {
        return (
          <div key={contentInfo.subject}>
            <a href=''><h3>{contentInfo.subject}</h3></a>
            <ul>
              {contentInfo.content.map((content, index) => {
                return (
                  <a href={`/post/${content.slug}`} key={index}>
                    <li>
                      <p>{content.title}</p>
                      <p>{content.date}</p>
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Layout>
  );
}

export default Blog
