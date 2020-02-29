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
      <section className='post'>
        <Path 
          category={props.pageContext.sourceName} 
          subject={subject}
        />
        <div className='content'>
          <div className='post__info'>
            <h1 className='post__info__title'>{title}</h1>
            {description ? <h2 className='post__info__description'>{description}</h2> : ''}
            <p className='post__info__datetime'>
              <span className='post__info__date'>{date}</span>
              <span className='post__info__timeToRead'>{timeToRead} min read</span>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} className='post__content'></div>
        </div>
      </section>
    </Layout>
  );
}

export default Post
