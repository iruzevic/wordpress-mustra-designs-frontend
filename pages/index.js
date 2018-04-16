import React, {Component} from 'react';
import Head from 'next/head';
import {getPageService} from '../services/page';

import Navigation from '../components/Navigation';
import Content from '../components/Content';
import SectionList from '../components/SectionList';

// import store from '../store';

const pageTypes = {
  blog: 'post',
  projects: 'projects',
};

class IndexPage extends React.Component {

  state = {
    loading: false,
    page: '',
    template: '',
  }

  componentWillMount() {
    this.setState({loading: true});
    const url = this.props.url.asPath.split('/').slice(1);
    const urlFirstSlug = url[0];
    let slug = url[url.length - 1];

    let type = 'page';
    if (pageTypes.hasOwnProperty(urlFirstSlug)) {
      type = pageTypes[urlFirstSlug];
    }

    if (url.length <= 1) {
      type = 'page';
    }

    if (slug === '') {
      slug = 'welcome';
    }

    getPageService(slug, type).then((data) => {

      console.log(data);
      this.setState({
        page: data,
        loading: false,
      });
    });
  }

  static async getInitialProps({query}) {
    console.log('from server side', query.type, query.slug);
    // this.componentState = updateState(asPath);
    // await getPage(this.componentState);
    // return {componentState: this.componentState};

    return {
      type: query.type,
    };
  }

  render() {

    const page = this.state.page;
    const ContentComponent = page.sections ? SectionList : Content;

    const {
      type,
    } = this.props;

    console.log('from client', type);

    return (
      <div>
        <Navigation position="header" />
        {this.state.loading ? 'Loading Page...' : <ContentComponent page={page} />}
      </div>
    );
  }
}


export default IndexPage;
