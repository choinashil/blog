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
    'gatsby-remark-source-name',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 80
            }
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'
  ]
}
