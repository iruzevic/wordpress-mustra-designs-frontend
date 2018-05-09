import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <html>
        <Head>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
          <meta name="format-detection" content="telephone=no"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
