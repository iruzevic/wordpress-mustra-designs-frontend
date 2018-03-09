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
  themeOptions: [],
  page: [],
  menu: [],
  menuItems: [],
  menuFetchStatus: null,
};

const mutations = {
  FETCH_THEME_OPTIONS(state, themeOptions) {
    state.themeOptions = themeOptions;
  },

  FETCH_PAGE(state, page) {
    state.page = page;
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
  async fetchThemeOptions({ commit }) {
    commit('FETCH_THEME_OPTIONS', await getThemeOptionsService());
  },

  async fetchPage({commit}, { slug, type }) {
    commit('FETCH_PAGE', await getPageService(slug, type));
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
      
      if (result) { // user was successfully created
        commit(types.MENU_FETCH_SUCCESS,);
        commit('FETCH_MENU', result);
      }
    }
  },

  // async fetchMenuItems({ commit }) {
  //   commit(types.MENU_FETCH_REQUEST);
  //   let result;
  //   try {
  //     result = await getMenuService();
  //   } catch (e) {
  //     commit(types.MENU_FETCH_FAILURE);
  //   }
    
  //   if (result) { // user was successfully created
  //     commit(types.MENU_FETCH_SUCCESS,);
  //     commit('FETCH_MENU_ITEMS', result);
  //   }
  // },
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
