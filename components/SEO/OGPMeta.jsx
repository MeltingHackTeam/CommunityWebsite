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
  // デバッグ用ログ
  console.log('OGPMeta props:', { title, description, url, image, type });
  
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

  console.log('OGPMeta computed values:', { fullTitle, canonicalUrl, ogImage });

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Meta Tags - LinkedIn対応 */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default OGPMeta; 