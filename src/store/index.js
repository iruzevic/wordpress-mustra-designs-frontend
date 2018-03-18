import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import page from './page';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    page,
  }
})
