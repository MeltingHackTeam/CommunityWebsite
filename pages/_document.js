import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/meltinghack_favicon.png" />
                <link rel="apple-touch-icon" href="/images/meltinghack_favicon.png" />
                
                {/* Basic Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#667eea" />
                
                {/* Default OGP Meta Tags */}
                <meta property="og:site_name" content="MeltingHack" />
                <meta property="og:locale" content="ja_JP" />
                <meta property="og:image" content="https://meltinghack.com/images/meltinghack_logo_bg_clear.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                
                {/* Default Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@meltinghack" />
                <meta name="twitter:creator" content="@meltinghack" />
                
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
