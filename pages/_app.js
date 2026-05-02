import React, { useEffect } from 'react'
import { Cursor, Footer, Header, LoadingScreen, ScrollToTop, AuroraBackground } from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import Head from 'next/head'
import { mainData } from '@/lib/data'
import Lenis from 'lenis'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      // Observe <body>, not <html>. The site's _base.scss pins
      // html { height: 100% } so the default content target never
      // resizes — the scroll limit would freeze at first paint.
      wrapper: window,
      content: document.body,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // The LoadingScreen flips off on the next tick and the real
    // page mounts after that. Force a resize once layout has settled
    // so we don't sit on Lenis's 250ms debounce window.
    const initialResize = requestAnimationFrame(() =>
      requestAnimationFrame(() => lenis.resize())
    );

    // Final catch for the last reflow after lazy images and webfonts
    // resolve.
    const onLoad = () => lenis.resize();
    window.addEventListener('load', onLoad);

    return () => {
      cancelAnimationFrame(initialResize);
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', onLoad);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href={mainData.favicon.src} />
          </Head>
          <AuroraBackground />
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}
