import React, { Component } from 'react';

class Content extends React.Component {
  render() {
    const page = this.props.page;

    return (
      <div>
        <h1>{page.post_title}</h1>
        {page.post_content}
      </div>
    );
  }
}

export default Content;
