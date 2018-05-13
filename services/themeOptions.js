import fetch from 'isomorphic-fetch';
import {apiEndpointMustra} from '../utils/env';

export async function getThemeOptionsService(state) {
  if (!state.themeOptions) {
    const res = await fetch(`${apiEndpointMustra}rest-routes/theme-options.php`);
    const data = await res.json();

    state.themeOptions = data;
  }

  return state.themeOptions;
}
