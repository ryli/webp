import { INCREMENT, DECREMNET } from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.count++
    state.history.push(`increment -> ${state.count}`)
  },

  [DECREMNET] (state) {
    state.count--
    state.history.push(`decrement -> ${state.count}`)
  }
}
