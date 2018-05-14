import React from 'react';
import {css} from 'emotion';

import {colors, baseColors} from './../styles/utils/colors';

const localColors = {
  bg: colors.mercury,
};

const cssDivider = css`
  width: 100%;
  height: 1px;
  margin: 80px auto;
  background-color: ${localColors.bg};
`;

export class DividerSection extends React.Component {
  render() {
    return (
      <div className={`${cssDivider}`}></div>
    );
  }
}
