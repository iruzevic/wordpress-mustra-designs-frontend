import React from 'react';
import PropTypes from 'prop-types';

import SectionItem from '../SectionItem';

export default class SectionList extends React.Component {
  render() {
    const page = this.props.page;
    console.log(page, 'page');
    const sections = page.sections.map((section, index) => <SectionItem key={`${page.ID}_${index}`} section={section} />);
    return (
      <div>
        <h1>{page.post_title}</h1>
        {sections}
      </div>
    );
  }
}

SectionList.propTypes = {
  page: PropTypes.shape({
    sections: PropTypes.object,
  }),
};
