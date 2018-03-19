import * as aTypes from './actions.type';
import * as mTypes from './mutations.type';
import FETCH_STATUS from '@/enums/fetchStatus';

// Get services
import {getPageService} from '@/services/page';

const state = {
  pages: {},
  isLoading: true,
  reqStarted: false,
  pagesCount: 0
};

const actions = {
  async [aTypes.FETCH_PAGE] ({commit}, {slug, type}) {
    
    console.log(state.pages.hasOwnProperty(slug));
    if(!state.pages.hasOwnProperty(slug)) {
      commit(mTypes.SET_PAGE_START);

      let result;
      try {
        result = await getPageService(slug, type);
      } catch (error) {
        throw new Error(error)
      }

      if (result) {
        commit(mTypes.SET_PAGE, result);
      }
    }
  }
//   async [aTypes.FETCH_MENU] ({commit}, { slug, type }) {
//     if(state.menuFetchStatus !== undefined) {
//       commit(aTypes.FETCH_MENU_START);

//       let result;
//       try {
//         result = await getMenuService();
//       } catch (e) {
//         commit(aTypes.FETCH_MENU_FAIL);
//       }
      
//       if (result) {
//         commit(aTypes.FETCH_MENU_SUCCESS);
//         commit(aTypes.FETCH_MENU, result);
//         commit(aTypes.FETCH_MENU_ITEMS);
//       }
//     }
//   },
//   // async fetchPage({commit}, { slug, type }) {
//   //   if(!state.pages.hasOwnProperty(slug)) {

//   //     let result;
//   //     try {
//   //       result = await getPageService(slug, type);
//   //     } catch (e) {
//   //       commit(types.PAGE_FETCH_FAILURE);
//   //     }

//   //     if (result) {
//   //       commit(types.PAGE_FETCH_SUCCESS,);
//   //       commit(types.FETCH_PAGE, result);
//   //     }
//   //   }
//   // },
}

const mutations = {
  [mTypes.SET_PAGE_START] (state) {
    state.isLoading = true;
    state.reqStarted = true;
  },

  [mTypes.SET_PAGE] (state, page) {
    state.pages[page.post_name] = page;
  },

//   [types.PAGE_FETCH_REQUEST](state) {
//     state.pageFetchStatus = FETCH_STATUS.PENDING;
//   },

//   [types.PAGE_FETCH_SUCCESS](state) {
//     state.pageFetchStatus = FETCH_STATUS.SUCCESSFUL;
//   },

//   [types.PAGE_FETCH_FAILURE](state) {
//     state.pageFetchStatus = FETCH_STATUS.FAILED;
//   },
};

const getters = {
  getCurrentPage(state) {
    return (slug) => state.pages[slug];
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
