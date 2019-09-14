module.exports = {
  siteMetadata: {
    title: '문어지지말고 개발일기',
    author: '나시루'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'programming',
        path: `${__dirname}/content/programming/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'activity',
        path: `${__dirname}/content/activity/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'
  ]
}
