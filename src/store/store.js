import Vue from 'vue'
import Vuex from 'vuex';
import { getters } from './getters.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: "",
    doctor:{},
    patients: [],
    testResults: [],
    notes: []
  },
  mutations,
  getters,
  actions
});
