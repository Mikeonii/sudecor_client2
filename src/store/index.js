import Vue from 'vue'
import Vuex from 'vuex'
import client from './client'
import holidays from './holidays'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    client,
    holidays
  }
})
