import fetch from 'isomorphic-fetch';

import {apiEndpoint} from './../utils/env';

export async function getMenuService(state) {
  // if (!state.menu) {
    
    const res = await fetch(`${apiEndpoint}menu/rest-routes/menu.php`);
    const data = await res.json();

    state.menu = data;
  // }

  return state.menu;
}
