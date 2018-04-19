import {camelCase, upperFirst} from 'lodash';

import {initStore} from '../store';
import {isProduction, isServer} from '../utils/env';

export function normalizeSectionName(rawName) {
  return upperFirst(camelCase(rawName));
}

export function updateState(asPath, initialState) {
  const state = initStore(isServer, initialState);
  
  state.url = asPath;

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

