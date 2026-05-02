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
    // Lenis defaults: wrapper=window, content=document.documentElement.
    // documentElement has overflow:visible, so its scrollHeight tracks
    // the full content. We previously tried content:document.body but
    // body has overflow-x:hidden in _base.scss which clamps body's
    // own scrollHeight — that is what re-introduced the scroll cap.
    const lenis = new Lenis({
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

    // Lenis's internal ResizeObserver watches the <html> *box*, which
    // _base.scss pins to height:100% — so it never fires on content
    // growth. We have to drive lenis.resize() ourselves.

    // 1) After the LoadingScreen flips off and the real page mounts.
    const initialResize = requestAnimationFrame(() =>
      requestAnimationFrame(() => lenis.resize())
    );

    // 2) After all initial-fold resources (webfonts, eager images)
    //    settle.
    const onLoad = () => lenis.resize();
    window.addEventListener('load', onLoad);

    // 3) The big one — observe the Next.js content root (#__next is
    //    auto-height, so it grows when below-fold lazy WebPs decode).
    //    This catches every late layout shift on long pages.
    const nextRoot = document.getElementById('__next');
    const ro = nextRoot ? new ResizeObserver(() => lenis.resize()) : null;
    if (ro) ro.observe(nextRoot);

    return () => {
      cancelAnimationFrame(initialResize);
      cancelAnimationFrame(rafId);
      window.removeEventListener('load', onLoad);
      if (ro) ro.disconnect();
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
