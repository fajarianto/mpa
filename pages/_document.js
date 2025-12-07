// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#020617" />
        <meta name="google-site-verification" content="PASTE_GOOGLE_SITE_VERIFICATION_CODE_HERE" />
        <meta name="robots" content="index,follow" />
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="PASTE_YOUR_SEARCH_CONSOLE_CODE_HERE"
        />
        {/* Google Analytics / GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </Head>
      <body className="bg-slate-950 text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
