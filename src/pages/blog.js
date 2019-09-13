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
                category
                date(fromNow: true, locale: "ko")
                draft
                title
              }
              fields {
                sourceName
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
      const { category, title, date } = edge.node.frontmatter;
      
      if(!order[category]) {
        order[category] = { index };
        contentList.push({
          category,
          content: [] 
        });
        index++;
      }
      const { content } = contentList[order[category].index];
      if(content.length < 3) {
        content.push({ title, date }); 
      }
    });
    
    return (
      <Layout>
      <h1>{location.state.category}</h1>
      
      {contentList.map(contentInfo => {
        return (
          <div key={contentInfo.category}>
            <Link to=''><h3>{contentInfo.category}</h3></Link>
            <ul>
              {contentInfo.content.map((content, index) => {
                return (
                  <li key={index}>
                    <p>{content.title}</p>
                    <p>{content.date}</p>
                  </li>
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
              