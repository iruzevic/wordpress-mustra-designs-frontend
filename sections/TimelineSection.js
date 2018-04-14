import React, {Component} from 'react';
import {css} from 'emotion';

const cssTimeline = css`
  
`;

export default class TimelineSection extends React.Component {
  render() {
    const {section} = this.props;
    return (
      section.items.map((item, index) => {
        return <div className={cssTimeline} key={index}>
          <div className="timeline__item">
            {item.image ? 
              <img src={item.image} className="timeline__img" />
            : ''}
            {item.date ? 
              <div className="timeline__date">{item.date}</div>
            : ''}
            {item.content ? 
              <div className="timeline__content content-style content-media-style">{item.content}</div>
            : ''}
          </div>
        </div>
      })
    )
  }
}
