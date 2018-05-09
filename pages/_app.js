import App, {Container} from 'next/app';
import React from 'react';
import {observer} from 'mobx-react';

import {updateState} from '../utils/helpers';

import {getPageService} from '../services/page';

import {Navigation} from '../components/Navigation';
import {Content} from '../components/Content';
import {SectionList} from '../components/SectionList';

@observer
export default class MyApp extends App {
  static async getInitialProps({ctx}) {
    const store = updateState(ctx.asPath);

    const page = await getPageService(store);
    return {page};
  }

  render() {
    const {page} = this.props;

    const ContentComponent = page.sections ? SectionList : Content;

    return (
      <Container>
        <Navigation position="header" />
        {!page ? 'Loading page...' : <ContentComponent page={page} />}
      </Container>
    );
  }
}
