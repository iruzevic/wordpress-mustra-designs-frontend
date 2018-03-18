import * as types from './mutation-types';
import FETCH_STATUS from '@/enums/fetchStatus';

// Get services
import {getMenuService} from '@/services/menu';

const state = {
  menu: [],
  menuItems: [],
  menuFetchStatus: null,
};

const mutations = {
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

const actions = {
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

const getters = {
  getMenu(state) {
    return state.menu;
  },

  getMenuItems(state) {
    return state.menuItems;
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
