export interface Group {
  id: number,
  name: string,
}

export interface Part {
  id: number,
  name: string,
  group_id: number
}

export interface Instrument {
  id: number,
  name: string,
  part_id: number
}

export interface InfoState {
  groups: Group[],
  parts: Part[],
  instruments: Instrument[]
}

export const state:InfoState = {
  groups: [],
  parts: [],
  instruments: []
}