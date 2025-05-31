import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                {/* Favicon */}
                <link rel="icon" type="image/png" sizes="32x32" href="/images/meltinghack_favicon.png" />
                <link rel="apple-touch-icon" href="/images/meltinghack_favicon.png" />
                
                {/* Basic Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#667eea" />
                
                {/* Default OGP Meta Tags */}
                <meta property="og:site_name" content="MeltingHack" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content="https://melting-hack.tokyo/images/meltinghack_header_icon.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                
                {/* ホームページ用OGPメタタグ - LinkedIn対応 */}
                <meta property="og:title" content="Home | MeltingHack" />
                <meta property="og:description" content="MeltingHack is a Tokyo-based non-profit international hackathon community that empowers individuals of all backgrounds to gain hands-on tech skills and bring their dreams to life." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://melting-hack.tokyo" />
                
                {/* Default Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@meltinghack" />
                <meta name="twitter:creator" content="@meltinghack" />
                <meta name="twitter:title" content="Home | MeltingHack" />
                <meta name="twitter:description" content="MeltingHack is a Tokyo-based non-profit international hackathon community that empowers individuals of all backgrounds to gain hands-on tech skills and bring their dreams to life." />
                <meta name="twitter:image" content="https://melting-hack.tokyo/images/meltinghack_header_icon.png" />
                
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
