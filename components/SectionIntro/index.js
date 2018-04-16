import React, {Component} from 'react';

export default class SectionIntro extends React.Component {
  render() {
    const {intro} = this.props;
    const Heading = intro.maintitle.title_seo_tag;

    return (
      <header className="section-heading">
        <div className="section-heading__container">
           
        {intro.maintitle.title ? 
          <Heading className={"section-heading__title " + intro.maintitle.title_size}>
            {intro.maintitle.title}
          </Heading>
        : ''}
          
        {intro.subtitle.title ? 
          <div className="section-heading__subtitle content-style">
            {intro.subtitle.title}
          </div>
        : ''}
        </div>
      </header>
    )
  }
}
