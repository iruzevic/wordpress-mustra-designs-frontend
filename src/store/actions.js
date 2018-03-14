import * as types from './mutation-types';
import state from './state';
import FETCH_STATUS from '@/enums/fetchStatus';

// Get services
import {getThemeOptionsService} from '@/services/theme-options';
import {getPageService} from '@/services/page';
import {getMenuService} from '@/services/menu';

const actions = {

  // PAGE.
  async fetchPage({commit}, { slug, type }) {
    if(!state.pages.hasOwnProperty(slug)) {

      let result;
      try {
        result = await getPageService(slug, type);
      } catch (e) {
        commit(types.PAGE_FETCH_FAILURE);
      }

      if (result) {
        commit(types.PAGE_FETCH_SUCCESS,);
        commit(types.FETCH_PAGE, result);
      }
    }
  },

  // MENU and MENU ITEMS.
  async fetchMenu({ commit }) {
    if(state.menuFetchStatus !== FETCH_STATUS.SUCCESSFUL) {
      commit(types.MENU_FETCH_REQUEST);

      let result;
      try {
        result = await getMenuService();
      } catch (e) {
        commit(types.MENU_FETCH_FAILURE);
      }
      
      if (result) {
        commit(types.MENU_FETCH_SUCCESS,);
        commit(types.FETCH_MENU, result);
        commit(types.FETCH_MENU_ITEMS, result);
      }
    }
  },
}

export default actions;
