import Vue from 'vue';
import axios from 'axios';
import { FETCH_LICENSES } from './type/actions';
import { SET_LICENSES, RESET_STATE } from './type/mutations';

const initialState = {
  licenses: {
    name: 'test',
    type: '',
    description: '',
    list: []
  }
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_LICENSES](context, payload) {
    console.log('called FETCH_LICENSES', payload);

    const { data } = await axios(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const newLicenses = {
      name: payload.text,
      type: '',
      description: '',
      list: []
    };

    context.commit(SET_LICENSES, newLicenses);
    return data;
  }
};

export const mutations = {
  [SET_LICENSES](state, licenses) {
    state.licenses = licenses;
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  licenses(state) {
    return state.licenses;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
