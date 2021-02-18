<template>
  <div class="px-4 py-2 w-full">
    <div class="overflow-hidden rounded-lg shadow-md bg-white p-8">
      <div class="inline-flex flex-row flex-wrap min-w-full">
        <div class="flex-1">
          <h2 class="text-2xl font-bold leading-7 text-gray-900">{{ title }}</h2>
        </div>
        <div class="flex-wrap">
          <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill="white" fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            Upload
          </button>
          <button type="button" class="px-2 py-2 ml-2 border border-transparent shadow-sm bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          <button type="button" class="px-2 py-2 ml-2 border border-transparent shadow-sm bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <FileTable/>
    </div>
  </div>
</template>

<script lang="ts">
import FileTable from './FileTable.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    FileTable
  },
  props: {
    title: String
  },
  setup(props) {
    
  }
})

</script>