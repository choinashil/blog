const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: '문어개발일기',
    author: '나슈',
    description: '오늘도 즐코딩🐙',
    siteUrl: 'https://nashu.dev',
    keywords: '문어개발, 문어개발일기, 문어지지말고개발, 문어지지말고개발일기, 무너개발, 무너지지말고개발, 무너지지말고개발일기, 개발, 웹개발, 개발자, 프론트엔드, 프론트엔드개발자, 풀스택, 자바스크립트, 리액트, 파이썬',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: '2018',
    //     path: `${__dirname}/content/2018/`
    //   }
    // },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '2021',
        path: `${__dirname}/content/2021/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/img/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 32px auto;',
              backgroundColor: 'transparent',
            }
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Dark+ (default dark)'
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
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GA_MEASUREMENT_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://nashu.dev',
        sitemap: 'https://nashu.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-remark-source-name',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
  ]
}
