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
                <meta property="og:image" content="https://melting-hack.tokyo/images/meltinghack_logo_bg_clear.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                
                {/* ホームページ用OGPメタタグ - LinkedIn対応 */}
                <meta property="og:title" content="ホーム | MeltingHack" />
                <meta property="og:description" content="MeltingHackは世界中のハッカソン愛好家が集まるコミュニティです。技術的な学びを共有し、イノベーションを促進します。" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://melting-hack.tokyo" />
                
                {/* Default Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@meltinghack" />
                <meta name="twitter:creator" content="@meltinghack" />
                <meta name="twitter:title" content="ホーム | MeltingHack" />
                <meta name="twitter:description" content="MeltingHackは世界中のハッカソン愛好家が集まるコミュニティです。技術的な学びを共有し、イノベーションを促進します。" />
                <meta name="twitter:image" content="https://melting-hack.tokyo/images/meltinghack_logo_bg_clear.png" />
                
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
