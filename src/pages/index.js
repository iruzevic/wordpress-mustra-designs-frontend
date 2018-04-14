import React, { Component } from 'react';
import {getPageService} from '../services/page';

import Content from '../components/Content';
import SectionList from '../components/SectionList';

import store from '../store';

class IndexPage extends React.Component {
  state = {
    loading: false,
    page: '',
    template: '',
  }

  componentWillMount() {
    this.setState({loading: true});
    const url = this.props.match.params.slug;
    getPageService(url, 'page').then((data) => {
      this.setState({
        page: data,
        loading: false,
      });
    });
  }

  render() {
    const page = this.state.page;
    const ContentComponent = page.sections ? SectionList : Content;

    return (
      <div>
      {this.state.loading ? 'Loading Page...' : <ContentComponent page={page} />}
      </div>
    );
  }
}

export default IndexPage;
