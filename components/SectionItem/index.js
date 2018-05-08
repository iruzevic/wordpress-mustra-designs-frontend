import React from 'react';
import PropTypes from 'prop-types';

import {normalizeSectionName} from '../../utils/helpers';

import * as sections from '../../sections';
import {SectionIntro} from '../SectionIntro';

export class SectionItem extends React.Component {
  render() {
    const {section} = this.props;
    const Component = sections[section.section_name];

    return Component
      ?
      <section className={`section ${section.section_class_name} `} data-spacing-top="">
        <div className="section__container">
          {section.section_intro
            ?
            <SectionIntro intro={section.section_intro} />
            : ''}
          <Component section={section} />
        </div>
      </section>
      : <div>Missing section: {section.section_name} <small>{JSON.stringify(section)}</small></div>;
  }
}

SectionItem.propTypes = {
  section: PropTypes.object,
};
