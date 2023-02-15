<script lang="ts">
import { defineComponent } from 'vue'
import PnTreeNode from '../PnTreeNode/PnTreeNode.vue'

export default defineComponent({
  name: 'PnTree',
  components: { PnTreeNode },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
})
</script>

<template>
  <div class="tree">
    <ul class="tree-list">
      <PnTreeNode v-for="(elem, i) in data" :key="i" :options="elem" />
    </ul>
  </div>
</template>
