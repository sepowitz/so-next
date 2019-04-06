import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

class AppOverride extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Sebastian Odell | Fullstack Developer</title>
        </Head>
        <h1>I'm everywhere</h1>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default AppOverride;
