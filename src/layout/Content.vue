<template>
  <div class="container mx-auto">
    <Search/>
    <PieceCard v-for="piece in pieces" :key="piece.id" :title="piece.name"/>
  </div>
</template>

<script lang="ts">
import Search from '../components/Search.vue'
import PieceCard from '../components/PieceCard.vue'

import { defineComponent, ref, computed } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  components: {
    PieceCard,
    Search
  },
  setup() {
    const store = useStore()
    // TODO: Fix the type problem of it
    const pieces = computed(() => store.state.pieces.pieces)
    console.log(pieces.files)
    return {
      pieces
    }
  }
})


</script>
