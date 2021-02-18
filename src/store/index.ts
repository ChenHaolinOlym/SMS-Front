import { createStore, useStore as VuexUseStore, createLogger } from 'vuex'

import { info } from './modules/info'
import { InfoState } from './modules/info/state'
import { InfoStoreModule } from './modules/info/types'
import { PieceStoreModule } from './modules/pieces/types'

export const store = createStore<InfoState>({
  strict: false,
  ...info,
  plugins: [
    createLogger()
  ]
})

type StoreModules = {
  pieces: PieceStoreModule,
  info: InfoStoreModule
}

// export type Store = PieceStoreModule<Pick<StoreModules, "piece">> & 
//   InfoStoreModule<Pick<StoreModules, "info">> & InfoStoreModule
export type Store = PieceStoreModule<Pick<StoreModules, "pieces">> & InfoStoreModule
  
export function useStore(): Store {
  return VuexUseStore() as Store
}