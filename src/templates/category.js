import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import '../styles/index.scss'

const SubjectContainer = styled.div`
  margin-bottom: 2.5rem;
`

export const query = graphql`
  query ($sourceName: String!) {
    allMarkdownRemark(
      filter: {fields: {sourceName: {eq: $sourceName}},
      frontmatter: {
        draft: {eq: false}}},
        sort: {fields: frontmatter___date, order: DESC}
    ) {
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

const Category = props => {
  const contentList = [];
  const order = {};
  let index = 0;

  props.data.allMarkdownRemark.edges.forEach(edge => {
    const { subject, title, date } = edge.node.frontmatter;
    const { slug } = edge.node.fields;

    if (!order[subject]) {
      order[subject] = { index };
      const subjectSlug = edge.node.frontmatter.subject.toLowerCase().replace(/ /g, '-');
      contentList.push({
        subject,
        subjectSlug,
        content: []
      });
      index++;
    }
    const { content } = contentList[order[subject].index];
    if (content.length < 3) {
      content.push({ title, date, slug });
    }
  });

  return (
    <Layout>
      <section className='category'>
        <div className='content'>
          {contentList.map(contentInfo => {
            return (
              <SubjectContainer key={contentInfo.subject}>
                <a href={`/${props.pageContext.sourceName}/${contentInfo.subjectSlug}`}>
                  <h3 className='subject--hover'>{contentInfo.subject}</h3>
                </a>
                <ul className='postList__area'>
                  {contentInfo.content.map((content, index) => {
                    return (
                      <li className='postList__item' key={index}>
                        <a href={`/post/${content.slug}`}>
                          <p className='postList__area-title'>
                            <span className='postList__title'>{content.title}</span>
                            <span className='postList__date'>{content.date}</span>
                          </p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </SubjectContainer>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Category
