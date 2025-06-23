import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  type?: 'website' | 'article';
}

export default function SEO({
  title,
  description,
  image,
  pathname = '',
  type = 'website',
}: SEOProps) {
  const { siteConfig } = useDocusaurusContext();
  
  const seo = {
    title: title ? `${title} | ${siteConfig.title}` : siteConfig.title,
    description: description || siteConfig.tagline,
    image: image || (siteConfig.themeConfig as any).image as string,
    url: `${siteConfig.url}${siteConfig.baseUrl}${pathname}`,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      {/* LinkedIn */}
      <meta property="article:author" content="Vipul Gupta" />
      
      {/* Additional meta tags for better indexing */}
      <link rel="canonical" href={seo.url} />
    </Head>
  );
}
