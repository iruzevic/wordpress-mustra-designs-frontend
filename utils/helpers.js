import {camelCase, upperFirst} from 'lodash';

export function normalizeSectionName(rawName) {
  return upperFirst(camelCase(rawName));
}
