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
          <style>{`body,  ul li p { margin: 0 } /* custom! */`}</style>
          <base href={BASE_HREF} />
          <link rel="stylesheet" href={BASE_HREF + "/_next/static/style.css"} />
          <link
            href="https://unpkg.com/template.data.gouv.fr/dist/style/main.css"
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
