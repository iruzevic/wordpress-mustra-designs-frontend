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

    // console.log(componentState, '[AAA]');

    if (!isServer) {
      const {url} = this.props;
      this.componentState = updateState(url ? url.asPath : '/', componentState);
    } else {
      this.componentState = this.props.componentState;
    }

    // console.log(Object.keys(this.componentState.cache).length);
    const {page} = this.componentState;
    
    if (!page || Object.keys(page.cache).length === 0) {
      console.log('loading');
      this.output = 'Loading Page...';
    } else {
      console.log('Component');
      const ContentComponent = page.sections ? SectionList : Content;
      this.output = <ContentComponent page={page} />;
    }
  }

  static getInitialProps({asPath}) {
    this.componentState = updateState(asPath);

    getPageService(asPath).then((data) => {
      this.componentState.page = data;
    });
    
    return {componentState: this.componentState};
  }

  render() {
    // const {page} = this.componentState;
    // console.log(this.componentState.isLoading ? 'aaa' : 'BBB');
    // const ContentComponent = this.componentState.isLoading ? 'aaa' : SectionList;
    // const ContentComponent = null;
    // const ContentComponent = page.sections ? SectionList : Content;
    // {this.componentState.isLoading ? 'Loading Page...' : <ContentComponent page={page} />}

    return (
      <div>
        <Navigation position="header" />
        {this.output}
      </div>
    );
  }
}
