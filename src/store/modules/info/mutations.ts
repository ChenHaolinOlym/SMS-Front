import { MutationTree } from 'vuex'
import { Group, Part, Instrument } from './state'
import { InfoState } from './state'

export enum InfoMutationTypes {
  ADD_GROUPS = "ADD_GROUPS",
  ADD_PARTS = "ADD_PARTS",
  ADD_INSTRUMENTS = "ADD_INSTRUMENTS"
}

export type InfoMutation<S=InfoState> = {
  [InfoMutationTypes.ADD_GROUPS](state:S, payload:Group[]): void
  [InfoMutationTypes.ADD_PARTS](state:S, payload:Part[]): void
  [InfoMutationTypes.ADD_INSTRUMENTS](state:S, payload:Instrument[]): void
}

export const mutations: MutationTree<InfoState> & InfoMutation = {
  [InfoMutationTypes.ADD_GROUPS](state:InfoState, payload:Group[]) {
    state.groups = payload
  },
  [InfoMutationTypes.ADD_PARTS](state:InfoState, payload:Part[]) {
    state.parts = payload
  },
  [InfoMutationTypes.ADD_INSTRUMENTS](state:InfoState, payload:Instrument[]) {
    state.instruments = payload
  }
}