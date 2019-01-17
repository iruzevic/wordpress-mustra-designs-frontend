import App, {Container} from 'next/app';
import React from 'react';

import {updateState} from '../utils/helpers';

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    const store = updateState(ctx.asPath);
    if (Component.getInitialProps) {
  
      const childCtx = {
        ...ctx,
        store,
      };
      pageProps = await Component.getInitialProps(childCtx);
    }


    return {pageProps, store};
  }

  render() {

    const {Component, pageProps, store} = this.props;

    return (
      <Container>
        <Component {...pageProps} store={store} />
      </Container>
    );
  }
}
