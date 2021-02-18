import { ActionContext, ActionTree } from 'vuex'
import { InfoState } from './state'
import { InfoMutation, InfoMutationTypes } from './mutations'
import { get } from '../../../http'
import { AxiosResponse } from 'axios'

export enum InfoActionTypes {
  ADD_GROUPS = "ADD_GROUPS",
  ADD_PARTS = "ADD_PARTS",
  ADD_INSTRUMENTS = "ADD_INSTRUMENTS"
}

type AugmentedActionContext = {
  commit<K extends keyof InfoMutation> (
    key: K,
    payload: Parameters<InfoMutation[K]>[1]
  ): ReturnType<InfoMutation[K]>
} & Omit<ActionContext<InfoState, InfoState>, "commit">

export interface InfoAction {
  [InfoActionTypes.ADD_GROUPS] (
    {commit}: AugmentedActionContext,
  ): void,
  [InfoActionTypes.ADD_PARTS] (
    {commit}: AugmentedActionContext
  ): void,
  [InfoActionTypes.ADD_INSTRUMENTS] (
    {commit}: AugmentedActionContext
  ): void
}

export const actions:ActionTree<InfoState, InfoState> & InfoAction = {
  async [InfoActionTypes.ADD_GROUPS] ({commit}) {
    await get("groups/").then((res:AxiosResponse) => {
      commit(InfoMutationTypes.ADD_GROUPS, res.data)
    })
  },
  async [InfoActionTypes.ADD_PARTS] ({commit}) {
    await get("parts/").then((res:AxiosResponse) => {
      commit(InfoMutationTypes.ADD_PARTS, res.data)
    })
  },
  async [InfoActionTypes.ADD_INSTRUMENTS] ({commit}) {
    await get("instruments/").then((res:AxiosResponse) => {
      commit(InfoMutationTypes.ADD_INSTRUMENTS, res.data)
    })
  }
}