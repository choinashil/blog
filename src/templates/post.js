import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Path from '../components/path'
import '../styles/index.scss';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(formatString: "MMM D, Y")
        subject
        description
        tags
      }
      html
      timeToRead
    }
  }
`

const Post = props => {
  const { frontmatter, html, timeToRead } = props.data.markdownRemark;
  const { subject, title, description, date } = frontmatter;

  return (
    <Layout>
      <section className='Post'>
        <Path 
          category={props.pageContext.sourceName} 
          subject={subject}
        />

        <div className='Container'>
          <div className='Post__info'>
            <h1 className='Post__info__title'>{title}</h1>
            {description ? <p className='Post__info__description'>{description}</p> : ''}
            <p>
              <span className='Post__info__date'>{date}</span>
              <span className='Post__info__timeToRead'>{timeToRead} min read</span>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </section>
    </Layout>
  );
}

export default Post
