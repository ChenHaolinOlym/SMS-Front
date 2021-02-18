<template>
  <div class="pt-2">
    <table class="min-w-full divide-y divide-gray-200 table-fixed">
      <thead>
        <tr>
          <th class="max-w-1/3"></th>
          <th class="max-w-1/3"></th>
          <th class="max-w-1/3"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
        <FileTableItem class="even:bg-gray-200"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import FileTableItem from './FileTableItem.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    FileTableItem
  },
  setup() {
    
  }
})
</script>