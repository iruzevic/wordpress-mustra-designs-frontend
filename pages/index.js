import App, {Container} from 'next/app';
import React from 'react';
import {observer} from 'mobx-react';

import {updateState} from '../utils/helpers';

import {getPageService} from './../services/page';
import {getThemeOptionsService} from '../services/themeOptions';
import {getMenuService} from './../services/menu';

import {Header} from '../components/Header';
import {Content} from '../components/Content';
import {SectionList} from '../components/SectionList';

@observer
export default class Index extends React.Component {
  static async getInitialProps(ctx) {
    const store = updateState(ctx.asPath);
    let page = {};

    const themeOptions = await getThemeOptionsService(store);
    const menu = await getMenuService(store);

    if (themeOptions) {
      page = await getPageService(store);
      store.page = page;
    }

    return {page};
  }

  render() {
    const {page, store} = this.props;

    console.log(this.props);
    
    const ContentComponent = page.sections ? SectionList : Content;
    
    return (
      <div>
        <Header store={store} />
        {!page ? 'Loading page...' : <ContentComponent page={page} />}
      </div>
    );
  }
}
