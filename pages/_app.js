import React from "react";
import App, { Container } from "next/app";

import { Layout } from "../src/components";
import { ReactPiwik } from "../src/piwik";

export default class MyApp extends App {
  componentDidMount() {
    piwikSetup();
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>;
  }
}

//

function piwikSetup () {
  const isBrowser = typeof document !== undefined;
  if (!isBrowser) {
    return;
  }

  ReactPiwik.push(["setCustomUrl", document.location.href]);
  ReactPiwik.push(["setDocumentTitle", document.title]);
  ReactPiwik.push(["trackPageView"]);
  ReactPiwik.push(["enableLinkTracking"]);
}
