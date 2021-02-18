import { Instrument } from '../info/state'

export interface MyFile {
  id: number,
  instruments: Instrument[]
}

export interface Transpose {
  id: number,
  from_bar: number,
  to_bar: number,
  from_instrument_id: number,
  to_instrument_id: number
}

export interface Piece {
  id: number,
  name: string,
  author?: string,
  lyricist?: string,
  arranger?: string,
  opus?: number,
  copyright_expired_date?: Date,
  created_time?: Date,
  modified_time?: Date,
  files: MyFile[],
  transposes: Transpose[]
}

export interface PieceState {
  pieces: Piece[]
}

export const state:PieceState = {
  pieces: []
}