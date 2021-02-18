import { GetterTree } from 'vuex'
import { InfoState } from '../info/state'
import { Piece } from './state'
import { PieceState } from './state'

export interface PieceGetter {
  getPieceById(state:PieceState): (id:number) => Piece | undefined
}

export const getters:GetterTree<PieceState, InfoState> & PieceGetter = {
  getPieceById: (state:PieceState) => (id:number) => {
    return state.pieces.find(piece => piece.id === id) 
  }
}