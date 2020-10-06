import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ title, description, keywords, image, article }) {
  const { pathname } = useLocation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultKeywords: keywords
        }
      }
    }
  `)

  const { defaultTitle, defaultDescription, defaultKeywords, siteUrl } = data.site.siteMetadata;
  const seo = {
    title: title ? `${title} 🐙` : `${defaultTitle} 🐙`,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    // image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta property="og:title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="keywords" content={seo.keywords} />

      {article && <meta property="og:type" content="article" />}

      <meta property="og:locale" content="ko_KR" />
      <meta name="author" content={defaultTitle} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:article:author" content={defaultTitle} />

      {/* TODO: 이미지 경로 수정 */}
      <meta property="og:image" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />

      <link href={siteUrl} rel="canonical" />
      <meta property="og:url" content={seo.url} />

      {/* <meta name='image' content={seo.image} /> */}
      {/* {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet >
  );
}

export default SEO;