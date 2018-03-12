import Vue from 'vue';
import Vuex from 'vuex';

import {getThemeOptionsService} from '@/services/theme-options';
import {getPageService} from '@/services/page';
import {getMenuService} from '@/services/menu';

import * as getters from './getters';
import FETCH_STATUS from '@/enums/fetchStatus';
import * as types from './mutation-types';

Vue.use(Vuex);

const state = {
  // themeOptions: [],
  pages: {},
  menu: [],
  menuItems: [],
  menuFetchStatus: null,
  pageFetchStatus: null,
};

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

const actions = {
  // async fetchThemeOptions({ commit }) {
  //   commit('FETCH_THEME_OPTIONS', await getThemeOptionsService());
  // },

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

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
