<template>
  <div class="h-full min-h-screen bg-gray-200">
    <TopNav/>
    <Content/>
  </div>
</template>

<script lang="ts">
// TODO: Add "name" to all views and components
import TopNav from './layout/TopNav.vue'
import Content from './layout/Content.vue'

import { defineComponent } from 'vue'
import { useStore } from './store'
import { InfoActionTypes } from './store/modules/info/actions'
import { PieceActionTypes } from './store/modules/pieces/actions'

export default defineComponent({
  components: {
    TopNav,
    Content
  },
  setup() {
    // Init store
    const store = useStore()
    store.dispatch(InfoActionTypes.ADD_GROUPS)
    store.dispatch(InfoActionTypes.ADD_PARTS)
    store.dispatch(PieceActionTypes.INIT_PIECE)
    store.dispatch(InfoActionTypes.ADD_INSTRUMENTS)
  }
})

</script>