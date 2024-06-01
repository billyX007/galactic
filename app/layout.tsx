import Footer from "./components/footer/Footer";
import "../style/final.css";
import Script from "next/script";

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
      <body data-barba="wrapper" className="home js">
        {children}
        <Footer />
        <button className="back-to-top-button back-to-top-button--show"></button>
        <Script src="/js/final.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
