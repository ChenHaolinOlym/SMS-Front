import { Module } from 'vuex'
import { state, PieceState } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { InfoState } from '../info/state'

export const pieces:Module<PieceState, InfoState> = {
  state,
  mutations,
  actions,
  getters
}
