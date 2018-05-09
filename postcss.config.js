/* global process __dirname */
const DEV = process.env.NODE_ENV !== 'production';

const path = require('path');

const themeName = 'surdna';
const fontsPathWeb = `/wp-content/themes/${themeName}/skin/assets/fonts`;
const fontsPath = path.join(__dirname, fontsPathWeb);

const autoPrefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');
const postcssFontMagician = require('postcss-font-magician');
const cssNano = require('cssnano');

const plugins = [
  autoPrefixer,
  // postcssFontMagician({
  //   custom: {
  //     surdna: {
  //       variants: {
  //         normal: {
  //           400: {
  //             url: {
  //               eot: `${fontsPathWeb}/surdna.eot`,
  //               svg: `${fontsPathWeb}/surdna.svg`,
  //               ttf: `${fontsPathWeb}/surdna.ttf`,
  //               woff: `${fontsPathWeb}/surdna.woff`,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
    
  //   hosted: [fontsPath],
  //   foundries: ['custom'],
  // }),
  cssMqpacker,
];

// Use only for production build
if (!DEV) {
  plugins.push(cssNano);
}

module.exports = {plugins};
