import { Module, ModuleTree } from 'vuex'
import { state, InfoState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { pieces } from '../pieces'

const modules:ModuleTree<InfoState> = {
  pieces
}

export const info:Module<InfoState, InfoState> = {
  state,
  mutations,
  actions,
  getters,
  modules
}
