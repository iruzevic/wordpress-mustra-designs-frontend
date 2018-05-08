import React from 'react';
import {observer} from 'mobx-react';

import {updateState} from '../utils/helpers';

import {getPageService} from '../services/page';

import {Navigation} from '../components/Navigation';
import {Content} from '../components/Content';
import {SectionList} from '../components/SectionList';


@observer
export default class IndexPage extends React.Component {
  output = '';

  static async getInitialProps(context) {
    const store = updateState(context.asPath);

    const page = await getPageService(store);

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
