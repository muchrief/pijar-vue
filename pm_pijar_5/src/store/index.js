import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import todoStore from './todo'

Vue.use(Vuex)

const persistState = createPersistedState({
  paths: ["todoStore"]
})

export default new Vuex.Store({
  plugins: [persistState],
  modules: {
    todoStore: {
      namespaced: true,
      ...todoStore,
    }
  }
})
