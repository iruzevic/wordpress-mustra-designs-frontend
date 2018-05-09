import fetch from 'isomorphic-fetch';
import {apiEndpoint} from '../utils/env';

export async function getThemeOptionsService(state) {
  console.log(state);
  // if (!state.themeOptions) {
  //   const res = await fetch(`${apiEndpoint}page/rest-routes/theme-options.php`);
  //   const data = await res.json();

  //   state.themeOptions = data;
  // }

  // return state.themeOptions;
}
