import { Html, Head, Main, NextScript } from "next/document";
import i18n from '@/i18n';

export default function Document() {
  return (
    <Html lang={i18n.language || 'en'} className="dark">
      <Head>
        {/* Forçar modo escuro */}
        <meta name="color-scheme" content="dark" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        
        {/* Meta tags */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
      </Head>
      <body className="antialiased dark bg-slate-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
