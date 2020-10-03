const path = require('path');

module.exports = {
  siteMetadata: {
    title: '문어개발일기',
    author: '나시루',
    description: '오늘도 즐코딩🐙',
    // TODO: url 변경 필요
    siteUrl: 'https://www.notion.so/Nashil-9202c3440d0d47d5ac1796d27a10bf55',
    keywords: '개발, 웹개발, 개발자, 프론트엔드, 프론트엔드개발자, 자바스크립트, 리액트, 파이썬, developer, javascript, react, python',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '2018',
        path: `${__dirname}/content/2018/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '2019',
        path: `${__dirname}/content/2019/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '2020',
        path: `${__dirname}/content/2020/`
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
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [{
                resolve: `gatsby-remark-vscode`,
                options: {
                  theme: 'Dark+ (default dark)'
                }
              }]
            }
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
  ]
}
