import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, image: metaImage, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
              keywords
            }
          }
        }
      `}
      render={data => (
        // const metaDescription = description || data.site.siteMetadata.description;
        // const image = metaImage && metaImage.src ? `${data.site.siteMetadata.siteUrl}${metaImage.src}` : null;
        // return (
          <Helmet 
            htmlAttributes={{
              lang: 'ko'
            }}
            title={title}
            // meta={
            //   [
            //     {
            //       name: 'title',
            //       content: data.site.siteMetadata.title
            //     }
            //   ]
            // }
          />
        // );
      )}
    />
  );
}

export default SEO;