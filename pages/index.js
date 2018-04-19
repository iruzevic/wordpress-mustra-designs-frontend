import React, {Component} from 'react';
import Head from 'next/head';
import {getPageService} from '../services/page';

import Navigation from '../components/Navigation';
import Content from '../components/Content';
import SectionList from '../components/SectionList';

import {updateState} from '../utils/helpers';
import {isServer} from '../utils/env';

class IndexPage extends React.Component {

  componentWillMount() {
    const {componentState} = this.props;

    if (!isServer) {
      const {url} = this.props;
      this.componentState = updateState(url ? url.asPath : '/', componentState);
    } else {
      this.componentState = this.props.componentState;
    }
  }

  static getInitialProps({asPath}) {
    this.componentState = updateState(asPath);
    getPageService(asPath).then((data) => {
      this.componentState.page = data;
    });
    return {componentState: this.componentState};
  }

  // static async getInitialProps({query}) {
  //   console.log('from server side', query);
  //   this.componentState = updateState(asPath);

  //   // this.componentState = updateState(asPath);
  //   // await getPage(this.componentState);
  //   // return {componentState: this.componentState};

  //   return {
  //     type: query.type,
  //   };
  // }

  render() {
    const {page} = this.componentState;
    console.log(page);
    const ContentComponent = page.sections ? SectionList : Content;

    return (
      <div>
        <Navigation position="header" />
        {this.componentState.isLoading ? 'Loading Page...' : <ContentComponent page={page} />}
      </div>
    );
  }
}


export default IndexPage;
