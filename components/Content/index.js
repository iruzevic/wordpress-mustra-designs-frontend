import React from 'react';
import PropTypes from 'prop-types';

export class Content extends React.Component {
  render() {
    const {page} = this.props;

    return (
      <div>
        <h1>{page.title ? page.title : ''}</h1>
        {page.content ? page.content : ''}
      </div>
    );
  }
}

Content.propTypes = {
  page: PropTypes.object,
};
