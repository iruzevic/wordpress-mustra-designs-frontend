import {camelCase, upperFirst, toLower} from 'lodash';

import {initStore} from '../store';
import {isProduction, isServer} from '../utils/env';

export function normalizeSectionName(rawName) {
  return upperFirst(camelCase(rawName));
}

export function normalizeSectionClassName(rawName) {
  return toLower(rawName.replace(/_/g, '-'));
}

export function updateState(asPath, initialState) {
  const state = initStore(isServer, initialState);
  
  state.currentUrl = asPath;

  if (!isServer && !isProduction && !window.debug) {
    window.debug = {
      state,
    };

    // #if DEV
    window.debug.mobx = require('mobx');

    // #endif
  }

  return state;
}

