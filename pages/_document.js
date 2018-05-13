import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';

import '../styles/global';

export default class MyDocument extends Document {
  
  static getInitialProps({renderPage}) {
    const page = renderPage();
    const styles = extractCritical(page.html);

    return {...page, ...styles};
  }

  render() {
    return (
      <html>
        <Head>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
          <meta name="format-detection" content="telephone=no"/>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&amp;subset=latin-ext" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
