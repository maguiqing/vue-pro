import * as actions from './action'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
