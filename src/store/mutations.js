import * as types from './mutation-types';
import state from './state';
import FETCH_STATUS from '@/enums/fetchStatus';

const mutations = {
  // FETCH_THEME_OPTIONS(state, themeOptions) {
  //   state.themeOptions = themeOptions;
  // },

  FETCH_PAGE(state, page) {
    state.pages[page.post_name] = page;
  },

  [types.PAGE_FETCH_REQUEST](state) {
    state.pageFetchStatus = FETCH_STATUS.PENDING;
  },

  [types.PAGE_FETCH_SUCCESS](state) {
    state.pageFetchStatus = FETCH_STATUS.SUCCESSFUL;
  },

  [types.PAGE_FETCH_FAILURE](state) {
    state.pageFetchStatus = FETCH_STATUS.FAILED;
  },

  FETCH_MENU(state, menu) {
    state.menu = menu;
  },

  FETCH_MENU_ITEMS(state, menu_items) {
    const menues = [];
    state.menu.forEach(element => {
      menues.push(element.items);
    });

    state.menuItems = [].concat.apply([], menues)
  },

  [types.MENU_FETCH_REQUEST](state) {
    state.menuFetchStatus = FETCH_STATUS.PENDING;
  },

  [types.MENU_FETCH_SUCCESS](state) {
    state.menuFetchStatus = FETCH_STATUS.SUCCESSFUL;
  },

  [types.MENU_FETCH_FAILURE](state) {
    state.menuFetchStatus = FETCH_STATUS.FAILED;
  },
};

export default mutations;
