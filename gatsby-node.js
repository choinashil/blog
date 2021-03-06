const path = require('path');
const kebabCase = require('lodash.kebabcase');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // const categoryTemplate = path.resolve('./src/templates/category.js');
  // const subjectTemplate = path.resolve('./src/templates/subject.js');
  const tagTemplate = path.resolve('./src/templates/tag.js');
  const postTemplate = path.resolve('./src/templates/post.js');
  const subjectList = {};

  const res = await graphql(`
    query {
      sourceName: allDirectory {
        edges {
          node {
            sourceInstanceName
          }
        }
      }
      slug: allMarkdownRemark {
        edges {
          node {
            fields {
              sourceName
              slug
            }
          }
        }
      }
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // res.data.sourceName.edges.forEach(edge => {
  //   createPage({
  //     component: categoryTemplate,
  //     path: `/${edge.node.sourceInstanceName}`,
  //     context: {
  //       sourceName: edge.node.sourceInstanceName
  //     }
  //   })
  // });

  // res.data.slug.edges.forEach(edge => {
  //   const { fields, frontmatter } = edge.node;
  //   if (!subjectList[frontmatter.subject]) {
  //     const subjectSlug = frontmatter.subject.toLowerCase().replace(/ /g, '-');
  //     createPage({
  //       component: subjectTemplate,
  //       path: `/${fields.sourceName}/${subjectSlug}`,
  //       context: {
  //         sourceName: fields.sourceName,
  //         subject: frontmatter.subject
  //       }
  //     })
  //     subjectList[frontmatter.subject] = frontmatter.subject;
  //   }
  // });

  res.data.slug.edges.forEach(edge => {
    const { sourceName, slug } = edge.node.fields;
    createPage({
      component: postTemplate,
      path: `/posts/${slug}`,
      context: {
        sourceName,
        slug,
      }
    })
  });

  res.data.tags.group.forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/tags/${kebabCase(tag.fieldValue)}`,
      context: {
        tag: tag.fieldValue,
      }
    })
  })
}
