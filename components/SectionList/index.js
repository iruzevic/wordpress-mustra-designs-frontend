import React from 'react';
import PropTypes from 'prop-types';

import {SectionItem} from '../SectionItem';

export class SectionList extends React.Component {
  render() {
    const {page} = this.props;
    const sections = page.sections.map((section, index) => <SectionItem key={`${page.id}_${index}`} section={section} />);
    return (
      <div>
        <h1>{page.title ? page.title : ''}</h1>
        {sections ? sections : ''}
      </div>
    );
  }
}

SectionList.propTypes = {
  page: PropTypes.object,
};
