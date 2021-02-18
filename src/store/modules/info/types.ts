import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

import { InfoState } from './state'
import { InfoMutation } from './mutations'
import { InfoGetter } from './getters'
import { InfoAction } from './actions'

export type InfoStoreModule<S=InfoState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof InfoMutation,
    P extends Parameters<InfoMutation[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<InfoMutation[K]>
} & {
  getters: {
    [K in keyof InfoGetter]: ReturnType<InfoGetter[K]>
  }
} & {
  dispatch<K extends keyof InfoAction>(
    key: K,
    payload?: Parameters<InfoAction[K]>[1],
    options?: DispatchOptions
  ): ReturnType<InfoAction[K]>
}