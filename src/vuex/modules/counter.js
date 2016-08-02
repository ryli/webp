// we do not put actions into modules


const state = {
  all: []
}

const mutations = {
  [SOME_MUTATION] (state, all) {
    state.all = all
  }
}

export default {
  state,
  mutations
}
