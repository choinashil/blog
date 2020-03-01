import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
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
      <SEO title='문어개발일기' />
      <Path category='home' />
      <section className='home'>
        <div className='content'>
          <h3 className='subject'>Recent</h3>
          <ul className='postList__area'>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li className='postList__item' key={index}>
                <a href={`/post/${edge.node.fields.slug}`} className='link'>
                <p className='postList__area-title'>
                  <span className='postList__title'>{edge.node.frontmatter.title}</span>
                  <span className='postList__date'>{edge.node.frontmatter.date}</span>
                </p>
                </a>
              </li>
            );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Index
