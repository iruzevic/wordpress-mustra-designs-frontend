import React from 'react';
import {css} from 'emotion';

import {colors, baseColors} from './../styles/utils/colors';

const localColors = {
  date: colors.scarlet,
  divider: colors.chalice,
  content: colors.chalice,
};

const cssTimelineDividerPartial = css` 
  width: 2px;
  height: 27px;
  background-color: ${localColors.divider};
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

const cssTimelineItem = css`
  margin-bottom: 20px;
  max-width: 465px;
  margin: 0 auto;

  &:last-child {
    margin-bottom: 0;
  }
`;

const cssTimelineDate = css`
  text-align: center;
  color: ${localColors.date};
  position: relative;
  padding-top: 75px;

  &::before {
    ${cssTimelineDividerPartial}
  }

  &::after {
    ${cssTimelineDividerPartial}
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 45px;
  }
`;

const cssTimelineContent = css`
  padding-top: 60px;
  position: relative;
  color: ${localColors.content};

  &::before {
    ${cssTimelineDividerPartial}
    top: 15px;
  }
`;

export class TimelineSection extends React.Component {
  render() {
    const {section} = this.props;
    return (
      section.items.map((item, index) =>
        <div key={index} className={`${cssTimelineItem} timeline__item`}>
          {item.image
            ? <img src={item.image} className="timeline__img" />
            : ''}
          {item.date
            ? <div className={`${cssTimelineDate} timeline__date`}>{item.date}</div>
            : ''}
          {item.content
            ? <div className={`${cssTimelineContent} timeline__date content-style content-media-style`}>{item.content}</div>
            : ''}
        </div>
      )
    );
  }
}
