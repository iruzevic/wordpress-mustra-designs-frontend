import React, {Component} from 'react';
import Head from 'next/head';
import {getPageService} from '../services/page';

import Navigation from '../components/Navigation';
import Content from '../components/Content';
import SectionList from '../components/SectionList';

import {updateState} from '../utils/helpers';
import {isServer} from '../utils/env';
import {observer} from 'mobx-react';

@observer
export default class IndexPage extends React.Component {
  output = '';

  componentWillMount() {
    const {componentState} = this.props;

    if (!isServer) {
      const {url} = this.props;
      this.componentState = updateState(url ? url.asPath : '/', componentState);
    } else {
      this.componentState = this.props.componentState;
    }

    const {page} = this.componentState;

    if (!page) {
      console.log('loading');
      this.output = 'Loading Page...';
    } else {
      console.log(page, 'Component');
      const ContentComponent = page.sections ? SectionList : Content;
      this.output = <ContentComponent page={page} />;
    }

    console.log('componentWillMount');
  }

  static async getInitialProps({asPath}) {
    this.componentState = updateState(asPath);

    await getPageService(this.componentState);
    console.log('getInitialProps');
    
    return {componentState: this.componentState};
  }

  render() {
    return (
      <div>
        <Navigation position="header" />
        {this.output}
      </div>
    );
  }
}
