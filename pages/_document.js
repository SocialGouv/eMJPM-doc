import Document, { Head, Main, NextScript } from "next/document";

const BASE_HREF = process.env.BASE_HREF || "";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Documentation</title>
          <style>{`body,  ul li p { margin: 0 } img { max-width: 100%; }`}</style>
          <style global jsx>{`
            body,
            ul li p {
              margin: 0;
            }

            .panel img {
              width: 75%;
              display: block;
              margin: auto;
            }
          `}</style>
          <link
            href="https://unpkg.com/template.data.gouv.fr@1.1.8/dist/style/main.css"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
