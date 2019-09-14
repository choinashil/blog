const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    const dirName = path.dirname(node.fileAbsolutePath);
    const category = path.basename(dirName);

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
    createNodeField({
      node,
      name: 'category',
      value: category
    })
  }
}

module.exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve('./src/templates/category.js');
  const subjectTemplate = path.resolve('./src/templates/subject.js');
  const postTemplate = path.resolve('./src/templates/post.js');
  const subjectList = {};

  const res = await graphql(`
    query {
      category: allDirectory {
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
              category
              slug
            }
            frontmatter {
              subject
            }
          }
        }
      }
    }
  `)

  res.data.category.edges.forEach(edge => {
    createPage({
      component: categoryTemplate,
      path: `/${edge.node.sourceInstanceName}`,
      context: {
        category: edge.node.sourceInstanceName
      }
    })
  });

  res.data.slug.edges.forEach(edge => {
    const { fields, frontmatter } = edge.node;
    if (!subjectList[frontmatter.subject]) {
      const subjectSlug = frontmatter.subject.toLowerCase().replace(/ /g, '-');
      createPage({
        component: subjectTemplate,
        path: `/${fields.category}/${subjectSlug}`,
        context: {
          category: fields.category,
          subject: frontmatter.subject
        }
      })
      subjectList[frontmatter.subject] = frontmatter.subject;
    }
  })

  res.data.slug.edges.forEach(edge => {
    const { fields, frontmatter } = edge.node;
    createPage({
      component: postTemplate,
      path: `/post/${fields.slug}`,
      context: {
        category: fields.category,
        slug: fields.slug
      }
    })
  });
}
