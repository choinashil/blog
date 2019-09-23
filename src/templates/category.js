import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Path from '../components/path'
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
    
    if(!order[subject]) {
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
    if(content.length < 3) {
      content.push({ title, date, slug }); 
    }
  });

  return (
    <Layout>
      <section class='Category'>
        <Path category={props.pageContext.sourceName} />
        
        <div class='Container'>
          {contentList.map(contentInfo => {
            return (
              <SubjectContainer key={contentInfo.subject}>
                <a href={`/${props.pageContext.sourceName}/${contentInfo.subjectSlug}`}>
                  <h3 class="Subject--hover">{contentInfo.subject}</h3>
                </a>
                <ul>
                  {contentInfo.content.map((content, index) => {
                    return (
                      <a href={`/post/${content.slug}`} key={index}>
                        <li className='PostList'>
                          <div>
                            <span class='PostList__title'>{content.title}</span>
                            <span class='PostList__date'>{content.date}</span>
                          </div>
                        </li>
                      </a>
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
