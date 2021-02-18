import { GetterTree } from 'vuex'
import { Group, Part, Instrument } from './state'
import { InfoState } from './state'

export interface InfoGetter {
  getGroupById(state:InfoState): (id:number) => Group | undefined
  getGroupByName(state:InfoState): (name:string) => Group | undefined
  getPartById(state:InfoState): (id:number) => Part | undefined
  getPartByName(state:InfoState): (name:string) => Part | undefined
  getInstrumentById(state:InfoState): (id:number) => Instrument | undefined
  getInstrumentByName(state:InfoState): (name:string) => Instrument | undefined
}

export const getters:GetterTree<InfoState, InfoState> & InfoGetter = {
  getGroupById: (state:InfoState) => (id:number) => {
    return state.groups.find(group => group.id === id) 
  },
  getGroupByName: (state:InfoState) => (name:string) => {
    return state.groups.find(group => group.name === name)
  },
  getPartById: (state:InfoState) => (id:number) => {
    return state.parts.find(part => part.id === id)
  },
  getPartByName: (state:InfoState) => (name:string) => {
    return state.parts.find(part => part.name === name)
  },
  getInstrumentById: (state:InfoState) => (id:number) => {
    return state.instruments.find(instrument => instrument.id === id)
  },
  getInstrumentByName: (state:InfoState) => (name:string) => {
    return state.instruments.find(instrument => instrument.name === name)
  }
}