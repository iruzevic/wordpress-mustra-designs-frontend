import React from 'react';
import PropTypes from 'prop-types';

import SectionItem from '../SectionItem';

export default class SectionList extends React.Component {
  render() {
    const page = this.props.page;
    return page.sections.map((section, index) => <SectionItem key={`${page.ID}_${index}`} section={section} />);
  }
}

SectionList.propTypes = {
  page: PropTypes.shape({
    sections: PropTypes.array,
  }),
};
