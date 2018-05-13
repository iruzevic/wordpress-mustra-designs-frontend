import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import {colors, baseColors} from './../../styles/utils/colors';
import {sharedVariables, fontSizes} from './../../styles/utils/shared-variables';
import {resets} from './../../styles/utils/resets';

const cssHeading = css`
  text-align: center;
  margin-bottom: 55px;
  color: ${colors.dark};
`;

const cssTitle = css`
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${fontSizes.giant};
    ${resets.heading};

`;

const cssSubTitle = css`
    font-weight: 600;
    font-size: ${fontSizes.large};
    color: ${colors.chalice};
`;

export class SectionIntro extends React.Component {
  render() {
    const {intro} = this.props;
    const Heading = intro.maintitle.title_seo_tag;

    return (
      <header className={`section-heading ${cssHeading}`}>
        <div className="section-heading__container">
           
          {intro.maintitle.title
            ? <Heading className={`${cssTitle} section-heading__title  ${intro.maintitle.title_size ? intro.maintitle.title_size : ''}`}>
              {intro.maintitle.title}
            </Heading>
            : ''}
            
          {intro.subtitle.title
            ? <div className={`${cssSubTitle} section-heading__subtitle content-style`}>
              {intro.subtitle.title}
            </div>
            : ''}
        </div>
      </header>
    );
  }
}

// .section-heading {
//   text-align: center;
//   margin-bottom: 55px;
//   &__title {
//     @include text-size(huge);
//     @extend %heading-reset;
//     text-transform: uppercase;
//     font-weight: bold;
//   }
//   &__subtitle {
//     @include text-size(largest);
//     font-weight: 600;
//     color: $section-heading-subititle-color;
//   }
// }

SectionIntro.propTypes = {
  intro: PropTypes.object,
};
