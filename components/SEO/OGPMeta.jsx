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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://melting-hack.tokyo';
  
  // 絶対URLを確保
  const canonicalUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : baseUrl;
  
  // デフォルトは既存のロゴ画像を使用（確実に表示される）
  let ogImage;
  if (image) {
    ogImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  } else {
    // デフォルトは既存のロゴ画像
    ogImage = `${baseUrl}/images/meltinghack_logo_bg_clear.png`;
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="ハッカソン, hackathon, 国際, international, グローバル, global, 東京, tokyo, プログラミング, エンジニア, 開発者, コミュニティ" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags - LinkedIn対応 */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - ${description}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* LinkedIn特有のメタタグ */}
      <meta property="article:author" content="MeltingHack" />
      <meta property="article:publisher" content="MeltingHack" />
      <meta property="article:published_time" content={new Date().toISOString()} />
      <meta property="article:modified_time" content={new Date().toISOString()} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${fullTitle} - ${description}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="ja" />
      <meta name="author" content="MeltingHack" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'WebSite',
            "name": fullTitle,
            "description": description,
            "url": canonicalUrl,
            "image": ogImage,
            "author": {
              "@type": "Organization",
              "name": "MeltingHack"
            },
            "publisher": {
              "@type": "Organization",
              "name": "MeltingHack",
              "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/meltinghack_logo_bg_clear.png`
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString()
          })
        }}
      />
    </Head>
  );
};

export default OGPMeta; 