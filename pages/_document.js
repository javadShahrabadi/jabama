import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa-IR">
      <Head>
        <link href="/icons/fav.png" rel="icon" type="image/png" />
        {/* font */}
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        {/* font */}
      </Head>
      <body style={{ direction: "rtl" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
