import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const Blog = ({ location }) => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "programming"}}, 
      frontmatter: {
        draft: {eq: false}}}, 
        sort: {fields: frontmatter___date, order: DESC}) {            
          edges {
            node {
              frontmatter {
                subject
                date(fromNow: true, locale: "ko")
                draft
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      
    const contentList = [];
    const order = {};
    let index = 0;
    
    data.allMarkdownRemark.edges.forEach(edge => {
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
      {/* <h1>{location.state.category}</h1> */}
      
      {contentList.map(contentInfo => {
        return (
          <div key={contentInfo.subject}>
            <Link to=''><h3>{contentInfo.subject}</h3></Link>
            <ul>
              {contentInfo.content.map((content, index) => {
                return (
                  <Link to={`post/${content.slug}`} key={index}>
                    <li>
                      <p>{content.title}</p>
                      <p>{content.date}</p>
                    </li>
                  </Link>
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
              