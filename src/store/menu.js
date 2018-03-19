import * as aTypes from './actions.type';
import * as mTypes from './mutations.type';
import FETCH_STATUS from '@/enums/fetchStatus';

// Get services
import {getMenuService} from '@/services/menu';

const state = {
  menu: {},
  menuItems: {},
  isLoading: true,
  reqStarted: false,
};

const actions = {
  async [aTypes.FETCH_MENU] ({commit}) {

    // Load only once.
    if(state.reqStarted === false) {
      commit(mTypes.SET_MENU_START);
      return;
    }

    let result;
    try {
      result = await getMenuService();
    } catch (error) {
      throw new Error(error)
    }
    
    if (result) {
      commit(mTypes.SET_MENU, result);
    }
  },
}

const mutations = {
  [mTypes.SET_MENU_START] (state) {
    state.isLoading = true;
    state.reqStarted = true;
  },

  [mTypes.SET_MENU] (state, menu) {
    state.menu = menu;
    state.isLoading = false;

    const menues = [];
    state.menu.forEach(element => {
      menues.push(element.items);
    });

    state.menuItems = [].concat.apply([], menues)
  },
};

const getters = {
  menus(state) {
    return state.menu;
  },
  getMenuItems(state) {
    return state.menuItems;
  },
  isLoading (state) {
    return state.isLoading
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
