import App, {Container} from 'next/app';
import React from 'react';
import {observer} from 'mobx-react';

import {updateState} from '../utils/helpers';

import {getPageService} from '../services/page';
import {getThemeOptionsService} from '../services/themeOptions';

import {Navigation} from '../components/Navigation';
import {Content} from '../components/Content';
import {SectionList} from '../components/SectionList';

@observer
export default class Index extends React.Component {
  static async getInitialProps(ctx) {
    const store = updateState(ctx.asPath);
    let page = {};

    const themeOptions = await getThemeOptionsService(store);

    if (themeOptions) {
      page = await getPageService(store);
    }
    return {page};
  }

  render() {
    const {page} = this.props;
    const ContentComponent = page.sections ? SectionList : Content;
    
    return (
      <div>
        <Navigation position="header" />
        {!page ? 'Loading page...' : <ContentComponent page={page} />}
      </div>
    );
  }
}
