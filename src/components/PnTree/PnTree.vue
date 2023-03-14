<script setup lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { PnTreeNodeType } from '@/components/PnTreeNode/PnTreeNode.type'
</script>
<script lang="ts">
import PnTreeNode from '@/components/PnTreeNode/PnTreeNode.vue'

export default defineComponent({
  name: 'PnTree',
  components: { PnTreeNode },
  props: {
    data: {
      type: Array as PropType<PnTreeNodeType[]>,
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
