import React, { memo } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

export default memo(function SEO({
  title,
  description,
  image,
  pathname = "",
  type = "website",
  keywords = [],
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const { siteConfig } = useDocusaurusContext();

  const seo = {
    title: title ? `${title} | ${siteConfig.title}` : siteConfig.title,
    description: description || siteConfig.tagline,
    image: image || `${siteConfig.url}/img/og-image.webp`,
    url:
      `${siteConfig.url}${siteConfig.baseUrl}${pathname}`
        .replace(/([^:])\/+/g, "$1/")
        .replace(/\/$/, "") || siteConfig.url,
    keywords: [...keywords].join(", "),
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Article-specific Open Graph tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content="Vipul Gupta" />
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />

      {/* JSON-LD Structured Data for pages */}
      {type === "article" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: seo.description,
            image: seo.image,
            author: {
              "@type": "Person",
              name: "Vipul Gupta",
              url: siteConfig.url,
            },
            publisher: {
              "@type": "Person",
              name: "Vipul Gupta",
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/img/avatar.webp`,
              },
            },
            url: seo.url,
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
          })}
        </script>
      )}
    </Head>
  );
});
