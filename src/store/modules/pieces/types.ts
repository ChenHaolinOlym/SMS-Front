import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'

import { PieceState } from './state'
import { PieceMutation } from './mutations'
import { PieceGetter } from './getters'
import { PieceAction } from './actions'

export type PieceStoreModule<S=PieceState> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof PieceMutation,
    P extends Parameters<PieceMutation[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<PieceMutation[K]>
} & {
  getters: {
    [K in keyof PieceGetter]: ReturnType<PieceGetter[K]>
  }
} & {
  dispatch<K extends keyof PieceAction>(
    key: K,
    payload?: Parameters<PieceAction[K]>[1],
    options?: DispatchOptions
  ): ReturnType<PieceAction[K]>
}