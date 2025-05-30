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
