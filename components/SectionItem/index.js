import React from 'react';
import PropTypes from 'prop-types';

import {normalizeSectionName} from '../../utils/helpers';
import * as sections from '../../sections';
import SectionIntro from '../SectionIntro';

export default class SectionItem extends React.Component {
  render() {
    const {section} = this.props;
    const componentName = normalizeSectionName(section.acf_fc_layout);
    const componentClass = section.acf_fc_layout.replace(/_/g, '-');
    const Component = sections[componentName];

    return Component ? 
      <section className={"section " + componentClass} data-spacing-top="">
        <div className="section__container">
          {section.section_intro ? 
            <SectionIntro intro={section.section_intro} />
            : ''}
          <Component section={section} />
        </div>
      </section>
      : <div>Missing section: {componentName} <small>{JSON.stringify(section)}</small></div>;
    }
}

SectionItem.propTypes = {
  section: PropTypes.object,
};
