import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'GNS Astronomy Club | Great Neck South High School';
  const defaultDescription = 'The official website of the Great Neck South High School Astronomy Club. Join us to explore the cosmos and learn about astronomy.';
  const defaultKeywords = 'astronomy, club, Great Neck South, high school, space, planets, stars, cosmos, telescope, stargazing';
  
  const siteTitle = title ? `${title} | GNS Astronomy Club` : defaultTitle;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gnsastronomy.org/" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gnsastronomy.org/" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content="/og-image.jpg" />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://gnsastronomy.org/" />
    </Helmet>
  );
};

export default SEO;
