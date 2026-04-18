import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_NAME } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterHandle?: string;
  schema?: object;
  noindex?: boolean;
  keywords?: string;
  breadcrumbs?: { name: string; item: string }[];
}


const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.flexophysio.com/hero-interaction.jpg',
  twitterHandle = '@flexophysio',
  schema,
  noindex = false,
  keywords,
  breadcrumbs,
}) => {

  const siteName = BRAND_NAME;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Expert home visit physiotherapy in Hyderabad. Specializing in Orthopedic, Neurological, and Post-Surgical rehabilitation at your doorstep.";
  const metaDescription = description || defaultDescription;
  const url = canonical ? `https://www.flexophysio.com${canonical}` : 'https://www.flexophysio.com/';

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `https://www.flexophysio.com${b.item}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>

  );
};

export default SEO;
