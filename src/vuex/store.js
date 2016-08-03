import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  user_name: 'ELEVEN',
  count: 0,
  history: []
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
