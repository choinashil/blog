import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Path from '../components/path'
import '../styles/index.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 10) {          
      edges {
        node {
          frontmatter {
            date(fromNow: true, locale: "ko")
            title
            subject
          }
          fields {
            slug
            sourceName
          }
        }
      }
    }
  }
  `)
  
  return (
    <Layout>
      <section className='Home'>
        <Path category='home' />
        <div className='Container'>
          <h3 className="Subject">Recent</h3>
          <ul>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <a href={`/post/${edge.node.fields.slug}`} key={index}>
                <li className="PostList">
                  <div>
                    <span className="PostList__title">{edge.node.frontmatter.title}</span>
                    <span className="PostList__date">{edge.node.frontmatter.date}</span>
                  </div>
                </li>
              </a>
              )
            })}
            </ul>
          </div>
        </section>
      </Layout>
      );
    }
    
    export default Index
    