import * as types from './mutation-types';
import FETCH_STATUS from '@/enums/fetchStatus';

// Get services
import {getPageService} from '@/services/page';

const state = {
  pages: {},
  pageFetchStatus: null,
};

const mutations = {

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
};

const actions = {
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
}

const getters = {
//   getCurrentPage(state) => (slug) => {
//     return state.pages[slug];
//   },
}

export default {
  state,
  actions,
  mutations,
  getters
}
