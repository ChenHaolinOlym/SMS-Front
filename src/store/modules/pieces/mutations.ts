import { MutationTree } from 'vuex'
import { Piece } from './state'
import { PieceState } from './state'

// TODO: Get some overload done

export enum PieceMutationTypes {
  INIT_PIECE = "INIT_PIECE",
  ADD_PIECE = "ADD_PIECE",
  DELETE_PIECE = "DELETE_PIECE",
  UPDATE_PIECE = "UPDATE_PIECE"
}

export type PieceMutation<S=PieceState> = {
  [PieceMutationTypes.INIT_PIECE](state:S, payload:Piece[]): void
  [PieceMutationTypes.ADD_PIECE](state:S, payload:Piece|Piece[]): void
  [PieceMutationTypes.DELETE_PIECE](state:S, payload:number): void
  [PieceMutationTypes.UPDATE_PIECE](state:S, payload:Piece): void
}

export const mutations: MutationTree<PieceState> & PieceMutation = {
  [PieceMutationTypes.INIT_PIECE](state:PieceState, payload:Piece[]) {
    state.pieces = payload
  },
  [PieceMutationTypes.ADD_PIECE](state:PieceState, payload:Piece|Piece[]) {
    state.pieces = state.pieces.concat(payload)
  },
  [PieceMutationTypes.DELETE_PIECE](state:PieceState, payload:number) {
    for (let i=0; i<state.pieces.length; i++) {
      if (state.pieces[i].id === payload) {
        state.pieces.splice(i, 1)
        break
      }
    }
  },
  [PieceMutationTypes.UPDATE_PIECE](state:PieceState, payload:Piece) {
    for (let i=0; i<state.pieces.length; i++) {
      if (state.pieces[i].id === payload.id) {
        state.pieces[i] = payload
        break
      }
    }
  }
}