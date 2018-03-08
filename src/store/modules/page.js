import {getPageService} from './../../services/page';
import FETCH_STATUS from '../../enums/fetchStatus';
import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  ownedIds: [],
  fetchStatus: null,
  detailedPokemon: [],
  detailFetchStatus: null,
};

// actions
const actions = {
  getAllPokemon({ commit }) {
    commit(types.FETCH_REQUEST);
    getPageService()
      .then((items) => {
        commit(types.FETCH_SUCCESS);
        commit(types.RECEIVE_POKEMON, { items });
      })
      .catch(() => {
        commit(types.FETCH_FAILURE);
      });
  },

  getActivePokemon({ dispatch, commit }, { id }) {
    if (state.detailedPokemon[id]) {
      return state.detailedPokemon[id];
    }

    return dispatch('getPokemonDetails', { id });
  },

  getPokemonDetails({ commit }, { id }) {
    commit(types.FETCH_DETAIL_REQUEST);
    return pokeApi.getDetails(id)
      .then((item) => {
        const modifiedItem = item;

        modifiedItem.weight = `${item.weight / 10}kg`;
        modifiedItem.height = `${item.height / 10}m`;
        modifiedItem.id = parseInt(item.id, 10);
        state.detailedPokemon[id] = modifiedItem; // caching details

        commit(types.FETCH_DETAIL_SUCCESS);
        return modifiedItem;
      }).catch(() => {
        commit(types.FETCH_DETAIL_FAILURE);
      });
  },

  addToOwnedPokemon({ commit }, { id }) {
    commit(types.ADD_TO_OWNED, { id });
  },

  removeFromOwnedPokemon({ commit }, { id }) {
    commit(types.REMOVE_FROM_OWNED, { id });
  },
};

// mutations
// const mutations = {
//   [types.RECEIVE_POKEMON](state, { items }) {
//     state.all = items.results.map((result) => {
//       const modifiedResult = result;
//       const urlParts = result.url.split('/');
//       modifiedResult.id = parseInt(urlParts[urlParts.length - 2], 10); // url always contains a trailing slash, hence the -2


//       return modifiedResult;
//     });
//   },

//   [types.FETCH_REQUEST](state) {
//     state.fetchStatus = FETCH_STATUS.PENDING;
//   },

//   [types.FETCH_SUCCESS](state) {
//     state.fetchStatus = FETCH_STATUS.SUCCESSFUL;
//   },

//   [types.FETCH_FAILURE](state) {
//     state.fetchStatus = FETCH_STATUS.FAILED;
//   },


//   [types.FETCH_DETAIL_REQUEST](state) {
//     state.detailFetchStatus = FETCH_STATUS.PENDING;
//   },

//   [types.FETCH_DETAIL_SUCCESS](state) {
//     state.detailFetchStatus = FETCH_STATUS.SUCCESSFUL;
//   },

//   [types.FETCH_DETAIL_FAILURE](state) {
//     state.detailFetchStatus = FETCH_STATUS.FAILED;
//   },

//   [types.ADD_TO_OWNED](state, { id }) {
//     state.ownedIds.push(id);
//   },

//   [types.REMOVE_FROM_OWNED](state, { id }) {
//     state.ownedIds.splice(state.ownedIds.indexOf(id), 1);
//   },
// };

export default {
  state,
  actions,
  // mutations,
};
