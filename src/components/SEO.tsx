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
}) => {
  const siteName = BRAND_NAME;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Expert home visit physiotherapy in Hyderabad. Specializing in Orthopedic, Neurological, and Post-Surgical rehabilitation at your doorstep.";
  const metaDescription = description || defaultDescription;
  const url = canonical ? `https://www.flexophysio.com${canonical}` : 'https://www.flexophysio.com/';

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
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
    </Helmet>
  );
};

export default SEO;
