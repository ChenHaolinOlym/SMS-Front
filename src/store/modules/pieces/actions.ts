import { ActionContext, ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'
import { get, post, put, _delete } from '../../../http'
import { Piece, PieceState } from './state'
import { PieceMutation, PieceMutationTypes } from './mutations'
import { InfoState } from '../info/state'

export enum PieceActionTypes {
  INIT_PIECE = "INIT_PIECE",
  ADD_PIECE = "ADD_PIECE",
  DELETE_PIECE = "DELETE_PIECE",
  UPDATE_PIECE = "UPDATE_PIECE"
}

type AugmentedActionContext = {
  commit<K extends keyof PieceMutation> (
    key: K,
    payload: Parameters<PieceMutation[K]>[1]
  ): ReturnType<PieceMutation[K]>
// } & Omit<ActionContext<PieceState, PieceState>, "commit">
} & Omit<ActionContext<PieceState, InfoState>, "commit">

export interface PieceAction {
  [PieceActionTypes.INIT_PIECE] (
    {commit}: AugmentedActionContext,
  ): void,
  [PieceActionTypes.ADD_PIECE] (
    {commit}: AugmentedActionContext,
    payload: Piece[]
  ): void,
  [PieceActionTypes.DELETE_PIECE] (
    {commit}: AugmentedActionContext,
    payload: Piece
  ): void,
  [PieceActionTypes.UPDATE_PIECE] (
    {commit}: AugmentedActionContext,
    payload: Piece
  ): void
}

// export const actions:ActionTree<PieceState, PieceState> & PieceAction = {
export const actions:ActionTree<PieceState, InfoState> & PieceAction = {
  async [PieceActionTypes.INIT_PIECE] ({commit}) {
    await get("pieces/").then((res:AxiosResponse) => {
      commit(PieceMutationTypes.INIT_PIECE, res.data)
    })
  },
  async [PieceActionTypes.ADD_PIECE] ({commit}, payload:Piece[]) {
    await post("pieces", payload).then((res:AxiosResponse) => {
      if (res.status === 201) {
        commit(PieceMutationTypes.ADD_PIECE, res.data)
      } else {
        console.log("Post failed")
      }
    })
  },
  async [PieceActionTypes.DELETE_PIECE] ({commit}, payload:Piece) {
    const id = payload.id
    await _delete("pieces", {id: id}).then((res:AxiosResponse) => {
      if (res.status === 204) {
        commit(PieceMutationTypes.DELETE_PIECE, id)
      } else {
        console.log("Delete failed")
      }
    })
  },
  async [PieceActionTypes.UPDATE_PIECE] ({commit}, payload:Piece) {
    await put("pieces", payload).then((res:AxiosResponse) => {
      if (res.status === 204) {
        commit(PieceMutationTypes.UPDATE_PIECE, payload)
      } else {
        console.log("Put failed")
      }
    })
  }
}