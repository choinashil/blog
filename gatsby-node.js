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
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')
  const blogTemplate = path.resolve('./src/templates/blog.js')

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
              slug
            }
          }
        }
      }
    }
  `)
  res.data.category.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.sourceInstanceName}`,
      context: {
        category: edge.node.sourceInstanceName
      }
    })
  })

  res.data.slug.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `/post/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
