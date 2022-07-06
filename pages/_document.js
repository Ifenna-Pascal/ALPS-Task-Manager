import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="eng" className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      </body>
    </Html>
  );
}
