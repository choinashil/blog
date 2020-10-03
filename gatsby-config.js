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
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // Customize the prompt used in shell output
              // Values below are default
              // prompt: {
              //   user: "root",
              //   host: "localhost",
              //   global: false,
              // },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              // escapeEntities: {},
            },
          }
        ]
      }
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
  ]
}
