import {injectGlobal} from 'emotion';
import emotionNormalize from 'emotion-normalize';

import {colors, baseColors} from './../styles/utils/colors';
import {sharedVariables, fontSizes} from './../styles/utils/shared-variables';

injectGlobal`
@font-face {
  font-family: 'CircularPro';
  font-weight: 300;
  font-style: normal;
  src: url('/static/fonts/lineto-circular-pro-book.eot');
  src: url('/static/fonts/lineto-circular-pro-book.woff2') format('woff2'),
       url('/static/fonts/lineto-circular-pro-book.woff') format('woff');
}

${emotionNormalize}

*, *::after, *::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

body {
  font-family: ${sharedVariables.baseFontFamily};
  background-color: ${baseColors.baseBackgroundColor};
  color: ${baseColors.baseTextColor};
  font-weight: normal;
  font-size: ${fontSizes.default};
}
`;
