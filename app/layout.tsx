import Footer from "./components/footer/Footer";
import "@/style/final.css";
import Script from "next/script";
import local from "@next/font/local";
import AddClass from "./components/base/client/AddClass";

const geomanist = local({
  variable: "--font-geomanist",
  src: [
    {
      path: "../public/fonts/geomanist-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geomanist-regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geomanist-regular-italic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/geomanist-regular-italic-webfont.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/geomanist-light-webfont.woff2",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="js-focus-visible"
      {...{ "data-js-focus-visible": true }}
    >
      <body data-barba="wrapper" className={`js ${geomanist.className}`}>
        <AddClass />
        {children}
        <Footer />
        <button className="back-to-top-button back-to-top-button--show"></button>
        <Script src="/js/final.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
