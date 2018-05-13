import fetch from 'isomorphic-fetch';

import {pageTypes} from '../utils/pages';
import {apiEndpoint} from '../utils/env';

export async function getPageService(state) {
  if (!state.page) {

    console.log(state.themeOptions.home_page_url);
    const asPath = state.currentUrl;
    const url = asPath.split('/').slice(1);
    const urlFirstSlug = url[0];
    let slug = url[url.length - 1];
  
    // Default is page.
    let type = 'page';
  
    // If something else check in pageTypes object.
    if (pageTypes.hasOwnProperty(urlFirstSlug) && url.length > 1) {
      type = pageTypes[urlFirstSlug];
    }
  
    // For home page.
    if (slug === '') {
      slug = state.themeOptions.home_page_url;
    }
    const res = await fetch(`${apiEndpoint}page/rest-routes/page.php?slug=${slug}&type=${type}`);
    const data = await res.json();

    state.page = data;
  }

  return state.page;

}
