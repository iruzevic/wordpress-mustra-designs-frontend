import React from 'react';
import {css} from 'emotion';

import {colors} from './../styles/utils/colors';
import {fontSizes} from './../styles/utils/shared-variables';

const localColors = {
  date: colors.scarlet,
  divider: colors.chalice,
  content: colors.chalice,
};

const cssTimelineDividerPartial = css` 
  width: 2px;
  height: 60px;
  background-color: ${localColors.divider};
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

const cssTimelineItem = css`
  max-width: 465px;
  margin: 0 auto 20px;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }

  position: relative;
  padding-top: 110px;

  &::before {
    ${cssTimelineDividerPartial}
  }

  &::after {
    ${cssTimelineDividerPartial}
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 78px;
  }
`;

const cssTimelineTitle = css`
  font-weight: bold;
  font-size: ${fontSizes.big};
`;

const cssTimelineMeta = css`
  margin-top: 10px;
  color: ${localColors.date};
`;

const cssTimelineContent = css`
  position: relative;
  color: ${localColors.content};
  padding-top: 15px;
`;

export class TimelineSection extends React.Component {
  render() {
    const {section} = this.props;
    return (

      section.items.map((item, index) =>
        <div key={index} className={`${cssTimelineItem} timeline__item`}>
          {item.image
            ? <img src={item.image.sizes.full_width} className="timeline__img" />
            : ''}
          {item.title
            ? <div className={`${cssTimelineTitle} timeline__title`}>{item.title}</div>
            : ''}
          {item.meta
            ? <div className={`${cssTimelineMeta} timeline__meta`}>{item.meta}</div>
            : ''}
          {item.content
            ? <div className={`${cssTimelineContent} timeline__content content-style content-media-style`}>{item.content}</div>
            : ''}
        </div>
      )
    );
  }
}
