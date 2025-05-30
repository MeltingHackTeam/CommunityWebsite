import Head from 'next/head';

const OGPMeta = ({
  title,
  description,
  url,
  image,
  type = 'website',
  siteName = 'MeltingHack',
  locale = 'ja_JP',
  twitterCard = 'summary_large_image',
  twitterSite = '@meltinghack'
}) => {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const ogImage = image || '/images/meltinghack_logo_bg_clear.png';
  const canonicalUrl = url || process.env.NEXT_PUBLIC_SITE_URL || 'https://meltinghack.com';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="ja" />
    </Head>
  );
};

export default OGPMeta; 