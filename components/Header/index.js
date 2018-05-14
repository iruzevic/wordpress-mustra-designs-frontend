import React from 'react';
import {css} from 'emotion';

import {Navigation} from '../../components/Navigation';

import {placeholders} from './../../styles/utils/placeholders';
import {colors} from './../../styles/utils/colors';

const localColors = {
  bg: colors.dark,
  text: colors.white,
};

const cssHeader = css`
  display: block;
  height: 100px;
  background-color: ${localColors.bg};
  color: ${localColors.text};
`;

const cssContainer = css`
  ${placeholders.siteContainerLarge};
  height: 100%;
`;

const cssWrap = css`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const cssItem = css`
`;

export class Header extends React.Component {
  render() {
    return (
      <div className={`header ${cssHeader}`}>
        <div className={`header__container ${cssContainer}`}>
          <div className={`header__wrap ${cssWrap}`}>
            <div className={`header__item ${cssItem}`}>
              logo
            </div>

            <div className={`header__item ${cssItem}`}>
              <Navigation position="header" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
