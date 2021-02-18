<template>
  <div class="px-4 py-2 w-full">
    <div class="flex overflow-hidden rounded-lg shadow-md bg-white py-4 px-2">
      <SearchBlock/>
    </div>
  </div>
</template>

<script lang="ts">
import SearchBlock from './SearchBlock.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    SearchBlock
  },
  setup() {

  }
})
</script>